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
        <h6 v-if="plusInfantry == true" class="px-2 fs-4 text-success"><strong>+1</strong></h6>
        <h6 v-if="minusInfantry == true" class="px-2 fs-4 text-danger"><strong>-1</strong></h6>
        <h6 v-if="!plusInfantry && !minusInfantry" class="px-2 fs-4"><strong>{{ team.totalInfantry }}</strong></h6>
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
        <button :disabled="(team.totalSpecialForces <= 0)" @click="removeSpecialForces()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Special Forces</h6>
        <h6 v-if="plusSpecialForces == true" class="px-2 fs-4 text-success"><strong>+1</strong></h6>
        <h6 v-if="minusSpecialForces == true" class="px-2 fs-4 text-danger"><strong>-1</strong></h6>
        <h6 v-if="!plusSpecialForces && !minusSpecialForces" class="px-3 fs-4"><strong>{{ team.totalSpecialForces
        }}</strong></h6>
      </div>
      <div>
        <button @click="addSpecialForces()" class=""><span class="material-symbols-outlined fs-lg p-2">add</span></button>
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
import { useFirestore } from "vuefire"
import { doc } from "@firebase/firestore";
import { useRoute } from "vue-router";
import { ref } from "vue"
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
    const plusInfantry = ref(false)
    const minusInfantry = ref(false)
    const plusSpecialForces = ref(false)
    const minusSpecialForces = ref(false)

    return {
      plusInfantry,
      minusInfantry,
      plusSpecialForces,
      minusSpecialForces,
      async addInfantry() {
        try {
          plusInfantry.value = true
          await groundForcesService.addInfantry(team)
          setTimeout(() => {
            plusInfantry.value = false
          }, 100)
        } catch (error) {
          console.error(error, "adding infantry");
        }
      },
      async removeInfantry() {
        try {
          minusInfantry.value = true
          await groundForcesService.removeInfantry(team)
          setTimeout(() => {
            minusInfantry.value = false
          }, 100)
        } catch (error) {
          console.error(error, "removing infantry");
        }
      },

      async addSpecialForces() {
        try {
          plusSpecialForces.value = true
          await groundForcesService.addSpecialForces(team)
          setTimeout(() => {
            plusSpecialForces.value = false
          }, 100)
        } catch (error) {
          console.error(error, "adding special forces");
        }
      },
      async removeSpecialForces() {
        try {
          minusSpecialForces.value = true
          await groundForcesService.removeSpecialForces(team)
          setTimeout(() => {
            minusSpecialForces.value = false
          }, 100)
        } catch (error) {
          console.error(error, "removing special forces");
        }
      }
    }
  }
}

</script>

<style lang="scss" scoped></style>