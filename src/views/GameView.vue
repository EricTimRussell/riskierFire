<template>
  <body class="container-fluid" v-if="teams.creatorId">
    <div class="row">
      <!-- Ground Forces -->
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Ground Forces</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          swords
        </span>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center">
      <InfantryComponent :team="teams" />
    </div>
    <div class="col-12 d-flex justify-content-center">
      <MechIfvComponent :team="teams" />
    </div>
    <div class="col-12 d-flex justify-content-center">
      <MbtAntiAircraftComponent :team="teams" />
    </div>
    <div class="col-12 d-flex justify-content-center">
      <ArtilleryComponent :team="teams" />
    </div>
    <!-- Air Forces -->
    <div class="row">
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Airforce</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          flight
        </span>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <AirUnitsComponent :team="teams" />
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
    </div>
    <!-- Armies & Divisions -->
    <div class="row">
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Armies & Divisions</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          local_police
        </span>
      </div>
    </div>
    <!-- Carriers -->
    <div class="row">
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Carriers</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          flight_takeoff
        </span>
      </div>
    </div>
    <!-- Regions -->
    <div class="row my-3 bg-green py-3 elevation-5 text-light">
      <div class="col-12 d-flex justify-content-center pb-2">
        <h2>Regions</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          public
        </span>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <button type="submit" class="rounded text-shadow-dark p-2 mx-3" data-bs-toggle="modal"
          data-bs-target="#createRegion-modal" aria-label="Create Region">
          Claim Region
        </button>
        <button type="submit" class="rounded text-shadow-dark py-2 px-3 mx-3" data-bs-toggle="modal"
          data-bs-target="#createCity-modal" aria-label="Create City">
          Claim City
        </button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-6 col-md-3 d-flex mb-3" v-for="r in region">
        <RegionCard :regions="r" :teams="teams" />
      </div>
      <div class="col-12 text-center bg-green text-light my-3 elevation-5">
        <h2>Cities</h2>
      </div>
      <div class="col-sm-6 col-md-3 d-flex mb-3" v-for="c in cities">
        <CityCard :cities="c" :teams="teams" />
      </div>
    </div>
  </body>
  <div v-else class="col-12 text-center pt-5">
    <h1>Create Team to access this page</h1>
  </div>


  <ModalComponent id="createRegion-modal">
    <CreateRegionForm :key="user?.uid" :teams="teams" />
  </ModalComponent>
  <ModalComponent id="createCity-modal">
    <CreateCityForm :key="user?.uid" :teams="teams" />
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
import CreateCityForm from "../components/CreateCityForm.vue";
import CityCard from "../components/CityCard.vue";
import InfantryComponent from "../components/InfantryComponent.vue";
import MechIfvComponent from "../components/MechIfvComponent.vue";
import MbtAntiAircraftComponent from "../components/MbtAntiAircraftComponent.vue";
import ArtilleryComponent from "../components/ArtilleryComponent.vue";
import AirUnitsComponent from "../components/AirUnitsComponent.vue";
import NavalUnitsComponent from "../components/NavalUnitsComponent.vue";

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

    async function getCitiesByUserId() {
      try {
        // get user id if undefined
        if (user.value?.uid == undefined) {
          const user = await getCurrentUser();
        }
        await regionsService.getCitiesByUserId(user);
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
      getCitiesByUserId()
      getTeamByUserId()
    });

    return {
      user,
      region: computed(() => useRegionStore.regions),
      teams: computed(() => useRegionStore.teams),
      cities: computed(() => useRegionStore.cities)
    };
  },
  components: { ModalComponent, CreateRegionForm, CreateTeamForm, RegionCard, CreateCityForm, CityCard, InfantryComponent, MechIfvComponent, MbtAntiAircraftComponent, ArtilleryComponent, AirUnitsComponent, NavalUnitsComponent }
}
</script>

<style lang="scss" scoped></style>
