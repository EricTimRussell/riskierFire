<template>
  <form @submit.prevent="createTeam()">
    <div class="text-center">
      <h1>Enter Team Name</h1>
    </div>
    <div class="d-flex justify-content-center my-3">
      <label for="teamName" class="form-label"></label>
      <input required v-model="editable.teamName" type="string" id="teamName" placeholder="Team Name...">
    </div>
    <div hidden>
      <label for="totalCapital" class="form-label">{{ editable.totalCapital }}</label>
      <input v-model="editable.totalCapital" type="number" id="totalCapital" disabled>
    </div>
    <div hidden>
      <label for="totalIndustry" class="form-label">{{ editable.totalIndustry }}</label>
      <input v-model="editable.totalIndustry" type="number" id="totalIndustry" disabled>
    </div>
    <div hidden>
      <label for="totalAgriculture" class="form-label">{{ editable.totalAgriculture }}</label>
      <input v-model="editable.totalAgriculture" type="number" id="totalAgriculture" disabled>
    </div>
    <div hidden>
      <label for="totalProduction" class="form-label">{{ editable.totalProduction }}</label>
      <input v-model="editable.totalProduction" type="number" id="totalProduction" disabled>
    </div>
    <div hidden>
      <label for="totalInfantry" class="form-label">{{ editable.totalInfantry }}</label>
      <input v-model="editable.totalInfantry" type="number" id="totalInfantry" disabled>
    </div>
    <div hidden>
      <label for="totalSpecialForces" class="form-label">{{ editable.totalSpecialForces }}</label>
      <input v-model="editable.totalSpecialForces" type="number" id="totalSpecialForces" disabled>
    </div>
    <div hidden>
      <label for="totalMechanized" class="form-label">{{ editable.totalMechanized }}</label>
      <input v-model="editable.totalMechanized" type="number" id="totalMechanized" disabled>
    </div>
    <div hidden>
      <label for="totalIFV" class="form-label">{{ editable.totalIFV }}</label>
      <input v-model="editable.totalIFV" type="number" id="totalIFV" disabled>
    </div>
    <div hidden>
      <label for="totalMBT" class="form-label">{{ editable.totalMBT }}</label>
      <input v-model="editable.totalMBT" type="number" id="totalMBT" disabled>
    </div>
    <div hidden>
      <label for="totalAntiAircraft" class="form-label">{{ editable.totalAntiAircraft }}</label>
      <input v-model="editable.totalAntiAircraft" type="number" id="totalAntiAircraft" disabled>
    </div>
    <div hidden>
      <label for="totalArtillery" class="form-label">{{ editable.totalArtillery }}</label>
      <input v-model="editable.totalArtillery" type="number" id="totalArtillery" disabled>
    </div>
    <div hidden>
      <label for="totalMissileArtillery" class="form-label">{{ editable.totalMissileArtillery }}</label>
      <input v-model="editable.totalMissileArtillery" type="number" id="totalMissileArtillery" disabled>
    </div>
    <div hidden>
      <label for="totalFighterAircraft" class="form-label">{{ editable.totalFighterAircraft }}</label>
      <input v-model="editable.totalFighterAircraft" type="number" id="totalFighterAircraft" disabled>
    </div>
    <div hidden>
      <label for="totalCloseAirSupport" class="form-label">{{ editable.totalCloseAirSupport }}</label>
      <input v-model="editable.totalCloseAirSupport" type="number" id="totalCloseAirSupport" disabled>
    </div>
    <div hidden>
      <label for="totalCargoAircraft" class="form-label">{{ editable.totalCargoAircraft }}</label>
      <input v-model="editable.totalCargoAircraft" type="number" id="totalCargoAircraft" disabled>
    </div>
    <div hidden>
      <label for="totalCarriers" class="form-label">{{ editable.totalCarriers }}</label>
      <input v-model="editable.totalCarriers" type="number" id="totalCarriers" disabled>
    </div>
    <div hidden>
      <label for="totalCruisers" class="form-label">{{ editable.totalCruisers }}</label>
      <input v-model="editable.totalCruisers" type="number" id="totalCruisers" disabled>
    </div>
    <div hidden>
      <label for="totalDestroyers" class="form-label">{{ editable.totalDestroyers }}</label>
      <input v-model="editable.totalDestroyers" type="number" id="totalDestroyers" disabled>
    </div>
    <div hidden>
      <label for="totalAirfields" class="form-label">{{ editable.totalAirfields }}</label>
      <input v-model="editable.totalAirfields" type="number" id="totalAirfields" disabled>
    </div>
    <div hidden>
      <label for="totalNavalYards" class="form-label">{{ editable.totalNavalYards }}</label>
      <input v-model="editable.totalNavalYards" type="number" id="totalNavalYards" disabled>
    </div>
    <div hidden>
      <label for="totalFactories" class="form-label">{{ editable.totalFactories }}</label>
      <input v-model="editable.totalFactories" type="number" id="totalFactories" disabled>
    </div>
    <div hidden>
      <label for="creatorId" class="form-label">{{ editable.creatorId }}</label>
      <input v-model="editable.creatorId" type="string" id="creatorId" disabled>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn-danger" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn-success" data-bs-dismiss="modal">Create</button>
    </div>
  </form>
</template>

<script>
import { addDoc, collection, doc, setDoc } from "@firebase/firestore";
import Swal from "sweetalert2";
import { ref } from "vue";
import { useCurrentUser, useFirestore } from "vuefire";

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