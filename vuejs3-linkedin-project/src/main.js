import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import MyProducts from "./components/MyProducts.vue";

const app = createApp(App);
app.component("MyProducts", MyProducts);
app.use(router);
app.mount("#app");
