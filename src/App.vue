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
// Firebase
import { getCurrentUser, useCurrentUser, useFirebaseAuth } from "vuefire";

// Vue
import { RouterView } from 'vue-router'

// Components
import ModalComponent from "./components/ModalComponent.vue";
import CreateTeamFormComponent from "./components/forms/CreateTeamFormComponent.vue";

export default {
  setup() {
    const auth = useFirebaseAuth()
    const user = useCurrentUser()
    return {
      user,
      async getLoggedInUser() {
        if (user.value?.uid == undefined) {
          await getCurrentUser()
        }
      }
    }
  },
  components: { ModalComponent, CreateTeamFormComponent },
}

</script>


<style scoped></style>
