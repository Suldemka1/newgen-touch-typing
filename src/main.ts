import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/";
import VueCookies from "vue-cookies";

createApp(App).use(VueCookies, { expires: "7d" }).use(store).mount("#app");
