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
        <h6 class="px-2 fs-4"><strong>{{ team.totalCarriers }}</strong></h6>
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
        <h6 class="px-3 fs-4"><strong>{{ team.totalCruisers }}</strong></h6>
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
        <h6 class="px-3 fs-4"><strong>{{ team.totalDestroyers }}</strong></h6>
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
import { useFirestore } from "vuefire"
import { doc } from "@firebase/firestore";
import { useRoute } from "vue-router";
import { navyUnitsService } from "../services/NavyUnitsService";


export default {
  props: {
    team: { type: Object, required: true }
  },
  setup() {
    const db = useFirestore()
    const route = useRoute()
    // @ts-ignore
    const team = doc(db, "teams", route.params.id)
    return {
      async addCarrier() {
        try {
          await navyUnitsService.addCarrier(team)
        } catch (error) {
          console.error(error, "adding Carrier");
        }
      },
      async removeCarrier() {
        try {
          await navyUnitsService.removeCarrier(team)
        } catch (error) {
          console.error(error, "removing Carrier");
        }
      },

      async addCruiser() {
        try {
          await navyUnitsService.addCruiser(team)
        } catch (error) {
          console.error(error, "adding Cruiser");
        }
      },
      async removeCruiser() {
        try {
          await navyUnitsService.removeCruiser(team)
        } catch (error) {
          console.error(error, "removing Cruiser");
        }
      },

      async addDestroyer() {
        try {
          await navyUnitsService.addDestroyer(team)
        } catch (error) {
          console.error(error, "adding Destroyer");
        }
      },
      async removeDestroyer() {
        try {
          await navyUnitsService.removeDestroyer(team)
        } catch (error) {
          console.error(error, "removing Destroyer");
        }
      }
    }
  }
}

</script>

<style lang="scss" scoped></style>