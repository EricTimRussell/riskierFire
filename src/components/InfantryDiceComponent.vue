<template>
  <!-- Select Adversary Offense-->
  <div class="pt-5 height-top">
    <div class="col-12 text-center">
      <h2>Select Adversary</h2>
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
    <div class="d-flex justify-content-center">
      <div class="col-3 d-flex justify-content-center mt-5" for="infantry" v-if="infantry == true">
        <div class="text-center" v-if="(twoSixDie.roll >= 5) && (twoSixDie.roll <= 8)">
          <h6>Roll Dice</h6>
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
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
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
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
        <div class="text-center" v-if="(twoSixDie.roll >= 7) && (twoSixDie.roll <= 10)">
          <h6>Roll Dice</h6>
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
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
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
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
        <div class="text-center" v-if="(twoSixDie.roll >= 7) && (twoSixDie.roll <= 8)">
          <h6>Roll Dice</h6>
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
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
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
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
      <div class="col-3 d-flex justify-content-center mt-5" for="mbt" v-if="(mbt == true) && (javelin == false)">
        <div class="text-center" v-if="(twoSixDie.roll >= 7) && (twoSixDie.roll <= 10)">
          <div class="d-flex">
            <input v-if="mbt" id="javelin" class="mx-1 checkbox" type="checkbox" v-model="javelin">
            <h3 v-if="mbt">Javelins?</h3>
          </div>
          <h6>Roll Dice</h6>
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
            <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
            <div v-if="isPending" class="fs-lg" role="status">
              <span class="dice"></span>
            </div>
          </button>
          <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
          <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
        </div>
        <div class="text-center" v-else>
          <div class="d-flex">
            <input v-if="mbt" id="javelin" class="mx-1 checkbox" type="checkbox" v-model="javelin">
            <h3 v-if="mbt">Javelins?</h3>
          </div>
          <h6>Roll Dice</h6>
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
            <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
            <div v-if="isPending" class="fs-lg" role="status">
              <span class="dice"></span>
            </div>
          </button>
          <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
          <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
        </div>
      </div>

      <!-- Vs MBT with Javelin Item -->
      <div class="col-3 d-flex justify-content-center mt-5" for="mbt" v-if="(mbt == true) && (javelin == true)">
        <div class="text-center" v-if="(twoSixDie.roll >= 7) && (twoSixDie.roll <= 12)">
          <div class="d-flex">
            <input v-if="mbt" id="javelin" class="mx-1 checkbox" type="checkbox" v-model="javelin">
            <h3 v-if="mbt">Javelins?</h3>
          </div>
          <h6>Roll Dice</h6>
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
            <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
            <div v-if="isPending" class="fs-lg" role="status">
              <span class="dice"></span>
            </div>
          </button>
          <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-success">Success</h3>
          <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
        </div>
        <div class="text-center" v-else>
          <div class="d-flex">
            <input v-if="mbt" id="javelin" class="mx-1 checkbox" type="checkbox" v-model="javelin">
            <h3 v-if="mbt">Javelins?</h3>
          </div>
          <h6>Roll Dice</h6>
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
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
  </div>

  <!-- Select Environment Defense-->
  <div class="height-bottom">
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
      <div class="d-flex">
        <input id="marshland" class="mx-1 checkbox" type="checkbox" v-model="marshland">
        <h3>Marshland</h3>
      </div>
      <div class="d-flex">
        <input id="jungle" class="mx-1 checkbox" type="checkbox" v-model="jungle">
        <h3>Jungle</h3>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center gap-3">
      <input id="urban" class="mx-1 checkbox" type="checkbox" v-model="urban">
      <h3>Urban</h3>
    </div>

    <!-- Defense Dice -->
    <!-- Highlands -->
    <div class="d-flex justify-content-center">
      <div class="col-3 d-flex justify-content-center mt-5" for="highlands" v-if="highlands == true">
        <div class="text-center" v-if="(twoSixDie.roll >= 7) && (twoSixDie.roll <= 12)">
          <h6>Roll Dice</h6>
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
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
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
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
        <div class="text-center" v-if="(twoSixDie.roll >= 7) && (twoSixDie.roll <= 9)">
          <h6>Roll Dice</h6>
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
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
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
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
        <div class="text-center" v-if="(twoSixDie.roll >= 7) && (twoSixDie.roll <= 9)">
          <h6>Roll Dice</h6>
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
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
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
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
        <div class="text-center" v-if="(twoSixDie.roll >= 5) && (twoSixDie.roll <= 9)">
          <h6>Roll Dice</h6>
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
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
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
            <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
            <div v-if="isPending" class="fs-lg" role="status">
              <span class="dice"></span>
            </div>
          </button>
          <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
          <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
        </div>
      </div>

      <!-- Jungle -->
      <div class="col-3 d-flex justify-content-center mt-5" for="jungle" v-if="jungle == true">
        <div class="text-center" v-if="(twoSixDie.roll >= 5) && (twoSixDie.roll <= 9)">
          <h6>Roll Dice</h6>
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
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
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
            <span v-if="!isPending" class="fs-lg">{{ twoSixDie.roll }}</span>
            <div v-if="isPending" class="fs-lg" role="status">
              <span class="dice"></span>
            </div>
          </button>
          <h3 v-show="twoSixDie.roll > 0" v-if="!isPending" class="text-center pt-3 text-danger">Fail</h3>
          <h3 v-show="twoSixDie.roll > 0" v-if="isPending" class="text-center pt-3">Rolling...</h3>
        </div>
      </div>

      <!-- Marshlands -->
      <div class="col-3 d-flex justify-content-center mt-5" for="marshland" v-if="marshland == true">
        <div class="text-center" v-if="(twoSixDie.roll >= 7) && (twoSixDie.roll <= 12)">
          <h6>Roll Dice</h6>
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
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
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
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
        <div class="text-center" v-if="(twoSixDie.roll >= 5) && (twoSixDie.roll <= 9)">
          <h6>Roll Dice</h6>
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
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
          <button :disabled="isPending" type="button" @click="rollTwoSixDie()" class="btn p-5">
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
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  setup() {
    const twoSixDie = ref({ roll: 0 })

    // SECTION conditional rendering 
    const isPending = ref(false)
    const infantry = ref(false)
    const mech = ref(false)
    const ifv = ref(false)
    const mbt = ref(false)
    const javelin = ref(false)
    const highlands = ref(false)
    const grassland = ref(false)
    const forest = ref(false)
    const desert = ref(false)
    const jungle = ref(false)
    const marshland = ref(false)
    const urban = ref(false)
    //  END section

    return {
      infantry,
      mech,
      ifv,
      mbt,
      javelin,
      highlands,
      grassland,
      forest,
      desert,
      jungle,
      marshland,
      urban,
      twoSixDie,
      isPending,
      rollTwoSixDie() {
        setTimeout(() => {
          isPending.value = false
        }, 1000)
        twoSixDie.value = ({ roll: Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1) })
        isPending.value = true
      },
    }
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
  min-height: 58vh;
}

.height-bottom {
  min-height: 75vh;
}

h2 {
  text-decoration: underline 2px solid;
}
</style>