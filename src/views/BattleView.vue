<template>
  <body class="container-fluid">
    <section class="row">
      <div class="col-12 d-flex justify-content-center bg-green elevation-5 py-3 my-5 text-light gap-3">
        <span class="material-symbols-outlined fs-xl">
          swords
        </span>
        <h1>Combat Page</h1>
        <span class="material-symbols-outlined fs-xl">
          swords
        </span>
      </div>
    </section>
    <!-- Infantry -->
    <section class="row justify-content-center">
      <div class="accordion">
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
  components: { InfantryDiceComponent, SpecialForcesDiceComponent, MechanizedDiceComponent, IFVDiceComponent }
}

</script>

<style lang="scss" scoped></style>