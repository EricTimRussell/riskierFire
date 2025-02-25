<template>
  <div>

    <!-- SECTION MBT -->
    <div class="col-12 btn-group btn-group-sm d-flex justify-content-center" role="group"
      aria-label="Small button group">
      <div>
        <button :disabled="(team.totalMBT <= 0)" @click="removeMBT()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">MBT</h6>
        <h6 v-if="plusMBT == true" class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong></h6>
        <h6 v-if="minusMBT == true" class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong></h6>
        <h6 v-if="!plusMBT && !minusMBT" class="px-2 fs-4"><strong>{{ team.totalMBT }}</strong></h6>
      </div>
      <div>
        <button @click="addMBT()" class=""><span class="material-symbols-outlined fs-lg p-2">add</span></button>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center mb-5 gap-5">
      <div class="d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-warning">attach_money</span>
        <span class="fs-lg">4</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-xl text-secondary material-symbols-outlined">factory</span>
        <span class="fs-lg">4</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-xl text-success material-symbols-outlined">psychiatry</span>
        <span class="fs-lg">1</span>
      </div>
    </div>

    <!-- SECTION Anti-Aricraft -->
    <div class="col-12 btn-group btn-group-sm px-2 d-flex justify-content-center" role="group"
      aria-label="Small button group">
      <div>
        <button :disabled="(team.totalAntiAircraft <= 0)" @click="removeAntiAircraft()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">AntiAircraft</h6>
        <h6 v-if="plusAntiAircraft == true" class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong></h6>
        <h6 v-if="minusAntiAircraft == true" class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong></h6>
        <h6 v-if="!plusAntiAircraft && !minusAntiAircraft" class="px-2 fs-4"><strong>{{ team.totalAntiAircraft
        }}</strong>
        </h6>
      </div>
      <div>
        <button @click="addAntiAircraft()" class=""><span
            class="material-symbols-outlined fs-lg p-2">add</span></button>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center mb-5 gap-5">
      <div class="d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-warning">attach_money</span>
        <span class="fs-lg">3</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-xl text-secondary material-symbols-outlined">factory</span>
        <span class="fs-lg">1</span>
      </div>
    </div>
  </div>
</template>


<script setup>
// Firebase
import { useFirestore } from "vuefire"
import { doc, updateDoc, increment } from "@firebase/firestore";

// Vue
import { useRoute } from "vue-router";
import { ref } from "vue";

// Services
import { resourcesService } from "../../services/ResourcesService";


const props = defineProps({
  team: { type: Object }
})

const db = useFirestore()
const route = useRoute()
const teams = doc(db, 'teams', route.params.id)

// conditional rendering for adding and removing units
const plusMBT = ref(false)
const minusMBT = ref(false)
const plusAntiAircraft = ref(false)
const minusAntiAircraft = ref(false)

async function addMBT() {
  try {
    // change ref value to true to display +1 or -1 icon
    plusMBT.value = true
    // update team resource count
    await resourcesService.updateResources(teams, -1, -4, -4, 0)
    await updateDoc(teams, {
      totalMBT: increment(1)
    });
    setTimeout(() => {
      // change ref value back to false to remove +1 or -1 icon
      plusMBT.value = false
    }, 100);
  } catch (error) {
    console.error(error, "adding MBT");
  }
}

async function removeMBT() {
  try {
    minusMBT.value = true
    await resourcesService.updateResources(teams, 1, 4, 4, 0)
    await updateDoc(teams, {
      totalMBT: increment(-1)
    });
    setTimeout(() => {
      minusMBT.value = false
    }, 100);
  } catch (error) {
    console.error(error, "removing MBT");
  }
}

async function addAntiAircraft() {
  try {
    plusAntiAircraft.value = true
    await resourcesService.updateResources(teams, 0, -3, -1, 0)
    await updateDoc(teams, {
      totalAntiAircraft: increment(1)
    });
    setTimeout(() => {
      plusAntiAircraft.value = false
    }, 100);
  } catch (error) {
    console.error(error, "adding Anti-aircraft");
  }
}

async function removeAntiAircraft() {
  try {
    minusAntiAircraft.value = true
    await resourcesService.updateResources(teams, 0, 3, 1, 0)
    await updateDoc(teams, {
      totalAntiAircraft: increment(-1)
    });
    setTimeout(() => {
      minusAntiAircraft.value = false
    }, 100);
  } catch (error) {
    console.error(error, "removing Anti-aircraft");
  }
}

</script>

<style lang="scss" scoped></style>