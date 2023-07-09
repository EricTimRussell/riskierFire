<template>
  <div>
    <button @click="deleteAllRegionsByCreatorId()">Delete All Regions</button>
  </div>
</template>
<!-- NOTE Currently does not work -->
<script>
import { increment } from "firebase/database";
import { deleteDoc, doc, updateDoc, where } from "firebase/firestore";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";
import { useCurrentUser, useFirestore } from "vuefire";

export default {
  regions: { type: Object, required: true },
  teams: { type: Object, required: true },
  setup(props) {
    const db = useFirestore()
    const route = useRoute()
    const user = useCurrentUser();
    // @ts-ignore
    const team = doc(db, "teams", route.params.id)
    return {
      async deleteAllRegionsByCreatorId() {
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
              deleteDoc(doc(db, "regions", user.value?.uid == props.regions.creatorId));
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

<style lang="scss" scoped></style>