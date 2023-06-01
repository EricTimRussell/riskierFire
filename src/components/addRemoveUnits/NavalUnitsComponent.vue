<template>
  <div>

    <!-- SECTION Aircraft Carrier -->
    <div class="col-12 btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Small button group">
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


<script>
// Firebase
import { useFirestore } from "vuefire"
import { doc } from "@firebase/firestore";

// Vue
import { useRoute } from "vue-router";
import { ref } from "vue";

// Services
import { navyUnitsService } from "../../services/NavyUnitsService";

export default {
  props: {
    team: { type: Object, required: true }
  },
  setup() {
    const db = useFirestore()
    const route = useRoute()
    // @ts-ignore
    const team = doc(db, "teams", route.params.id)

    // conditional rendering for adding and removing units
    const plusCarrier = ref(false)
    const minusCarrier = ref(false)
    const plusCruiser = ref(false)
    const minusCruiser = ref(false)
    const plusDestroyer = ref(false)
    const minusDestroyer = ref(false)

    return {
      plusCarrier,
      minusCarrier,
      plusCruiser,
      minusCruiser,
      plusDestroyer,
      minusDestroyer,
      async addCarrier() {
        try {
          plusCarrier.value = true
          await navyUnitsService.addCarrier(team)
          setTimeout(() => {
            plusCarrier.value = false
          }, 100);
        } catch (error) {
          console.error(error, "adding Carrier");
        }
      },
      async removeCarrier() {
        try {
          minusCarrier.value = true
          await navyUnitsService.removeCarrier(team)
          setTimeout(() => {
            minusCarrier.value = false
          }, 100);
        } catch (error) {
          console.error(error, "removing Carrier");
        }
      },

      async addCruiser() {
        try {
          plusCruiser.value = true
          await navyUnitsService.addCruiser(team)
          setTimeout(() => {
            plusCruiser.value = false
          }, 100);
        } catch (error) {
          console.error(error, "adding Cruiser");
        }
      },
      async removeCruiser() {
        try {
          minusCruiser.value = true
          await navyUnitsService.removeCruiser(team)
          setTimeout(() => {
            minusCruiser.value = false
          }, 100);
        } catch (error) {
          console.error(error, "removing Cruiser");
        }
      },

      async addDestroyer() {
        try {
          plusDestroyer.value = true
          await navyUnitsService.addDestroyer(team)
          setTimeout(() => {
            plusDestroyer.value = false
          }, 100);
        } catch (error) {
          console.error(error, "adding Destroyer");
        }
      },
      async removeDestroyer() {
        try {
          minusDestroyer.value = true
          await navyUnitsService.removeDestroyer(team)
          setTimeout(() => {
            minusDestroyer.value = false
          }, 100);
        } catch (error) {
          console.error(error, "removing Destroyer");
        }
      }
    }
  }
}

</script>

<style lang="scss" scoped></style>