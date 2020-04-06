import Vue from "vue";
import VueRouter from "vue-router";

import Dashboard from "./components/Dashboard.vue";
import SignIn from "./components/SignIn";

const routes = [
    { path: "/dashboard", component: Dashboard },
    { path: "/sign-in", component: SignIn },
    { path: "*", redirect: "/dashboard" },
];

Vue.use(VueRouter);
const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
    const publics = ["/sign-in"];
    const ls = localStorage.getItem("@AppVuex[session]");
    const session = ls !== null ? JSON.parse(ls) : { is_authorized: false };
    if (publics.indexOf(to.path) === -1 && !session.is_authorized) {
        next({ path: "/sign-in" });
    } else {
        next();
    }
});

export default router;
