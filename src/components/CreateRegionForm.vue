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
import { ref, computed } from "vue";
import { useCurrentUser, useFirestore, getCurrentUser } from "vuefire";
import Swal from 'sweetalert2'
import { addDoc, collection, doc, updateDoc } from "@firebase/firestore";
import { useRoute } from "vue-router";
import { useRegionStore } from "../stores/RegionStore";


export default {
  props: {
    teams: { type: Object, required: true }
  },
  setup(props) {
    const user = useCurrentUser()
    const route = useRoute()
    const db = useFirestore()

    const editable = ref({ regionNumber: 0, capital: Math.floor(Math.random() * 6 + 1), industry: Math.floor(Math.random() * 6 + 1), agriculture: Math.floor(Math.random() * 6 + 1), creatorId: user.value?.uid })
    // @ts-ignore
    const team = doc(db, "teams", route.params.id)

    computed(() => useRegionStore.teams)
    return {
      editable,
      async createRegion() {
        try {
          // get user id if undefined
          if (user.value?.uid == undefined) {
            const user = await getCurrentUser();
          }
          const newRegion = await addDoc(collection(db, "regions"), {
            ...editable.value
          });
          await updateDoc(team, {
            totalCapital: editable.value.capital += props.teams.totalCapital,
            totalIndustry: editable.value.industry += props.teams.totalIndustry,
            totalAgriculture: editable.value.agriculture += props.teams.totalAgriculture
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