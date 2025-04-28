<template>
  <div class="container-fluid region-card elevation-5 p-3 rounded mb-3">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <span class="fs-lg">Carrier {{ carriers.carrierNumber }}</span>
        <button @click="deleteCarrier()" class="btn-blank text-danger" title="Delete">
          <span class="material-symbols-outlined fs-lg">delete_forever</span>
        </button>
      </div>

      <!-- Air Units -->
      <div class="col-12 d-flex justify-content-center">
        <span class="fs-md">Air Units Onboard</span>
      </div>
      <div v-for="unit in airUnits" :key="unit.key" class="col-6 d-flex justify-content-center unit-row">
        <div class="unit-container d-flex align-items-center">
          <button @click="updateUnit(unit.key, -1)" class="unit-btn text-dark">
            <span class="material-symbols-outlined fs-md">remove</span>
          </button>
          <div class="unit-label d-flex flex-column align-items-center">
            <h6 class="mb-0">{{ unit.label }}</h6>
            <h6 class="mb-0 fs-md"><strong>{{ carriers[unit.key] }}</strong></h6>
          </div>
          <button @click="updateUnit(unit.key, 1)" class="unit-btn">
            <span class="material-symbols-outlined fs-md">add</span>
          </button>
        </div>
      </div>

      <!-- Ground Units -->
      <div class="col-12 d-flex justify-content-center">
        <span class="fs-md">Ground Units Onboard</span>
      </div>
      <div v-for="unit in groundUnits" :key="unit.key" class="col-6 d-flex justify-content-center unit-row">
        <div class="unit-container d-flex align-items-center">
          <button @click="updateUnit(unit.key, -1)" class="unit-btn text-dark">
            <span class="material-symbols-outlined fs-md">remove</span>
          </button>
          <div class="unit-label d-flex flex-column align-items-center">
            <h6 class="mb-0">{{ unit.label }}</h6>
            <h6 class="mb-0 fs-md"><strong>{{ carriers[unit.key] }}</strong></h6>
          </div>
          <button @click="updateUnit(unit.key, 1)" class="unit-btn">
            <span class="material-symbols-outlined fs-md">add</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Firebase
import { updateDoc, increment, doc } from "@firebase/firestore";
import { useFirestore } from "vuefire";

// Vue
import { ref, computed } from "vue";

// Services
import { navyUnitsService } from "../../services/NavyUnitsService";

// CSS
import Swal from "sweetalert2";

// props
const props = defineProps({
  carriers: { type: Object },
  teams: { type: Object }
})

// firestore
const db = useFirestore()
const carrier = doc(db, 'carriers', props.carriers.id)

const isUpdating = ref(false)

// Sum total of air units
const totalAirUnits = computed(() => {
  return airUnits.value.reduce((sum, unit) => sum + (props.carriers[unit.key] || 0), 0);
})

// Sum total of ground units
const totalGroundUnits = computed(() => {
  return groundUnits.value.reduce((sum, unit) => sum + (props.carriers[unit.key] || 0), 0);
})

// Array of air units f-loop
const airUnits = ref([
  { key: 'fighters', label: 'Fighter' },
  { key: 'cas', label: 'CAS' },
])

// Array of ground units f-loop
const groundUnits = ref([
  { key: 'infantry', label: 'Infantry' },
  { key: 'specialForces', label: 'S-Forces' },
  { key: 'mechanized', label: 'Mech' },
  { key: 'ifv', label: 'IFV' },
  { key: 'mbt', label: 'MBT' },
  { key: 'antiAircraft', label: 'AA' },
  { key: 'artillery', label: 'Artillery' },
  { key: 'missileArtillery', label: 'Missile' },
])

// update firestore doc to add/remove units from carriers
async function updateUnit(unitKey, int) {
  if (isUpdating.value) return
  isUpdating.value = true

  try {
    // Check if unit is air or ground by returning true or false
    const isAirUnit = airUnits.value.some(unit => unit.key === unitKey);
    const isGroundUnit = groundUnits.value.some(unit => unit.key === unitKey);

    // Prevent negative unit counts
    if (int < 0 && props.carriers[unitKey] <= 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Action',
        text: `Cannot reduce ${unitKey} below 0!`,
      });
      return
    }

    // Check max air units cannot exceed six
    if (int > 0) {
      if (isAirUnit && totalAirUnits.value >= 6) {
        Swal.fire({
          icon: 'warning',
          title: 'Limit Reached',
          text: 'Cannot add more air units. Maximum of 6 reached.',
        });
        return
      }
      // Check max ground units cannot exceed 6
      if (isGroundUnit && totalGroundUnits.value >= 6) {
        Swal.fire({
          icon: 'warning',
          title: 'Limit Reached',
          text: 'Cannot add more ground units. Maximum of 6 reached.',
        });
        return
      }
    }

    // Update Firestore
    await updateDoc(carrier, {
      [unitKey]: increment(int),
    });
  } catch (error) {
    console.error(`Error updating ${unitKey}:`, error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: `Failed to update ${unitKey}. Please try again.`,
    });
  } finally {
    isUpdating.value = false
  }
}


// delete carrier document by creator ID
async function deleteCarrier() {
  try {
    await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // @ts-ignore
        navyUnitsService.deleteCarrierCard(props.carriers, props.teams)
        Swal.fire(
          'Carrier Deleted!',
          'success'
        )
      }
    })
  } catch (error) {
    console.error(error, 'Deleting carrier')
  }
}

</script>

<style scoped>
.unit-row {
  margin-bottom: 1rem; /* Space between unit rows */
}

.unit-container {
  gap: 0.1rem; /* Consistent spacing between buttons and label */
  width: 100%; /* Ensure container takes full width */
  max-width: 200px; /* Limit width for consistency */
  justify-content: space-between; /* Distribute space evenly */
}

.unit-btn {
  width: 40px; /* Fixed width for buttons */
  height: 40px; /* Fixed height for buttons */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000; /* Optional: Add border for visibility */
  border-radius: 4px; /* Optional: Rounded corners */
  background-color: #f8f9fa; /* Light background for buttons */
  transition: background-color 0.2s; /* Smooth hover effect */
}

.unit-btn:hover {
  background-color: #e9ecef; /* Hover effect */
}

.unit-label {
  flex: 1; /* Allow label to take available space */
  text-align: center; /* Center text */
  min-width: 80px; /* Minimum width to prevent squeezing */
}
</style>
