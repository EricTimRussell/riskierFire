<template>
  <div v-if="teams.creatorId" class="container-fluid">
    <div class="row mt-5 justify-content-center">
      <div class="col-12 text-center bg-green py-2 elevation-5 text-light">
        <h1>Construction</h1>
        <button class="m-2 px-3 py-2" :disabled="teams.totalProduction == 0" data-bs-toggle="modal"
          data-bs-target="#construction-modal" aria-label="Start Construction">+Build</button>
        <span v-if="teams.totalProduction == 0">No Production Capacity</span>
      </div>
      <div class="col-md-3 col-sm-6 d-flex pt-4" v-for="c in construction">
        <ConstructionCardComponent :teams="teams" :construction="c" />
      </div>
    </div>
    <!-- Naval Forces -->
    <div class="row">
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Navy</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          directions_boat
        </span>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <NavalUnitsComponent :team="teams" />
      </div>
    </div>
    <!-- Structures -->
    <div class="row">
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Structures</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          warehouse
        </span>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <BuildingsComponent :team="teams" />
      </div>
    </div>
  </div>
  <div v-else class="text-center pt-5">
    <h1>Create team to access this page</h1>
  </div>
  <ModalComponent id="construction-modal">
    <ConstructionFormComponent :key="user?.uid" :teams="teams" />
  </ModalComponent>
</template>

<script>
import ModalComponent from "../components/ModalComponent.vue";
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { getCurrentUser, useCurrentUser } from "vuefire";
import { teamsService } from "../services/TeamsService";
import { buildingsService } from "../services/BuildingsService";
import { useRegionStore } from "../stores/RegionStore";
import ConstructionFormComponent from "../components/ConstructionFormComponent.vue";
import { useConstructionStore } from "../stores/ConstructionStore";
import ConstructionCardComponent from "../components/ConstructionCardComponent.vue";
import NavalUnitsComponent from "../components/NavalUnitsComponent.vue";
import BuildingsComponent from "../components/BuildingsComponent.vue";
export default {
  setup() {
    const user = useCurrentUser();
    async function getTeamByUserId() {
      try {
        // get user id if undefined
        if (user.value?.uid == undefined) {
          // @ts-ignore
          const user = await getCurrentUser();
        }
        await teamsService.getTeamByUserId(user)
      } catch (error) {
        console.error(error)
      }
    }

    async function getConstructionByUserId() {
      try {
        // get user id if undefined
        if (user.value?.uid == undefined) {
          // @ts-ignore
          const user = await getCurrentUser();
        }
        await buildingsService.getConstructionByUserId(user)
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(() => {
      getTeamByUserId()
      getConstructionByUserId()
    });

    return {
      teams: computed(() => useRegionStore.teams),
      construction: computed(() => useConstructionStore.construction),
      user


    }
  },
  components: { ModalComponent, ConstructionFormComponent, ConstructionCardComponent, NavalUnitsComponent, BuildingsComponent }
}
</script>

<style scoped></style>