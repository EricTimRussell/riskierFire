<template>
  <div class="d-flex justify-content-center col-6">
    <span class="fs-md">Infantry</span>
  </div>
  <div class="d-flex justify-content-center col-6">
    <span class="fs-md">Special Forces</span>
  </div>
  <div class="form-check form-switch d-flex justify-content-center col-6 fs-md">
    <input @click="$emit('hideUnit')" class="form-check-input" type="checkbox" role="switch" id="infantry">
  </div>
  <div class="form-check form-switch d-flex justify-content-center col-6 fs-md">
    <input @click="$emit('hideUnit')" class="form-check-input" type="checkbox" role="switch" id="specialForces">
  </div>
</template>

<script>

export default {
  emits: ['hideUnit'],
  setup() {



    return {

    }
  }
}


</script>

<style scoped>

</style>