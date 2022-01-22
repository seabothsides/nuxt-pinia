import {
  defineStore
} from "pinia"

export const useProducts = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'products',
  state: () => ({
    title: 'soap',
    price: '14.00',
    description: 'Soft bar for dreads'
  }),

  getters: {},
  actions: {}
})
