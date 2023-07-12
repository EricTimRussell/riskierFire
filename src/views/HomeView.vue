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
        <p v-if="user?.uid" class="paragraph-mobile">Refer to the rules page <span title="Rules Page"
            class="material-symbols-outlined">
            menu_book
          </span> to learn more about getting started.</p>
        <p class="paragraph-mobile" v-if="user?.uid">
          There are eight icons and a logo on the navbar. The logo and top
          four icons are used to
          navigate the website. The book is a complete list of rules. The game controller is the game page where users
          will track units, groups, and regions. The hammer and wrench icon is the construction page where players can
          build and manage their buildings and naval units. Lastly, the swords icon is the combat page where users can
          see
          combat odds of each unit as well as roll virtual dice to determine the success or failure of an action. The
          four
          icons on the bottom represent your teams total resources. The $ sign is capital, the factory is industry,
          the leaf is agriculture, and the wrench is production. </p>
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
<!-- TODO make a nicer homepage -->
<!-- TODO create an new user tour on how to use the app-->
<!-- TODO add checks to game page so region and city numbers cannot be duplicated -->
<!-- TODO create an account page -->
<script>
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
export default {
  setup() {
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
    });
    return {
      teams: computed(() => useRegionStore.teams),
      user,
    };
  },
  components: { ModalComponent, CreateTeamFormComponent, NavbarComponent }
}
</script>

<style lang="scss" scoped></style>
