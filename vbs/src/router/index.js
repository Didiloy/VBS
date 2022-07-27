// This file is part of VBS.
//     Copyright (C) 2022  Dylan Loya

//     This program is free software: you can redistribute it and/or modify
//     it under the terms of the GNU General Public License as published by
//     the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.

//     This program is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.

//     You should have received a copy of the GNU General Public License
//     along with this program.  If not, see <https://www.gnu.org/licenses/>.
/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import BibView from "../views/BibView.vue";
import InformationView from "../views/InformationView.vue";
import RecommendationView from "../views/RecommendationView.vue";
import SouhaitsView from "../views/SouhaitsView.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
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
        path: "/version",
        name: "VersionView",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/VersionView.vue"),
        props: true,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
];

const router = new VueRouter({
    // mode: "history",
    routes,
});

export default router;