<template>
  <div>

    <!-- SECTION Airfield -->
    <div class="col-12 btn-group btn-group-sm d-flex justify-content-center" role="group"
      aria-label="Small button group">
      <div>
        <button :disabled="(team.totalAirfields <= 0)" @click="removeAirfield()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Airfields</h6>
        <h6 v-if="plusAirfield == true" class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong></h6>
        <h6 v-if="minusAirfield == true" class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong></h6>
        <h6 v-if="!plusAirfield && !minusAirfield" class="px-2 fs-4"><strong>{{ team.totalAirfields }}</strong></h6>
      </div>
      <div>
        <button @click="addAirfield()" class=""><span class="material-symbols-outlined fs-lg p-2">add</span></button>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center mb-5 gap-5">
      <div class="d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-warning">attach_money</span>
        <span class="fs-lg">2</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-xl text-success material-symbols-outlined">psychiatry</span>
        <span class="fs-lg">1</span>
      </div>
    </div>

    <!-- SECTION Naval Yard -->
    <div class="col-12 btn-group btn-group-sm px-2 d-flex justify-content-center" role="group"
      aria-label="Small button group">
      <div>
        <button :disabled="(team.totalNavalYards <= 0)" @click="removeNavalYard()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Naval Yards</h6>
        <h6 v-if="plusNavalYard == true" class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong></h6>
        <h6 v-if="minusNavalYard == true" class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong></h6>
        <h6 v-if="!plusNavalYard && !minusNavalYard" class="px-2 fs-4"><strong>{{ team.totalNavalYards }}</strong></h6>
      </div>
      <div>
        <button @click="addNavalYard()" class=""><span class="material-symbols-outlined fs-lg p-2">add</span></button>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center mb-5 gap-5">
      <div class="d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-warning">attach_money</span>
        <span class="fs-lg">2</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-xl text-success material-symbols-outlined">psychiatry</span>
        <span class="fs-lg">2</span>
      </div>
    </div>

    <!-- SECTION Factory -->
    <div class="col-12 btn-group btn-group-sm px-2 d-flex justify-content-center" role="group"
      aria-label="Small button group">
      <div>
        <button :disabled="(team.totalFactories <= 0)" @click="removeFactory()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Factory</h6>
        <h6 v-if="plusFactory == true" class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong></h6>
        <h6 v-if="minusFactory == true" class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong></h6>
        <h6 v-if="!plusFactory && !minusFactory" class="px-2 fs-4"><strong>{{ team.totalFactories }}</strong></h6>
      </div>
      <div>
        <button @click="addFactory()" class=""><span class="material-symbols-outlined fs-lg p-2">add</span></button>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center mb-5 gap-5">
      <div class="d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-warning">attach_money</span>
        <span class="fs-lg">1</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-xl text-success material-symbols-outlined">psychiatry</span>
        <span class="fs-lg">3</span>
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

// Services add-unit-transform
import { resourcesService } from "../../services/ResourcesService";


const props = defineProps({
  team: { type: Object }
})


const db = useFirestore()
const route = useRoute()
const teams = doc(db, 'teams', route.params.id)

// conditional rendering for adding and removing units
const plusAirfield = ref(false)
const minusAirfield = ref(false)
const plusNavalYard = ref(false)
const minusNavalYard = ref(false)
const plusFactory = ref(false)
const minusFactory = ref(false)

async function addAirfield() {
  try {
    // change ref value to true to display +1 or -1 icon
    plusAirfield.value = true
    // update team resource count
    await resourcesService.updateResources(teams, -1, -2, 0, 0)
    await updateDoc(teams, {
      totalAirfields: increment(1)
    });
    setTimeout(() => {
      // change ref value back to false to remove +1 or -1 icon
      plusAirfield.value = false
    }, 100);
  } catch (error) {
    console.error(error, "adding Airfield");
  }
}

async function removeAirfield() {
  try {
    minusAirfield.value = true
    await resourcesService.updateResources(teams, 1, 2, 0, 0)
    await updateDoc(teams, {
      totalAirfields: increment(-1)
    });
    setTimeout(() => {
      minusAirfield.value = false
    }, 100);
  } catch (error) {
    console.error(error, "removing Airfield");
  }
}

async function addNavalYard() {
  try {
    plusNavalYard.value = true
    await resourcesService.updateResources(teams, -2, -2, 0, 0)
    await updateDoc(teams, {
      totalNavalYards: increment(1)
    });
    setTimeout(() => {
      plusNavalYard.value = false
    }, 100);
  } catch (error) {
    console.error(error, "adding Naval Yard");
  }
}

async function removeNavalYard() {
  try {
    minusNavalYard.value = true
    await resourcesService.updateResources(teams, 2, 2, 0, 0)
    await updateDoc(teams, {
      totalNavalYards: increment(-1)
    });
    setTimeout(() => {
      minusNavalYard.value = false
    }, 100);
  } catch (error) {
    console.error(error, "removing Naval Yard");
  }
}

async function addFactory() {
  try {
    plusFactory.value = true
    await resourcesService.updateResources(teams, -3, -1, 0, 0)
    await updateDoc(teams, {
      totalFactories: increment(1)
    });
    setTimeout(() => {
      plusFactory.value = false
    }, 100);
  } catch (error) {
    console.error(error, "adding Factory");
  }
}

async function removeFactory() {
  try {
    minusFactory.value = true
    await resourcesService.updateResources(teams, 3, 1, 0, 0)
    await updateDoc(teams, {
      totalFactories: increment(-1)
    });
    setTimeout(() => {
      minusFactory.value = false
    }, 100);
  } catch (error) {
    console.error(error, "removing Factory");
  }
}

</script>

<style lang="scss" scoped></style>