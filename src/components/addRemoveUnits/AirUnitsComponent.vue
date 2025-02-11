<template>
  <div>

    <!-- SECTION Fighter Aircraft -->
    <div class="col-12 btn-group btn-group-sm d-flex justify-content-center" role="group"
      aria-label="Small button group">
      <div>
        <button :disabled="(team.totalFighterAircraft <= 0)" @click="removeFighterAircraft()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Fighters</h6>
        <h6 v-if="plusFighter == true" class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong></h6>
        <h6 v-if="minusFighter == true" class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong></h6>
        <h6 v-if="!plusFighter && !minusFighter" class="px-2 fs-4"><strong>{{ team.totalFighterAircraft }}</strong></h6>
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
        <h6 v-if="plusCAS == true" class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong></h6>
        <h6 v-if="minusCAS == true" class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong></h6>
        <h6 v-if="!plusCAS && !minusCAS" class="px-2 fs-4"><strong>{{ team.totalCloseAirSupport }}</strong></h6>
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
        <h6 v-if="plusCargo == true" class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong></h6>
        <h6 v-if="minusCargo == true" class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong></h6>
        <h6 v-if="!plusCargo && !minusCargo" class="px-2 fs-4"><strong>{{ team.totalCargoAircraft }}</strong></h6>
      </div>
      <div>
        <button @click="addCargoAircraft()" class=""><span
            class="material-symbols-outlined fs-lg p-2">add</span></button>
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
// Firebase
import { useFirestore } from "vuefire"
import { doc, updateDoc, increment } from "@firebase/firestore";

// Vue
import { useRoute } from "vue-router";
import { ref } from "vue";

// Services
import { airUnitsService } from "../../services/AirUnitsService";
import { resourcesService } from "../../services/ResourcesService";

export default {
  props: {
    team: { type: Object, required: true }
  },
  setup() {
    const db = useFirestore()
    const route = useRoute()

    // conditional rendering for adding and removing units
    const plusFighter = ref(false)
    const minusFighter = ref(false)
    const plusCAS = ref(false)
    const minusCAS = ref(false)
    const plusCargo = ref(false)
    const minusCargo = ref(false)
    // @ts-ignore
    const team = doc(db, "teams", route.params.id)
    return {
      plusFighter,
      minusFighter,
      plusCAS,
      minusCAS,
      plusCargo,
      minusCargo,
      async addFighterAircraft() {
        try {
          // change ref value to true to display +1 or -1 icon
          plusFighter.value = true
          // update team resource count
          await resourcesService.updateResources(team, 0, -3, -3, 0)
          await updateDoc(team, {
            totalFighterAircraft: increment(1)
          });
          setTimeout(() => {
            // change ref value back to false to remove +1 or -1 icon
            plusFighter.value = false
          }, 100)
        } catch (error) {
          console.error(error, "adding FighterAircraft");
        }
      },
      async removeFighterAircraft() {
        try {
          minusFighter.value = true
          await resourcesService.updateResources(team, 0, 3, 3, 0)
          await updateDoc(team, {
            totalFighterAircraft: increment(-1)
          });
          setTimeout(() => {
            minusFighter.value = false
          }, 100)
        } catch (error) {
          console.error(error, "removing FighterAircraft");
        }
      },

      async addCloseAirSupport() {
        try {
          plusCAS.value = true
          await resourcesService.updateResources(team, 0, -3, -3, 0)
          await updateDoc(team, {
            totalCloseAirSupport: increment(1)
          });
          setTimeout(() => {
            plusCAS.value = false
          }, 100)
        } catch (error) {
          console.error(error, "adding Close Air Support");
        }
      },
      async removeCloseAirSupport() {
        try {
          minusCAS.value = true
          await resourcesService.updateResources(team, 0, 3, 3, 0)
          await updateDoc(team, {
            totalCloseAirSupport: increment(-1)
          });
          setTimeout(() => {
            minusCAS.value = false
          }, 100)
        } catch (error) {
          console.error(error, "removing Close Air Support");
        }
      },

      async addCargoAircraft() {
        try {
          plusCargo.value = true
          await resourcesService.updateResources(team, 0, -1, -2, 0)
          await updateDoc(team, {
            totalCargoAircraft: increment(1)
          });
          setTimeout(() => {
            plusCargo.value = false
          }, 100);
        } catch (error) {
          console.error(error, "adding Cargo Aircraft");
        }
      },
      async removeCargoAircraft() {
        try {
          minusCargo.value = true
          await resourcesService.updateResources(team, 0, 1, 2, 0)
          await updateDoc(team, {
            totalCargoAircraft: increment(-1)
          });
          setTimeout(() => {
            minusCargo.value = false
          }, 100);
        } catch (error) {
          console.error(error, "removing Cargo Aircraft");
        }
      }
    }
  }
}

</script>

<style lang="scss" scoped></style>