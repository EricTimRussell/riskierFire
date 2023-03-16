<template>
  <div>

    <!-- SECTION Artillery -->
    <div class="col-12 btn-group btn-group-sm d-flex justify-content-center" role="group" aria-label="Small button group">
      <div>
        <button :disabled="(team.totalArtillery <= 0)" @click="removeArtillery()" class="text-dark"><span
            class="material-symbols-outlined fs-lg p-2">remove</span></button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h6 class="px-2">Artillery</h6>
        <h6 class="px-2 fs-4"><strong>{{ team.totalArtillery }}</strong></h6>
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
        <h6 class="px-3 fs-4"><strong>{{ team.totalMissileArtillery }}</strong></h6>
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
      async addArtillery() {
        try {
          await groundForcesService.addArtillery(team)
        } catch (error) {
          console.error(error, "adding Artillery");
        }
      },
      async removeArtillery() {
        try {
          await groundForcesService.removeArtillery(team)
        } catch (error) {
          console.error(error, "removing Artillery");
        }
      },

      async addMissileArtillery() {
        try {
          await groundForcesService.addMissileArtillery(team)
        } catch (error) {
          console.error(error, "adding Missile Artillery");
        }
      },
      async removeMissileArtillery() {
        try {
          await groundForcesService.removeMissileArtillery(team)
        } catch (error) {
          console.error(error, "removing Missile Artillery");
        }
      }
    }
  }
}

</script>

<style lang="scss" scoped></style>