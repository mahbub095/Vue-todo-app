import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

/* Custom CSS link */
import "./assets/sass/styles.scss";

const app = createApp(App);
app.use(createPinia());
app.mount("#app");

/* Import All of Bootstrap JS */
import * as bootstrap from "bootstrap";
