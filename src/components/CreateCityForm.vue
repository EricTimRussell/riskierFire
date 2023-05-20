<template>
  <form @submit.prevent="createCity()">
    <div class="form-floating mb-3">
      <input v-model="editable.regionNumber" required type="number" min="0" max="99" class="form-control"
        id="regionNumber" placeholder="1,2,3..." autocomplete="off">
      <label for="regionNumber">Between 0-99</label>
    </div>
    <div>
      <label for="capital" class="form-label">Capital: {{ editable.capital }}</label>
      <input v-model="editable.capital" type="range" class="form-range" min="4" max="15" step="1" id="capital">
    </div>
    <div class="my-3">
      <label for="industry" class="form-label">Industry: {{ editable.industry }}</label>
      <input v-model="editable.industry" type="range" class="form-range" min="4" max="15" step="1" id="industry">
    </div>
    <div class="mb-3">
      <label for="agriculture" class="form-label">Agriculture: {{ editable.agriculture }}</label>
      <input v-model="editable.agriculture" type="range" class="form-range" min="4" max="15" step="1" id="agriculture">
    </div>
    <div class="form-floating mb-3">
      <div>
        <h4>Select City Size</h4>
      </div>
      <div class="form-check form-check-inline">
        <input v-model="editable.citySize" value="Small" class="form-check-input" type="radio" name="citySize"
          id="SmallCity">
        <label class="form-check-label" for="SmallCity">Small</label>
      </div>
      <div class="form-check form-check-inline">
        <input v-model="editable.citySize" value="Medium" class="form-check-input" type="radio" name="citySize"
          id="mediumCity">
        <label class="form-check-label" for="mediumCity">Medium</label>
      </div>
      <div class="form-check form-check-inline">
        <input v-model="editable.citySize" value="Capital" class="form-check-input" type="radio" name="citySize"
          id="capitalCity">
        <label class="form-check-label" for="capitalCity">Capital</label>
      </div>
    </div>
    <div class="modal-footer d-flex justify-content-evenly">
      <button type="button" class="btn-danger" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn-green">Create</button>
      <ul>
        <li>Capital: 15 of all resources</li>
        <li>Medium: 6 of all resources</li>
        <li>Small: 4 of all resources</li>
      </ul>
    </div>
  </form>
</template>

<script>
import { ref, computed } from "vue";
import { useCurrentUser, useFirestore, getCurrentUser } from "vuefire";
import Swal from 'sweetalert2'
import { addDoc, collection, doc, increment, updateDoc } from "@firebase/firestore";
import { useRoute } from "vue-router";
import { useRegionStore } from "../stores/RegionStore";


export default {
  props: {
    teams: { type: Object, required: true },
  },
  setup(props) {
    const user = useCurrentUser()
    const route = useRoute()
    const db = useFirestore()

    const editable = ref({ regionNumber: null, capital: 4, industry: 4, agriculture: 4, citySize: '', production: 1, creatorId: user.value?.uid })

    // @ts-ignore
    const team = doc(db, "teams", route.params.id)

    computed(() => useRegionStore.teams)
    return {
      editable,
      async createCity() {
        try {
          // get user id if undefined
          if (user.value?.uid == undefined) {
            const user = await getCurrentUser();
          }
          const newCity = await addDoc(collection(db, "cities"), {
            ...editable.value,
          });
          await updateDoc(team, {
            // Create region updates team object to reflect resources gained automatically
            totalCapital: increment(editable.value.capital),
            totalIndustry: increment(editable.value.industry),
            totalAgriculture: increment(editable.value.agriculture),
            totalProduction: increment(editable.value.production)
          });
          editable.value = ({ regionNumber: null, capital: 4, industry: 4, agriculture: 4, citySize: '', production: 1, creatorId: user.value?.uid })
          Swal.fire({
            title: 'Success!',
            timer: 900,
            showConfirmButton: false
          })
        } catch (error) {
          console.error(error, 'Creating City')
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