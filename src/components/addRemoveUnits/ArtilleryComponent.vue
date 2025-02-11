<template>
  <div>

    <!-- SECTION Artillery -->
    <div class="col-12 btn-group btn-group-sm d-flex justify-content-center" role="group"
      aria-label="Small button group">
      <div>
        <button :disabled="(team.totalArtillery <= 0)" @click="removeArtillery()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Artillery</h6>
        <h6 v-if="plusArtillery == true" class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong></h6>
        <h6 v-if="minusArtillery == true" class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong></h6>
        <h6 v-if="!plusArtillery && !minusArtillery" class="px-2 fs-4"><strong>{{ team.totalArtillery }}</strong></h6>
      </div>
      <div>
        <button @click="addArtillery()" class=""><span class="material-symbols-outlined fs-lg p-2">add</span></button>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center mb-5 gap-5">
      <div class="d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-warning">attach_money</span>
        <span class="fs-lg">1</span>
      </div>
      <div class="d-flex justify-content-center">
        <span class="fs-xl text-secondary material-symbols-outlined">factory</span>
        <span class="fs-lg">3</span>
      </div>
    </div>

    <!-- SECTION Missile Artillery -->
    <div class="col-12 btn-group btn-group-sm px-2 d-flex justify-content-center" role="group"
      aria-label="Small button group">
      <div>
        <button :disabled="(team.totalMissileArtillery <= 0)" @click="removeMissileArtillery()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Missile Artillery</h6>
        <h6 v-if="plusMissileArtillery == true" class="px-2 fs-4 text-success add-unit-transform"><strong>+1</strong>
        </h6>
        <h6 v-if="minusMissileArtillery == true" class="px-2 fs-4 text-danger add-unit-transform"><strong>-1</strong>
        </h6>
        <h6 v-if="!plusMissileArtillery && !minusMissileArtillery" class="px-2 fs-4"><strong>{{
          team.totalMissileArtillery
            }}</strong></h6>
      </div>
      <div>
        <button @click="addMissileArtillery()" class=""><span
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
import { resourcesService } from "../../services/ResourcesService";

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
    const plusArtillery = ref(false)
    const minusArtillery = ref(false)
    const plusMissileArtillery = ref(false)
    const minusMissileArtillery = ref(false)
    return {
      plusArtillery,
      minusArtillery,
      plusMissileArtillery,
      minusMissileArtillery,

      async addArtillery() {
        try {
          // change ref value to true to display +1 or -1 icon
          plusArtillery.value = true
          // update team resource count
          await resourcesService.updateResources(team, 0, -1, -3, 0)
          await updateDoc(team, {
            totalArtillery: increment(1)
          });
          setTimeout(() => {
            // change ref value back to false to remove +1 or -1 icon
            plusArtillery.value = false
          }, 100);
        } catch (error) {
          console.error(error, "adding Artillery");
        }
      },

      async removeArtillery() {
        try {
          minusArtillery.value = true
          await resourcesService.updateResources(team, 0, 1, 3, 0)
          await updateDoc(team, {
            totalArtillery: increment(-1)
          });
          setTimeout(() => {
            minusArtillery.value = false
          }, 100);
        } catch (error) {
          console.error(error, "removing Artillery");
        }
      },

      async addMissileArtillery() {
        try {
          plusMissileArtillery.value = true
          await resourcesService.updateResources(team, 0, -3, -3, 0)
          await updateDoc(team, {
            totalMissileArtillery: increment(1)
          });
          setTimeout(() => {
            plusMissileArtillery.value = false
          }, 100);
        } catch (error) {
          console.error(error, "adding Missile Artillery");
        }
      },

      async removeMissileArtillery() {
        try {
          minusMissileArtillery.value = true
          await resourcesService.updateResources(team, 0, 3, 3, 0)
          await updateDoc(team, {
            totalMissileArtillery: increment(-1)
          });
          setTimeout(() => {
            minusMissileArtillery.value = false
          }, 100);
        } catch (error) {
          console.error(error, "removing Missile Artillery");
        }
      }
    }
  }
}

</script>

<style lang="scss" scoped></style>