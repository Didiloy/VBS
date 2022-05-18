/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SearchView from "../views/SearchView.vue";
import BibView from "../views/BibView.vue";
import InformationView from "../views/InformationView.vue";
import RecommendationView from "../views/RecommendationView.vue";
import SouhaitsView from "../views/SouhaitsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: LoginView,
    component: LoginView,
  },
  {
    path: "/search/:query",
    name: "searchview",
    component: SearchView,
    props: true,
  },
  {
    path: "/bibliotheque",
    name: "bibview",
    component: BibView,
    props: true,
  },
  {
    path: "/information/:id",
    name: "informationview",
    component: InformationView,
    props: true,
  },
  {
    path: "/information",
    name: "informationview",
    component: InformationView,
    props: true,
  },
  {
    path: "/recommandation",
    name: "RecommandationView",
    component: RecommendationView,
    props: true,
  },
  {
    path: "/souhaits",
    name: "SouhaitsView",
    component: SouhaitsView,
    props: true,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
