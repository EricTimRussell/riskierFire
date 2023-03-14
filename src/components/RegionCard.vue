<template>
  <div class="bg-light elevation-5 p-1 rounded">
    <div>
      <h3 class="text-center">Region # {{ regions.regionNumber }}</h3>
      <div class="text-center d-flex flex-column gap-3">
        <span class="fs-xl material-symbols-outlined text-warning">attach_money</span>
        <span class="fs-xl text-secondary material-symbols-outlined">factory</span>
        <span class="fs-xl text-success material-symbols-outlined">psychiatry</span>
      </div>
    </div>
    <div class="text-end pt-3 m-3">
      <button @click="deleteRegion()" class="p-2" title="Delete?"><span class="material-symbols-outlined fs-md">
          delete_forever
        </span></button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    regions: { type: Object, required: true },
  },
  setup(props) {

    return {
      async deleteRegion() {
        try {

        } catch (error) {

        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>

