<template>
  <!-- Select Adversary Offense-->
  <div class="col-12 text-center pt-5">
    <h2>Select Adversary</h2>
  </div>
  <div class="col-12 d-flex justify-content-center py-2">
    <input class="mx-1 checkbox" type="checkbox" v-model="fighter">
    <h3>Fighter</h3>
  </div>
  <div class="col-12 d-flex justify-content-center">
    <input class="mx-1 checkbox" type="checkbox" v-model="cas">
    <h3>CAS</h3>
  </div>
  <div class="col-12 d-flex text-center justify-content-center py-2">
    <input class="mx-1 checkbox" type="checkbox" v-model="ground">
    <h3>Ground</h3>
  </div>
  <div class="col-12 d-flex text-center justify-content-center py-2">
    <input class="mx-1 checkbox" type="checkbox" v-model="evade">
    <h3>Evade</h3>
  </div>

  <!-- Vs Fighter -->
  <div class="d-flex justify-content-center height-top">
    <div class="col-3 d-flex justify-content-center mt-5" for="fighter" v-if="fighter == true">
      <div class="text-center" v-if="(oneTwelveDie.roll >= 1) && (oneTwelveDie.roll <= 6)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5">
          <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
      <div v-else class="text-center">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5">
          <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>

    <!-- Vs CAS -->
    <div class="col-3 d-flex justify-content-center mt-5" for="cas" v-if="cas == true">
      <div class="text-center" v-if="(oneTwelveDie.roll >= 1) && (oneTwelveDie.roll <= 9)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5">
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
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5">
          <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>

    <!-- Vs Ground Target -->
    <div class="col-3 d-flex justify-content-center mt-5" for="ground" v-if="ground == true">
      <div class="text-center" v-if="(oneTwelveDie.roll >= 1) && (oneTwelveDie.roll <= 4)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5">
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
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5">
          <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>

    <!-- Evade -->
    <div class="col-3 d-flex justify-content-center mt-5" for="evade" v-if="evade == true">
      <div class="text-center" v-if="(oneTwelveDie.roll >= 1) && (oneTwelveDie.roll <= 4)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5">
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
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5">
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
</template>

<script>
import { ref } from "vue"

export default {
  setup() {
    const oneTwelveDie = ref({ roll: 0 });

    const isPending = ref(false)
    const fighter = ref(false)
    const cas = ref(false)
    const ground = ref(false)
    const evade = ref(false)
    return {
      fighter,
      cas,
      ground,
      evade,
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

h2 {
  text-decoration: underline 2px solid;
}
</style>