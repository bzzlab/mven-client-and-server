import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import OrderCreate from "./views/order/OrderCreate.vue";

Vue.use(Router);

//assigned to a constant in order to access properties
const routes = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        }, {
            path: "/order/new",
            name: "order-create",
            component: OrderCreate
        },/*
        {
            path: "/about",
            name: "about",
            component: About,
        }, */{
            path: "*",
            redirect: "/"
        }
    ],
    linkActiveClass: 'active'
});

//export routes (aka navigation information)
export default routes;