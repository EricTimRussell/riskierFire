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
        <button type="submit" class="rounded text-shadow-dark p-2 mx-3" data-bs-toggle="modal"
          data-bs-target="#createRegion" aria-label="Create Region">
          Claim Region
        </button>
      </div>
    </section>
  </body>
</template>

<script>
import { useCurrentUser, getCurrentUser } from "vuefire"
import { onMounted, computed } from "vue";
import { regionsService } from "../services/RegionsService";
import { useRegionStore } from "../stores/RegionStore";

export default {
  setup() {
    const user = useCurrentUser()
    async function getRegionsByUserId() {
      try {
        // get user id if undefined
        if (user.value?.uid == undefined) {
          const user = await getCurrentUser()
        }
        await regionsService.getRegionsByUserId(user)
      } catch (error) {
        console.error(error);
      }
    }
    onMounted(() => {
      getRegionsByUserId()
    })
    return {
      region: computed(() => useRegionStore.regions)

    }
  }
}
</script>

<style lang="scss" scoped></style>
