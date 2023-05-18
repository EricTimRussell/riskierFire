<template>
  <div>
    <h1>Under Construction</h1>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { getCurrentUser, useCurrentUser, useFirestore } from "vuefire";
import { teamsService } from "../services/TeamsService";
import { useRegionStore } from "../stores/RegionStore";
import { useNavyStore } from "../stores/NavyStore";
import { useArmyDivisionStore } from "../stores/ArmyDivisionStore";
import { regionsService } from "../services/RegionsService";

export default {
  setup() {
    const user = useCurrentUser();
    const db = useFirestore()

    async function getTeamByUserId() {
      try {
        // get user id if undefined
        if (user.value?.uid == undefined) {
          const user = await getCurrentUser();
        }
        await teamsService.getTeamByUserId(user);
      }
      catch (error) {
        console.error(error);
      }
    }
    async function getRegionsByUserId() {
      try {
        // get user id if undefined
        if (user.value?.uid == undefined) {
          const user = await getCurrentUser();
        }
        await regionsService.getRegionsByUserId(user);
      }
      catch (error) {
        console.error(error);
      }
    }
    onMounted(() => {
      getTeamByUserId()
      getRegionsByUserId()
    });
    return {
      team: computed(() => useRegionStore.teams),
      regions: computed(() => useRegionStore.regions),
      cities: computed(() => useRegionStore.cities),
      carriers: computed(() => useNavyStore.navy),
      divisions: computed(() => useArmyDivisionStore.divisions),
      armies: computed(() => useArmyDivisionStore.armies),
      user,

    }
  }
}
</script>

<style scoped></style>