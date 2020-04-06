import Vue from "vue";
import { Plugin } from "vue-fragment";

import router from "./routes";
import store from "./store";

// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";

Vue.use(Plugin);

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");
