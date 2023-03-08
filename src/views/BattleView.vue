<template>
  <body class="container-fluid">
    <section class="row">
      <div class="col-12 d-flex justify-content-center bg-green elevation-5 py-3 my-5 text-light gap-3">
        <span class="material-symbols-outlined fs-xl">
          swords
        </span>
        <h1>Battle Page</h1>
        <span class="material-symbols-outlined fs-xl">
          swords
        </span>
      </div>
    </section>
    <section class="row justify-content-center">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item bg-glass">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed fs-xl" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Infantry
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body row justify-content-center">
              <InfantryDiceComponent />
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item bg-glass">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button class="accordion-button collapsed fs-xl" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Sepcial Forces
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample">
          <div class="accordion-body row justify-content-center">
            <!-- body -->
          </div>
        </div>
      </div>
      <div class="accordion-item bg-glass">
        <h2 class="accordion-header" id="flush-headingThree">
          <button class="accordion-button collapsed fs-xl" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Mechanized
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample">
          <div class="accordion-body row justify-content-center">
            <!-- body -->
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
  components: { InfantryDiceComponent }
}

</script>

<style lang="scss" scoped></style>