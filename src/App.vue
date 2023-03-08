<script setup>
import NavbarComponent from "./components/NavbarComponent.vue";
import { RouterView } from 'vue-router'
import { useFirebaseAuth } from "vuefire";

const auth = useFirebaseAuth()
// console.log(auth);
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
