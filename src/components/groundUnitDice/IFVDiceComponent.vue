<template>
  <!-- Select Adversary Offense-->
  <div class="pt-5 height-top">
    <div class="col-12 d-flex justify-content-center pt-5">
      <h2>Select Adversary</h2>
      <button class="rounded text-shadow-dark mx-3" data-bs-toggle="modal" data-bs-target="#ifv-odds"
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
        <input id="ifv" class="mx-1 checkbox" type="checkbox" v-model="ifv" :disabled="infantry || mech || mbt">
        <h3>IFV</h3>
      </div>
      <div class="d-flex">
        <input id="mbt" class="mx-1 checkbox" type="checkbox" v-model="mbt" :disabled="infantry || ifv || mech">
        <h3>MBT</h3>
      </div>
    </div>
    <!-- Offensive Die -->
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
          <h3 v-if="!isPending && twoSixDie.roll > 0" class="text-center pt-3"
            :class="{ 'text-success': success, 'text-danger': !success }">
            {{ success ? 'Success' : 'Failure' }}
          </h3>
          <h3 v-if="isPending && twoSixDie.roll > 0" class="text-center pt-3">Rolling...</h3>
        </div>
      </div>
    </div>
  </div>

  <!-- Select Defense Environment-->
  <div class="height-bottom">
    <div class="col-12 text-center pt-5">
      <h2>Select Defense Environment</h2>
    </div>
    <div class="col-12 d-flex justify-content-center gap-3">
      <div class="d-flex">
        <input id="highlands" class="mx-1 checkbox" type="checkbox" v-model="highlands"
          :disabled="grassland || forest || desert || marshland || jungle || urban">
        <h3>Highlands</h3>
      </div>
      <div class="d-flex">
        <input id="grassland" class="mx-1 checkbox" type="checkbox" v-model="grassland"
          :disabled="highlands || forest || desert || marshland || jungle || urban">
        <h3>Grassland</h3>
      </div>
    </div>
    <div class="col-12 d-flex text-center justify-content-center gap-3">
      <div class="d-flex">
        <input id="forest" class="mx-1 checkbox" type="checkbox" v-model="forest"
          :disabled="grassland || highlands || desert || marshland || jungle || urban">
        <h3>Forest</h3>
      </div>
      <div class="d-flex">
        <input id="desert" class="mx-1 checkbox" type="checkbox" v-model="desert"
          :disabled="grassland || forest || highlands || marshland || jungle || urban">
        <h3>Desert</h3>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center gap-3">
      <div class="d-flex">
        <input id="marshland" class="mx-1 checkbox" type="checkbox" v-model="marshland"
          :disabled="grassland || forest || desert || highlands || jungle || urban">
        <h3>Marshland</h3>
      </div>
      <div class="d-flex">
        <input id="jungle" class="mx-1 checkbox" type="checkbox" v-model="jungle"
          :disabled="grassland || forest || desert || marshland || highlands || urban">
        <h3>Jungle</h3>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center gap-3">
      <input id="urban" class="mx-1 checkbox" type="checkbox" v-model="urban"
        :disabled="grassland || forest || desert || marshland || jungle || highlands">
      <h3>Urban</h3>
    </div>

    <!-- Defensive Die -->
    <div class="d-flex justify-content-center height-bottom">
      <div class="col-3 d-flex justify-content-center mt-5"
        v-if="highlands || grassland || marshland || urban || desert || forest || jungle">
        <div class="text-center">
          <h6>Roll Dice</h6>
          <button :disabled="isPending" type="button" @click="defensiveDie()" class="btn p-5 dice-btn">
            <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
            <div v-if="isPending" class="fs-lg" role="status">
              <span class="dice"></span>
            </div>
          </button>
          <h3 v-if="!isPending && twoSixDie.roll > 0" class="text-center pt-3"
            :class="{ 'text-success': success, 'text-danger': !success }">
            {{ success ? 'Success' : 'Failure' }}
          </h3>
          <h3 v-if="isPending && twoSixDie.roll > 0" class="text-center pt-3">Rolling...</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const twoSixDie = ref({ roll: 0 })
const isPending = ref(false)
const infantry = ref(false)
const mech = ref(false)
const ifv = ref(false)
const mbt = ref(false)
const highlands = ref(false)
const grassland = ref(false)
const forest = ref(false)
const desert = ref(false)
const jungle = ref(false)
const marshland = ref(false)
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
  if (infantry.value) {
    success.value = [5, 6, 7, 8, 9, 10, 11, 12].includes(twoSixDie.value.roll);
    // vs mech
  } else if (mech.value) {
    success.value = [5, 6, 7, 8, 9].includes(twoSixDie.value.roll);
    // vs ifv
  } else if (ifv.value) {
    success.value = [7, 8, 9, 10, 11].includes(twoSixDie.value.roll);
    // vs mbt
  } else if (mbt.value) {
    success.value = [7, 8].includes(twoSixDie.value.roll);
  } else {
    success.value = false;
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
  // highlands
  if (highlands.value) {
    success.value = [7, 8, 9, 10].includes(twoSixDie.value.roll);
    // marshland
  } else if (marshland.value) {
    success.value = [7, 8].includes(twoSixDie.value.roll);
    // jungle/forest
  } else if (jungle.value || forest.value) {
    success.value = [7, 8, 9].includes(twoSixDie.value.roll);
    // desert/grassland
  } else if (desert.value || grassland.value) {
    success.value = [5, 6, 7, 8].includes(twoSixDie.value.roll);
    // urban
  } else if (urban.value) {
    success.value = [7, 8, 9, 10].includes(twoSixDie.value.roll);
  } else {
    success.value = false;
  }
}

</script>

<style lang="scss" scoped>
input.checkbox {
  width: 20px;
  height: 20px;
}

// prevents bg-image from jumping around 
.height-top {
  min-height: 70vh;
}

.height-bottom {
  min-height: 80vh;
}

h2 {
  text-decoration: underline 2px solid;
}
</style>