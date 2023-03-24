<template>
  <body class="container-fluid">
    <!-- Ground Unit Dice -->
    <section class="row justify-content-center">
      <div class="col-12 d-flex justify-content-center bg-green elevation-5 mt-5 py-3 text-light gap-3">
        <span class="material-symbols-outlined fs-xl">
          swords
        </span>
        <h1>Land Units</h1>
        <span class="material-symbols-outlined fs-xl">
          swords
        </span>
      </div>
      <div class="accordion">
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
      </div>
    </section>
    <!-- Air Unit Dice -->
    <section class="row justify-content-center">
      <div class="col-12 d-flex justify-content-center bg-green elevation-5 mt-5 py-3 text-light gap-3">
        <span class="material-symbols-outlined fs-xl">
          flight
        </span>
        <h1>Air Units</h1>
        <span class="material-symbols-outlined fs-xl">
          flight
        </span>
      </div>
      <div class="accordion">
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
              <!-- Fighter Component -->
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
              <!-- CAS component -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navy Unit Dice -->
    <section class="row justify-content-center">
      <div class="col-12 d-flex justify-content-center bg-green elevation-5 mt-5 py-3 text-light gap-3">
        <span class="material-symbols-outlined fs-xl">
          directions_boat
        </span>
        <h1>Naval Units</h1>
        <span class="material-symbols-outlined fs-xl">
          directions_boat
        </span>
      </div>
      <div class="accordion">
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
              <!-- Carrier Component -->
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
              <!-- Cruiser component -->
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
              <!-- Destroyer component -->
            </div>
          </div>
        </div>
      </div>
    </section>





    <!-- <div class="col-12 d-flex justify-content-center">
      <div v-if="(twoSixDie.roll >= 5) && (twoSixDie.roll <= 7)">
        <h1>Two D6's</h1>
        <button @click="rollTwoSixDie()" class="btn p-5">Roll <span>{{ twoSixDie.roll }}</span></button>
        <h1 v-show="twoSixDie.roll > 0" class="text-center">HIT</h1>
      </div>
      <div v-else>
        <h1>Two D6's</h1>
        <button @click="rollTwoSixDie()" class="btn p-5">Roll <span>{{ twoSixDie.roll }}</span></button>
        <h1 v-show="twoSixDie.roll > 0" class="text-center">MISS</h1>
      </div>
    </div>

    <div class="col-12 d-flex justify-content-center pt-5">
      <div v-if="(oneTwelveDie.roll >= 5) && (oneTwelveDie.roll <= 7)">
        <h1>One D12</h1>
        <button @click="rollOneTwelveDie()" class="btn p-5">Roll <span>{{ oneTwelveDie.roll }}</span></button>
        <h1 v-show="oneTwelveDie.roll > 0" class="text-center">HIT</h1>
      </div>
      <div v-else>
        <h1>One D12</h1>
        <button @click="rollOneTwelveDie()" class="btn p-5">Roll <span>{{ oneTwelveDie.roll }}</span></button>
        <h1 v-show="oneTwelveDie.roll > 0" class="text-center">MISS</h1>
      </div>
    </div> -->
  </body>
</template>

<script>
import { ref } from "vue";
import InfantryDiceComponent from "../components/InfantryDiceComponent.vue";
import MechanizedDiceComponent from "../components/MechanizedDiceComponent.vue";
import SpecialForcesDiceComponent from "../components/SpecialForcesDiceComponent.vue";
import IFVDiceComponent from "../components/IFVDiceComponent.vue";
import MBTDiceComponent from "../components/MBTDiceComponent.vue";

export default {
  setup() {
    const twoSixDie = ref({ roll: 0 });
    const oneTwelveDie = ref({ roll: 0 });
    const isPending = ref(false);
    const infantry = ref(false);
    const mech = ref(false);
    const ifv = ref(false);
    const mbt = ref(false);
    const highlands = ref(false);
    const grassland = ref(false);
    const forest = ref(false);
    const desert = ref(false);
    const jungle = ref(false);
    const marshland = ref(false);
    const urban = ref(false);
    return {
      infantry,
      mech,
      ifv,
      mbt,
      highlands,
      grassland,
      forest,
      desert,
      jungle,
      marshland,
      urban,
      twoSixDie,
      oneTwelveDie,
      isPending,
      rollTwoSixDie() {
        setTimeout(() => {
          isPending.value = false;
        }, 1000);
        twoSixDie.value = ({ roll: Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1) });
        isPending.value = true;
      },
      rollOneTwelveDie() {
        setTimeout(() => {
          isPending.value = false;
        }, 1000);
        oneTwelveDie.value = ({ roll: Math.floor(Math.random() * 12 + 1) });
        isPending.value = true;
      }
    };
  },
  components: { InfantryDiceComponent, SpecialForcesDiceComponent, MechanizedDiceComponent, IFVDiceComponent, MBTDiceComponent }
}

</script>

<style lang="scss" scoped></style>