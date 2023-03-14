import { reactive } from 'vue'

export const useRegionStore = reactive({
  regions: [],
  regionId: '',
  teams: {}
})