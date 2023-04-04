<template>
  <!-- Select Adversary Offense-->
  <div class="col-12 text-center pt-5">
    <h2>Select Adversary</h2>
  </div>
  <div class="col-12 d-flex justify-content-center py-2">
    <input class="mx-1 checkbox" type="checkbox" v-model="aircraft">
    <h3>Aircraft</h3>
  </div>
  <div class="col-12 d-flex text-center justify-content-center">
    <input class="mx-1 checkbox" type="checkbox" v-model="ship">
    <h3>Ship</h3>
  </div>

  <!-- Vs Aircraft -->
  <div class="d-flex justify-content-center height-top">
    <div class="col-3 d-flex justify-content-center mt-5" for="aircraft" v-if="aircraft == true">
      <div class="text-center" v-if="(oneTwelveDie.roll >= 1) && (oneTwelveDie.roll <= 6)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5">
          <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
          <div v-if="isPending" class="spinner-border py-4" role="status">
            <span></span>
          </div>
        </button>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
      <div class="text-center" v-else>
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5">
          <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
          <div v-if="isPending" class="spinner-border py-4" role="status">
            <span></span>
          </div>
        </button>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>

    <!-- Vs Ship -->
    <div class="col-3 d-flex justify-content-center mt-5" for="ship" v-if="ship == true">
      <div class="text-center" v-if="(oneTwelveDie.roll >= 1) && (oneTwelveDie.roll <= 8)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5">
          <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
          <div v-if="isPending" class="spinner-border py-4" role="status">
            <span></span>
          </div>
        </button>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
      <div class="text-center" v-else>
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5">
          <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
          <div v-if="isPending" class="spinner-border py-4" role="status">
            <span></span>
          </div>
        </button>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>

  </div>
</template>

<script>
import { ref } from "vue"

export default {
  setup() {
    const oneTwelveDie = ref({ roll: 0 });
    const isPending = ref(false)
    const aircraft = ref(false)
    const ship = ref(false)
    return {
      aircraft,
      ship,
      oneTwelveDie,
      isPending,
      rollOneTwelveDie() {
        setTimeout(() => {
          isPending.value = false;
        }, 1000);
        oneTwelveDie.value = ({ roll: Math.floor(Math.random() * 12 + 1) });
        isPending.value = true;
      }
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
</style>