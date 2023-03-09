<template>
  <body class="container-fluid">
    <section class="row">
      <!-- Ground Forces -->
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Ground Forces</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          swords
        </span>
        <span></span>
      </div>
      <!-- Air Forces -->
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Airforce</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          flight
        </span>
        <span></span>
      </div>
      <!-- Naval Forces -->
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Navy</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          directions_boat
        </span>
        <span></span>
      </div>
      <!-- Structures -->
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Structures</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          warehouse
        </span>
        <span></span>
      </div>
      <!-- Armies & Divisions -->
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Armies & Divisions</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          local_police
        </span>
        <span></span>
      </div>
      <!-- Carriers -->
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Carriers</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          flight_takeoff
        </span>
        <span></span>
      </div>
      <!-- Regions -->
      <div class="col-12 d-flex justify-content-center my-3 bg-green py-3 elevation-5 text-light">
        <h2>Regions</h2>
        <span class="material-symbols-outlined fs-lg px-2">
          public
        </span>
        <span></span>
      </div>
      <div class="pb-5">
        <button type="submit" class="rounded text-shadow-dark p-2 mx-3" data-bs-toggle="modal"
          data-bs-target="#createRegion" aria-label="Create Region">
          Claim Region
        </button>
      </div>
    </section>
  </body>
</template>

<script>
import { collection, query, getDocs, where } from "firebase/firestore"
import { useCurrentUser, useFirestore, getCurrentUser } from "vuefire"
import { onMounted } from "vue";
export default {
  setup() {
    const db = useFirestore()
    const user = useCurrentUser()

    async function getRegions() {
      try {
        // get user when undefined on page refresh
        if (user.value?.uid == undefined) {
          const user = await getCurrentUser()
        }
        // get user regions by their firbase id
        const q = query(collection(db, "regions"), where("creatorId", "==", user.value?.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
        });
      } catch (error) {
        console.error(error);
      }
    }
    onMounted(() => {
      getRegions()
    })
    return {

    }
  }
}
</script>

<style lang="scss" scoped></style>
