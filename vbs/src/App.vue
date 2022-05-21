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
    <NavBar />
    <SideBar :key="key" /><!-- key is for re-render the component -->
    <v-main class="primary">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
export default {
  name: "App",
  data() {
    return {
      key: 0,
    };
  },
  components: {
    NavBar,
    SideBar,
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
  methods: {},
};
</script>
<style scoped></style>
