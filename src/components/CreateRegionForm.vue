<template>
  <form @submit.prevent="createRegion()">
    <div class="form-floating mb-3">
      <input v-model="editable.regionNumber" required type="text" maxlength="2" class="form-control" id="regionNumber"
        placeholder="1,2,3..." autocomplete="off">
      <label for="regionNumber">Region Number...</label>
    </div>
    <div hidden>
      <label for="capital" class="form-label">Capital: {{ editable.capital }}</label>
      <input v-model="editable.capital" type="range" class="form-range" min="1" max="15" step="1" id="capital" disabled>
    </div>
    <div hidden class="my-3">
      <label for="industry" class="form-label">Industry: {{ editable.industry }}</label>
      <input v-model="editable.industry" type="range" class="form-range" min="1" max="15" step="1" id="industry" disabled>
    </div>
    <div hidden class="mb-3">
      <label for="agriculture" class="form-label">Agriculture: {{ editable.agriculture }}</label>
      <input v-model="editable.agriculture" type="range" class="form-range" min="1" max="15" step="1" id="agriculture"
        disabled>
    </div>
    <div hidden class="my-3">
      <label for="creatorId" class="form-label">{{ editable.creatorId }}</label>
      <input v-model="editable.creatorId" type="string" id="creatorId" disabled>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn-danger" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn-green" data-bs-dismiss="modal">Create</button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useCurrentUser, useFirestore } from "vuefire";
import { regionsService } from "../services/RegionsService";
import Swal from 'sweetalert2'
import { addDoc, collection } from "@firebase/firestore";

export default {
  setup() {
    const user = useCurrentUser()
    const editable = ref({ regionNumber: 0, capital: Math.floor(Math.random() * 6 + 1), industry: Math.floor(Math.random() * 6 + 1), agriculture: Math.floor(Math.random() * 6 + 1), creatorId: user.value?.uid })

    const db = useFirestore()

    return {
      editable,
      async createRegion() {
        try {
          const newRegion = await addDoc(collection(db, "regions"), {
            ...editable.value
          });
          editable.value = ({ regionNumber: 0, capital: Math.floor(Math.random() * 6 + 1), industry: Math.floor(Math.random() * 6 + 1), agriculture: Math.floor(Math.random() * 6 + 1), creatorId: user.value?.uid })
          Swal.fire({
            title: 'Success!',
            timer: 1000,
            showConfirmButton: false
          })
        } catch (error) {
          console.error(error, 'Creating Region')
        }
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-green {
  background: #7bff2f;
}
</style>