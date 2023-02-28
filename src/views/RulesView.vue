<template>
  <h1>Rules Page</h1>
  <div>
    <h2>--{{ rules.infantry }}</h2>
    <h2>--{{ rules.mechanized }}</h2>
    <h2>--{{ rules.ifv }}</h2>
    <h2>--{{ rules.mbt }}</h2>
    <h2>--{{ rules.specialForces }}</h2>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { rulesService } from '../services/RulesService.js'
import { useRulesStore } from "../stores/RulesStore";
export default {
  async setup() {

    async function getRules() {
      try {
        await rulesService.getRules()
      } catch (error) {
        console.error(error);
      }
    }

    onMounted(() => {
      getRules()
    })
    return {
      rules: computed(() => useRulesStore.rules)
    }
  }
}
</script>

<style lang="scss" scoped></style>