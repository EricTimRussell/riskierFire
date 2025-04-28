<template>
  <div>
    <!-- Dynamically render each unit type -->
    <div v-for="unit in navalUnitTypes" :key="unit.name" class="mb-5">
      <!-- Unit Control Buttons -->
      <div class="col-12 btn-group btn-group-sm d-flex justify-content-center" role="group"
        :aria-label="`Control for ${unit.name}`">
        <div>
          <button :disabled="team[unit.totalCount] <= 0" @click="removeUnit(unit)" class="text-dark">
            <span class="material-symbols-outlined fs-lg p-2">remove</span>
          </button>
        </div>
        <!-- Animation for add/remove unit -->
        <div class="d-flex flex-column align-items-center">
          <h6 class="px-2">{{ unit.label }}</h6>
          <h6 v-if="unitStates[unit.name].plus" class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong>
          </h6>
          <h6 v-if="unitStates[unit.name].minus" class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong>
          </h6>
          <h6 v-if="!unitStates[unit.name].plus && !unitStates[unit.name].minus" class="px-2 fs-4">
            <strong>{{ team[unit.totalCount] }}</strong>
          </h6>
        </div>
        <div>
          <button @click="addUnit(unit)" class="">
            <span class="material-symbols-outlined fs-lg p-2">add</span>
          </button>
        </div>
      </div>
      <!-- Resource Costs -->
      <div class="col-12 d-flex justify-content-center mb-5 gap-5">
        <div class="d-flex justify-content-center">
          <span class="fs-xl material-symbols-outlined text-warning">attach_money</span>
          <span class="fs-lg">{{ unit.costs.capital }}</span>
        </div>
        <div class="d-flex justify-content-center">
          <span class="fs-xl text-success material-symbols-outlined">psychiatry</span>
          <span class="fs-lg">{{ unit.costs.agriculture }}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
// Firebase
import { useFirestore } from "vuefire";
import { doc, updateDoc, increment } from "@firebase/firestore";

// Vue
import { useRoute } from "vue-router";
import { reactive } from "vue";

// Services
import { resourcesService } from "../../services/ResourcesService";


const props = defineProps({
  // current users team
  team: { type: Object }
});

const db = useFirestore();
const route = useRoute();
// teams database
const teams = doc(db, 'teams', route.params.id);

// Naval unit type configuration
const navalUnitTypes = [
  {
    name: 'carrier',
    label: 'Carriers',
    totalCount: 'totalCarriers',
    costs: { capital: 5, industry: 3, agriculture: 3 }
  },
  {
    name: 'cruiser',
    label: 'Cruisers',
    totalCount: 'totalCruisers',
    costs: { capital: 3, industry: 4, agriculture: 1 }
  },
  {
    name: 'destroyer',
    label: 'Destroyers',
    totalCount: 'totalDestroyers',
    costs: { capital: 3, industry: 3, agriculture: 1 }
  }
];

// Reactive state for plus/minus animations
const unitStates = reactive(
  navalUnitTypes.reduce((acc, unit) => ({
    ...acc,
    [unit.name]: { plus: false, minus: false }
  }), {})
);

async function addUnit(unit) {
  try {
    // Show +1 animation
    unitStates[unit.name].plus = true;
    // Update resources (negative because we're spending)
    await resourcesService.updateResources(
      teams,
      -unit.costs.agriculture,
      -unit.costs.capital,
      -unit.costs.industry,
      0
    );
    // Increment unit count
    await updateDoc(teams, {
      [unit.totalCount]: increment(1)
    });
    // Hide animation after 100ms
    setTimeout(() => {
      unitStates[unit.name].plus = false;
    }, 100);
  } catch (error) {
    console.error(error, `adding ${unit.label}`);
  }
}

async function removeUnit(unit) {
  try {
    // Show -1 animation
    unitStates[unit.name].minus = true;
    // Update resources (positive because we're refunding)
    await resourcesService.updateResources(
      teams,
      unit.costs.agriculture,
      unit.costs.capital,
      unit.costs.industry,
      0
    );
    // Decrement unit count
    await updateDoc(teams, {
      [unit.totalCount]: increment(-1)
    });
    // Hide animation after 100ms
    setTimeout(() => {
      unitStates[unit.name].minus = false;
    }, 100);
  } catch (error) {
    console.error(error, `removing ${unit.label}`);
  }
}

</script>