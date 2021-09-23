import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/Layout.vue";
import HomePage from "@/views/Home.vue";
import AboutUs from "@/views/About.vue";
import NewsCenter from "@/views/News.vue";
import ContactUs from "@/views/Contact.vue";
import ViewList from "@/views/ViewPage.vue";
import Book from "@/views/Book.vue";
import BookDetails from "@/views/BookDetails.vue";

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
        path: "/view/:id",
        name: "ViewPage",
        component: ViewList,
      },
      {
        path: "/book/:id",
        name: "Book",
        component: Book,
      },
      {
        path: "/bookDetails",
        name: "BookDetails",
        component: BookDetails,
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
