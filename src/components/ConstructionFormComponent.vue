<template>
  <form @submit.prevent="constructBuildingAndNavy()">
    <div class="form-floating mb-3">
      <select v-model="editable.buildingType" required maxlength="20" class="form-select" id="buildingType"
        placeholder="building type" autocomplete="off">
        <option value="Airfield">Airfield</option>
        <option value="Factory">Factory</option>
        <option value="Naval Yard">Naval Yard</option>
        <option value="Carrier">Carrier</option>
        <option value="Cruiser">Cruiser</option>
        <option value="Destroyer">Destroyer</option>
      </select>
      <label for="buildingType">Build...</label>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn-danger" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn-green" data-bs-dismiss="modal">Create</button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useCurrentUser, useFirestore, getCurrentUser } from "vuefire";
import Swal from 'sweetalert2'
import { addDoc, collection, doc, increment, updateDoc } from "@firebase/firestore";
import { useRoute } from "vue-router";

export default {
  props: {
    teams: { type: Object, required: true },
  },
  setup(props) {
    const user = useCurrentUser()
    const route = useRoute()
    const db = useFirestore()

    const editable = ref({ buildingType: '', creatorId: user.value?.uid, buildTime: 2 })
    // @ts-ignore
    const team = doc(db, "teams", route.params.id)


    return {
      editable,

      async constructBuildingAndNavy() {
        try {
          // get user id if undefined
          if (user.value?.uid == undefined) {
            const user = await getCurrentUser();
          }
          const constructBuilding = await addDoc(collection(db, "construction"), {
            ...editable.value
          });
          await updateDoc(team, {
            totalProduction: increment(-1)
          });
          editable.value = ({ buildingType: '', creatorId: user.value?.uid, buildTime: 2 })
          Swal.fire({
            title: 'Success!',
            timer: 900,
            showConfirmButton: false
          })
        } catch (error) {
          console.error(error, 'construct building');
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