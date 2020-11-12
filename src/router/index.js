import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
          import(/* webpackChunkName: "Home" */ "@/views/Home.vue")
  },
  {
    path: "/signin",
    name: "Signin",
    component: () =>
          import(/* webpackChunkName: "Signin" */ "@/views/Signin.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;
