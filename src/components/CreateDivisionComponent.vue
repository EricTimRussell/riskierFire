<template>
  <form @submit.prevent="formDivision()">
    <div class="form-floating mb-3">
      <input v-model="editable.divisionNumber" required type="number" maxlength="1" min="1" max="6" class="form-control"
        id="divisionNumber" placeholder="1,2,3..." autocomplete="off">
      <label for="divisionNumber">Division Number(1-6)</label>
    </div>
    <div class="form-floating mb-3">
      <select v-model="editable.unitSlot1" required class="form-select" id="unitSlot1" aria-label="Select Unit for Slot">
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
      <label for="unitSlot1">Select Unit Type</label>
    </div>
    <div class="form-floating mb-3">
      <select v-model="editable.unitSlot2" required class="form-select" id="unitSlot2" aria-label="Select Unit for Slot">
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
      <label for="unitSlot2">Select Unit Type</label>
    </div>
    <div class="form-floating mb-3">
      <select v-model="editable.unitSlot3" required class="form-select" id="unitSlot3" aria-label="Select Unit for Slot">
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
      <label for="unitSlot3">Select Unit Type</label>
    </div>
    <div class="form-floating mb-3">
      <select v-model="editable.unitSlot4" required class="form-select" id="unitSlot4" aria-label="Select Unit for Slot">
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
      <label for="unitSlot4">Select Unit Type</label>
    </div>
    <div class="form-floating mb-3">
      <select v-model="editable.unitSlot5" required class="form-select" id="unitSlot5" aria-label="Select Unit for Slot">
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
      <label for="unitSlot5">Select Unit Type</label>
    </div>
    <div class="form-floating mb-3">
      <select v-model="editable.unitSlot6" required class="form-select" id="unitSlot6" aria-label="Select Unit for Slot">
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
      <label for="unitSlot6">Select Unit Type</label>
    </div>
    <div hidden class="my-3">
      <label for="creatorId" class="form-label">{{ editable.creatorId }}</label>
      <input v-model="editable.creatorId" type="string" id="creatorId" disabled>
    </div>
    <div class="modal-footer">
      <button type="button" data-bs-dismiss="modal">Close</button>
      <button type="submit" data-bs-dismiss="modal">Form Division</button>
    </div>
  </form>
</template>

<script>
import { addDoc, collection } from "@firebase/firestore";
import { ref } from "vue";
import { useCurrentUser, useFirestore } from "vuefire";
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
      async formDivision() {
        try {
          const newDivision = await addDoc(collection(db, "divisions"), {
            ...editable.value
          });
          editable.value = ({ creatorId: user.value?.uid })
        } catch (error) {
          console.error(error, "Forming Division")
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>