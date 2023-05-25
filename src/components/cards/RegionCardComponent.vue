<template>
  <div class="container-fluid region-card elevation-5 p-3 rounded">
    <div class="row gap-2">
      <span class="text-center fs-lg"><u>Region #</u> {{ regions.regionNumber }}</span>
      <div class="col-12 d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-capital">attach_money</span>
        <span class="fs-lg">{{ regions.capital }}</span>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <span class="fs-xl text-secondary material-symbols-outlined">factory</span>
        <span class="fs-lg">{{ regions.industry }}</span>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <span class="fs-xl text-success material-symbols-outlined">psychiatry</span>
        <span class="fs-lg">{{ regions.agriculture }}</span>
      </div>
    </div>
    <div class="col-12 text-end pt-3 px-1">
      <button @click="deleteRegion()" class="btn-blank text-danger" title="Delete?"><span
          class="material-symbols-outlined fs-lg">
          delete_forever
        </span></button>
    </div>
  </div>
</template>

<script>
// Firebase
import { doc, deleteDoc, updateDoc, increment } from "firebase/firestore";
import { useFirestore } from "vuefire";

// Vue
import { useRoute } from "vue-router";

// CSS
import Swal from "sweetalert2";

export default {
  props: {
    regions: { type: Object, required: true },
    teams: { type: Object, required: true }
  },
  setup(props) {
    const db = useFirestore()
    const route = useRoute()
    // @ts-ignore
    const team = doc(db, "teams", route.params.id)
    return {
      async deleteRegion() {
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
              // Delete region updates team object to reflect resources lost automatically

              deleteDoc(doc(db, "regions", props.regions.id));
              updateDoc(team, {
                totalCapital: increment(-props.regions.capital),
                totalIndustry: increment(-props.regions.industry),
                totalAgriculture: increment(-props.regions.agriculture)
              });
              Swal.fire(
                'Region Deleted!',
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

<style scoped></style>

