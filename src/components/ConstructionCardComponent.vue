<template>
  <div class="container-fluid">
    <div class="row gap-2 region-card elevation-5 rounded p-2" v-if="construction.buildTime >= 1">
      <div class="col-12 d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-dark">construction</span>
        <span class="fs-lg">{{ construction.buildingType }}</span>
      </div>
      <span class="fs-lg text-center"><u>Turns to Complete</u></span>
      <span class="fs-lg text-center">{{ construction.buildTime }}</span>
      <div class="col-12 text-end pt-3 px-1 d-flex justify-content-between">
        <button :disabled="construction.buildTime == 0" @click="buildTimeDecrement()" class="m-2">-BuildTime</button>
        <button @click="deleteConstruction()" class="btn-blank text-danger" title="Delete?"><span
            class="material-symbols-outlined fs-lg">
            delete_forever
          </span></button>
      </div>
    </div>

    <div class="row gap-2 region-card elevation-5 rounded p-2" v-if="construction.buildTime == 0">
      <div class="col-12 d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-dark">construction</span>
        <span class="fs-lg">{{ construction.buildingType }}</span>
      </div>
      <span class="fs-lg text-center"><u>Turns to Complete</u></span>
      <span class="fs-lg text-center">{{ construction.buildTime }}</span>
      <div class="col-12 text-end pt-3 px-1 d-flex justify-content-between">
        <span class="fs-lg text-success">COMPLETE</span>
        <button @click="deleteConstruction()" class="btn-blank text-danger" title="Delete?"><span
            class="material-symbols-outlined fs-lg">
            delete_forever
          </span></button>
      </div>
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
    const construction = doc(db, "construction", props.construction.id)
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
      },
      async buildTimeDecrement() {
        updateDoc(construction, {
          buildTime: increment(-1),
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>