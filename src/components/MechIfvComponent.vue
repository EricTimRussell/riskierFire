<template>
  <div>

    <!-- SECTION Mechanized -->
    <div class="col-12 btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Small button group">
      <div>
        <button :disabled="(team.totalMechanized <= 0)" @click="removeMechanized()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Mechanized</h6>
        <h6 class="px-2 fs-4"><strong>{{ team.totalMechanized }}</strong></h6>
      </div>
      <div>
        <button @click="addMechanized()" class=""><span class="material-symbols-outlined fs-lg p-2">add</span></button>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center mb-5 gap-5">
      <div class="d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-warning">attach_money</span>
        <span class="fs-lg">2</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-xl text-secondary material-symbols-outlined">factory</span>
        <span class="fs-lg">2</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-xl text-success material-symbols-outlined">psychiatry</span>
        <span class="fs-lg">3</span>
      </div>
    </div>

    <!-- SECTION IFV -->
    <div class="col-12 btn-group btn-group-sm px-2 d-flex justify-content-center" role="group"
      aria-label="Small button group">
      <div>
        <button :disabled="(team.totalIFV <= 0)" @click="removeIFV()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">IFV</h6>
        <h6 class="px-3 fs-4"><strong>{{ team.totalIFV }}</strong></h6>
      </div>
      <div>
        <button @click="addIFV()" class=""><span class="material-symbols-outlined fs-lg p-2">add</span></button>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center mb-5 gap-5">
      <div class="d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-warning">attach_money</span>
        <span class="fs-lg">2</span>
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
      async addMechanized() {
        try {
          await groundForcesService.addMechanized(team)
        } catch (error) {
          console.error(error, "adding Mechanized");
        }
      },
      async removeMechanized() {
        try {
          await groundForcesService.removeMechanized(team)
        } catch (error) {
          console.error(error, "removing Mechanized");
        }
      },

      async addIFV() {
        try {
          await groundForcesService.addIFV(team)
        } catch (error) {
          console.error(error, "adding special forces");
        }
      },
      async removeIFV() {
        try {
          await groundForcesService.removeIFV(team)
        } catch (error) {
          console.error(error, "removing special forces");
        }
      }
    }
  }
}

</script>

<style lang="scss" scoped></style>