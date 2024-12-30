<template>
  <div>

    <!-- SECTION Mechanized -->
    <div class="col-12 btn-group btn-group-sm d-flex justify-content-center" role="group"
      aria-label="Small button group">
      <div>
        <button :disabled="(team.totalMechanized <= 0)" @click="removeMechanized()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Mechanized</h6>
        <h6 v-if="plusMechanized == true" class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong></h6>
        <h6 v-if="minusMechanized == true" class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong></h6>
        <h6 v-if="!plusMechanized && !minusMechanized" class="px-2 fs-4"><strong>{{ team.totalMechanized }}</strong>
        </h6>
      </div>
      <div>
        <button @click="addMechanized()" class=""><span class="material-symbols-outlined fs-lg p-2">add</span></button>
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
        <span class="fs-lg">5</span>
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
        <h6 v-if="plusIFV == true" class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong></h6>
        <h6 v-if="minusIFV == true" class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong></h6>
        <h6 v-if="!plusIFV && !minusIFV" class="px-2 fs-4"><strong>{{ team.totalIFV }}</strong></h6>
      </div>
      <div>
        <button @click="addIFV()" class=""><span class="material-symbols-outlined fs-lg p-2">add</span></button>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center mb-5 gap-5">
      <div class="d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-warning">attach_money</span>
        <span class="fs-lg">4</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-xl text-secondary material-symbols-outlined">factory</span>
        <span class="fs-lg">5</span>
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
import { groundForcesService } from "../../services/GroundForcesService";


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
    const plusMechanized = ref(false)
    const minusMechanized = ref(false)
    const plusIFV = ref(false)
    const minusIFV = ref(false)

    return {
      plusMechanized,
      minusMechanized,
      plusIFV,
      minusIFV,
      async addMechanized() {
        try {
          plusMechanized.value = true
          await groundForcesService.addMechanized(team)
          setTimeout(() => {
            plusMechanized.value = false
          }, 100);
        } catch (error) {
          console.error(error, "adding Mechanized");
        }
      },
      async removeMechanized() {
        try {
          minusMechanized.value = true
          await groundForcesService.removeMechanized(team)
          setTimeout(() => {
            minusMechanized.value = false
          }, 100);
        } catch (error) {
          console.error(error, "removing Mechanized");
        }
      },

      async addIFV() {
        try {
          plusIFV.value = true
          await groundForcesService.addIFV(team)
          setTimeout(() => {
            plusIFV.value = false
          }, 100);
        } catch (error) {
          console.error(error, "adding IFV");
        }
      },
      async removeIFV() {
        try {
          minusIFV.value = true
          await groundForcesService.removeIFV(team)
          setTimeout(() => {
            minusIFV.value = false
          }, 100);
        } catch (error) {
          console.error(error, "removing IFV");
        }
      }
    }
  }
}

</script>

<style lang="scss" scoped></style>