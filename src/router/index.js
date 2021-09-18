import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/Layout.vue";
import HomePage from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    redirect: "/index",
    children: [
      {
        path: "index",
        name: "Index",
        component: HomePage,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
