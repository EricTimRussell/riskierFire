<template>
  <div class="modal fade" id="createRegion" tabindex="-1" aria-labelledby="createRegion" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"
            title="close modal"></button>
        </div>
        <div class="modal-body">
          <slot>

          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped></style>