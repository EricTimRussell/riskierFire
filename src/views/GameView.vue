<template>
  <header class="sticky-top">
    <NavbarComponent :teams="teams" />
  </header>

  <body class="container-fluid indepentant-scroll" v-if="teams.creatorId">
    <div class="row">
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
    <!-- Armies & Divisions -->
    <div class="row bg-green py-3 elevation-5 text-light">
      <div class="col-12 d-flex justify-content-center text-light">
        <h2>Armies & Divisions</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          local_police
        </span>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <button type="submit" class="rounded text-shadow-dark p-2 mx-3" data-bs-toggle="modal"
          data-bs-target="#formDivision-modal" aria-label="Create Region">
          Form Division
        </button>
        <button type="submit" class="rounded text-shadow-dark py-2 px-3 mx-3" data-bs-toggle="modal"
          data-bs-target="#formArmy-modal" aria-label="Create City">
          Form Army
        </button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 text-center bg-green text-light py-1 my-3 elevation-5">
        <h2>Divisions</h2>
      </div>
      <div class="col-sm-6 col-md-3 d-flex mb-3" v-for="d in divisions" v-if="divisions.length > 0">
        <DivisionsCardComponent :divisions="d" :teams="teams" />
      </div>
      <div class="text-center" v-else>
        <span class="fs-md">Your team has no divisions</span>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center bg-green text-light py-1 my-3 elevation-5">
        <h2>Armies</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-6 col-md-3 d-flex mb-3" v-for="a in armies" v-if="armies.length > 0">
        <ArmyCardComponent :armies="a" :teams="teams" />
      </div>
      <div class="text-center" v-else>
        <span class="fs-md">Your team has no armies</span>
      </div>
    </div>
    <!-- Carriers -->
    <div class="row  my-3 bg-green py-3 elevation-5 text-light">
      <div class="col-12 d-flex justify-content-center">
        <h2>Carriers</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          flight_takeoff
        </span>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <button type="submit" class="rounded text-shadow-dark py-2 px-3 mx-3" data-bs-toggle="modal"
          data-bs-target="#createCarrier-modal" aria-label="Create City">
          Create Carrier
        </button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-6 col-md-3 d-flex mb-3" v-for="c in carriers" v-if="carriers.length > 0">
        <CarrierCardComponent :carriers="c" :teams="teams" />
      </div>
      <div class="text-center" v-else>
        <span class="fs-md">Your team has no carriers</span>
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
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-6 col-sm-6 col-md-3 d-flex mb-3" v-for="r in region" v-if="region.length > 0">
        <RegionCardComponent :regions="r" :teams="teams" />
      </div>
      <div v-else class="col-12 text-center">
        <span class="fs-md">Claim Region to get started</span>
      </div>
    </div>
    <div class="row my-3 bg-green py-3 elevation-5 text-light">
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
    <div class="row justify-content-center pb-5">
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
  <ModalComponent id="formDivision-modal">
    <CreateDivisionFormComponent :key="user?.uid" :teams="teams" />
  </ModalComponent>
  <ModalComponent id="formArmy-modal">
    <CreateArmyFormComponent :key="user?.uid" :teams="teams" />
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


<script>
// firbase
import { useCurrentUser, getCurrentUser } from "vuefire"

// vue
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";

// Services
import { regionsService } from "../services/RegionsService";
import { teamsService } from "../services/TeamsService";
import { armiesDivisionsService } from "../services/ArmiesDivisionsService";
import { navyUnitsService } from "../services/NavyUnitsService";

// State management
import { useRegionStore } from "../stores/RegionStore";
import { useArmyDivisionStore } from "../stores/ArmyDivisionStore";
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
import CreateDivisionFormComponent from "../components/forms/CreateDivisionFormComponent.vue";
import CreateArmyFormComponent from "../components/forms/CreateArmyFormComponent.vue";
import CreateCarrierGroupFormComponent from "../components/forms/CreateCarrierGroupFormComponent.vue";
import DivisionsCardComponent from "../components/cards/DivisionsCardComponent.vue";
import ArmyCardComponent from "../components/cards/ArmyCardComponent.vue";
import CarrierCardComponent from "../components/cards/CarrierCardComponent.vue";
import NavbarComponent from "../components/NavbarComponent.vue";
import CreateSmallCityFormComponent from "../components/forms/CreateSmallCityFormComponent.vue";
import CreateMediumCityFormComponent from "../components/forms/CreateMediumCityFormComponent.vue";
import CreateLargeCityFormComponent from "../components/forms/CreateLargeCityFormComponent.vue";

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

    async function getDivisionsByUserId() {
      try {
        // get user id if undefined
        if (user.value?.uid == undefined) {
          const user = await getCurrentUser();
        }
        await armiesDivisionsService.getDivisionsByUserId(user)
      } catch (error) {
        console.error(error)
      }
    }

    async function getArmiesByUserId() {
      try {
        // get user id if undefined
        if (user.value?.uid == undefined) {
          const user = await getCurrentUser();
        }
        await armiesDivisionsService.getArmiesByUserId(user)
      } catch (error) {
        console.error(error)
      }
    }

    async function getCarriersByUserId() {
      try {
        // get user id if undefined
        if (user.value?.uid == undefined) {
          const user = await getCurrentUser();
        }
        await navyUnitsService.getCarriersByUserId(user)
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(() => {
      getCarriersByUserId()
      getArmiesByUserId()
      getDivisionsByUserId()
      getRegionsByUserId()
      getCitiesByUserId()
      getTeamByUserId()
    });

    return {
      user,
      // @ts-ignore
      region: computed(() => useRegionStore.regions.sort((a, b) => a.regionNumber - b.regionNumber)),
      teams: computed(() => useRegionStore.teams),
      // @ts-ignore
      cities: computed(() => useRegionStore.cities.sort((a, b) => a.regionNumber - b.regionNumber)),
      divisions: computed(() => useArmyDivisionStore.divisions),
      armies: computed(() => useArmyDivisionStore.armies),
      carriers: computed(() => useNavyStore.navy)
    };
  },
  components: { ModalComponent, CreateRegionFormComponent, CreateTeamFormComponent, RegionCardComponent, CityCardComponent, InfantryComponent, MechIfvComponent, MbtAntiAircraftComponent, ArtilleryComponent, AirUnitsComponent, CreateDivisionFormComponent, CreateArmyFormComponent, CreateCarrierGroupFormComponent, DivisionsCardComponent, ArmyCardComponent, CarrierCardComponent, NavbarComponent, CreateSmallCityFormComponent, CreateMediumCityFormComponent, CreateLargeCityFormComponent }
}
</script>

<style lang="scss" scoped></style>
