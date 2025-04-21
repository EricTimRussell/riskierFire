<template>
  <header class="sticky-top">
    <NavbarComponent :teams="teams" />
  </header>
  <div v-if="teams.creatorId" class="container-fluid indepentant-scroll">
    <div class="row mt-5 justify-content-center" v-motion-pop>
      <div class="col-12 text-center bg-green py-2 elevation-5 text-light">
        <h1>Construction</h1>
        <button class="m-2 px-1 py-1" :disabled="teams.totalProduction == 0" data-bs-toggle="modal"
          data-bs-target="#construction-modal" aria-label="Start Construction"><span
            class="material-symbols-outlined fs-lg p-2">build</span></button>
        <span v-if="teams.totalProduction == 0">No Production Capacity</span>
      </div>
      <div class="col-md-3 col-sm-6 d-flex pt-4" v-for="c in construction">
        <ConstructionCardComponent :teams="teams" :construction="c" />
      </div>
    </div>
    <!-- Naval Forces -->
    <div class="row" v-motion-slide-left>
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Navy</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          directions_boat
        </span>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <NavalUnitsComponent :team="teams" />
      </div>
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light gap-3">
        <h2>Carriers</h2>
        <div>
          <button data-bs-toggle="modal" data-bs-target="#carrier-modal" class="text-dark"><span
              class="material-symbols-outlined fs-lg p-2">build</span></button>
        </div>
      </div>
      <div class="col-12 col-md-6 d-flex justify-content-center" v-for="c in carrier">
        <CarrierCardComponent :teams="teams" :carriers="c" />
      </div>
      <div v-if="carrier.length === 0" class="col-12 d-flex justify-content-center">
        <span class="fs-lg text-dark">Your team has no carriers</span>
      </div>
    </div>
    <!-- Structures -->
    <div class="row pb-5" v-motion-slide-visible-once-left>
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
  <ModalComponent id="carrier-modal">
    <CreateCarrierGroupFormComponent :key="user?.uid" :teams="teams" />
  </ModalComponent>
</template>

<script setup>
// Firebase
import { getCurrentUser, useCurrentUser } from "vuefire";

// Vue
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";

// Services
import { teamsService } from "../services/TeamsService";
import { buildingsService } from "../services/BuildingsService";
import { navyUnitsService } from "../services/NavyUnitsService";

// State Management
import { useRegionStore } from "../stores/RegionStore";
import { useConstructionStore } from "../stores/ConstructionStore";
import { useNavyStore } from "../stores/NavyStore";

// Components
import ModalComponent from "../components/ModalComponent.vue";
import ConstructionFormComponent from "../components/forms/ConstructionFormComponent.vue";
import ConstructionCardComponent from "../components/cards/ConstructionCardComponent.vue";
import NavalUnitsComponent from "../components/addRemoveUnits/NavalUnitsComponent.vue";
import BuildingsComponent from "../components/addRemoveUnits/BuildingsComponent.vue";
import NavbarComponent from "../components/NavbarComponent.vue";
import CarrierCardComponent from "../components/cards/CarrierCardComponent.vue";
import CreateCarrierGroupFormComponent from "../components/forms/CreateCarrierGroupFormComponent.vue";


const user = useCurrentUser()
const teams = computed(() => useRegionStore.teams)
const construction = computed(() => useConstructionStore.construction)
const carrier = computed(() => useNavyStore.navy.sort((a, b) => a.carrierNumber - b.carrierNumber))

async function getTeamByUserId() {
  try {
    // get user id if undefined
    if (user.value?.uid == undefined) {
      // @ts-ignore
      const user = await getCurrentUser()
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
      const user = await getCurrentUser()
    }
    await buildingsService.getConstructionByUserId(user)
  } catch (error) {
    console.error(error)
  }
}

async function getCarriersByUserId() {
  try {
    // get user id if undefined
    if (user.value?.uid == undefined) {
      const user = await getCurrentUser()
    }
    await navyUnitsService.getCarriersByUserId(user)
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getTeamByUserId()
  getConstructionByUserId()
  getCarriersByUserId()
})

</script>

<style scoped></style>