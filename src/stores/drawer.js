import { defineStore } from "pinia";
import { Dark } from "quasar";

export const useDrawerStore = defineStore({
  id: "drawer",
  state: () => ({
    drawerOpen: false,
    menu: [
      {
        icon: "home",
        label: "Home",
        separator: false,
        link: "/",
      },
      {
        icon: "light_mode",
        label: "Mode",
        separator: false,
      },
      {
        icon: "feedback",
        label: "Send Feedback",
        separator: false,
        link: "/send-feedback",
      },
      {
        icon: "info",
        label: "Tentang",
        separator: false,
        link: "/about",
      },
    ],
  }),

  actions: {
    openingDrawer() {
      return (this.drawerOpen = !this.drawerOpen);
    },

    changeMode(index) {
      if (index === 1) {
        if (Dark.isActive) {
          Dark.set(false);
          this.menu[1].icon = "dark_mode";
          localStorage.setItem("darkMode", "light");
        } else {
          Dark.set(true);
          this.menu[1].icon = "light_mode";
          localStorage.setItem("darkMode", "dark");
        }
      }
    },
  },
});
