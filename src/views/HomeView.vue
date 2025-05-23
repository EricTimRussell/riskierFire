<template>
  <header class="sticky-top">
    <NavbarComponent :teams="teams" />
  </header>
  <div class="container-fluid indepentant-scroll">
    <div class="row justify-content-center">
      <div class="col-12 pt-5 d-flex justify-content-center" v-motion-slide-left>
        <img class="big-logo" src="../assets/riskierLogo/Riskier-logo.png" alt="">
      </div>
      <div class="col-12 pt-2 text-center" v-motion-slide-left>
        <h1 class="text-center">Welcome to RiskierFire!</h1>
      </div>
      <div v-if="user?.uid" class="col-12 pt-2 text-center">
        <span class="text-center fs-lg">Navigation Icons</span>
      </div>
      <div v-if="user?.uid" class="col-lg-3 col-md-3 col-6 text-end pt-4">
        <span title="Rules Page" class="material-symbols-outlined">
          menu_book
        </span>
        Rules Page
      </div>
      <div v-if="user?.uid" class="col-lg-3 col-md-3 col-6 text-center pt-4">
        <span title="Game Page" class="material-symbols-outlined">
          sports_esports
        </span>
        Game Page
      </div>
      <div v-if="user?.uid" class="col-lg-3 col-md-3 col-6 text-center pt-4">
        <span title="Construction Page" class="material-symbols-outlined">
          construction
        </span>
        Construction Page
      </div>
      <div v-if="user?.uid" class="col-lg-3 col-md-3 col-6 text-start pt-4">
        <span title="Combat Page" class="material-symbols-outlined">
          swords
        </span>
        Combat Page
      </div>
    </div>
    <div class="row justify-content-center" v-motion-fade>
      <div class="col-8 col-md-8 pb-5 pt-5 d-flex flex-column text-light">
        <p v-if="!user?.uid" class="paragraph-mobile">Login or create an account to get
          started. Once you have created an account be sure to create a team. This will allow the
          app to track your teams assets.</p>
        <div class="d-flex justify-content-center pb-5">
          <button v-if="user?.uid != teams.creatorId && user" type="submit" class="rounded text-shadow-dark p-2"
            data-bs-toggle="modal" data-bs-target="#createTeam-modal" aria-label="Create Team">
            Create Team
          </button>
        </div>
        <div v-if="!user?.uid" class="text-center">
          <RouterLink to="/sign-in" class="fs-md btn">Login/Create</RouterLink>
        </div>
      </div>
    </div>
  </div>

  <ModalComponent id="createTeam-modal">
    <CreateTeamFormComponent :key="user?.uid" />
  </ModalComponent>
</template>
<script setup>
// firebase
import { getCurrentUser, useCurrentUser } from "vuefire";

// Vue
import { onMounted } from "vue";
import { computed } from "@vue/reactivity";

// Services
import { teamsService } from "../services/TeamsService";

// State Management
import { useRegionStore } from "../stores/RegionStore";

// Components
import CreateTeamFormComponent from "../components/forms/CreateTeamFormComponent.vue";
import ModalComponent from "../components/ModalComponent.vue";
import NavbarComponent from "../components/NavbarComponent.vue";

const user = useCurrentUser();

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

onMounted(() => {
  getTeamByUserId();
})

const teams = computed(() => useRegionStore.teams)

</script>

<style lang="scss" scoped></style>
