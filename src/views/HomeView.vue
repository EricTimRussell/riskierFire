<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 col-sm-12 pt-5 d-flex justify-content-center">
        <img class="logo" src="../assets/riskierLogo/riskierLogo.jpg" alt="">
      </div>
      <div class="col-md-6 col-sm-12 pt-5 d-flex flex-column text-light">
        <h1 class="text-center">Welcome to RiskierFire!</h1>
        <p class="paragraph-mobile px-5">Login or create an account by clicking the logo in the top left corner to get
          started. You do not need to use a real
          email to create an account. Once you have created an account be sure to create a team. This will allow the
          app to track your teams assets.</p>
        <p v-if="team.creatorId && user?.uid" class="paragraph-mobile px-5">Use the buttons at the top of the page to
          navigate the website.</p>
        <p v-if="team.creatorId && user?.uid" class="paragraph-mobile px-5">Refer to the rules page <span
            title="Rules Page" class="material-symbols-outlined">
            menu_book
          </span> to learn more about getting started.</p>
        <button v-if="user" :disabled="team.creatorId" :hidden="team.creatorId" type="submit"
          class="rounded text-shadow-dark p-2" data-bs-toggle="modal" data-bs-target="#createTeam-modal"
          aria-label="Create Team">
          Create Team
        </button>
      </div>
      <div class="col-12 d-flex justify-content-center py-3">

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
      team: computed(() => useRegionStore.teams),
      user,
    };
  },
  components: { ModalComponent, CreateTeamForm }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 75%;
  height: auto;
  border: black solid 3px;
}
</style>
