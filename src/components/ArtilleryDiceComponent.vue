<template>
  <!-- Select Adversary Offense-->
  <div class="col-12 text-center pt-5">
    <h2>Select Adversary</h2>
  </div>
  <div class="col-12 d-flex justify-content-center gap-3">
    <div class="d-flex">
      <input id="infantry" class="mx-1 checkbox" type="checkbox" v-model="infantryMech">
      <h3>Infantry or Mech</h3>
    </div>
  </div>
  <div class="col-12 d-flex text-center justify-content-center gap-3">
    <div class="d-flex">
      <input id="ifv" class="mx-1 checkbox" type="checkbox" v-model="ifvArtilleryAA">
      <h3>IFV, Artillery, or AA</h3>
    </div>
    <div class="d-flex">
      <input id="mbt" class="mx-1 checkbox" type="checkbox" v-model="mbt">
      <h3>MBT</h3>
    </div>
  </div>

  <!-- Vs Infantry & Mech -->
  <div class="d-flex justify-content-center height-top">
    <div class="col-3 d-flex justify-content-center mt-5" for="infantry" v-if="infantryMech == true">
      <div class="text-center" v-if="(oneTwelveDie.roll >= 1) && (oneTwelveDie.roll <= 4)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5">
          <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
          <div v-if="isPending" class="spinner-border py-3" role="status">
            <span></span>
          </div>
        </button>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
      <div v-else class="text-center">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollOneTwelveDie()" class="btn p-5">
          <span v-if="!isPending" class="fs-lg">{{ oneTwelveDie.roll }}</span>
          <div v-if="isPending" class="spinner-border py-3" role="status">
            <span></span>
          </div>
        </button>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="oneTwelveDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>

    <!-- Vs IFV, All Artillery, & AA -->
    <div class="col-3 d-flex justify-content-center mt-5" for="mech" v-if="ifvArtilleryAA == true">
      <div class="text-center" v-if="(oneTwelveDie.roll >= 1) && (oneTwelveDie.roll <= 3)">
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

    <!-- Vs MBT -->
    <div class="col-3 d-flex justify-content-center mt-5" for="ifv" v-if="mbt == true">
      <div class="text-center" v-if="(oneTwelveDie.roll >= 1) && (oneTwelveDie.roll <= 2)">
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
    const infantryMech = ref(false)
    const ifvArtilleryAA = ref(false)
    const mbt = ref(false)

    return {
      infantryMech,
      ifvArtilleryAA,
      mbt,
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