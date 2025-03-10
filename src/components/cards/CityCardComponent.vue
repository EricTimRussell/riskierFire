<template>
  <div class="container-fluid region-card elevation-5 p-3 rounded">
    <div class="row gap-2">
      <span class="text-center fs-lg"><u>Region #</u> {{ cities.regionNumber }}</span>
      <span class="text-center fs-lg">City Size: {{ cities.citySize }}</span>
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

<script setup>
// Firebase
import { doc, deleteDoc, updateDoc, increment } from "firebase/firestore";
import { useFirestore } from "vuefire";

// Vue
import { useRoute } from "vue-router";

// CSS
import Swal from "sweetalert2";
import { regionsService } from "../../services/RegionsService";


const props = defineProps({
  cities: { type: Object },
  teams: { type: Object }
})

const db = useFirestore()
const route = useRoute()
const team = doc(db, "teams", route.params.id)

async function deleteCity() {
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
        // @ts-ignore
        regionsService.deleteCity(props.cities, props.teams.creatorId, team)
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
</script>

<style lang="scss" scoped></style>
