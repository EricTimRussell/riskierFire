<template>
  <div class="drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
    <div v-for="item in getList(1)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)">
      {{ item.title }}
    </div>
  </div>
  <div class="drop-zone" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
    <div v-for="item in getList(2)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { getCurrentUser, useCurrentUser } from "vuefire";
import { teamsService } from "../services/TeamsService";
import { useRegionStore } from "../stores/RegionStore";
export default {
  setup() {
    const user = useCurrentUser();

    const items = ref([
      { id: 0, title: 'Apple', list: 1 },
      { id: 1, title: 'Bannana', list: 1 },
      { id: 2, title: 'Orange', list: 2 }
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
      onDrop
    }
  },

}
</script>

<style scoped>
.drop-zone {
  width: 50%;
  margin: 50px auto;
  background-color: aliceblue;
  padding: 10px;
  min-height: 10px;
}

.drag-el {
  background-color: lightskyblue;
  color: white;
  padding: 5px;
  margin-bottom: 10px;
}

.drag-el:nth-last-of-type(1) {
  margin-bottom: 0px;
}
</style>