<template>
  <!-- Select Adversary Offense-->
  <div class="col-12 d-flex justify-content-center pt-5">
    <h2>Select Adversary</h2>
    <button class="rounded text-shadow-dark mx-3" data-bs-toggle="modal" data-bs-target="#cruiser-odds"
      aria-label="Unit Odds" title="Unit Odds"><span class="material-symbols-outlined fs-lg">
        casino
      </span></button>
  </div>
  <div class="col-12 d-flex justify-content-center py-2">
    <input class="mx-1 checkbox" type="checkbox" v-model="aircraft" :disabled="ship">
    <h3>Aircraft</h3>
  </div>
  <div class="col-12 d-flex text-center justify-content-center">
    <input class="mx-1 checkbox" type="checkbox" v-model="ship" :disabled="aircraft">
    <h3>Ship</h3>
  </div>

  <!-- dice section -->
  <div class="d-flex justify-content-center height-top">
    <div class="col-3 d-flex justify-content-center mt-5" v-if="ship || aircraft">
      <div class="text-center">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="defensiveAndOffenseDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="(!isPending)" v-if="(success === true)" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="(!isPending)" v-if="(success === false)" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const oneTwelveDie = ref({ roll: 0 })
const isPending = ref(false)
const aircraft = ref(false)
const ship = ref(false)
const success = ref(false)

function defensiveAndOffenseDie() {
  // isPending simulates dice roll
  setTimeout(() => {
    isPending.value = false;
  }, 1000);
  // one random number between 1-12 are chosen
  oneTwelveDie.value = ({ roll: Math.floor(Math.random() * 12 + 1) });
  isPending.value = true;
  // vs aircraft
  if (aircraft.value === true) {
    if ([1, 2, 3, 4, 5, 6, 7].includes(oneTwelveDie.value.roll)) {
      success.value = true
    } else {
      success.value = false
    }
  }
  // vs ship
  if (ship.value === true) {
    if ([1, 2, 3, 4, 5, 6, 7, 8].includes(oneTwelveDie.value.roll)) {
      success.value = true
    } else {
      success.value = false
    }
  }
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