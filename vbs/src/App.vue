<!-- This file is part of VBS.
    Copyright (C) 2022  Dylan Loya

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>. -->
<template>
  <v-app>
    <NavBar @drawerEvent="changeDrawerState" />
    <SideBar :drawerEvent="computedDrawer" />
    <v-main class="neutral">
      <router-view />
      <LayoutToTopFab />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import LayoutToTopFab from "./components/LayoutToTopFab.vue";
export default {
  name: "App",
  data() {
    return {
      drawer: true,
    };
  },
  components: {
    NavBar,
    SideBar,
    LayoutToTopFab,
  },
  mounted() {
    if (localStorage.getItem("vbs-theme").length == 0) {
      localStorage.setItem("vbs-theme", JSON.stringify({ dark: "false" }));
    }
    try {
      let localStorageTheme = localStorage.getItem("vbs-theme");
      let obj = JSON.parse(localStorageTheme);
      this.$vuetify.theme.dark = obj.dark;
    } catch (error) {
      console.log(
        "impossible de récupérer l'objet dans le local storage:",
        error
      );
    }
  },
  methods: {
    changeDrawerState() {
      console.log((this.drawer = !this.drawer));
    },
  },
  computed: {
    computedDrawer() {
      return this.drawer;
    },
  },
};
</script>
<style scoped></style>
