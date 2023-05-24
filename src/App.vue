<template>
  <body>

    <main>
      <Suspense>
        <RouterView />
      </Suspense>
    </main>

  </body>
</template>



<script>
import { RouterView } from 'vue-router'
import { getCurrentUser, useCurrentUser, useFirebaseAuth } from "vuefire";
import CreateRegionForm from "./components/CreateRegionForm.vue";
import ModalComponent from "./components/ModalComponent.vue";
import CreateTeamForm from "./components/CreateTeamForm.vue";
import { computed } from "@vue/reactivity";
import { useRegionStore } from "./stores/RegionStore";

export default {
  components: { CreateRegionForm, ModalComponent, CreateTeamForm },
  setup() {
    const auth = useFirebaseAuth()
    const user = useCurrentUser()
    return {
      teams: computed(() => useRegionStore.teams),
      user,
      async getLoggedInUser() {
        if (user.value?.uid == undefined) {
          await getCurrentUser()
        }
      }
    }
  }
}

</script>


<style scoped></style>
