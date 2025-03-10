<template>
  <!-- Select Adversary Offense-->
  <div class="col-12 d-flex justify-content-center pt-5">
    <h2>Select Adversary</h2>
    <button class="rounded text-shadow-dark mx-3" data-bs-toggle="modal" data-bs-target="#sf-odds"
      aria-label="Unit Odds" title="Unit Odds"><span class="material-symbols-outlined fs-lg">
        casino
      </span></button>
  </div>
  <div class="col-12 d-flex justify-content-center gap-3">
    <div class="d-flex">
      <input id="infantry" class="mx-1 checkbox" type="checkbox" v-model="infantry" :disabled="mech || ifv || mbt">
      <h3>Infantry</h3>
    </div>
    <div class="d-flex">
      <input id="mech" class="mx-1 checkbox" type="checkbox" v-model="mech" :disabled="infantry || ifv || mbt">
      <h3>Mechanized</h3>
    </div>
  </div>
  <div class="col-12 d-flex text-center justify-content-center gap-3">
    <div class="d-flex">
      <input id="ifv" class="mx-1 checkbox" type="checkbox" v-model="ifv" :disabled="mech || infantry || mbt">
      <h3>IFV</h3>
    </div>
    <div class="d-flex">
      <input id="mbt" class="mx-1 checkbox" type="checkbox" v-model="mbt" :disabled="mech || ifv || infantry">
      <h3>MBT</h3>
    </div>
  </div>

  <!-- offensive die -->
  <div class="d-flex justify-content-center height-top">
    <div class="col-3 d-flex justify-content-center mt-5" v-if="infantry || mech || ifv || mbt">
      <div class="text-center">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="offensiveDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>
  </div>

  <!-- Select Environment Defense-->
  <div class="col-12 text-center pt-5">
    <h2>Select Defense Environment</h2>
  </div>
  <div class="col-12 d-flex justify-content-center">
    <div class="d-flex gap-3">
      <input id="highlands" class="mx-1 checkbox" type="checkbox" v-model="allEnvironments" :disabled="urban">
      <h3>All Environments</h3>
      <input id="urban" class="mx-1 checkbox" type="checkbox" v-model="urban" :disabled="allEnvironments">
      <h3>Urban</h3>
    </div>
  </div>
  <!-- Defense Dice -->
  <div class="d-flex justify-content-center height-bottom">
    <div class="col-3 d-flex justify-content-center mt-5" v-if="urban || allEnvironments">
      <div class="text-center">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="defensiveDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const twoSixDie = ref({ roll: 0 })
const isPending = ref(false)
const infantry = ref(false)
const mech = ref(false)
const ifv = ref(false)
const mbt = ref(false)
const allEnvironments = ref(false)
const urban = ref(false)
const success = ref(false)

function offensiveDie() {
  // isPending simulates dice roll
  setTimeout(() => {
    isPending.value = false;
  }, 1000);
  // two random numbers between 1-6 are chosen and added together
  twoSixDie.value = ({ roll: Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1) });
  isPending.value = true;
  // vs infantry
  if (infantry.value === true) {
    if ([5, 6, 7, 8, 11, 12].includes(twoSixDie.value.roll)) {
      success.value = true
    } else {
      success.value = false
    }
  }
  // vs mech
  if (mech.value === true) {
    if ([7, 8, 9, 10, 11, 12].includes(twoSixDie.value.roll)) {
      success.value = true
    } else {
      success.value = false
    }
  }
  // vs ifv
  if (ifv.value === true) {
    if ([7, 8, 11, 12].includes(twoSixDie.value.roll)) {
      success.value = true
    } else {
      success.value = false
    }
  }
  // vs mbt
  if (mbt.value === true) {
    if ([7, 8, 9, 10, 11, 12].includes(twoSixDie.value.roll)) {
      success.value = true
    } else {
      success.value = false
    }
  }
}

function defensiveDie() {
  // isPending simulates dice roll
  setTimeout(() => {
    isPending.value = false;
  }, 1000);
  // two random numbers between 1-6 are chosen and added together
  twoSixDie.value = ({ roll: Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1) });
  isPending.value = true;
  // all other environments
  if (allEnvironments.value === true) {
    if ([7, 8, 9].includes(twoSixDie.value.roll)) {
      success.value = true
    } else {
      success.value = false
    }
  }
  // urban
  if (urban.value === true) {
    if ([5, 6, 7, 8, 9].includes(twoSixDie.value.roll)) {
      success.value = true
    } else {
      success.value = false
    }
  }
}

function rollTwoSixDie() {
  setTimeout(() => {
    isPending.value = false
  }, 1000)
  twoSixDie.value = ({ roll: Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1) })
  isPending.value = true
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