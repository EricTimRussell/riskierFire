<template>
  <body class="container-fluid">
    <section class="row g-0" v-if="teams">
      <!-- Ground Forces -->
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Ground Forces</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          swords
        </span>
      </div>
      <!-- Air Forces -->
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Airforce</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          flight
        </span>
      </div>
      <!-- Naval Forces -->
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Navy</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          directions_boat
        </span>
      </div>
      <!-- Structures -->
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Structures</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          warehouse
        </span>
      </div>
      <!-- Armies & Divisions -->
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Armies & Divisions</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          local_police
        </span>
      </div>
      <!-- Carriers -->
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Carriers</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          flight_takeoff
        </span>
      </div>
      <!-- Regions -->
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Regions</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          public
        </span>
        <button type="submit" class="rounded text-shadow-dark p-2 mx-3" data-bs-toggle="modal"
          data-bs-target="#createRegion-modal" aria-label="Create Region">
          Claim Region
        </button>
      </div>
      <div class="col-sm-6 col-md-3 d-flex justify-content-evenly" v-for="r in region" :key="regionId">
        <RegionCard :regions="r" />
      </div>
    </section>
  </body>


  <ModalComponent id="createRegion-modal">
    <CreateRegionForm :teams="teams" :key="user?.uid" />
  </ModalComponent>
  <ModalComponent id="createTeam-modal">
    <CreateTeamForm :key="user?.uid" />
  </ModalComponent>
</template>

<script>
import { useCurrentUser, getCurrentUser } from "vuefire"
import { onMounted, computed } from "vue";
import { regionsService } from "../services/RegionsService";
import { useRegionStore } from "../stores/RegionStore";
import ModalComponent from "../components/ModalComponent.vue";
import CreateRegionForm from "../components/CreateRegionForm.vue";
import CreateTeamForm from "../components/CreateTeamForm.vue";
import RegionCard from "../components/RegionCard.vue";
import { teamsService } from "../services/TeamsService";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute()
    const user = useCurrentUser();

    async function getRegionsByUserId() {
      try {
        // get user id if undefined
        if (user.value?.uid == undefined) {
          const user = await getCurrentUser();
        }
        await regionsService.getRegionsByUserId(user);
      }
      catch (error) {
        console.error(error);
      }
    }

    async function getTeamByUserId() {
      try {
        // get user id if undefined
        if (user.value?.uid == undefined) {
          const user = await getCurrentUser();
        }
        await teamsService.getTeamByUserId(user)
      } catch (error) {
        console.error(error)
      }
    }





    onMounted(() => {
      getRegionsByUserId()
      getTeamByUserId()
    });

    return {
      user,
      regionId: computed(() => useRegionStore.regionId),
      region: computed(() => useRegionStore.regions),
      teams: computed(() => useRegionStore.teams)
    };
  },
  components: { ModalComponent, CreateRegionForm, CreateTeamForm, RegionCard }
}
</script>

<style lang="scss" scoped></style>
