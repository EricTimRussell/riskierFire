<template>
  <!-- Select Adversary Offense-->
  <div class="col-12 d-flex justify-content-center pt-5">
    <h2>Select Adversary</h2>
    <button class="rounded text-shadow-dark mx-3" data-bs-toggle="modal" data-bs-target="#mbt-odds" aria-label="Unit Odds"
      title="Unit Odds"><span class="material-symbols-outlined fs-lg">
        casino
      </span></button>
  </div>
  <div class="col-12 d-flex justify-content-center gap-3">
    <div class="d-flex">
      <input id="infantry" class="mx-1 checkbox" type="checkbox" v-model="infantry">
      <h3>Infantry</h3>
    </div>
    <div class="d-flex">
      <input id="mech" class="mx-1 checkbox" type="checkbox" v-model="mech">
      <h3>Mechanized</h3>
    </div>
  </div>
  <div class="col-12 d-flex text-center justify-content-center gap-3">
    <div class="d-flex">
      <input id="ifv" class="mx-1 checkbox" type="checkbox" v-model="ifv">
      <h3>IFV</h3>
    </div>
    <div class="d-flex">
      <input id="mbt" class="mx-1 checkbox" type="checkbox" v-model="mbt">
      <h3>MBT</h3>
    </div>
  </div>

  <!-- Vs Infantry -->
  <div class="d-flex justify-content-center height-top">
    <div class="col-3 d-flex justify-content-center mt-5" for="infantry" v-if="infantry == true">
      <div class="text-center" v-if="(twoSixDie.roll >= 7) && (twoSixDie.roll <= 12) || (twoSixDie.roll == 2)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
      <div v-else class="text-center">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>

    <!-- Vs Mech -->
    <div class="col-3 d-flex justify-content-center mt-5" for="mech" v-if="mech == true">
      <div class="text-center" v-if="(twoSixDie.roll >= 5) && (twoSixDie.roll <= 9)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
      <div class="text-center" v-else>
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>

    <!-- Vs IFV -->
    <div class="col-3 d-flex justify-content-center mt-5" for="ifv" v-if="ifv == true">
      <div class="text-center" v-if="(twoSixDie.roll >= 5) && (twoSixDie.roll <= 12)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
      <div class="text-center" v-else>
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>

    <!-- Vs MBT -->
    <div class="col-3 d-flex justify-content-center mt-5" for="mbt" v-if="mbt == true">
      <div class="text-center" v-if="(twoSixDie.roll >= 7) && (twoSixDie.roll <= 12)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
      <div class="text-center" v-else>
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>
  </div>

  <!-- Select Environment Defense-->
  <div class="col-12 text-center pt-5">
    <h2>Select Defense Environment</h2>
  </div>
  <div class="col-12 d-flex justify-content-center gap-3">
    <div class="d-flex">
      <input id="highlands" class="mx-1 checkbox" type="checkbox" v-model="highlands">
      <h3>Highlands</h3>
    </div>
    <div class="d-flex">
      <input id="grassland" class="mx-1 checkbox" type="checkbox" v-model="grassland">
      <h3>Grassland</h3>
    </div>
  </div>
  <div class="col-12 d-flex text-center justify-content-center gap-3">
    <div class="d-flex">
      <input id="forest" class="mx-1 checkbox" type="checkbox" v-model="forest">
      <h3>Forest</h3>
    </div>
    <div class="d-flex">
      <input id="desert" class="mx-1 checkbox" type="checkbox" v-model="desert">
      <h3>Desert</h3>
    </div>
  </div>
  <div class="col-12 d-flex justify-content-center gap-3">
    <input id="urban" class="mx-1 checkbox" type="checkbox" v-model="urban">
    <h3>Urban</h3>
  </div>

  <!-- Defense Dice -->
  <!-- Highlands -->
  <div class="d-flex justify-content-center height-bottom">
    <div class="col-3 d-flex justify-content-center mt-5" for="highlands" v-if="highlands == true">
      <div class="text-center" v-if="(twoSixDie.roll >= 7) && (twoSixDie.roll <= 9)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
      <div class="text-center" v-else>
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>
    <!-- Grasslands -->
    <div class="col-3 d-flex justify-content-center mt-5" for="grassland" v-if="grassland == true">
      <div class="text-center" v-if="(twoSixDie.roll >= 7) && (twoSixDie.roll <= 10)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
      <div class="text-center" v-else>
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>
    <!-- Desert -->
    <div class="col-3 d-flex justify-content-center mt-5" for="desert" v-if="desert == true">
      <div class="text-center" v-if="(twoSixDie.roll >= 7) && (twoSixDie.roll <= 10)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
      <div class="text-center" v-else>
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>
    <!-- Foreset -->
    <div class="col-3 d-flex justify-content-center mt-5" for="forest" v-if="forest == true">
      <div class="text-center" v-if="(twoSixDie.roll >= 7) && (twoSixDie.roll <= 9)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
      <div class="text-center" v-else>
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>
    <!-- Urban -->
    <div class="col-3 d-flex justify-content-center mt-5" for="urban" v-if="urban == true">
      <div class="text-center" v-if="(twoSixDie.roll >= 7) && (twoSixDie.roll <= 10)">
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
      <div class="text-center" v-else>
        <h6>Roll Dice</h6>
        <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5 dice-btn">
          <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
          <div v-if="isPending" class="fs-lg" role="status">
            <span class="dice"></span>
          </div>
        </button>
        <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
        <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
      </div>
    </div>
  </div>

  <ModalComponent id="mbt-odds">
    <div class="bg-light text-dark d-flex flex-column align-items-center">
      <h5 class="text-danger text-center">MBT: Offense-2D6</h5>
      <h6 class="text-center">2AP, 2MP, Range of 1</h6>
      <ul>
        <li>Vs Infantry: 2, 7-12 (61.1%)</li>
        <li>Vs Mech: 5-9 (66.7%)</li>
        <li>Vs IFV: 5-12 (77.8%)</li>
        <li>Vs MBT: 7-12 (58.3%) </li>
      </ul>
    </div>

    <div class="d-flex flex-column align-items-center text-dark">
      <h5 class="text-primary text-center">MBT: Deffense-2D6</h5>
      <ul>
        <li>Urban D: 7-10 (50%)</li>
        <li>Grassland/Desert D: 7-10 (50%)</li>
        <li>Forest D: 7-9 (41.7%)</li>
        <li>Highlands D: 7-9 (41.7%)</li>
      </ul>
    </div>
  </ModalComponent>
</template>

<script>
import { ref } from "vue"
import ModalComponent from "../ModalComponent.vue"

export default {
  setup() {
    const twoSixDie = ref({ roll: 0 });
    const isPending = ref(false);
    const infantry = ref(false);
    const mech = ref(false);
    const ifv = ref(false);
    const mbt = ref(false);
    const highlands = ref(false);
    const grassland = ref(false);
    const forest = ref(false);
    const desert = ref(false);
    const urban = ref(false);
    return {
      infantry,
      mech,
      ifv,
      mbt,
      highlands,
      grassland,
      forest,
      desert,
      urban,
      twoSixDie,
      isPending,
      rollTwoSixDie() {
        setTimeout(() => {
          isPending.value = false;
        }, 1000);
        twoSixDie.value = ({ roll: Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1) });
        isPending.value = true;
      },
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