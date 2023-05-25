<template>
  <!-- Select Adversary Offense-->
  <div class="col-12 d-flex justify-content-center pt-5">
    <h2>Select Adversary</h2>
    <button class="rounded text-shadow-dark mx-3" data-bs-toggle="modal" data-bs-target="#missile-art-odds"
      aria-label="Unit Odds" title="Unit Odds"><span class="material-symbols-outlined fs-lg">
        casino
      </span></button>
  </div>
  <div class="col-12 d-flex justify-content-center py-2">
    <input class="mx-1 checkbox" type="checkbox" v-model="infantryMech">
    <h3>Infantry or Mech</h3>
  </div>
  <div class="col-12 d-flex justify-content-center">
    <input class="mx-1 checkbox" type="checkbox" v-model="ifvArtilleryAA">
    <h3>IFV, Artillery, or AA</h3>
  </div>
  <div class="col-12 d-flex text-center justify-content-center py-2">
    <input class="mx-1 checkbox" type="checkbox" v-model="mbt">
    <h3>MBT</h3>
  </div>
  <div class="col-12 d-flex text-center justify-content-center">
    <input class="mx-1 checkbox" type="checkbox" v-model="laserDesignator">
    <h3>Using Designator</h3>
  </div>

  <!-- Vs Infantry & Mech -->
  <div class="d-flex justify-content-center height-top">
    <div class="col-3 d-flex justify-content-center mt-5" for="infantryMech" v-if="infantryMech == true">
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

    <!-- Vs IFV, All Artillery, & AA -->
    <div class="col-3 d-flex justify-content-center mt-5" for="ifvArtilleryAA" v-if="ifvArtilleryAA == true">
      <div class="text-center" v-if="(oneTwelveDie.roll >= 1) && (oneTwelveDie.roll <= 3)">
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

    <!-- Vs MBT -->
    <div class="col-3 d-flex justify-content-center mt-5" for="mbt" v-if="mbt == true">
      <div class="text-center" v-if="(oneTwelveDie.roll >= 1) && (oneTwelveDie.roll <= 2)">
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

    <!-- With Laser Designator -->
    <div class="col-3 d-flex justify-content-center mt-5" for="laserDesignator" v-if="laserDesignator == true">
      <div class="text-center" v-if="(oneTwelveDie.roll >= 1) && (oneTwelveDie.roll <= 7)">
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

  <ModalComponent id="missile-art-odds">
    <div class="bg-light text-dark d-flex flex-column align-items-center">
      <h5 class="text-danger text-center">Missile Artillery-D12</h5>
      <h6 class="text-center">1AP, 1MP, Range of 4</h6>
      <ul>
        <li>Vs Infantry/Mech 1-4 (33%)</li>
        <li>IFV 1-3 (25%)</li>
        <li>MBT/All units in cities 1-2 (16%)</li>
        <li>With Laser Designator 1-8 (67%) Vs Everything</li>
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
    const infantryMech = ref(false);
    const ifvArtilleryAA = ref(false);
    const mbt = ref(false);
    const laserDesignator = ref(false);
    return {
      infantryMech,
      ifvArtilleryAA,
      mbt,
      laserDesignator,
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