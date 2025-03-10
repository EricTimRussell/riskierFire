<template>
  <form @submit.prevent="createRegion()">
    <span class="fs-md">Region #</span>
    <div class="form-floating mb-3">
      <input v-model="editable.regionNumber" required type="number" min="0" max="99" class="form-control"
        id="regionNumber" placeholder="1,2,3..." autocomplete="off">
      <label for="regionNumber">Between 0-99</label>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn-danger" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn-green">Create</button>
    </div>
  </form>
</template>

<script setup>
// Firebase
import { useCurrentUser, useFirestore, getCurrentUser } from "vuefire";
import { addDoc, collection, doc, increment, updateDoc } from "@firebase/firestore";

// Vue
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

// State Management
import { useRegionStore } from "../../stores/RegionStore";

// CSS
import Swal from 'sweetalert2'


const props = defineProps({
  teams: { type: Object }
})

const user = useCurrentUser()
const route = useRoute()
const db = useFirestore()
const editable = ref({ regionNumber: null, capital: Math.floor(Math.random() * 6 + 1), industry: Math.floor(Math.random() * 6 + 1), agriculture: Math.floor(Math.random() * 6 + 1), creatorId: user.value?.uid })
const team = doc(db, "teams", route.params.id)

async function createRegion() {
  try {
    // get user id if undefined
    if (user.value?.uid == undefined) {
      const user = await getCurrentUser();
    }
    const newRegion = await addDoc(collection(db, "regions"), {
      ...editable.value
    });
    await updateDoc(team, {
      // Create region updates team object to reflect resources gained automatically
      totalCapital: increment(editable.value.capital),
      totalIndustry: increment(editable.value.industry),
      totalAgriculture: increment(editable.value.agriculture)
    });
    Swal.fire({
      title: 'Success!',
      html: `<span class="material-symbols-outlined text-warning fs-xl">
              attach_money
              </span>
              <span class="fs-xl">+${editable.value.capital} </span>
            <span class="material-symbols-outlined text-secondary fs-xl">
              factory
            </span>
            <span class="fs-xl">+${editable.value.industry} </span>
            <span class="material-symbols-outlined text-success fs-xl">
              psychiatry
            </span>
            <span class="fs-xl">+${editable.value.agriculture}</span>`,
      showConfirmButton: true
    })
    editable.value = ({ regionNumber: null, capital: Math.floor(Math.random() * 6 + 1), industry: Math.floor(Math.random() * 6 + 1), agriculture: Math.floor(Math.random() * 6 + 1), creatorId: user.value?.uid })
  } catch (error) {
    console.error(error, 'Creating Region')
  }
}
</script>

<style lang="scss" scoped>
.btn-green {
  background: #7bff2f;
}
</style>