<template>
  <div>

    <!-- SECTION Aircraft Carrier -->
    <div class="col-12 btn-group btn-group-sm d-flex justify-content-center" role="group"
      aria-label="Small button group">
      <div>
        <button :disabled="(team.totalCarriers <= 0)" @click="removeCarrier()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Carriers</h6>
        <h6 v-if="plusCarrier == true" class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong></h6>
        <h6 v-if="minusCarrier == true" class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong></h6>
        <h6 v-if="!plusCarrier && !minusCarrier" class="px-2 fs-4"><strong>{{ team.totalCarriers }}</strong></h6>
      </div>
      <div>
        <button @click="addCarrier()" class=""><span class="material-symbols-outlined fs-lg p-2">add</span></button>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center mb-5 gap-5">
      <div class="d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-warning">attach_money</span>
        <span class="fs-lg">5</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-xl text-secondary material-symbols-outlined">factory</span>
        <span class="fs-lg">3</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-xl text-success material-symbols-outlined">psychiatry</span>
        <span class="fs-lg">3</span>
      </div>
    </div>

    <!-- SECTION Cruisers-->
    <div class="col-12 btn-group btn-group-sm px-2 d-flex justify-content-center" role="group"
      aria-label="Small button group">
      <div>
        <button :disabled="(team.totalCruisers <= 0)" @click="removeCruiser()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Cruisers</h6>
        <h6 v-if="plusCruiser == true" class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong></h6>
        <h6 v-if="minusCruiser == true" class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong></h6>
        <h6 v-if="!plusCruiser && !minusCruiser" class="px-2 fs-4"><strong>{{ team.totalCruisers }}</strong></h6>
      </div>
      <div>
        <button @click="addCruiser()" class=""><span class="material-symbols-outlined fs-lg p-2">add</span></button>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center mb-5 gap-5">
      <div class="d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-warning">attach_money</span>
        <span class="fs-lg">3</span>
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

    <!-- SECTION Destroyers -->
    <div class="col-12 btn-group btn-group-sm px-2 d-flex justify-content-center" role="group"
      aria-label="Small button group">
      <div>
        <button :disabled="(team.totalDestroyers <= 0)" @click="removeDestroyer()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Destroyers</h6>
        <h6 v-if="plusDestroyer == true" class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong></h6>
        <h6 v-if="minusDestroyer == true" class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong></h6>
        <h6 v-if="!plusDestroyer && !minusDestroyer" class="px-2 fs-4"><strong>{{ team.totalDestroyers }}</strong></h6>
      </div>
      <div>
        <button @click="addDestroyer()" class=""><span class="material-symbols-outlined fs-lg p-2">add</span></button>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center mb-5 gap-5">
      <div class="d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-warning">attach_money</span>
        <span class="fs-lg">3</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-xl text-secondary material-symbols-outlined">factory</span>
        <span class="fs-lg">3</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-xl text-success material-symbols-outlined">psychiatry</span>
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
  // current users team
  team: { type: Object }
})

const db = useFirestore()
const route = useRoute()
// teams database
const teams = doc(db, 'teams', route.params.id)

// conditional rendering for adding and removing units
const plusCarrier = ref(false)
const minusCarrier = ref(false)
const plusCruiser = ref(false)
const minusCruiser = ref(false)
const plusDestroyer = ref(false)
const minusDestroyer = ref(false)


async function addCarrier() {
  try {
    // change ref value to true to display +1 or -1 icon
    plusCarrier.value = true
    // update team resource count
    await resourcesService.updateResources(teams, -3, -5, -3, 0)
    await updateDoc(teams, {
      totalCarriers: increment(1)
    });
    setTimeout(() => {
      // change ref value back to false to remove +1 or -1 icon
      plusCarrier.value = false
    }, 100);
  } catch (error) {
    console.error(error, "adding Carrier");
  }
}

async function removeCarrier() {
  try {
    minusCarrier.value = true
    await resourcesService.updateResources(teams, 3, 5, 3, 0)
    await updateDoc(teams, {
      totalCarriers: increment(-1)
    });
    setTimeout(() => {
      minusCarrier.value = false
    }, 100);
  } catch (error) {
    console.error(error, "removing Carrier");
  }
}

async function addCruiser() {
  try {
    plusCruiser.value = true
    await resourcesService.updateResources(teams, -1, -3, -4, 0)
    await updateDoc(teams, {
      totalCruisers: increment(1)
    });
    setTimeout(() => {
      plusCruiser.value = false
    }, 100);
  } catch (error) {
    console.error(error, "adding Cruiser");
  }
}

async function removeCruiser() {
  try {
    minusCruiser.value = true
    await resourcesService.updateResources(teams, 1, 3, 4, 0)
    await updateDoc(teams, {
      totalCruisers: increment(-1)
    });
    setTimeout(() => {
      minusCruiser.value = false
    }, 100);
  } catch (error) {
    console.error(error, "removing Cruiser");
  }
}

async function addDestroyer() {
  try {
    plusDestroyer.value = true
    await resourcesService.updateResources(teams, -1, -3, -3, 0)
    await updateDoc(teams, {
      totalDestroyers: increment(1)
    });
    setTimeout(() => {
      plusDestroyer.value = false
    }, 100);
  } catch (error) {
    console.error(error, "adding Destroyer");
  }
}

async function removeDestroyer() {
  try {
    minusDestroyer.value = true
    await resourcesService.updateResources(teams, 1, 3, 3, 0)
    await updateDoc(teams, {
      totalDestroyers: increment(-1)
    });
    setTimeout(() => {
      minusDestroyer.value = false
    }, 100);
  } catch (error) {
    console.error(error, "removing Destroyer");
  }
}

</script>

<style lang="scss" scoped></style>