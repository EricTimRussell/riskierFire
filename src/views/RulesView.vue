<template>

  <body class="container-fluid indepentant-scroll-rules">
    <header class="row">
      <nav v-if="user?.email" class="d-flex justify-content-center gap-2 col-12">
        <RouterLink to="/">
          <span title="Home" class="material-symbols-outlined fs-xl">
            home
          </span>
        </RouterLink>
        <RouterLink to="/rules">
          <span title="Rules Page" class="material-symbols-outlined fs-xl">
            menu_book
          </span>
        </RouterLink>
        <RouterLink :to="{ name: 'game', params: { id: user.uid } }">
          <span title="Game Page" class="material-symbols-outlined fs-xl">
            sports_esports
          </span>
        </RouterLink>
        <RouterLink :to="{ name: 'construction', params: { id: user.uid } }">
          <span title="Construction Page" class="material-symbols-outlined fs-xl">
            construction
          </span>
        </RouterLink>
        <RouterLink to="/battle">
          <span title="Combat Page" class="material-symbols-outlined fs-xl">
            swords
          </span>
        </RouterLink>
      </nav>
    </header>
    <div class="row px-2">
      <div class="col-12 text-center mb-2 mt-4" id="start">
        <h1 class="fs-xl">Rule Book</h1>
      </div>
    </div>
    <div class="row pt-3 sticky">
      <div class="dropdown-center col-12 d-flex justify-content-center mb-4">
        <button class="dropdown-toggle px-2 py-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Jump to:
        </button>
        <ul class="dropdown-menu">
          <!-- id's for jump-to menu need to be attachted to p tags above the actual section becuase of sticky navbar -->
          <nav class="nav nav-pills drop-menu">
            <a class="nav-link dropdown-item" href="#start">Back-to-Top</a>
            <a class="nav-link dropdown-item" href="#gettingStarted">Getting Started</a>
            <a class="nav-link dropdown-item" href="#resources">Resources</a>
            <a class="nav-link dropdown-item" href="#construction">Construction</a>
            <a class="nav-link dropdown-item" href="#mainBoardPieces">Main Board Pieces</a>
            <nav class="nav-pills px-3">Unit Rules:
              <a class="nav-link dropdown-item" href="#ground">Ground Units</a>
              <a class="nav-link dropdown-item" href="#air">Air Units</a>
              <a class="nav-link dropdown-item" href="#navy">Navy Units</a>
            </nav>
            <a class="nav-link dropdown-item" href="#groundCombat">Ground Combat Rules</a>
            <a class="nav-link dropdown-item" href="#airCombat">Air Combat Rules</a>
            <a class="nav-link dropdown-item" href="#retreat">Retreat Rules</a>
            <a class="nav-link dropdown-item" href="#navyCombat">Navy Combat Rules</a>
            <a class="nav-link dropdown-item" href="#items">Technology Rules</a>
            <a class="nav-link dropdown-item" href="#events">Event Rules</a>
            <a class="nav-link dropdown-item" href="#structure">Structure Rules</a>
          </nav>
        </ul>
      </div>
    </div>
    <section class="row px-2">
      <div class="col-12">
        <!--SECTION Main Board Setup  -->
        <BuildingTheBoardRulesComponent />
        <!-- SECTION Getting Started -->
        <GettingStartedComponent />
        <!-- SECTION Resources -->
        <ResourceRulesComponent />
        <!-- SECTION Construction -->
        <ConstructionRulesComponent />
        <!-- SECTION Main Board Pieces -->
        <MainBoardPiecesRulesComponent />
        <!-- SECTION Ground Units -->
        <GroundUnitsRulesComponent />
        <!-- SECTION Air Units -->
        <AirUnitsRulesComponent />
        <!-- SECTION Navy Units -->
        <NavyUnitsRulesComponent />
        <!-- SECTION Combat Rules -->
        <CombatRulesComponent />
        <!-- SECTION Retreat Rules -->
        <RetreatRulesComponent />
        <!-- SECTION Navy Combat Rules -->
        <NavyCombatRulesComponent />
        <!-- SECTION Item Card Rules -->
        <ItemCardRulesComponent />
        <!-- SECTION Event Card Rules -->
        <EventCardRulesComponent />
        <!-- SECTION Structure Rules -->
        <StructureRulesComponent />
      </div>
      <div class="d-flex flex-column align-items-center text-center pb-6">
        <span class="divider-long"></span>
      </div>
    </section>
  </body>
</template>

<script setup>
// Firebase
import { useCurrentUser } from "vuefire";

// Vue
import { RouterLink } from "vue-router";
import GettingStartedComponent from "../components/Rules/GettingStartedComponent.vue";
import ResourceRulesComponent from "../components/Rules/ResourceRulesComponent.vue";
import ConstructionRulesComponent from "../components/Rules/ConstructionRulesComponent.vue";
import MainBoardPiecesRulesComponent from "../components/Rules/MainBoardPiecesRulesComponent.vue";
import GroundUnitsRulesComponent from "../components/Rules/GroundUnitsRulesComponent.vue";
import AirUnitsRulesComponent from "../components/Rules/AirUnitsRulesComponent.vue";
import NavyUnitsRulesComponent from "../components/Rules/NavyUnitsRulesComponent.vue";
import CombatRulesComponent from "../components/Rules/CombatRulesComponent.vue";
import RetreatRulesComponent from "../components/Rules/RetreatRulesComponent.vue";
import NavyCombatRulesComponent from "../components/Rules/NavyCombatRulesComponent.vue";
import ItemCardRulesComponent from "../components/Rules/ItemCardRulesComponent.vue";
import EventCardRulesComponent from "../components/Rules/EventCardRulesComponent.vue";
import StructureRulesComponent from "../components/Rules/StructureRulesComponent.vue";
import BuildingTheBoardRulesComponent from "../components/Rules/BuildingTheBoardRulesComponent.vue";

const user = useCurrentUser();

</script>

<style lang="scss" scoped>
body {
  color: #1d1d1d;
  text-shadow: #000000 2px 2px;
  color: whitesmoke;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 3px;
}

a {
  border-bottom: #1d1d1d 5px solid;
  color: black;
  text-shadow: none;
}

a:hover {
  text-decoration: underline 2px solid black;
}

a:active {
  text-decoration: underline 2px solid black;
}

nav {
  color: black;
  text-shadow: none;
  padding: .5rem;
}

.pb-6 {
  padding-bottom: 3rem;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.drop-menu {
  max-width: 275px;
}

.rules-top-btn {
  background: #0000003a;
  color: black;
}

.rules-top-btn:active {
  background: grey;
}

.nav-link,
.nav-pills {
  padding-bottom: 0%;
  padding-top: 0%;
}

.divider-long {
  background-color: #282828;
  height: 10px;
  width: 95vw;
}

@media screen and (min-width: 768px) {
  p {
    margin-left: 20%;
    margin-right: 20%;
  }

}
</style>