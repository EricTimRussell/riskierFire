<template>
  <form @submit.prevent="createCarrier()">
    <div>
      <h1>Create Carrier</h1>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editable.carrierNumber" required type="number" maxlength="1" min="1" max="6" class="form-control"
        id="carrierNumber" placeholder="1,2,3..." autocomplete="off">
      <label for="carrierNumber">Carrier Number(1-6)</label>
    </div>
    <div class="form-floating">
      <select v-model="editable.airUnit1" required class="form-select" id="airUnit1" aria-label="Select Unit for Slot">
        <option value="EmptySlot">EmptySlot</option>
        <option value="Fighter">Fighter ( {{ teams.totalFighterAircraft }} )</option>
        <option value="CAS">CAS ( {{ teams.totalCloseAirSupport }} )</option>
      </select>
      <label for="airUnit1">Select Unit Type</label>
    </div>
    <div class="form-floating my-3">
      <select v-model="editable.airUnit2" required class="form-select" id="airUnit2" aria-label="Select Unit for Slot">
        <option value="EmptySlot">EmptySlot</option>
        <option value="Fighter">Fighter ( {{ teams.totalFighterAircraft }} )</option>
        <option value="CAS">CAS ( {{ teams.totalCloseAirSupport }} )</option>
      </select>
      <label for="airUnit2">Select Unit Type</label>
    </div>
    <div class="form-floating">
      <select v-model="editable.airUnit3" required class="form-select" id="airUnit3" aria-label="Select Unit for Slot">
        <option value="EmptySlot">EmptySlot</option>
        <option value="Fighter">Fighter ( {{ teams.totalFighterAircraft }} )</option>
        <option value="CAS">CAS ( {{ teams.totalCloseAirSupport }} )</option>
      </select>
      <label for="airUnit3">Select Unit Type</label>
    </div>
    <div class="form-floating my-3">
      <select v-model="editable.airUnit4" required class="form-select" id="airUnit4" aria-label="Select Unit for Slot">
        <option value="EmptySlot">EmptySlot</option>
        <option value="Fighter">Fighter ( {{ teams.totalFighterAircraft }} )</option>
        <option value="CAS">CAS ( {{ teams.totalCloseAirSupport }} )</option>
      </select>
      <label for="airUnit4">Select Unit Type</label>
    </div>
    <div class="form-floating">
      <select v-model="editable.airUnit5" required class="form-select" id="airUnit5" aria-label="Select Unit for Slot">
        <option value="EmptySlot">EmptySlot</option>
        <option value="Fighter">Fighter ( {{ teams.totalFighterAircraft }} )</option>
        <option value="CAS">CAS ( {{ teams.totalCloseAirSupport }} )</option>
      </select>
      <label for="airUnit5">Select Unit Type</label>
    </div>
    <div class="form-floating my-3">
      <select v-model="editable.airUnit6" required class="form-select" id="airUnit6" aria-label="Select Unit for Slot">
        <option value="EmptySlot">EmptySlot</option>
        <option value="Fighter">Fighter ( {{ teams.totalFighterAircraft }} )</option>
        <option value="CAS">CAS ( {{ teams.totalCloseAirSupport }} )</option>
      </select>
      <label for="airUnit6">Select Unit Type</label>
    </div>
    <div class="form-floating">
      <select v-model="editable.airUnit7" required class="form-select" id="airUnit7" aria-label="Select Unit for Slot">
        <option value="EmptySlot">EmptySlot</option>
        <option value="Fighter">Fighter ( {{ teams.totalFighterAircraft }} )</option>
        <option value="CAS">CAS ( {{ teams.totalCloseAirSupport }} )</option>
      </select>
      <label for="airUnit7">Select Unit Type</label>
    </div>
    <div class="form-floating my-3">
      <select v-model="editable.airUnit8" required class="form-select" id="airUnit8" aria-label="Select Unit for Slot">
        <option value="EmptySlot">EmptySlot</option>
        <option value="Fighter">Fighter ( {{ teams.totalFighterAircraft }} )</option>
        <option value="CAS">CAS ( {{ teams.totalCloseAirSupport }} )</option>
      </select>
      <label for="airUnit8">Select Unit Type</label>
    </div>
    <div class="py-3 text-center">
      <h3>Ground Forces Onboard (optional)</h3>
    </div>
    <div class="form-floating mb-3">
      <select v-model="editable.groundUnit1" class="form-select" id="groundUnit1" aria-label="Select Unit for Slot">
        <option v-if="teams.totalInfantry >= 1" value="Infantry">Infantry ( {{ teams.totalInfantry }} )</option>
        <option v-if="teams.totalSpecialForces >= 1" value="Special Forces">Special Forces ( {{ teams.totalSpecialForces
        }} )
        </option>
        <option v-if="teams.totalMechanized >= 1" value="Mechanized">Mechanized ( {{ teams.totalMechanized }} )</option>
        <option v-if="teams.totalIFV >= 1" value="IFV">IFV ( {{ teams.totalIFV }} )</option>
        <option v-if="teams.totalMBT >= 1" value="MBT">MBT ( {{ teams.totalMBT }} )</option>
        <option v-if="teams.totalArtillery >= 1" value="Artillery">Artillery ( {{ teams.totalArtillery }} )</option>
        <option v-if="teams.totalAntiAircraft >= 1" value="Anti-Aircraft">Anti-Aircraft ( {{ teams.totalAntiAircraft }} )
        </option>
        <option v-if="teams.totalMissileArtillery >= 1" value="MissileArtillery">Missile Artillery ( {{
          teams.totalMissileArtillery }} )
        </option>
      </select>
      <label for="groundUnit1">Select Unit Type</label>
    </div>
    <div class="form-floating mb-3">
      <select v-model="editable.groundUnit2" class="form-select" id="groundUnit2" aria-label="Select Unit for Slot">
        <option v-if="teams.totalInfantry >= 1" value="Infantry">Infantry ( {{ teams.totalInfantry }} )</option>
        <option v-if="teams.totalSpecialForces >= 1" value="Special Forces">Special Forces ( {{ teams.totalSpecialForces
        }} )
        </option>
        <option v-if="teams.totalMechanized >= 1" value="Mechanized">Mechanized ( {{ teams.totalMechanized }} )</option>
        <option v-if="teams.totalIFV >= 1" value="IFV">IFV ( {{ teams.totalIFV }} )</option>
        <option v-if="teams.totalMBT >= 1" value="MBT">MBT ( {{ teams.totalMBT }} )</option>
        <option v-if="teams.totalArtillery >= 1" value="Artillery">Artillery ( {{ teams.totalArtillery }} )</option>
        <option v-if="teams.totalAntiAircraft >= 1" value="Anti-Aircraft">Anti-Aircraft ( {{ teams.totalAntiAircraft }} )
        </option>
        <option v-if="teams.totalMissileArtillery >= 1" value="MissileArtillery">Missile Artillery ( {{
          teams.totalMissileArtillery }} )
        </option>
      </select>
      <label for="groundUnit2">Select Unit Type</label>
    </div>
    <div class="form-floating mb-3">
      <select v-model="editable.groundUnit3" class="form-select" id="groundUnit3" aria-label="Select Unit for Slot">
        <option v-if="teams.totalInfantry >= 1" value="Infantry">Infantry ( {{ teams.totalInfantry }} )</option>
        <option v-if="teams.totalSpecialForces >= 1" value="Special Forces">Special Forces ( {{ teams.totalSpecialForces
        }} )
        </option>
        <option v-if="teams.totalMechanized >= 1" value="Mechanized">Mechanized ( {{ teams.totalMechanized }} )</option>
        <option v-if="teams.totalIFV >= 1" value="IFV">IFV ( {{ teams.totalIFV }} )</option>
        <option v-if="teams.totalMBT >= 1" value="MBT">MBT ( {{ teams.totalMBT }} )</option>
        <option v-if="teams.totalArtillery >= 1" value="Artillery">Artillery ( {{ teams.totalArtillery }} )</option>
        <option v-if="teams.totalAntiAircraft >= 1" value="Anti-Aircraft">Anti-Aircraft ( {{ teams.totalAntiAircraft }} )
        </option>
        <option v-if="teams.totalMissileArtillery >= 1" value="MissileArtillery">Missile Artillery ( {{
          teams.totalMissileArtillery }} )
        </option>
      </select>
      <label for="groundUnit3">Select Unit Type</label>
    </div>
    <div class="form-floating mb-3">
      <select v-model="editable.groundUnit4" class="form-select" id="groundUnit4" aria-label="Select Unit for Slot">
        <option v-if="teams.totalInfantry >= 1" value="Infantry">Infantry ( {{ teams.totalInfantry }} )</option>
        <option v-if="teams.totalSpecialForces >= 1" value="Special Forces">Special Forces ( {{ teams.totalSpecialForces
        }} )
        </option>
        <option v-if="teams.totalMechanized >= 1" value="Mechanized">Mechanized ( {{ teams.totalMechanized }} )</option>
        <option v-if="teams.totalIFV >= 1" value="IFV">IFV ( {{ teams.totalIFV }} )</option>
        <option v-if="teams.totalMBT >= 1" value="MBT">MBT ( {{ teams.totalMBT }} )</option>
        <option v-if="teams.totalArtillery >= 1" value="Artillery">Artillery ( {{ teams.totalArtillery }} )</option>
        <option v-if="teams.totalAntiAircraft >= 1" value="Anti-Aircraft">Anti-Aircraft ( {{ teams.totalAntiAircraft }} )
        </option>
        <option v-if="teams.totalMissileArtillery >= 1" value="MissileArtillery">Missile Artillery ( {{
          teams.totalMissileArtillery }} )
        </option>
      </select>
      <label for="groundUnit4">Select Unit Type</label>
    </div>
    <div class="form-floating mb-3">
      <select v-model="editable.groundUnit5" class="form-select" id="groundUnit5" aria-label="Select Unit for Slot">
        <option v-if="teams.totalInfantry >= 1" value="Infantry">Infantry ( {{ teams.totalInfantry }} )</option>
        <option v-if="teams.totalSpecialForces >= 1" value="Special Forces">Special Forces ( {{ teams.totalSpecialForces
        }} )
        </option>
        <option v-if="teams.totalMechanized >= 1" value="Mechanized">Mechanized ( {{ teams.totalMechanized }} )</option>
        <option v-if="teams.totalIFV >= 1" value="IFV">IFV ( {{ teams.totalIFV }} )</option>
        <option v-if="teams.totalMBT >= 1" value="MBT">MBT ( {{ teams.totalMBT }} )</option>
        <option v-if="teams.totalArtillery >= 1" value="Artillery">Artillery ( {{ teams.totalArtillery }} )</option>
        <option v-if="teams.totalAntiAircraft >= 1" value="Anti-Aircraft">Anti-Aircraft ( {{ teams.totalAntiAircraft }} )
        </option>
        <option v-if="teams.totalMissileArtillery >= 1" value="MissileArtillery">Missile Artillery ( {{
          teams.totalMissileArtillery }} )
        </option>
      </select>
      <label for="groundUnit5">Select Unit Type</label>
    </div>
    <div class="form-floating mb-3">
      <select v-model="editable.groundUnit6" class="form-select" id="groundUnit6" aria-label="Select Unit for Slot">
        <option v-if="teams.totalInfantry >= 1" value="Infantry">Infantry ( {{ teams.totalInfantry }} )</option>
        <option v-if="teams.totalSpecialForces >= 1" value="Special Forces">Special Forces ( {{ teams.totalSpecialForces
        }} )
        </option>
        <option v-if="teams.totalMechanized >= 1" value="Mechanized">Mechanized ( {{ teams.totalMechanized }} )</option>
        <option v-if="teams.totalIFV >= 1" value="IFV">IFV ( {{ teams.totalIFV }} )</option>
        <option v-if="teams.totalMBT >= 1" value="MBT">MBT ( {{ teams.totalMBT }} )</option>
        <option v-if="teams.totalArtillery >= 1" value="Artillery">Artillery ( {{ teams.totalArtillery }} )</option>
        <option v-if="teams.totalAntiAircraft >= 1" value="Anti-Aircraft">Anti-Aircraft ( {{ teams.totalAntiAircraft }} )
        </option>
        <option v-if="teams.totalMissileArtillery >= 1" value="MissileArtillery">Missile Artillery ( {{
          teams.totalMissileArtillery }} )
        </option>
      </select>
      <label for="groundUnit6">Select Unit Type</label>
    </div>
    <div class="modal-footer">
      <button type="button" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn-green">Create Carrier</button>
    </div>
  </form>
</template>

<script>
// Firebase
import { addDoc, collection } from "@firebase/firestore";
import { useCurrentUser, useFirestore } from "vuefire";

// Vue
import { ref } from "vue";

// CSS
import Swal from "sweetalert2";

export default {
  props: {
    teams: { type: Object, required: true },
  },
  setup(props) {
    const user = useCurrentUser()
    const db = useFirestore()
    const editable = ref({ creatorId: user.value?.uid })
    return {
      editable,
      async createCarrier() {
        try {
          const newArmy = await addDoc(collection(db, "carriers"), {
            ...editable.value
          });
          editable.value = ({ creatorId: user.value?.uid })
          Swal.fire({
            title: 'Success!',
            timer: 900,
            showConfirmButton: false
          })
        } catch (error) {
          console.error(error, "creating carrier")
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>