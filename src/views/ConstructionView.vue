<template>
  <div class="container-fluid">
    <div class="row mt-5 justify-content-center">
      <div class="col-12 text-center">
        <h1>Building Construction</h1>
        <button class="m-2">+Building</button>
      </div>
      <div class="drop-zone col-3" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
        <h6>Start</h6>
        <div v-for="item in getList(1)" :key="item.id" class="drag-el" draggable="true"
          @dragstart="startDrag($event, item)">
          {{ item.title }}
        </div>
      </div>
      <div class="drop-zone col-3 mx-1" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
        <h6>In Progress</h6>
        <div v-for="item in getList(2)" :key="item.id" class="drag-el" draggable="true"
          @dragstart="startDrag($event, item)">
          {{ item.title }}
        </div>
      </div>
      <div class="drop-zone col-3" @drop="onDrop($event, 3)" @dragenter.prevent @dragover.prevent>
        <h6>Complete</h6>
        <div v-for="item in getList(3)" :key="item.id" class="drag-el" draggable="true"
          @dragstart="startDrag($event, item)">
          {{ item.title }}
        </div>
      </div>
    </div>
    <div class="row mt-5 justify-content-center">
      <div class="col-12 text-center">
        <h1>Naval Construction</h1>
        <button class="m-2 px-3">+Ship</button>
      </div>
      <div class="drop-zone col-3" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
        <h6>Start</h6>
        <div v-for="item in getList(1)" :key="item.id" class="drag-el" draggable="true"
          @dragstart="startDrag($event, item)">
          {{ item.title }}
        </div>
      </div>
      <div class="drop-zone col-3 mx-1" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
        <h6>In Progress</h6>
        <div v-for="item in getList(2)" :key="item.id" class="drag-el" draggable="true"
          @dragstart="startDrag($event, item)">
          {{ item.title }}
        </div>
      </div>
      <div class="drop-zone col-3" @drop="onDrop($event, 3)" @dragenter.prevent @dragover.prevent>
        <h6>Complete</h6>
        <div v-for="item in getList(3)" :key="item.id" class="drag-el" draggable="true"
          @dragstart="startDrag($event, item)">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>

  <ModalComponent id="construction-modal">

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
export default {
  setup() {
    const user = useCurrentUser();

    const items = ref([
      { id: 0, title: 'Factory', list: 1 },
      { id: 1, title: 'Aifield', list: 1 },
      { id: 2, title: 'Naval Yard', list: 2 },
      { id: 3, title: 'Naval Yard', list: 3 }
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

    onMounted(() => {
      getTeamByUserId()
    });

    return {
      team: computed(() => useRegionStore.teams),
      user,
      getList,
      startDrag,
      onDrop,

      async constructBuilding() {
        try {
          await buildingsService.constructBuilding()
        } catch (error) {
          console.error(error, 'construct building');
        }
      },

      async constructShip() {
        try {
          await buildingsService.constructShip()
        } catch (error) {
          console.error(error, 'construct building');
        }
      }
    }
  },
  components: { ModalComponent }
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