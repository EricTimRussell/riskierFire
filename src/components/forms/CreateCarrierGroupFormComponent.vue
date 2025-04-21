<template>
  <form @submit.prevent="createCarrier()">
    <div>
      <h1>Create Carrier</h1>
    </div>
    <div class="form-floating mb-3">
      <input v-model="carrier.carrierNumber" required type="number" maxlength="1" min="1" max="4" class="form-control"
        id="carrierNumber" placeholder="1,2,3..." autocomplete="off">
      <label for="carrierNumber">Carrier Number(1-4)</label>
    </div>
    <div class="modal-footer">
      <button type="button" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn-green">Create Carrier</button>
    </div>
  </form>
</template>

<script setup>
// Firebase
import { addDoc, collection } from "@firebase/firestore";
import { useCurrentUser, useFirestore } from "vuefire";

// Vue
import { ref } from "vue";

// CSS
import Swal from "sweetalert2";


const props = defineProps({
  //current users team
  teams: { type: Object }
})

const user = useCurrentUser()
const db = useFirestore()
const carrier = ref({ creatorId: user.value?.uid, antiAircraft: 0, artillery: 0, cas: 0, fighters: 0, ifv: 0, infantry: 0, mbt: 0, mechanized: 0, missileArtillery: 0, specialForces: 0 })

async function createCarrier() {
  try {
    await addDoc(collection(db, "carriers"), {
      ...carrier.value
    });
    carrier.value = ({ creatorId: user.value?.uid })
    Swal.fire({
      title: 'Success!',
      timer: 900,
      showConfirmButton: false
    })
  } catch (error) {
    console.error(error, "creating carrier")
  }
}
</script>

<style lang="scss" scoped></style>