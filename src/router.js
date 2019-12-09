import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import OrderCreate from "./views/order/OrderCreate.vue";
import OrderList from "./views/order/OrderList";
import OrderEdit from "./views/order/OrderEdit";
import OrderDelete from "./views/order/OrderDelete";
import Register from "./views/authentication/Register";
import Login from "./views/authentication/Login";
import * as auth from './services/AuthService'

Vue.use(Router);

//assigned to a constant in order to access properties
//const isLoggedIn = false;

export default new Router({
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
            component: OrderCreate,
            beforeEnter: (toolbar,from,next) => {
                if (auth.isLoggedIn){
                    next();
                } else {
                    next('/login');
                }
            }
        }, {
            path: "/order",
            name: "order-list",
            component: OrderList,
            beforeEnter: (toolbar,from,next) => {
                if (auth.isLoggedIn){
                    next();
                } else {
                    next('/login');
                }
            }
        }, {
            path: "/order/:id",
            name: "order-edit",
            component: OrderEdit,
            beforeEnter: (toolbar,from,next) => {
                if (auth.isLoggedIn){
                    next();
                } else {
                    next('/login');
                }
            }
        }, {
            path: "/order/del/:id",
            name: "order-delete",
            component: OrderDelete,
            beforeEnter: (toolbar,from,next) => {
                if (auth.isLoggedIn){
                    next();
                } else {
                    next('/login');
                }
            }
        },
        {
            path: "/login",
            name: "login",
            component: Login,
            beforeEnter: (toolbar,from,next) => {
                //if (!auth.isLoggedIn){
                if (true){
                    next();
                } else {
                    next('/');
                }
            }
        },{
            path: "/register",
            name: "register",
            component: Register,
            beforeEnter: (toolbar,from,next) => {
                if (!auth.isLoggedIn){
                    next();
                } else {
                    next('/');
                }
            }
        },
        {
            path: "*",
            redirect: "/"
        }
    ],
    linkActiveClass: 'active'
});

//export routes (aka navigation information)
//export default routes;
