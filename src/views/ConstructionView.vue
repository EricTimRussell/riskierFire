<template>
  <div class="container-fluid">
    <div class="row mt-5 justify-content-center">
      <div class="col-12 text-center">
        <h1>Building Construction</h1>
        <button class="m-2" data-bs-toggle="modal" data-bs-target="#construction-modal"
          aria-label="Start Construction">+Building</button>
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
import { onMounted, ref } from "vue";
import { getCurrentUser, useCurrentUser } from "vuefire";
import { teamsService } from "../services/TeamsService";
import { buildingsService } from "../services/BuildingsService";
import { useRegionStore } from "../stores/RegionStore";
import ConstructBuildingComponent from "../components/ConstructBuildingComponent.vue";
import { useConstructionStore } from "../stores/ConstructionStore";
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
      user,

      async constructShip() {
        try {
          await buildingsService.constructShip()
        } catch (error) {
          console.error(error, 'construct ship');
        }
      }
    }
  },
  components: { ModalComponent, ConstructBuildingComponent }
}
</script>

<style scoped></style>