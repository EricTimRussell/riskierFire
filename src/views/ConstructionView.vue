<template>
  <div class="container-fluid">
    <div class="row mt-5 justify-content-center">
      <div class="col-12 text-center">
        <h1>Building Construction</h1>
        <button class="m-2" data-bs-toggle="modal" data-bs-target="#construction-modal"
          aria-label="Start Construction">+Building</button>
      </div>
      <div v-for="c in construction">
        <ConstructionCardComponent :construction="c" :teams="teams" />
      </div>
    </div>
  </div>

  <ModalComponent id="construction-modal">
    <ConstructBuildingComponent :key="user?.uid" :teams="teams" />
  </ModalComponent>
</template>

<script>
import ModalComponent from "../components/ModalComponent.vue";
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { getCurrentUser, useCurrentUser } from "vuefire";
import { teamsService } from "../services/TeamsService";
import { buildingsService } from "../services/BuildingsService";
import { useRegionStore } from "../stores/RegionStore";
import ConstructBuildingComponent from "../components/ConstructBuildingComponent.vue";
import { useConstructionStore } from "../stores/ConstructionStore";
import ConstructionCardComponent from "../components/ConstructionCardComponent.vue";
export default {
  setup() {
    const user = useCurrentUser();

    const items = ref([
      { id: 0, title: 'Factory', list: 1 },
      { id: 1, title: 'Aifield', list: 1 },
      { id: 2, title: 'Naval Yard', list: 2 },
      { id: 3, title: 'Naval Yard', list: 3 },
    ])

    const getList = (list) => {
      return items.value.filter((item) => item.list == list)
    }

    const startDrag = (event, item) => {
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('itemID', item.id)
    }

    const onDrop = (event, list) => {
      const itemID = event.dataTransfer.getData('itemID')
      const item = items.value.find((item) => item.id == itemID)
      // @ts-ignore
      item.list = list
    }

    async function getTeamByUserId() {
      try {
        // get user id if undefined
        if (user.value?.uid == undefined) {
          // @ts-ignore
          const user = await getCurrentUser();
        }
        await teamsService.getTeamByUserId(user)
      } catch (error) {
        console.error(error)
      }
    }

    async function getConstructionByUserId() {
      try {
        // get user id if undefined
        if (user.value?.uid == undefined) {
          // @ts-ignore
          const user = await getCurrentUser();
        }
        await buildingsService.getConstructionByUserId(user)
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(() => {
      getTeamByUserId()
      getConstructionByUserId()
    });

    return {
      teams: computed(() => useRegionStore.teams),
      construction: computed(() => useConstructionStore.construction),
      user,
      getList,
      startDrag,
      onDrop,

      async constructShip() {
        try {
          await buildingsService.constructShip()
        } catch (error) {
          console.error(error, 'construct ship');
        }
      }
    }
  },
  components: { ModalComponent, ConstructBuildingComponent, ConstructionCardComponent }
}
</script>

<style scoped>
.drop-zone {
  background-color: aliceblue;
  padding: 20px;
  border: 5px black solid;
}

.drag-el {
  background-color: #2dafff;
  color: black;
  font-size: 16px;
  padding: 5px;
  width: fit-content;
  margin-bottom: 10px;
}

.drag-el:nth-last-of-type(1) {
  margin-bottom: 0px;
}
</style>