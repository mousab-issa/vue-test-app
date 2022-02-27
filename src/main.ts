import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import axios from "axios";
import articles from "./store/modules/articles";

const store = createStore({
  modules: {
    articles,
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
