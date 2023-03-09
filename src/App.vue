<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import { RouterView } from 'vue-router'
import { getCurrentUser, useCurrentUser, useFirebaseAuth } from "vuefire";
import CreateRegionForm from "./components/CreateRegionForm.vue";

export default {
  components: { NavbarComponent, CreateRegionForm },
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

  <section>
    <div class="modal fade" id="createRegion" tabindex="-1" aria-labelledby="createRegion" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="createRegion">Create Region</h1>
            <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"
              title="close modal"></button>
          </div>
          <div class="modal-body">
            <CreateRegionForm :key="user?.uid" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
