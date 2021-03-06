import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/Layout.vue";
import HomePage from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Surf",
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
        component: () =>
          import(/* webpackChunkName: "about-page" */ "../views/About.vue"),
      },
      {
        path: "/news",
        name: "News",
        component: () =>
          import(/* webpackChunkName: "news-page" */ "../views/News.vue"),
      },
      {
        path: "/NewsDetails",
        name: "NewsDetails",
        component: () =>
          import(
            /* webpackChunkName: "news-page" */ "../views/NewsDetails.vue"
          ),
      },
      {
        path: "/contact",
        name: "Contact",
        component: () =>
          import(/* webpackChunkName: "contact-page" */ "../views/Contact.vue"),
      },
      {
        path: "/view",
        name: "View",
        component: () =>
          import(/* webpackChunkName: "view-page" */ "../views/ViewPage.vue"),
      },
      {
        path: "/book",
        name: "Book",
        component: () =>
          import(/* webpackChunkName: "book-page" */ "../views/Book.vue"),
      },
      {
        path: "/bookDetails",
        name: "BookDetails",
        component: () =>
          import(
            /* webpackChunkName: "book-page" */ "../views/BookDetails.vue"
          ),
      },
      {
        path: "/bookSucceed",
        name: "BookSucceed",
        component: () =>
          import(
            /* webpackChunkName: "book-page" */ "../views/BookSucceed.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
