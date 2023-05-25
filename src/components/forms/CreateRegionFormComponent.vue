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

<script>
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

export default {
  props: {
    teams: { type: Object, required: true },
  },
  setup(props) {
    const user = useCurrentUser()
    const route = useRoute()
    const db = useFirestore()

    const editable = ref({ regionNumber: null, capital: Math.floor(Math.random() * 6 + 1), industry: Math.floor(Math.random() * 6 + 1), agriculture: Math.floor(Math.random() * 6 + 1), creatorId: user.value?.uid })
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
            // Create region updates team object to reflect resources gained automatically
            totalCapital: increment(editable.value.capital),
            totalIndustry: increment(editable.value.industry),
            totalAgriculture: increment(editable.value.agriculture)
          });
          editable.value = ({ regionNumber: null, capital: Math.floor(Math.random() * 6 + 1), industry: Math.floor(Math.random() * 6 + 1), agriculture: Math.floor(Math.random() * 6 + 1), creatorId: user.value?.uid })
          Swal.fire({
            title: 'Success!',
            timer: 900,
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