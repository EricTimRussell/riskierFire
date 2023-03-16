<template>
  <div>

    <!-- SECTION Fighter Aircraft -->
    <div class="col-12 btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Small button group">
      <div>
        <button :disabled="(team.totalFighterAircraft <= 0)" @click="removeFighterAircraft()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Fighters</h6>
        <h6 class="px-2 fs-4"><strong>{{ team.totalFighterAircraft }}</strong></h6>
      </div>
      <div>
        <button @click="addFighterAircraft()" class=""><span
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
        <span class="fs-lg">3</span>
      </div>
    </div>

    <!-- SECTION Close Air Support -->
    <div class="col-12 btn-group btn-group-sm px-2 d-flex justify-content-center" role="group"
      aria-label="Small button group">
      <div>
        <button :disabled="(team.totalCloseAirSupport <= 0)" @click="removeCloseAirSupport()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">CAS</h6>
        <h6 class="px-3 fs-4"><strong>{{ team.totalCloseAirSupport }}</strong></h6>
      </div>
      <div>
        <button @click="addCloseAirSupport()" class=""><span
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
        <span class="fs-lg">3</span>
      </div>
    </div>

    <!-- SECTION Cargo Aircraft -->
    <div class="col-12 btn-group btn-group-sm px-2 d-flex justify-content-center" role="group"
      aria-label="Small button group">
      <div>
        <button :disabled="(team.totalCargoAircraft <= 0)" @click="removeCargoAircraft()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Cargo Aircraft</h6>
        <h6 class="px-3 fs-4"><strong>{{ team.totalCargoAircraft }}</strong></h6>
      </div>
      <div>
        <button @click="addCargoAircraft()" class=""><span class="material-symbols-outlined fs-lg p-2">add</span></button>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center mb-5 gap-5">
      <div class="d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-warning">attach_money</span>
        <span class="fs-lg">1</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-xl text-secondary material-symbols-outlined">factory</span>
        <span class="fs-lg">2</span>
      </div>
    </div>
  </div>
</template>


<script>
import { groundForcesService } from "../services/GroundForcesService";
import { useFirestore } from "vuefire"
import { doc } from "@firebase/firestore";
import { useRoute } from "vue-router";
import { airUnitsService } from "../services/AirUnitsService";


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
      async addFighterAircraft() {
        try {
          await airUnitsService.addFighterAircraft(team)
        } catch (error) {
          console.error(error, "adding FighterAircraft");
        }
      },
      async removeFighterAircraft() {
        try {
          await airUnitsService.removeFighterAircraft(team)
        } catch (error) {
          console.error(error, "removing FighterAircraft");
        }
      },

      async addCloseAirSupport() {
        try {
          await airUnitsService.addCloseAirSupport(team)
        } catch (error) {
          console.error(error, "adding Close Air Support");
        }
      },
      async removeCloseAirSupport() {
        try {
          await airUnitsService.removeCloseAirSupport(team)
        } catch (error) {
          console.error(error, "removing Close Air Support");
        }
      },

      async addCargoAircraft() {
        try {
          await airUnitsService.addCargoAircraft(team)
        } catch (error) {
          console.error(error, "adding Cargo Aircraft");
        }
      },
      async removeCargoAircraft() {
        try {
          await airUnitsService.removeCargoAircraft(team)
        } catch (error) {
          console.error(error, "removing Cargo Aircraft");
        }
      }
    }
  }
}

</script>

<style lang="scss" scoped></style>