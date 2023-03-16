<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 bg-primary">
        <h1>Home Page</h1>
        <div class="col-12 d-flex justify-content-center py-3">
          <button type="submit" class="rounded text-shadow-dark p-2 mx-3" data-bs-toggle="modal"
            data-bs-target="#createTeam-modal" aria-label="Create Team">
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
      user
    };
  },
  components: { ModalComponent, CreateTeamForm }
}
</script>

<style lang="scss" scoped></style>
