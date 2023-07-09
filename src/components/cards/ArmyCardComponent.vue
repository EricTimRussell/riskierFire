<template>
  <body>


    <div class="container-fluid region-card elevation-5 p-3 rounded">
      <div class="row">
        <h3 class="text-center"><u>Army #</u> {{ armies.armyNumber }}</h3>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ armies.unitSlot1 }}</span>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ armies.unitSlot2 }}</span>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ armies.unitSlot3 }}</span>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ armies.unitSlot4 }}</span>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ armies.unitSlot5 }}</span>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ armies.unitSlot6 }}</span>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ armies.unitSlot7 }}</span>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ armies.unitSlot8 }}</span>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <span class="fs-md">{{ armies.unitSlot9 }}</span>
        </div>
      </div>
      <div class="col-12 text-end pt-3 px-1">
        <button class="btn-blank text-secondary" title="Edit" data-bs-toggle="modal"
          :data-bs-target="`#editArmy${armies.id}`" aria-label="Edit Army"><span class="material-symbols-outlined fs-lg">
            settings
          </span></button>
        <button @click="deleteArmy()" class="btn-blank text-danger" title="Delete"><span
            class="material-symbols-outlined fs-lg">
            delete_forever
          </span></button>
      </div>
    </div>

    <!-- SECTION edit army modal -->
    <form @submit.prevent="editArmy()">
      <div class="modal fade text-dark l-spacing" :id="`editArmy${armies.id}`" tabindex="-1" aria-labelledby="editArmy"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5">Edit Army {{ armies.armiesNumber }}</h1>
              <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"
                title="close modal"></button>
            </div>
            <div class="modal-body">
              <div class="form-floating">
                <select v-model="editable.unitSlot1" required class="form-select" id="unitSlot1"
                  aria-label="Select Unit for Slot">
                  <option value="EmptySlot">EmptySlot</option>
                  <option value="Infantry">Infantry</option>
                  <option value="Special Forces">Special Forces</option>
                  <option value="Mechanized">Mechanized</option>
                  <option value="IFV">IFV</option>
                  <option value="MBT">MBT</option>
                  <option value="Artillery">Artillery</option>
                  <option value="Missile Artillery">Missile Artillery</option>
                  <option value="Anti-Aircraft">Anti-Aircraft</option>
                </select>
                <label for="unitSlot1">Selected Unit</label>
              </div>
              <div class="form-floating my-3">
                <select v-model="editable.unitSlot2" required class="form-select" id="unitSlot2"
                  aria-label="Select Unit for Slot">
                  <option value="EmptySlot">EmptySlot</option>
                  <option value="Infantry">Infantry</option>
                  <option value="Special Forces">Special Forces</option>
                  <option value="Mechanized">Mechanized</option>
                  <option value="IFV">IFV</option>
                  <option value="MBT">MBT</option>
                  <option value="Artillery">Artillery</option>
                  <option value="Missile Artillery">Missile Artillery</option>
                  <option value="Anti-Aircraft">Anti-Aircraft</option>
                </select>
                <label for="unitSlot2">Selected Unit</label>
              </div>
              <div class="form-floating">
                <select v-model="editable.unitSlot3" required class="form-select" id="unitSlot3"
                  aria-label="Select Unit for Slot">
                  <option value="EmptySlot">EmptySlot</option>
                  <option value="Infantry">Infantry</option>
                  <option value="Special Forces">Special Forces</option>
                  <option value="Mechanized">Mechanized</option>
                  <option value="IFV">IFV</option>
                  <option value="MBT">MBT</option>
                  <option value="Artillery">Artillery</option>
                  <option value="Missile Artillery">Missile Artillery</option>
                  <option value="Anti-Aircraft">Anti-Aircraft</option>
                </select>
                <label for="unitSlot3">Selected Unit</label>
              </div>
              <div class="form-floating my-3">
                <select v-model="editable.unitSlot4" required class="form-select" id="unitSlot4"
                  aria-label="Select Unit for Slot">
                  <option value="EmptySlot">EmptySlot</option>
                  <option value="Infantry">Infantry</option>
                  <option value="Special Forces">Special Forces</option>
                  <option value="Mechanized">Mechanized</option>
                  <option value="IFV">IFV</option>
                  <option value="MBT">MBT</option>
                  <option value="Artillery">Artillery</option>
                  <option value="Missile Artillery">Missile Artillery</option>
                  <option value="Anti-Aircraft">Anti-Aircraft</option>
                </select>
                <label for="unitSlot4">Selected Unit</label>
              </div>
              <div class="form-floating">
                <select v-model="editable.unitSlot5" required class="form-select" id="unitSlot5"
                  aria-label="Select Unit for Slot">
                  <option value="EmptySlot">EmptySlot</option>
                  <option value="Infantry">Infantry</option>
                  <option value="Special Forces">Special Forces</option>
                  <option value="Mechanized">Mechanized</option>
                  <option value="IFV">IFV</option>
                  <option value="MBT">MBT</option>
                  <option value="Artillery">Artillery</option>
                  <option value="Missile Artillery">Missile Artillery</option>
                  <option value="Anti-Aircraft">Anti-Aircraft</option>
                </select>
                <label for="unitSlot5">Selected Unit</label>
              </div>
              <div class="form-floating my-3">
                <select v-model="editable.unitSlot6" required class="form-select" id="unitSlot6"
                  aria-label="Select Unit for Slot">
                  <option value="EmptySlot">EmptySlot</option>
                  <option value="Infantry">Infantry</option>
                  <option value="Special Forces">Special Forces</option>
                  <option value="Mechanized">Mechanized</option>
                  <option value="IFV">IFV</option>
                  <option value="MBT">MBT</option>
                  <option value="Artillery">Artillery</option>
                  <option value="Missile Artillery">Missile Artillery</option>
                  <option value="Anti-Aircraft">Anti-Aircraft</option>
                </select>
                <label for="unitSlot6">Selected Unit</label>
              </div>
              <div class="form-floating my-3">
                <select v-model="editable.unitSlot7" required class="form-select" id="unitSlot7"
                  aria-label="Select Unit for Slot">
                  <option value="EmptySlot">EmptySlot</option>
                  <option value="Infantry">Infantry</option>
                  <option value="Special Forces">Special Forces</option>
                  <option value="Mechanized">Mechanized</option>
                  <option value="IFV">IFV</option>
                  <option value="MBT">MBT</option>
                  <option value="Artillery">Artillery</option>
                  <option value="Missile Artillery">Missile Artillery</option>
                  <option value="Anti-Aircraft">Anti-Aircraft</option>
                </select>
                <label for="unitSlot7">Selected Unit</label>
              </div>
              <div class="form-floating my-3">
                <select v-model="editable.unitSlot8" required class="form-select" id="unitSlot8"
                  aria-label="Select Unit for Slot">
                  <option value="EmptySlot">EmptySlot</option>
                  <option value="Infantry">Infantry</option>
                  <option value="Special Forces">Special Forces</option>
                  <option value="Mechanized">Mechanized</option>
                  <option value="IFV">IFV</option>
                  <option value="MBT">MBT</option>
                  <option value="Artillery">Artillery</option>
                  <option value="Missile Artillery">Missile Artillery</option>
                  <option value="Anti-Aircraft">Anti-Aircraft</option>
                </select>
                <label for="unitSlot8">Selected Unit</label>
              </div>
              <div class="form-floating my-3">
                <select v-model="editable.unitSlot9" required class="form-select" id="unitSlot9"
                  aria-label="Select Unit for Slot">
                  <option value="EmptySlot">EmptySlot</option>
                  <option value="Infantry">Infantry</option>
                  <option value="Special Forces">Special Forces</option>
                  <option value="Mechanized">Mechanized</option>
                  <option value="IFV">IFV</option>
                  <option value="MBT">MBT</option>
                  <option value="Artillery">Artillery</option>
                  <option value="Missile Artillery">Missile Artillery</option>
                  <option value="Anti-Aircraft">Anti-Aircraft</option>
                </select>
                <label for="unitSlot9">Selected Unit</label>
              </div>
              <div class="modal-footer">
                <button type="button" data-bs-dismiss="modal">Close</button>
                <button type="submit" @click="editArmy()" class="btn-green" data-bs-dismiss="modal">Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </body>
</template>

<script>
// Firebase
import { deleteDoc, doc } from "@firebase/firestore";
import { useFirestore } from "vuefire";

// Vue
import { ref } from "vue";
import { useRoute } from "vue-router";

// Services
import { armiesDivisionsService } from "../../services/ArmiesDivisionsService";

// CSS
import Swal from "sweetalert2";

export default {
  props: {
    armies: { type: Object, required: true }
  },
  setup(props) {
    const db = useFirestore()
    const route = useRoute()
    // @ts-ignore
    const army = doc(db, "armies", props.armies.id)

    // Ref autofills edit form when opened
    const editable = ref({ unitSlot1: `${props.armies.unitSlot1}`, unitSlot2: `${props.armies.unitSlot2}`, unitSlot3: `${props.armies.unitSlot3}`, unitSlot4: `${props.armies.unitSlot4}`, unitSlot5: `${props.armies.unitSlot5}`, unitSlot6: `${props.armies.unitSlot6}`, unitSlot7: `${props.armies.unitSlot7}`, unitSlot8: `${props.armies.unitSlot8}`, unitSlot9: `${props.armies.unitSlot9}` })
    return {
      editable,
      army,
      async deleteArmy() {
        try {
          await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              armiesDivisionsService.deleteArmy(props.armies.id)
              Swal.fire(
                'Army Deleted!',
                'success'
              )
            }
          })
        } catch (error) {
          console.error(error, 'Deleting Division')
        }
      },

      async editArmy() {
        try {
          await armiesDivisionsService.editArmy(editable, army)
          Swal.fire({
            title: 'Success!',
            timer: 900,
            showConfirmButton: false
          })
        } catch (error) {
          console.error(error, "Editing Army")
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
