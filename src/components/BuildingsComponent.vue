<template>
  <div>

    <!-- SECTION Airfield -->
    <div class="col-12 btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Small button group">
      <div>
        <button :disabled="(team.totalAirfields <= 0)" @click="removeAirfield()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Airfields</h6>
        <h6 class="px-2 fs-4"><strong>{{ team.totalAirfields }}</strong></h6>
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
        <h6 class="px-3 fs-4"><strong>{{ team.totalNavalYards }}</strong></h6>
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
        <h6 class="px-3 fs-4"><strong>{{ team.totalFactories }}</strong></h6>
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


<script>
import { useFirestore } from "vuefire"
import { doc } from "@firebase/firestore";
import { useRoute } from "vue-router";
import { buildingsService } from "../services/buildingsService";


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
      async addAirfield() {
        try {
          await buildingsService.addAirfield(team)
        } catch (error) {
          console.error(error, "adding Airfield");
        }
      },
      async removeAirfield() {
        try {
          await buildingsService.removeAirfield(team)
        } catch (error) {
          console.error(error, "removing Airfield");
        }
      },

      async addNavalYard() {
        try {
          await buildingsService.addNavalYard(team)
        } catch (error) {
          console.error(error, "adding Naval Yard");
        }
      },
      async removeNavalYard() {
        try {
          await buildingsService.removeNavalYard(team)
        } catch (error) {
          console.error(error, "removing Naval Yard");
        }
      },

      async addFactory() {
        try {
          await buildingsService.addFactory(team)
        } catch (error) {
          console.error(error, "adding Factory");
        }
      },
      async removeFactory() {
        try {
          await buildingsService.removeFactory(team)
        } catch (error) {
          console.error(error, "removing Factory");
        }
      }
    }
  }
}

</script>

<style lang="scss" scoped></style>