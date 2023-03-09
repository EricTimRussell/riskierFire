<template>
  <div class="card-size bg-tan elevation-5 p-1">
    <div class="l-spacing">
      <h3 class="text-center">Region</h3>
      <h3 class="text-center">Value</h3>
      <div class="text-center d-flex flex-column">
        <span class="mdi mdi-currency-usd fs-3"></span>
        <span class="mdi mdi-factory px-1 fs-3"></span>
        <span class="mdi mdi-barley fs-3"></span>
      </div>
    </div>
    <div class="text-end">
      <button class=" btn mdi mdi-delete-forever fs-3 select no-shadow" title="Delete?"></button>
    </div>
  </div>
</template>

<script>
export default {
  setup() {

    return {

    }
  }
}
</script>

<style lang="scss" scoped></style>

