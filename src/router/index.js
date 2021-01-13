import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/upgrade-subscrpiton",
    name: "Upgrade",
    component: () => import("../components/Upgrade.vue")
  },
  {
    path: "/subscrpiton-payment",
    name: "Payment",
    component: () => import("../components/Payment.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
