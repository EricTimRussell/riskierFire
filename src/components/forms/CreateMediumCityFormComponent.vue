<template>
  <form @submit.prevent="createMediumCity()">
    <span class="fs-md">Region #</span>
    <div class="form-floating mb-3">
      <input v-model="editable.regionNumber" required type="number" min="0" max="99" class="form-control"
        id="regionNumber" placeholder="1,2,3..." autocomplete="off">
      <label for="regionNumber">Between 0-99</label>
    </div>
    <div class="modal-footer d-flex justify-content-evenly">
      <button type="button" class="btn-danger" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn-green">Create</button>
      <ul>
        <li>Medium: 6 of all resources</li>
      </ul>
    </div>
  </form>
</template>

<script setup>
// Firebase
import { useCurrentUser, useFirestore, getCurrentUser } from "vuefire";
import { doc } from "@firebase/firestore";

// Vue
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

// State Management
import { useRegionStore } from "../../stores/RegionStore";

// Services
import { regionsService } from "../../services/RegionsService";

// CSS
import Swal from 'sweetalert2'

const props = defineProps({
  teams: { type: Object }
})

const user = useCurrentUser()
const route = useRoute()
const db = useFirestore()

const editable = ref({ regionNumber: null, capital: 6, industry: 6, agriculture: 6, citySize: 'Medium', production: 1, creatorId: user.value?.uid })
const team = doc(db, "teams", route.params.id)

async function createMediumCity() {
  try {
    // get user id if undefined
    if (user.value?.uid == undefined) {
      await getCurrentUser();
    }
    regionsService.createMediumCity(editable, user, team)
    editable.value = ({ regionNumber: null, capital: 6, industry: 6, agriculture: 6, citySize: 'Medium', production: 1, creatorId: user.value?.uid })
    Swal.fire({
      title: 'Success!',
      timer: 900,
      showConfirmButton: false
    })
  } catch (error) {
    console.error(error, 'Creating City')
  }
}
</script>

<style lang="scss" scoped></style>