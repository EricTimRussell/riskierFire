<template>
  <header class="sticky-top">
    <NavbarComponent :teams="teams" />
  </header>
  <div class="container-fluid indepentant-scroll">
    <div class="row justify-content-center">
      <div class="col-12 pt-5 d-flex justify-content-center">
        <img class="big-logo" src="../assets/riskierLogo/Riskier-logo.png" alt="">
      </div>
      <div class="col-10 pb-5 pt-5 d-flex flex-column text-light">
        <h1 class="text-center">Welcome to RiskierFire!</h1>
        <p class="paragraph-mobile">Login or create an account by clicking the logo in the top left corner to get
          started. You do not need to use a real
          email to create an account. Once you have created an account be sure to create a team. This will allow the
          app to track your teams assets.</p>
        <p v-if="user?.uid" class="paragraph-mobile">Use the buttons at the top of the page to
          navigate the website.</p>
        <p v-if="user?.uid" class="paragraph-mobile">Refer to the rules page <span title="Rules Page"
            class="material-symbols-outlined">
            menu_book
          </span> to learn more about getting started.</p>
        <p class="paragraph-mobile" v-if="user?.uid">
          There are eight icons and a logo on the navbar. The logo and top
          four icons are used to
          navigate the website. The book is a complete list of rules. The game controller is the game page where users
          will track units, groups, and regions. The hammer and wrench icon is the construction page where players can
          build and manage their buildings and naval units. Lastly, the swords icon is the combat page where users can see
          combat odds of each unit as well as roll virtual dice to determine the success or failure of an action. The four
          icons on the bottom represent your teams total resources. The $ sign is capital, the factory is industry,
          the leaf is agriculture, and the wrench is production. </p>
        <div class="d-flex justify-content-center pb-5">
          <button v-if="user?.uid && !teams.creatorId" type="submit" class="rounded text-shadow-dark p-2"
            data-bs-toggle="modal" data-bs-target="#createTeam-modal" aria-label="Create Team">
            Create Team
          </button>
        </div>
      </div>
    </div>
  </div>

  <ModalComponent id="createTeam-modal">
    <CreateTeamForm :key="user?.uid" />
  </ModalComponent>
</template>

<script>
import { onMounted } from "vue";
import { getCurrentUser, useCurrentUser } from "vuefire";
import CreateTeamForm from "../components/CreateTeamForm.vue";
import ModalComponent from "../components/ModalComponent.vue";
import { teamsService } from "../services/TeamsService";
import { computed } from "@vue/reactivity";
import { useRegionStore } from "../stores/RegionStore";
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
  components: { ModalComponent, CreateTeamForm, NavbarComponent }
}
</script>

<style lang="scss" scoped></style>
