<template>
  <div class="container-fluid region-card bg-light elevation-5 p-3 rounded">
    <div class="row gap-2">
      <h3 class="text-center">Division # {{ divisions.divisionNumber }}</h3>
      <div class="col-12 d-flex justify-content-center">
        <span class="fs-lg">{{ divisions.unitSlot1 }}</span>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <span class="fs-lg">{{ divisions.unitSlot2 }}</span>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <span class="fs-lg">{{ divisions.unitSlot3 }}</span>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <span class="fs-lg">{{ divisions.unitSlot4 }}</span>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <span class="fs-lg">{{ divisions.unitSlot5 }}</span>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <span class="fs-lg">{{ divisions.unitSlot6 }}</span>
      </div>
    </div>
    <div class="col-12 text-end pt-3 px-1">
      <button @click="editDivision()" class="btn-blank text-secondary" title="edit?"><span
          class="material-symbols-outlined fs-lg">
          settings
        </span></button>
      <button @click="deleteDivision()" class="btn-blank text-danger" title="Delete?"><span
          class="material-symbols-outlined fs-lg">
          delete_forever
        </span></button>
    </div>
  </div>
</template>

<script>
import { deleteDoc, doc } from "@firebase/firestore";
import Swal from "sweetalert2";
import { useFirestore } from "vuefire";

export default {
  props: {
    divisions: { type: Object, required: true }
  },
  setup(props) {
    const db = useFirestore()

    return {
      async deleteDivision() {
        try {
          await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              deleteDoc(doc(db, "divisions", props.divisions.id));
              Swal.fire(
                'Division Deleted!',
                'success'
              )
            }
          })
        } catch (error) {
          console.error(error, 'Deleting Region')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
