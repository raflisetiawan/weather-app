import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar, Notify } from "quasar";

import App from "./App.vue";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-symbols-sharp/material-symbols-sharp.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "quasar/src/css/index.sass";
import "./assets/main.css";
import router from "./router";
import "./config/firebase.config";
const app = createApp(App);
app.use(Quasar, {
  plugins: { Notify }, // import Quasar plugins and add here
});
app.use(createPinia());
app.use(router);

app.mount("#app");
