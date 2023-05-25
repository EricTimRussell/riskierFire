<template>
  <form @submit.prevent="createTeam()">
    <div class="text-center">
      <h1>Enter Team Name</h1>
    </div>
    <div class="d-flex justify-content-center my-3">
      <label for="teamName" class="form-label"></label>
      <input required v-model="editable.teamName" type="string" maxlength="20" id="teamName" placeholder="Team Name...">
    </div>
    <div class="modal-footer">
      <button type="button" class="btn-danger" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn-green" data-bs-dismiss="modal">Create</button>
    </div>
  </form>
</template>

<script>
import { doc, setDoc } from "@firebase/firestore";
import { useCurrentUser, useFirestore } from "vuefire";
import { ref } from "vue";
import Swal from "sweetalert2";

export default {
  setup() {
    const user = useCurrentUser()
    const db = useFirestore()
    // Create a team sets all a players assets to 0
    const editable = ref({ creatorId: user.value?.uid, totalCapital: 0, totalIndustry: 0, totalAgriculture: 0, totalInfantry: 0, totalSpecialForces: 0, totalMechanized: 0, totalIFV: 0, totalMBT: 0, totalAntiAircraft: 0, totalArtillery: 0, totalMissileArtillery: 0, totalFighterAircraft: 0, totalCloseAirSupport: 0, totalCargoAircraft: 0, totalCarriers: 0, totalCruisers: 0, totalDestroyers: 0, totalAirfields: 0, totalNavalYards: 0, totalFactories: 0, totalProduction: 0, teamName: '' })

    return {
      editable,
      async createTeam() {
        try {
          // @ts-ignore
          const newTeam = await setDoc(doc(db, "teams", user.value?.uid), {
            ...editable.value
          });
          editable.value = ({ creatorId: user.value?.uid, totalCapital: 0, totalIndustry: 0, totalAgriculture: 0, totalInfantry: 0, totalSpecialForces: 0, totalMechanized: 0, totalIFV: 0, totalMBT: 0, totalAntiAircraft: 0, totalArtillery: 0, totalMissileArtillery: 0, totalFighterAircraft: 0, totalCloseAirSupport: 0, totalCargoAircraft: 0, totalCarriers: 0, totalCruisers: 0, totalDestroyers: 0, totalAirfields: 0, totalNavalYards: 0, totalFactories: 0, totalProduction: 0, teamName: '' })
          Swal.fire({
            title: 'Success!',
            timer: 1000,
            showConfirmButton: false
          })
        } catch (error) {
          console.error(error, 'Creating Team')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>