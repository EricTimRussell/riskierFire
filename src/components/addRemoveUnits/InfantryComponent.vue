<template>
  <div>

    <!-- SECTION Infantry -->
    <div class="col-12 btn-group btn-group-sm d-flex justify-content-center" role="group"
      aria-label="Small button group">
      <div>
        <button :disabled="(team.totalInfantry <= 0)" @click="removeInfantry()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Infantry</h6>
        <h6 v-if="plusInfantry == true" class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong></h6>
        <h6 v-if="minusInfantry == true" class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong></h6>
        <h6 v-if="!plusInfantry && !minusInfantry" class="px-2 fs-4"><strong>{{ team.totalInfantry }}</strong></h6>
      </div>
      <div>
        <button @click="addInfantry()"><span class="material-symbols-outlined fs-lg p-2">add</span></button>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center mb-5 gap-5">
      <div class="d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-warning">attach_money</span>
        <span class="fs-lg">2</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-xl text-secondary material-symbols-outlined">factory</span>
        <span class="fs-lg">1</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-xl text-success material-symbols-outlined">psychiatry</span>
        <span class="fs-lg">3</span>
      </div>
    </div>

    <!-- SECTION SpecialForces -->
    <div class="col-12 btn-group btn-group-sm px-2 d-flex justify-content-center" role="group"
      aria-label="Small button group">
      <div>
        <button :disabled="(team.totalSpecialForces <= 0)" @click="removeSpecialForces()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Special Forces</h6>
        <h6 v-if="plusSpecialForces == true" class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong></h6>
        <h6 v-if="minusSpecialForces == true" class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong></h6>
        <h6 v-if="!plusSpecialForces && !minusSpecialForces" class="px-3 fs-4"><strong>{{ team.totalSpecialForces
            }}</strong></h6>
      </div>
      <div>
        <button @click="addSpecialForces()" class=""><span
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
      <div class="d-flex justify-content-center">
        <span class="fs-xl text-success material-symbols-outlined">psychiatry</span>
        <span class="fs-lg">2</span>
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
import { ref } from "vue"

// Services
import { resourcesService } from "../../services/ResourcesService";


const props = defineProps({
  // current users team
  team: { type: Object }
})


const db = useFirestore()
const route = useRoute()
// teams database
const teams = doc(db, 'teams', route.params.id)

// conditional rendering for adding and removing units
const plusInfantry = ref(false)
const minusInfantry = ref(false)
const plusSpecialForces = ref(false)
const minusSpecialForces = ref(false)

async function addInfantry() {
  try {
    // change ref value to true to display +1 or -1 icon
    plusInfantry.value = true
    // update team resource count
    await resourcesService.updateResources(teams, -3, -2, -1, 0)
    // update firebase to add one infantry
    await updateDoc(teams, {
      totalInfantry: increment(1)
    });
    setTimeout(() => {
      // change ref back to false to remove +1 or -1 icon
      plusInfantry.value = false
    }, 100)
  } catch (error) {
    console.error(error, "adding infantry");
  }
}

async function removeInfantry() {
  try {
    minusInfantry.value = true
    await resourcesService.updateResources(teams, 3, 2, 1, 0)
    await updateDoc(teams, {
      totalInfantry: increment(-1)
    });
    setTimeout(() => {
      minusInfantry.value = false
    }, 100)
  } catch (error) {
    console.error(error, "removing infantry");
  }
}

async function addSpecialForces() {
  try {
    plusSpecialForces.value = true
    await resourcesService.updateResources(teams, -2, -3, -1, 0)
    await updateDoc(teams, {
      totalSpecialForces: increment(1)
    });
    setTimeout(() => {
      plusSpecialForces.value = false
    }, 100)
  } catch (error) {
    console.error(error, "adding special forces");
  }
}

async function removeSpecialForces() {
  try {
    plusSpecialForces.value = true
    await resourcesService.updateResources(teams, 2, 3, 1, 0)
    await updateDoc(teams, {
      totalSpecialForces: increment(-1)
    });
    setTimeout(() => {
      plusSpecialForces.value = false
    }, 100)
  } catch (error) {
    console.error(error, "adding special forces");
  }
}

</script>

<style lang="scss" scoped></style>