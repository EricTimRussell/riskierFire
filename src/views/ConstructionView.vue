<template>
  <div>
    <h1>Construction Page</h1>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { getCurrentUser, useCurrentUser } from "vuefire";
import { teamsService } from "../services/TeamsService";
import { useRegionStore } from "../stores/RegionStore";

export default {
  setup() {
    const user = useCurrentUser();

    async function getTeamByUserId() {
      try {
        // get user id if undefined
        if (user.value?.uid == undefined) {
          const user = await getCurrentUser();
        }
        await teamsService.getTeamByUserId(user)
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(() => {
      getTeamByUserId()
    });

    return {
      team: computed(() => useRegionStore.teams),
      user
    }
  }
}
</script>

<style lang="scss" scoped></style>