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
  <ModalComponent id="fighter-odds">
    <div class="bg-light d-flex flex-column align-items-center text-dark">
      <h5 class="text-danger text-center">Fighter Aircraft-D12</h5>
      <h6 class="text-center">1AP, 4MP, Range of 1</h6>
      <ul>
        <li>1-4 (33%) on all ground targets</li>
        <li>Vs Figher 1-6 (50%)</li>
        <li>Vs CAS 1-9 (75%)</li>
        <li>Evade 1-4 (33%)</li>
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
    const fighter = ref(false);
    const cas = ref(false);
    const ground = ref(false);
    const evade = ref(false);
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