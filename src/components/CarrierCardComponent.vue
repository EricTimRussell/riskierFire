<template>
  <body>


    <div class="container-fluid region-card elevation-5 p-3 rounded">
      <div class="row">
        <h3 class="text-center"><u>Carrier #</u> {{ carriers.carrierNumber }}</h3>
        <div class="col-12 d-flex justify-content-center">
          <h2 class="fs-xl"><u> Air Units</u></h2>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ carriers.airUnit1 }}</span>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ carriers.airUnit2 }}</span>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ carriers.airUnit3 }}</span>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ carriers.airUnit4 }}</span>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ carriers.airUnit5 }}</span>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ carriers.airUnit6 }}</span>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ carriers.airUnit7 }}</span>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ carriers.airUnit8 }}</span>
        </div>
        <div class="col-12 d-flex justify-content-center mt-5">
          <h2 class="fs-xl"><u>Ground Units</u></h2>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ carriers.groundUnit1 }}</span>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ carriers.groundUnit2 }}</span>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ carriers.groundUnit3 }}</span>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ carriers.groundUnit4 }}</span>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ carriers.groundUnit5 }}</span>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <span class="fs-md">{{ carriers.groundUnit6 }}</span>
        </div>
      </div>
      <div class="col-12 text-end pt-3 px-1">
        <button class="btn-blank text-secondary" title="edit?" data-bs-toggle="modal"
          :data-bs-target="`#editCarrier${carriers.id}`" aria-label="Edit Carrier"><span
            class="material-symbols-outlined fs-lg">
            settings
          </span></button>
        <button @click="deleteCarrier()" class="btn-blank text-danger" title="Delete?"><span
            class="material-symbols-outlined fs-lg">
            delete_forever
          </span></button>
      </div>
    </div>

    <!-- SECTION edit carrier modal -->
    <form @submit.prevent="editCarrier()">
      <div class="modal fade text-dark l-spacing" :id="`editCarrier${carriers.id}`" tabindex="-1"
        aria-labelledby="editCarrier" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5">Edit Carrier {{ carriers.carrierNumber }}</h1>
              <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"
                title="close modal"></button>
            </div>
            <div class="modal-body">
              <div class="form-floating">
                <select v-model="editable.airUnit1" required class="form-select" id="airUnit1"
                  aria-label="Select Unit for Slot">
                  <option value="EmptySlot">EmptySlot</option>
                  <option value="Fighter">Fighter</option>
                  <option value="CAS">CAS</option>
                </select>
                <label for="airUnit1">Selected Unit</label>
              </div>
              <div class="form-floating">
                <select v-model="editable.airUnit2" required class="form-select" id="airUnit2"
                  aria-label="Select Unit for Slot">
                  <option value="EmptySlot">EmptySlot</option>
                  <option value="Fighter">Fighter</option>
                  <option value="CAS">CAS</option>
                </select>
                <label for="airUnit2">Selected Unit</label>
              </div>
              <div class="form-floating">
                <select v-model="editable.airUnit3" required class="form-select" id="airUnit3"
                  aria-label="Select Unit for Slot">
                  <option value="EmptySlot">EmptySlot</option>
                  <option value="Fighter">Fighter</option>
                  <option value="CAS">CAS</option>
                </select>
                <label for="airUnit3">Selected Unit</label>
              </div>
              <div class="form-floating">
                <select v-model="editable.airUnit4" required class="form-select" id="airUnit4"
                  aria-label="Select Unit for Slot">
                  <option value="EmptySlot">EmptySlot</option>
                  <option value="Fighter">Fighter</option>
                  <option value="CAS">CAS</option>
                </select>
                <label for="airUnit4">Selected Unit</label>
              </div>
              <div class="form-floating">
                <select v-model="editable.airUnit5" required class="form-select" id="airUnit5"
                  aria-label="Select Unit for Slot">
                  <option value="EmptySlot">EmptySlot</option>
                  <option value="Fighter">Fighter</option>
                  <option value="CAS">CAS</option>
                </select>
                <label for="airUnit5">Selected Unit</label>
              </div>
              <div class="form-floating">
                <select v-model="editable.airUnit6" required class="form-select" id="airUnit6"
                  aria-label="Select Unit for Slot">
                  <option value="EmptySlot">EmptySlot</option>
                  <option value="Fighter">Fighter</option>
                  <option value="CAS">CAS</option>
                </select>
                <label for="airUnit6">Selected Unit</label>
              </div>
              <div class="form-floating">
                <select v-model="editable.airUnit7" required class="form-select" id="airUnit7"
                  aria-label="Select Unit for Slot">
                  <option value="EmptySlot">EmptySlot</option>
                  <option value="Fighter">Fighter</option>
                  <option value="CAS">CAS</option>
                </select>
                <label for="airUnit7">Selected Unit</label>
              </div>
              <div class="form-floating">
                <select v-model="editable.airUnit8" required class="form-select" id="airUnit8"
                  aria-label="Select Unit for Slot">
                  <option value="EmptySlot">EmptySlot</option>
                  <option value="Fighter">Fighter</option>
                  <option value="CAS">CAS</option>
                </select>
                <label for="airUnit8">Selected Unit</label>
              </div>
              <div class="form-floating">
                <select v-model="editable.groundUnit1" class="form-select" id="groundUnit1"
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
                <label for="groundUnit1">Selected Unit</label>
              </div>
              <div class="form-floating my-3">
                <select v-model="editable.groundUnit2" class="form-select" id="groundUnit2"
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
                <label for="groundUnit2">Selected Unit</label>
              </div>
              <div class="form-floating">
                <select v-model="editable.groundUnit3" class="form-select" id="groundUnit3"
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
                <label for="groundUnit3">Selected Unit</label>
              </div>
              <div class="form-floating my-3">
                <select v-model="editable.groundUnit4" class="form-select" id="groundUnit4"
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
                <label for="groundUnit4">Selected Unit</label>
              </div>
              <div class="form-floating">
                <select v-model="editable.groundUnit5" class="form-select" id="groundUnit5"
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
                <label for="groundUnit5">Selected Unit</label>
              </div>
              <div class="form-floating my-3">
                <select v-model="editable.groundUnit6" class="form-select" id="groundUnit6"
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
                <label for="groundUnit6">Selected Unit</label>
              </div>
              <div class="modal-footer">
                <button type="button" data-bs-dismiss="modal">Close</button>
                <button type="submit" @click="editCarrier()" data-bs-dismiss="modal">Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </body>
</template>

<script>
import { ref } from "vue";
import { deleteDoc, doc } from "@firebase/firestore";
import Swal from "sweetalert2";
import { useFirestore } from "vuefire";
import { useRoute } from "vue-router";
import { navyUnitsService } from "../services/NavyUnitsService";

export default {
  props: {
    carriers: { type: Object, required: true }
  },
  setup(props) {
    const db = useFirestore()
    const route = useRoute()
    // @ts-ignore
    const carrier = doc(db, "carriers", props.carriers.id)
    // Ref autofills edit form when opened
    const editable = ref({ groundUnit1: `${props.carriers.groundUnit1}`, groundUnit2: `${props.carriers.groundUnit2}`, groundUnit3: `${props.carriers.groundUnit3}`, groundUnit4: `${props.carriers.groundUnit4}`, groundUnit5: `${props.carriers.groundUnit5}`, groundUnit6: `${props.carriers.groundUnit6}`, airUnit1: `${props.carriers.airUnit1}`, airUnit2: `${props.carriers.airUnit2}`, airUnit3: `${props.carriers.airUnit3}`, airUnit4: `${props.carriers.airUnit4}`, airUnit5: `${props.carriers.airUnit5}`, airUnit6: `${props.carriers.airUnit6}`, airUnit7: `${props.carriers.airUnit7}`, airUnit8: `${props.carriers.airUnit8}`, })
    return {
      editable,
      carrier,
      async deleteCarrier() {
        try {
          await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              deleteDoc(doc(db, "carriers", props.carriers.id));
              Swal.fire(
                'Carrier Deleted!',
                'success'
              )
            }
          })
        } catch (error) {
          console.error(error, 'Deleting Carrier')
        }
      },

      async editCarrier() {
        try {
          await navyUnitsService.editCarrier(editable, carrier)
          Swal.fire({
            title: 'Success!',
            timer: 900,
            showConfirmButton: false
          })
        } catch (error) {
          console.error(error, "Editing Carrier")
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
