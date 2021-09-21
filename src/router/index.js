import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/Layout.vue";
import HomePage from "@/views/Home.vue";
import AboutUs from "@/views/About.vue";
import NewsCenter from "@/views/News.vue";
import ContactUs from "@/views/Contact.vue";
import ViewList from "@/views/View.vue";
import Book from "@/views/Book.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: HomePage,
      },
      {
        path: "/about",
        name: "About",
        component: AboutUs,
      },
      {
        path: "/news",
        name: "News",
        component: NewsCenter,
      },
      {
        path: "/contact",
        name: "Contact",
        component: ContactUs,
      },
      {
        path: "/view",
        name: "view",
        component: ViewList,
      },
      {
        path: "/book",
        name: "Book",
        component: Book,
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
