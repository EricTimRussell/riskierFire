<template>
  <div class="container-fluid">
    <div class="row my-2 justify-content-center">
      <div class="drop-zone col-1" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
        <h6 class="text-center">Start</h6>
        <div v-for="item in getList(1)" :key="item.id" class="drag-el" draggable="true"
          @dragstart="startDrag($event, item)">
          {{ construction.buildingType }}
        </div>
      </div>
      <div class="drop-zone col-1" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
        <h6 class="text-center">Inprogress</h6>
        <div v-for="item in getList(2)" :key="item.id" class="drag-el" draggable="true"
          @dragstart="startDrag($event, item)">
          {{ construction.buildingType }}
        </div>
      </div>
      <div class="drop-zone col-1" @drop="onDrop($event, 3)" @dragenter.prevent @dragover.prevent>
        <h6 class="text-center">Complete</h6>
        <div v-for="item in getList(3)" :key="item.id" class="drag-el" draggable="true"
          @dragstart="startDrag($event, item)">
          {{ construction.buildingType }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  props: {
    construction: { type: Object, required: true },
    teams: { type: Object, required: true },
  },
  setup(props) {
    const items = ref([{ id: props.construction.buildingType, list: 1 }])

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

    return {
      getList,
      startDrag,
      onDrop,
    }
  }
}
</script>

<style lang="scss" scoped>
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