<script setup>
import NavbarComponent from "./components/NavbarComponent.vue";
import { RouterView } from 'vue-router'


</script>

<template>
  <header>
    <NavbarComponent />
  </header>

  <main>
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
</template>

<style scoped></style>
