import { defineStore } from "pinia";

export const useProgressStore = defineStore({
  id: "progress",
  state: () => ({
    progress: null,
  }),
});
