<template>
  <div class="container-fluid region-card elevation-5 p-3 rounded">
    <div class="row gap-2">
      <h3 class="text-center"><u>Region #</u> {{ cities.regionNumber }}</h3>
      <h3 class="text-center">City Size: {{ cities.citySize }}</h3>
      <div class="col-12 d-flex justify-content-center">
        <span class="fs-xl material-symbols-outlined text-capital">attach_money</span>
        <span class="fs-lg">{{ cities.capital }}</span>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <span class="fs-xl text-secondary material-symbols-outlined">factory</span>
        <span class="fs-lg">{{ cities.industry }}</span>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <span class="fs-xl text-success material-symbols-outlined">psychiatry</span>
        <span class="fs-lg">{{ cities.agriculture }}</span>
      </div>
    </div>
    <div class="col-12 text-end pt-3 px-1">
      <button @click="deleteCity()" class="btn-blank text-danger" title="Delete"><span
          class="material-symbols-outlined fs-lg">
          delete_forever
        </span></button>
    </div>
  </div>
</template>

<script>
import { doc, deleteDoc, updateDoc, increment } from "firebase/firestore";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";
import { useFirestore } from "vuefire";

export default {
  props: {
    cities: { type: Object, required: true },
    teams: { type: Object, required: true }
  },
  setup(props) {
    const db = useFirestore()
    const route = useRoute()
    // @ts-ignore
    const team = doc(db, "teams", route.params.id)
    return {
      async deleteCity() {
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
              // Delete city updates team object to reflect resources lost automatically
              deleteDoc(doc(db, "cities", props.cities.id));
              updateDoc(team, {
                totalCapital: increment(-props.cities.capital),
                totalIndustry: increment(-props.cities.industry),
                totalAgriculture: increment(-props.cities.agriculture),
                totalProduction: increment(-props.cities.production)
              });
              Swal.fire(
                'City Deleted!',
                'success'
              )
            }
          })
        } catch (error) {
          console.error(error, 'Deleting city')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>

