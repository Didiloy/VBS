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
  <v-app-bar class="secondary" flat dense app clipped-left>
    <v-app-bar-nav-icon @click="$emit('drawerEvent')"></v-app-bar-nav-icon>
    <v-toolbar-title class="text-uppercase grey--text" @click="goHome"
      >vbs</v-toolbar-title
    >

    <v-spacer></v-spacer>
    <v-text-field
      label="Recherche"
      placeholder="Recherche..."
      rounded
      background-color="primary"
      clearable
      dense
      hide-details
      clear-icon
      class="shrink mx-4"
      v-model="textfield"
      v-on:keyup.enter="search"
    ></v-text-field>

    <v-btn icon class="accent" height="40px" @click="search">
      <v-icon class="white--text">mdi-magnify</v-icon>
    </v-btn>
    <!-- add a little spacing -->
    <div></div>
  </v-app-bar>
</template>

<script>
import router from "../router/index";
import { ref } from "@vue/composition-api";
export default {
  name: "NavBar",
  emits: ["drawerEvent"],
  setup() {
    let textfield = ref("");

    function search() {
      router.replace(`/search/${textfield.value}`);
      textfield.value = "";
    }
    /**
     * Méthode permettant de retourner a la vue HomeView
     */
    function goHome() {
      router.replace(`/`);
    }

    return {
      textfield,
      search,
      goHome,
    };
  },
};
</script>
<style scoped></style>
