<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import { RouterView } from 'vue-router'
import { getCurrentUser, useCurrentUser, useFirebaseAuth } from "vuefire";
import CreateRegionForm from "./components/CreateRegionForm.vue";
import ModalComponent from "./components/ModalComponent.vue";
import CreateTeamForm from "./components/CreateTeamForm.vue";

export default {
  components: { NavbarComponent, CreateRegionForm, ModalComponent, CreateTeamForm },
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
  }
}

</script>

<template>
  <body>
    <header>
      <NavbarComponent />
    </header>

    <main>
      <Suspense>
        <RouterView />
      </Suspense>
    </main>
  </body>
</template>

<style scoped></style>
