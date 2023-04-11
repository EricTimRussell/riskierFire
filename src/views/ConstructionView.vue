<template>
  <div class="container-fluid">
    <div class="row mt-5 justify-content-center">
      <div class="col-12 text-center">
        <h1>Building Construction</h1>
        <button class="m-2" data-bs-toggle="modal" data-bs-target="#construction-modal"
          aria-label="Start Construction">+Building</button>
      </div>
      <div class="col-md-3 col-sm-6 d-flex pt-4" v-for="c in construction">
        <ConstructionCardComponent :teams="teams" :construction="c" />
      </div>
    </div>
  </div>


  <ModalComponent id="construction-modal">
    <ConstructBuildingComponent :key="user?.uid" :teams="teams" />
  </ModalComponent>
</template>

<script>
import ModalComponent from "../components/ModalComponent.vue";
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { getCurrentUser, useCurrentUser, useFirestore } from "vuefire";
import { teamsService } from "../services/TeamsService";
import { buildingsService } from "../services/BuildingsService";
import { useRegionStore } from "../stores/RegionStore";
import ConstructBuildingComponent from "../components/ConstructBuildingComponent.vue";
import { useConstructionStore } from "../stores/ConstructionStore";
import ConstructionCardComponent from "../components/ConstructionCardComponent.vue";
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
  components: { ModalComponent, ConstructBuildingComponent, ConstructionCardComponent }
}
</script>

<style scoped></style>