<template>
  <div class="bg-tan elevation-5 p-1 rounded">
    <div>
      <h3 class="text-center">Region #</h3>
      <div class="text-center d-flex flex-column">
        <span class="fs-lg">0</span>
        <span class="fs-lg">0</span>
        <span class="fs-lg">0</span>
      </div>
    </div>
    <div class="text-end m-3">
      <button class="p-2" title="Delete?"><span class="material-symbols-outlined fs-md">
          delete_forever
        </span></button>
    </div>
  </div>
</template>

<script>
import { Region } from "../models/Region";

export default {
  // props: {
  //   regions: { type: Region, required: true },
  // },
  setup(props) {

    return {

    }
  }
}
</script>

<style lang="scss" scoped></style>

