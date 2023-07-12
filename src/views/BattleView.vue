<template>
  <header class="sticky-top">
    <NavbarComponent :teams="teams" />
  </header>

  <body class="container-fluid indepentant-scroll">
    <!-- Ground Unit Dice -->
    <section class="row justify-content-center">
      <div class="col-12 d-flex justify-content-center bg-green elevation-5 mt-5 py-3 text-light gap-3" v-motion-pop>
        <span class="material-symbols-outlined fs-xl">
          swords
        </span>
        <h1>Land Units</h1>
        <span class="material-symbols-outlined fs-xl">
          swords
        </span>
      </div>
      <div class="accordion py-4" v-motion-fade>
        <!-- Infantry -->
        <div class="accordion-item bg-infantry">
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
        <div class="accordion-item bg-specialForces">
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
        <div class="accordion-item bg-dark">
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
        <div class="accordion-item bg-dark">
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
        <div class="accordion-item bg-dark">
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
        <div class="accordion-item bg-dark">
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
        <div class="accordion-item bg-dark">
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
        <div class="accordion-item bg-dark">
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
    <section class="row justify-content-center">
      <div class="col-12 d-flex justify-content-center bg-green elevation-5 mt-5 py-3 text-light gap-3"
        v-motion-pop-visible-once>
        <span class="material-symbols-outlined fs-xl">
          flight
        </span>
        <h1>Air Units</h1>
        <span class="material-symbols-outlined fs-xl">
          flight
        </span>
      </div>
      <div class="accordion py-4" v-motion-fade-visible-once>
        <!-- Fighter Aircraft -->
        <div class="accordion-item bg-dark">
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
        <div class="accordion-item bg-dark">
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
    <section class="row justify-content-center pb-5">
      <div class="col-12 d-flex justify-content-center bg-green elevation-5 mt-5 py-3 text-light gap-3"
        v-motion-pop-visible-once>
        <span class="material-symbols-outlined fs-xl">
          directions_boat
        </span>
        <h1>Naval Units</h1>
        <span class="material-symbols-outlined fs-xl">
          directions_boat
        </span>
      </div>
      <div class="accordion py-4" v-motion-fade-visible-once>
        <!-- Carrier -->
        <div class="accordion-item bg-dark">
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
        <div class="accordion-item bg-dark">
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
        <div class="accordion-item bg-dark">
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

  </body>
</template>

<script>
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
import ModalComponent from "../components/ModalComponent.vue";
import NavbarComponent from "../components/NavbarComponent.vue";

export default {
  setup() {
    const oneTwelveDie = ref({ roll: 0 });
    const isPending = ref(false);
    const user = useCurrentUser();
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
    });
    return {
      teams: computed(() => useRegionStore.teams),
      oneTwelveDie,
      isPending,
      rollOneTwelveDie() {
        setTimeout(() => {
          isPending.value = false;
        }, 1000);
        oneTwelveDie.value = ({ roll: Math.floor(Math.random() * 12 + 1) });
        isPending.value = true;
      }
    };
  },
  components: { InfantryDiceComponent, SpecialForcesDiceComponent, MechanizedDiceComponent, IFVDiceComponent, MBTDiceComponent, ArtilleryDiceComponent, MissileArtilleryDiceComponent, FighterAircraftDiceComponent, CasDiceComponent, AnitAicraftDiceComponent, CarrierDiceComponent, CruiserDiceComponent, DestroyerDiceComponent, ModalComponent, NavbarComponent }
}

</script>

<style lang="scss" scoped></style>