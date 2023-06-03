<template>
  <!-- Select Adversary Offense-->
  <div class="col-12 d-flex justify-content-center pt-5">
    <h2>Select Adversary</h2>
    <button class="rounded text-shadow-dark mx-3" data-bs-toggle="modal" data-bs-target="#destroyer-odds"
      aria-label="Unit Odds" title="Unit Odds"><span class="material-symbols-outlined fs-lg">
        casino
      </span></button>
  </div>
  <div class="col-12 d-flex justify-content-center">
    <input class="mx-1 checkbox" type="checkbox" v-model="carrier">
    <h3>Carrier</h3>
  </div>
  <div class="col-12 d-flex text-center justify-content-center py-2">
    <input class="mx-1 checkbox" type="checkbox" v-model="cruiser">
    <h3>Cruiser</h3>
  </div>
  <div class="col-12 d-flex text-center justify-content-center">
    <input class="mx-1 checkbox" type="checkbox" v-model="destroyer">
    <h3>Destroyer</h3>
  </div>
  <div class="col-12 d-flex text-center justify-content-center pt-2">
    <input class="mx-1 checkbox" type="checkbox" v-model="deflect">
    <h3>Deflect</h3>
  </div>

  <!-- Vs Carrier -->
  <div class="d-flex justify-content-center height-top">
    <div class="col-3 d-flex justify-content-center mt-5" for="carrier" v-if="carrier == true">
      <div class="text-center" v-if="(oneTwelveDie.roll >= 1) && (oneTwelveDie.roll <= 9)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
      <div class="text-center" v-else>
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>

    <!-- Vs Cruiser -->
    <div class="col-3 d-flex justify-content-center mt-5" for="cruiser" v-if="cruiser == true">
      <div class="text-center" v-if="(oneTwelveDie.roll >= 1) && (oneTwelveDie.roll <= 8)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
      <div class="text-center" v-else>
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>

    <!-- Vs Destroyer -->
    <div class="col-3 d-flex justify-content-center mt-5" for="destroyer" v-if="destroyer == true">
      <div class="text-center" v-if="(oneTwelveDie.roll >= 1) && (oneTwelveDie.roll <= 6)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
      <div class="text-center" v-else>
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>

    <!-- Defelct -->
    <div class="col-3 d-flex justify-content-center mt-5" for="deflect" v-if="deflect == true">
      <div class="text-center" v-if="(oneTwelveDie.roll >= 1) && (oneTwelveDie.roll <= 5)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
      <div class="text-center" v-else>
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>

  </div>
  <ModalComponent id="destroyer-odds">
    <div class="bg-light text-dark d-flex flex-column align-items-center">
      <h5 class="text-danger text-center">Destroyer-D12</h5>
      <h6 class="text-center">2AP, 2MP, 1 tile range</h6>
      <ul>
        <li>Vs Cruiser 1-8 (66%)</li>
        <li>Vs Carrier 1-9 (75%)</li>
        <li>Vs Destroyer 1-6 (50%)</li>
        <li>Vs land follow artillery rules</li>
        <li>Armor deflection D12 1-5 (42%)</li>
      </ul>
    </div>
  </ModalComponent>
</template>

<script>
import { ref } from "vue"
import ModalComponent from "../ModalComponent.vue";

export default {
  setup() {
    const oneTwelveDie = ref({ roll: 0 });
    const isPending = ref(false);
    const carrier = ref(false);
    const cruiser = ref(false);
    const destroyer = ref(false);
    const deflect = ref(false);
    return {
      carrier,
      cruiser,
      destroyer,
      deflect,
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
  components: { ModalComponent }
}
</script>

<style lang="scss" scoped>
input.checkbox {
  width: 20px;
  height: 20px;
}

.height-top {
  min-height: 45vh;
}

.height-bottom {
  min-height: 45vh;
}

h2 {
  text-decoration: underline 2px solid;
}
</style>