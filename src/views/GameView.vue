<template>
  <header class="sticky-top">
    <NavbarComponent :teams="teams" />
  </header>

  <body class="container-fluid indepentant-scroll" v-if="teams.creatorId">
    <div class="row" v-motion-pop>
      <!-- Ground Forces -->
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Ground Forces</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          swords
        </span>
      </div>
    </div>
    <div class="row" v-motion-slide-left>
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
    </div>
    <!-- Air Forces -->
    <div class="row" v-motion-slide-visible-once-left>
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
    <!-- Regions -->
    <div class="row my-3 bg-green py-3 elevation-5 text-light" v-motion-pop-visible-once>
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
      </div>
    </div>
    <div class="row justify-content-center" v-motion-pop-visible-once>
      <div class="col-6 col-sm-6 col-md-3 d-flex mb-3" v-for="r in region" v-if="region.length > 0">
        <RegionCardComponent :regions="r" :teams="teams" />
      </div>
      <div v-else class="col-12 text-center">
        <span class="fs-md">Claim Region to get started</span>
      </div>
    </div>
    <div class="row my-3 bg-green py-3 elevation-5 text-light" v-motion-pop-visible-once>
      <div class="col-12 d-flex justify-content-center pb-2">
        <h2>Cities</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          location_city
        </span>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <button type="submit" class="rounded text-shadow-dark py-2 px-3 mx-3" data-bs-toggle="modal"
          data-bs-target="#createSmallCity-modal" aria-label="Create Small City">
          Create Small City
        </button>
        <button type="submit" class="rounded text-shadow-dark py-2 px-3 mx-3" data-bs-toggle="modal"
          data-bs-target="#createMediumCity-modal" aria-label="Create Medium City">
          Create Medium City
        </button>
        <button type="submit" class="rounded text-shadow-dark py-2 px-3 mx-3" data-bs-toggle="modal"
          data-bs-target="#createLargeCity-modal" aria-label="Create Large City">
          Create Large City
        </button>
      </div>
    </div>
    <div class="row justify-content-center pb-5" v-motion-pop-visible-once>
      <div class="col-6 col-sm-6 col-md-3 d-flex mb-3" v-for="c in cities" v-if="cities.length > 0">
        <CityCardComponent :cities="c" :teams="teams" />
      </div>
      <div v-else class="col-12 text-center pb-4">
        <span class="fs-md">Create City to get started</span>
      </div>
    </div>
  </body>
  <div v-else class="col-12 text-center pt-5">
    <h1>Create team to access this page</h1>
  </div>

  <!-- Modals -->
  <ModalComponent id="createRegion-modal">
    <CreateRegionFormComponent :key="user?.uid" :teams="teams" />
  </ModalComponent>
  <ModalComponent id="createCarrier-modal">
    <CreateCarrierGroupFormComponent :key="user?.uid" :teams="teams" />
  </ModalComponent>

  <!-- Create City Modals -->
  <ModalComponent id="createSmallCity-modal">
    <CreateSmallCityFormComponent :key="user?.uid" :teams="teams" />
  </ModalComponent>
  <ModalComponent id="createMediumCity-modal">
    <CreateMediumCityFormComponent :key="user?.uid" :teams="teams" />
  </ModalComponent>
  <ModalComponent id="createLargeCity-modal">
    <CreateLargeCityFormComponent :key="user?.uid" :teams="teams" />
  </ModalComponent>

</template>


<script setup>
// firbase
import { useCurrentUser, getCurrentUser } from "vuefire"

// vue
import { onMounted, computed, ref } from "vue";
import { useRoute } from "vue-router";

// Services
import { regionsService } from "../services/RegionsService";
import { teamsService } from "../services/TeamsService";

// State management
import { useRegionStore } from "../stores/RegionStore";
import { useNavyStore } from "../stores/NavyStore";

// Components
import RegionCardComponent from "../components/cards/RegionCardComponent.vue";
import ModalComponent from "../components/ModalComponent.vue";
import CreateRegionFormComponent from "../components/forms/CreateRegionFormComponent.vue";
import CreateTeamFormComponent from "../components/forms/CreateTeamFormComponent.vue";
import CityCardComponent from "../components/cards/CityCardComponent.vue";
import InfantryComponent from "../components/addRemoveUnits/InfantryComponent.vue";
import MechIfvComponent from "../components/addRemoveUnits/MechIfvComponent.vue";
import MbtAntiAircraftComponent from "../components/addRemoveUnits/MbtAntiAircraftComponent.vue";
import ArtilleryComponent from "../components/addRemoveUnits/ArtilleryComponent.vue";
import AirUnitsComponent from "../components/addRemoveUnits/AirUnitsComponent.vue";
import CreateCarrierGroupFormComponent from "../components/forms/CreateCarrierGroupFormComponent.vue";
import NavbarComponent from "../components/NavbarComponent.vue";
import CreateSmallCityFormComponent from "../components/forms/CreateSmallCityFormComponent.vue";
import CreateMediumCityFormComponent from "../components/forms/CreateMediumCityFormComponent.vue";
import CreateLargeCityFormComponent from "../components/forms/CreateLargeCityFormComponent.vue";

const route = useRoute()
const user = useCurrentUser()


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

const region = computed(() => useRegionStore.regions.sort((a, b) => a.regionNumber - b.regionNumber))
const teams = computed(() => useRegionStore.teams)
const cities = computed(() => useRegionStore.cities.sort((a, b) => a.regionNumber - b.regionNumber))

</script>

<style scoped></style>
