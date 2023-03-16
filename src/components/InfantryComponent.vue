<template>
  <div>

    <!-- SECTION Infantry -->
    <div class="col-12 btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Small button group">
      <div>
        <button :disabled="(team.totalInfantry <= 0)" @click="removeInfantry()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Infantry</h6>
        <h6 class="px-2 fs-4"><strong>{{ team.totalInfantry }}</strong></h6>
      </div>
      <div>
        <button @click="addInfantry()" class=""><span class="material-symbols-outlined fs-lg p-2">add</span></button>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center mb-5 gap-5">
      <div class="d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-warning">attach_money</span>
        <span class="fs-lg">1</span>
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
        <button :disabled="(team.totalInfantry <= 0)" @click="removeInfantry()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Special Forces</h6>
        <h6 class="px-3 fs-4"><strong>{{ team.totalSpecialForces }}</strong></h6>
      </div>
      <div>
        <button @click="addInfantry()" class=""><span class="material-symbols-outlined fs-lg p-2">add</span></button>
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
        <span class="fs-lg">3</span>
      </div>
    </div>
  </div>
</template>


<script>
import { groundForcesService } from "../services/GroundForcesService";



export default {
  props: {
    team: { type: Object, required: true }
  },
  setup() {

    return {
      async addInfantry() {
        try {
          await groundForcesService.addInfantry()
        } catch (error) {
          console.error(error, "adding infantry");
        }
      },
      async removeInfantry() {
        try {

        } catch (error) {
          console.error(error, "removing infantry");
        }
      },

      async addSpecialForces() {
        try {

        } catch (error) {
          console.error(error, "adding special forces");
        }
      },
      async removeSpecialForces() {
        try {

        } catch (error) {
          console.error(error, "removing special forces");
        }
      }
    }
  }
}

</script>

<style lang="scss" scoped></style>