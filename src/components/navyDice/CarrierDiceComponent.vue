<template>
  <!-- Select Adversary Offense-->
  <div class="col-12 d-flex justify-content-center pt-5">
    <h2>Select Adversary</h2>
    <button class="rounded text-shadow-dark mx-3" data-bs-toggle="modal" data-bs-target="#carrier-odds"
      aria-label="Unit Odds" title="Unit Odds"><span class="material-symbols-outlined fs-lg">
        casino
      </span></button>
  </div>
  <div class="col-12 d-flex justify-content-center gap-3">
    <div class="d-flex">
      <input class="mx-1 checkbox" type="checkbox" v-model="aircraft" :disabled="missile || pointDefense || hyperSonic">
      <h3>Aircraft</h3>
    </div>
    <div class="d-flex">
      <input class="mx-1 checkbox" type="checkbox" v-model="missile" :disabled="aircraft || pointDefense || hyperSonic">
      <h3>Missile</h3>
    </div>
  </div>
  <div class="col-12 d-flex text-center justify-content-center gap-3">
    <div class="d-flex">
      <input class="mx-1 checkbox" type="checkbox" v-model="hyperSonic" :disabled="missile || aircraft || pointDefense">
      <h3>Hypersonic Defense</h3>
    </div>
    <div class="d-flex">
      <input class="mx-1 checkbox" type="checkbox" v-model="pointDefense" :disabled="missile || aircraft || hyperSonic">
      <h3>Point Defense</h3>
    </div>
  </div>

  <!-- dice section-->
  <div class="height-bottom">
    <div class="d-flex justify-content-center">
      <div class="col-3 d-flex justify-content-center mt-5" v-if="aircraft || missile || hyperSonic || pointDefense">
        <div class="text-center">
          <h6>Roll Dice</h6>
          <button :disabled="isPending" type="button" @click="defensiveDie()" class="btn p-5 dice-btn">
            <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
            <div v-if="isPending" class="fs-lg" role="status">
              <span class="dice"></span>
            </div>
          </button>
          <h3 v-show="(!isPending)" v-if="(success == true)" class="text-center pt-3 text-success">Success</h3>
          <h3 v-show="(!isPending)" v-if="(success == false)" class="text-center pt-3 text-danger">Fail</h3>
          <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const oneTwelveDie = ref({ roll: 0 })
const isPending = ref(false)
const aircraft = ref(false)
const missile = ref(false)
const pointDefense = ref(false)
const hyperSonic = ref(false)
const success = ref(false)

function defensiveDie() {
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
  // vs missile
  if (missile.value === true) {
    if ([1, 2, 3, 4, 5].includes(oneTwelveDie.value.roll)) {
      success.value = true
    } else {
      success.value = false
    }
  }
  // if player has point defense
  if (pointDefense.value === true) {
    if ([1, 2, 3, 4, 5, 6, 7, 8].includes(oneTwelveDie.value.roll)) {
      success.value = true
    } else {
      success.value = false
    }
  }
  // vs hyper sonic missiles
  if (hyperSonic.value === true) {
    if ([1, 2, 3, 4, 5].includes(oneTwelveDie.value.roll)) {
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

// prevents from jumping around when checking box
.height-bottom {
  min-height: 30vh;
}

h2 {
  text-decoration: underline 2px solid;
}
</style>