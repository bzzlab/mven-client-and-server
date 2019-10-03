import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./assets/styles/theme.css";

//importing vue components
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
