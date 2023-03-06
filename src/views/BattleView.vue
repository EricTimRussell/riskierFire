<template>
  <body class="container-fluid">
    <section class="row">
      <div class="col-12 d-flex justify-content-center bg-green elevation-5 py-3 my-5 text-light gap-3">
        <span class="material-symbols-outlined fs-xl">
          swords
        </span>
        <h1>Battle Page</h1>
        <span class="material-symbols-outlined fs-xl">
          swords
        </span>
      </div>
    </section>
    <section class="row justify-content-center">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed fs-xl" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Infantry
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body row justify-content-center">

              <!-- Select Adversary Offense-->
              <div class="col-12 text-center">
                <h2>Select Adversary</h2>
              </div>
              <div class="col-12 d-flex justify-content-center">
                <div class="d-flex">
                  <input id="infantry" class="mx-1 checkbox" type="checkbox" v-model="infantry">
                  <h3>Infantry</h3>
                </div>
                <div class="d-flex">
                  <input id="mech" class="mx-1 checkbox" type="checkbox" v-model="mech">
                  <h3>Mechanized</h3>
                </div>
              </div>
              <div class="col-12 d-flex text-center justify-content-center">
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
              <div class="col-3 d-flex justify-content-center mt-5" for="infantry" v-if="infantry == true">
                <div class="text-center" v-if="(twoSixDie.roll >= 5) && (twoSixDie.roll <= 8)">
                  <button type="button" @click="rollTwoSixDie()" class="btn p-5">Roll <span>{{ twoSixDie.roll
                  }}</span></button>
                  <h3 v-show="twoSixDie.roll > 0" class="text-center pt-3">HIT</h3>
                </div>
                <div v-else class="text-center">
                  <button type="button" @click="rollTwoSixDie()" class="btn p-5">Roll <span>{{ twoSixDie.roll
                  }}</span></button>
                  <h3 v-show="twoSixDie.roll > 0" class="text-center pt-3">MISS</h3>
                </div>
              </div>

              <!-- Vs Mech -->
              <div class="col-3 d-flex justify-content-center mt-5" for="mech" v-if="mech == true">
                <div class="text-center" v-if="(twoSixDie.roll >= 7) && (twoSixDie.roll <= 10)">
                  <button @click="rollTwoSixDie()" class="btn p-5">Roll <span>{{ twoSixDie.roll }}</span></button>
                  <h3 v-show="twoSixDie.roll > 0" class="text-center pt-3">HIT</h3>
                </div>
                <div class="text-center" v-else>
                  <button @click="rollTwoSixDie()" class="btn p-5">Roll <span>{{ twoSixDie.roll }}</span></button>
                  <h3 v-show="twoSixDie.roll > 0" class="text-center pt-3">MISS</h3>
                </div>
              </div>

              <!-- Vs IFV -->
              <div class="col-3 d-flex justify-content-center mt-5" for="ifv" v-if="ifv == true">
                <div class="text-center" v-if="(twoSixDie.roll >= 7) && (twoSixDie.roll <= 8)">
                  <button @click="rollTwoSixDie()" class="btn p-5">Roll <span>{{ twoSixDie.roll }}</span></button>
                  <h3 v-show="twoSixDie.roll > 0" class="text-center pt-3">HIT</h3>
                </div>
                <div class="text-center" v-else>
                  <button @click="rollTwoSixDie()" class="btn p-5">Roll <span>{{ twoSixDie.roll }}</span></button>
                  <h3 v-show="twoSixDie.roll > 0" class="text-center pt-3">MISS</h3>
                </div>
              </div>

              <!-- Vs MBT -->
              <div class="col-3 d-flex justify-content-center mt-5" for="mbt" v-if="mbt == true">
                <div class="text-center" v-if="(twoSixDie.roll >= 7) && (twoSixDie.roll <= 10)">
                  <button @click="rollTwoSixDie()" class="btn p-5">Roll <span>{{ twoSixDie.roll }}</span></button>
                  <h3 v-show="twoSixDie.roll > 0" class="text-center pt-3">HIT</h3>
                </div>
                <div class="text-center" v-else>
                  <button @click="rollTwoSixDie()" class="btn p-5">Roll <span>{{ twoSixDie.roll }}</span></button>
                  <h3 v-show="twoSixDie.roll > 0" class="text-center pt-3">MISS</h3>
                </div>
              </div>

              <!-- Select Environment Defense-->
              <div class="col-12 text-center pt-5">
                <h2>Select Environment</h2>
              </div>
              <div class="col-12 d-flex justify-content-center">
                <div class="d-flex">
                  <input id="infantry" class="mx-1 checkbox" type="checkbox" v-model="infantry">
                  <h3>Infantry</h3>
                </div>
                <div class="d-flex">
                  <input id="mech" class="mx-1 checkbox" type="checkbox" v-model="mech">
                  <h3>Mechanized</h3>
                </div>
              </div>
              <div class="col-12 d-flex text-center justify-content-center">
                <div class="d-flex">
                  <input id="ifv" class="mx-1 checkbox" type="checkbox" v-model="ifv">
                  <h3>IFV</h3>
                </div>
                <div class="d-flex">
                  <input id="mbt" class="mx-1 checkbox" type="checkbox" v-model="mbt">
                  <h3>MBT</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Sepcial Forces
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being
              filled with some actual content.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Mechanized
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting
              happening here in terms of content, but just filling up the space to make it look, at least at first glance,
              a bit more representative of how this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
    </section>







    <!-- <div class="col-12 d-flex justify-content-center">
      <div v-if="(twoSixDie.roll >= 5) && (twoSixDie.roll <= 7)">
        <h1>Two D6's</h1>
        <button @click="rollTwoSixDie()" class="btn p-5">Roll <span>{{ twoSixDie.roll }}</span></button>
        <h1 v-show="twoSixDie.roll > 0" class="text-center">HIT</h1>
      </div>
      <div v-else>
        <h1>Two D6's</h1>
        <button @click="rollTwoSixDie()" class="btn p-5">Roll <span>{{ twoSixDie.roll }}</span></button>
        <h1 v-show="twoSixDie.roll > 0" class="text-center">MISS</h1>
      </div>
    </div>

    <div class="col-12 d-flex justify-content-center pt-5">
      <div v-if="(oneTwelveDie.roll >= 5) && (oneTwelveDie.roll <= 7)">
        <h1>One D12</h1>
        <button @click="rollOneTwelveDie()" class="btn p-5">Roll <span>{{ oneTwelveDie.roll }}</span></button>
        <h1 v-show="oneTwelveDie.roll > 0" class="text-center">HIT</h1>
      </div>
      <div v-else>
        <h1>One D12</h1>
        <button @click="rollOneTwelveDie()" class="btn p-5">Roll <span>{{ oneTwelveDie.roll }}</span></button>
        <h1 v-show="oneTwelveDie.roll > 0" class="text-center">MISS</h1>
      </div>
    </div> -->
  </body>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const twoSixDie = ref({ roll: 0 })
    const oneTwelveDie = ref({ roll: 0 })
    const infantry = ref(false)
    const mech = ref(false)
    const ifv = ref(false)
    const mbt = ref(false)
    return {
      infantry,
      mech,
      ifv,
      mbt,
      twoSixDie,
      oneTwelveDie,
      rollTwoSixDie() {
        twoSixDie.value = ({ roll: Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1) })
      },
      rollOneTwelveDie() {
        oneTwelveDie.value = ({ roll: Math.floor(Math.random() * 12 + 1) })
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
</style>