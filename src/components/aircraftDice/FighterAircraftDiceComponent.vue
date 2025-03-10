<template>
  <!-- Select Adversary Offense-->
  <div class="col-12 d-flex justify-content-center pt-5">
    <h2>Select Adversary</h2>
    <button class="rounded text-shadow-dark mx-3" data-bs-toggle="modal" data-bs-target="#fighter-odds"
      aria-label="Unit Odds" title="Unit Odds"><span class="material-symbols-outlined fs-lg">
        casino
      </span></button>
  </div>
  <div class="col-12 d-flex justify-content-center py-2">
    <input class="mx-1 checkbox" type="checkbox" v-model="fighter" :disabled="cas || ground || evade">
    <h3>Fighter</h3>
  </div>
  <div class="col-12 d-flex justify-content-center">
    <input class="mx-1 checkbox" type="checkbox" v-model="cas" :disabled="fighter || ground || evade">
    <h3>CAS</h3>
  </div>
  <div class="col-12 d-flex text-center justify-content-center py-2">
    <input class="mx-1 checkbox" type="checkbox" v-model="ground" :disabled="cas || fighter || evade">
    <h3>Ground</h3>
  </div>
  <div class="col-12 d-flex text-center justify-content-center py-2">
    <input class="mx-1 checkbox" type="checkbox" v-model="evade" :disabled="cas || ground || fighter">
    <h3>Evade</h3>
  </div>

  <!-- dice section -->
  <div class="d-flex justify-content-center height-top">
    <div class="col-3 d-flex justify-content-center mt-5" v-if="ground || cas || evade || fighter">
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
const fighter = ref(false)
const cas = ref(false)
const ground = ref(false)
const evade = ref(false)
const success = ref(false)

function defensiveAndOffenseDie() {
  // isPending simulates dice roll
  setTimeout(() => {
    isPending.value = false;
  }, 1000);
  // one random number between 1-12 are chosen
  oneTwelveDie.value = ({ roll: Math.floor(Math.random() * 12 + 1) });
  isPending.value = true;
  // vs fighter
  if (fighter.value === true) {
    if ([1, 2, 3, 4, 5, 6].includes(oneTwelveDie.value.roll)) {
      success.value = true
    } else {
      success.value = false
    }
  }
  // vs cas
  if (cas.value === true) {
    if ([1, 2, 3, 4, 5, 6, 7, 8, 9].includes(oneTwelveDie.value.roll)) {
      success.value = true
    } else {
      success.value = false
    }
  }
  // vs ground
  if (ground.value === true) {
    if ([1, 2, 3, 4].includes(oneTwelveDie.value.roll)) {
      success.value = true
    } else {
      success.value = false
    }
  }
  // evade
  if (evade.value === true) {
    if ([1, 2, 3, 4].includes(oneTwelveDie.value.roll)) {
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