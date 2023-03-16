<template>
  <div>

    <!-- SECTION MBT -->
    <div class="col-12 btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Small button group">
      <div>
        <button :disabled="(team.totalMBT <= 0)" @click="removeMBT()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">MBT</h6>
        <h6 class="px-2 fs-4"><strong>{{ team.totalMBT }}</strong></h6>
      </div>
      <div>
        <button @click="addMBT()" class=""><span class="material-symbols-outlined fs-lg p-2">add</span></button>
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

    <!-- SECTION Anti-Aricraft -->
    <div class="col-12 btn-group btn-group-sm px-2 d-flex justify-content-center" role="group"
      aria-label="Small button group">
      <div>
        <button :disabled="(team.totalAntiAircraft <= 0)" @click="removeAntiAircraft()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">AntiAircraft</h6>
        <h6 class="px-3 fs-4"><strong>{{ team.totalAntiAircraft }}</strong></h6>
      </div>
      <div>
        <button @click="addAntiAircraft()" class=""><span class="material-symbols-outlined fs-lg p-2">add</span></button>
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


<script>
import { groundForcesService } from "../services/GroundForcesService";
import { useFirestore } from "vuefire"
import { doc } from "@firebase/firestore";
import { useRoute } from "vue-router";


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
      async addMBT() {
        try {
          await groundForcesService.addMBT(team)
        } catch (error) {
          console.error(error, "adding MBT");
        }
      },
      async removeMBT() {
        try {
          await groundForcesService.removeMBT(team)
        } catch (error) {
          console.error(error, "removing MBT");
        }
      },

      async addAntiAircraft() {
        try {
          await groundForcesService.addAntiAircraft(team)
        } catch (error) {
          console.error(error, "adding Anti-aircraft");
        }
      },
      async removeAntiAircraft() {
        try {
          await groundForcesService.removeAntiAircraft(team)
        } catch (error) {
          console.error(error, "removing Anti-aircraft");
        }
      }
    }
  }
}

</script>

<style lang="scss" scoped></style>