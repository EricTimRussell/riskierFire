<template>
  <div class="container-fluid region-card elevation-5 p-3 rounded">
    <div class="row gap-2">
      <h2 class="text-center"><u>Building</u></h2>
      <div class="col-12 d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-dark">construction</span>
        <span class="fs-lg">{{ construction.buildingType }}</span>
      </div>
      <span class="fs-lg text-center"><u>Turns to Complete</u></span>
      <span class="fs-lg text-center">{{ construction.buildTime }}</span>
    </div>
    <div class="col-12 text-end pt-3 px-1">
      <button @click="deleteConstruction()" class="btn-blank text-danger" title="Delete?"><span
          class="material-symbols-outlined fs-lg">
          delete_forever
        </span></button>
    </div>
  </div>
</template>

<script>
import { deleteDoc, doc, updateDoc, increment } from "@firebase/firestore"
import Swal from "sweetalert2"
import { useRoute } from "vue-router"
import { useFirestore } from "vuefire"

export default {
  props: {
    construction: { type: Object, required: true },
    teams: { type: Object, required: true }
  },
  setup(props) {
    const db = useFirestore()
    const route = useRoute()
    // @ts-ignore
    const team = doc(db, "teams", route.params.id)
    return {
      async deleteConstruction() {
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
              deleteDoc(doc(db, "construction", props.construction.id));
              updateDoc(team, {
                totalProduction: increment(1),
              });
              Swal.fire(
                'Construction Deleted!',
                'success'
              )
            }
          })
        } catch (error) {
          console.error(error, 'Deleting Construction')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>