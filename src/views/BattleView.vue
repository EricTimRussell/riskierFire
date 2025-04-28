<template>
  <header class="sticky-top">
    <NavbarComponent :teams="teams" />
  </header>

  <body class="container-fluid indepentant-scroll">
    <!-- switches -->
    <section class="row justify-content-center">
      <div class="col-12 d-flex justify-content-center bg-green elevation-5 mt-5 py-3 text-light gap-3" v-motion-pop>
        <span class="material-symbols-outlined fs-xl">
          swords
        </span>
        <h1>Select Unit</h1>
        <span class="material-symbols-outlined fs-xl">
          swords
        </span>
      </div>
      <div class="d-flex justify-content-center col-6 pt-3">
        <span class="fs-md">Infantry</span>
      </div>
      <div class="d-flex justify-content-center col-6 pt-3">
        <span class="fs-md">Special Forces</span>
      </div>
      <div class="form-check form-switch d-flex justify-content-center col-6 fs-md">
        <input v-model="infantry" class="form-check-input" type="checkbox" role="switch" id="infantry">
      </div>
      <div class="form-check form-switch d-flex justify-content-center col-6 fs-md">
        <input v-model="specialForces" class="form-check-input" type="checkbox" role="switch" id="specialForces">
      </div>
      <div class="d-flex justify-content-center col-6 pt-3">
        <span class="fs-md">Mechanized</span>
      </div>
      <div class="d-flex justify-content-center col-6 pt-3">
        <span class="fs-md">IFV</span>
      </div>
      <div class="form-check form-switch d-flex justify-content-center col-6 fs-md">
        <input v-model="mechanized" class="form-check-input" type="checkbox" role="switch" id="mechanized">
      </div>
      <div class="form-check form-switch d-flex justify-content-center col-6 fs-md">
        <input v-model="IFV" class="form-check-input" type="checkbox" role="switch" id="IFV">
      </div>
      <div class="d-flex justify-content-center col-6 pt-3">
        <span class="fs-md">MBT</span>
      </div>
      <div class="d-flex justify-content-center col-6 pt-3">
        <span class="fs-md">Artillery</span>
      </div>
      <div class="form-check form-switch d-flex justify-content-center col-6 fs-md">
        <input v-model="MBT" class="form-check-input" type="checkbox" role="switch" id="MBT">
      </div>
      <div class="form-check form-switch d-flex justify-content-center col-6 fs-md">
        <input v-model="artillery" class="form-check-input" type="checkbox" role="switch" id="artillery">
      </div>
      <div class="d-flex justify-content-center col-6 pt-3">
        <span class="fs-md">Missile</span>
      </div>
      <div class="d-flex justify-content-center col-6 pt-3">
        <span class="fs-md">Anti-Aircraft</span>
      </div>
      <div class="form-check form-switch d-flex justify-content-center col-6 fs-md">
        <input v-model="missile" class="form-check-input" type="checkbox" role="switch" id="missile">
      </div>
      <div class="form-check form-switch d-flex justify-content-center col-6 fs-md">
        <input v-model="antiAir" class="form-check-input" type="checkbox" role="switch" id="antiair">
      </div>
      <div class="d-flex justify-content-center col-6 pt-3">
        <span class="fs-md">Fighter</span>
      </div>
      <div class="d-flex justify-content-center col-6 pt-3">
        <span class="fs-md">CAS</span>
      </div>
      <div class="form-check form-switch d-flex justify-content-center col-6 fs-md">
        <input v-model="fighter" class="form-check-input" type="checkbox" role="switch" id="fighter">
      </div>
      <div class="form-check form-switch d-flex justify-content-center col-6 fs-md">
        <input v-model="CAS" class="form-check-input" type="checkbox" role="switch" id="CAS">
      </div>
      <div class="d-flex justify-content-center col-6 pt-3">
        <span class="fs-md">Carrier</span>
      </div>
      <div class="d-flex justify-content-center col-6 pt-3">
        <span class="fs-md">Cruiser</span>
      </div>
      <div class="form-check form-switch d-flex justify-content-center col-6 fs-md">
        <input v-model="carrier" class="form-check-input" type="checkbox" role="switch" id="carrier">
      </div>
      <div class="form-check form-switch d-flex justify-content-center col-6 fs-md">
        <input v-model="cruiser" class="form-check-input" type="checkbox" role="switch" id="cruiser">
      </div>
      <div class="form-check form-switch d-flex justify-content-center col-6 fs-md pt-3">
        <input v-model="destroyer" class="form-check-input" type="checkbox" role="switch" id="destroyer">
        <label class="form-check-label" for="destroyer">Destroyer</label>
      </div>
    </section>

    <!-- ground unit dice -->
    <section class="mt-3">
      <div class="accordion">
        <!-- Infantry -->
        <div v-if="infantry" class="accordion-item bg-infantry mb-4">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button fs-xl collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Infantry
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
            <div class="accordion-body text-light">
              <InfantryDiceComponent />
            </div>
          </div>
        </div>
        <!-- Special Forces -->
        <div v-if="specialForces" class="accordion-item bg-specialForces mb-4">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button fs-xl collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Special Forces
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo">
            <div class="accordion-body text-light">
              <SpecialForcesDiceComponent />
            </div>
          </div>
        </div>
        <!-- Mechanized -->
        <div v-if="mechanized" class="accordion-item bg-mech mb-4">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button fs-xl collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Mechanized
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree">
            <div class="accordion-body text-light">
              <MechanizedDiceComponent />
            </div>
          </div>
        </div>
        <!-- IFV -->
        <div v-if="IFV" class="accordion-item bg-ifv mb-4">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button fs-xl collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              IFV
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour">
            <div class="accordion-body text-light">
              <IFVDiceComponent />
            </div>
          </div>
        </div>
        <!-- MBT -->
        <div v-if="MBT" class="accordion-item bg-mbt mb-4">
          <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button fs-xl collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              MBT
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive">
            <div class="accordion-body text-light">
              <MBTDiceComponent />
            </div>
          </div>
        </div>
        <!-- Artillery -->
        <div v-if="artillery" class="accordion-item bg-artillery mb-4">
          <h2 class="accordion-header" id="headingEleven">
            <button class="accordion-button fs-xl collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
              Artillery
            </button>
          </h2>
          <div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven">
            <div class="accordion-body text-light">
              <ArtilleryDiceComponent />
            </div>
          </div>
        </div>
        <!--Missile Artillery -->
        <div v-if="missile" class="accordion-item bg-missile mb-4">
          <h2 class="accordion-header" id="headingTwelve">
            <button class="accordion-button fs-xl collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
              Missile Artillery
            </button>
          </h2>
          <div id="collapseTwelve" class="accordion-collapse collapse" aria-labelledby="headingTwelve">
            <div class="accordion-body text-light">
              <MissileArtilleryDiceComponent />
            </div>
          </div>
        </div>
        <!-- Anti-Aircraft -->
        <div v-if="antiAir" class="accordion-item bg-aa mb-4">
          <h2 class="accordion-header" id="headingThirteen">
            <button class="accordion-button fs-xl collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
              Anti-Aircraft
            </button>
          </h2>
          <div id="collapseThirteen" class="accordion-collapse collapse" aria-labelledby="headingThirteen">
            <div class="accordion-body text-light">
              <AnitAicraftDiceComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Air Unit Dice -->
    <section class="row justify-content-center mt-3">
      <div class="accordion">
        <!-- Fighter Aircraft -->
        <div v-if="fighter" class="accordion-item bg-fighter mb-4">
          <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button fs-xl collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              Fighter
            </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix">
            <div class="accordion-body text-light">
              <FighterAircraftDiceComponent />
            </div>
          </div>
        </div>
        <!-- Close Air Support -->
        <div v-if="CAS" class="accordion-item bg-cas mb-4">
          <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button fs-xl collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
              CAS
            </button>
          </h2>
          <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven">
            <div class="accordion-body text-light">
              <CasDiceComponent />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navy Unit Dice -->
    <section class="row justify-content-center mt-3">
      <div class="accordion">
        <!-- Carrier -->
        <div v-if="carrier" class="accordion-item bg-carrier mb-4">
          <h2 class="accordion-header" id="headingEight">
            <button class="accordion-button fs-xl collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
              Carrier
            </button>
          </h2>
          <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight">
            <div class="accordion-body text-light">
              <CarrierDiceComponent />
            </div>
          </div>
        </div>
        <!-- Cruiser -->
        <div v-if="cruiser" class="accordion-item bg-cruiser mb-4">
          <h2 class="accordion-header" id="headingNine">
            <button class="accordion-button fs-xl collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
              Cruiser
            </button>
          </h2>
          <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine">
            <div class="accordion-body text-light">
              <CruiserDiceComponent />
            </div>
          </div>
        </div>
        <!-- Destroyer -->
        <div v-if="destroyer" class="accordion-item bg-destroyer mb-4">
          <h2 class="accordion-header" id="headingTen">
            <button class="accordion-button fs-xl collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
              Destroyer
            </button>
          </h2>
          <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen">
            <div class="accordion-body text-light">
              <DestroyerDiceComponent />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="row footer-font-color mt-3">
      <span class="col-12 bg-green footer-font-color py-3">Footer</span>
    </div>
  </body>
</template>

<script setup>
// Firebase
import { getCurrentUser, useCurrentUser } from "vuefire";

// Vue
import { ref, onMounted } from "vue";
import { computed } from "@vue/reactivity";

// Services
import { teamsService } from "../services/TeamsService";

// State Management
import { useRegionStore } from "../stores/RegionStore";

// Components
import InfantryDiceComponent from "../components/groundUnitDice/InfantryDiceComponent.vue";
import MechanizedDiceComponent from "../components/groundUnitDice/MechanizedDiceComponent.vue";
import SpecialForcesDiceComponent from "../components/groundUnitDice/SpecialForcesDiceComponent.vue";
import IFVDiceComponent from "../components/groundUnitDice/IFVDiceComponent.vue";
import MBTDiceComponent from "../components/groundUnitDice/MBTDiceComponent.vue";
import ArtilleryDiceComponent from "../components/groundUnitDice/ArtilleryDiceComponent.vue";
import MissileArtilleryDiceComponent from "../components/groundUnitDice/MissileArtilleryDiceComponent.vue";
import FighterAircraftDiceComponent from "../components/aircraftDice/FighterAircraftDiceComponent.vue";
import CasDiceComponent from "../components/aircraftDice/CasDiceComponent.vue";
import AnitAicraftDiceComponent from "../components/groundUnitDice/AnitAicraftDiceComponent.vue";
import CarrierDiceComponent from "../components/navyDice/CarrierDiceComponent.vue";
import CruiserDiceComponent from "../components/navyDice/CruiserDiceComponent.vue";
import DestroyerDiceComponent from "../components/navyDice/DestroyerDiceComponent.vue";
import NavbarComponent from "../components/NavbarComponent.vue";

const infantry = ref(false)
const specialForces = ref(false)
const mechanized = ref(false)
const IFV = ref(false)
const MBT = ref(false)
const artillery = ref(false)
const missile = ref(false)
const antiAir = ref(false)
const fighter = ref(false)
const CAS = ref(false)
const cruiser = ref(false)
const carrier = ref(false)
const destroyer = ref(false)
const user = useCurrentUser()

const teams = computed(() => useRegionStore.teams)

async function getTeamByUserId() {
  try {
    // get user id if undefined
    if (user.value?.uid == undefined) {
      const user = await getCurrentUser();
    }
    await teamsService.getTeamByUserId(user);
  }
  catch (error) {
    console.error(error);
  }
}
onMounted(() => {
  getTeamByUserId();
})

</script>

<style scoped>
.footer-font-color{
  color:#28361800;
}
.form-check-input:checked{
  background-color: #fdce78;
  border-color: black;
}
.form-check-input:focus{
  box-shadow: 0 0 0 .25rem #fdce7840;
  border-color: black;

}
</style>