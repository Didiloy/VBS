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
    <v-toolbar-title class="text-uppercase grey--text" @click="goHome">
      <v-img class="" height="100px" width="100px" :src="icone_vbs"></v-img>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-select
      v-model="selected_categorie"
      :items="categories"
      outlined
      dense
      class="accent--text pa-1 shrink mx-2 mt-6"
      style="width: 10%"
      item-color="accent"
    ></v-select>
    <!-- <select
      v-model="selected_categorie"
      class="accent--text pa-1"
      style="border: 1px solid; border-radius: 5px"
    >
      <option v-for="cat in categories" :key="cat" :value="cat">
        {{ cat }}
      </option>
    </select> -->
    <v-text-field
      :label="$t('NavBar.search_label')"
      :placeholder="$t('NavBar.search_placeholder')"
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
    let icone_vbs = require("../logo/78986_VBS_flat_RK_04.png");
    const categories = [
      "All",
      "Adult",
      "Biography",
      "Children",
      "Contemporary",
      "Crime",
      "Education",
      "Fantasy",
      "Fiction",
      "Horror",
      "Humor",
      "Juvenile Fiction",
      "Religion",
      "Romance",
      "Manga",
      "Mistery",
      "Poetry",
      "Science",
      "Young Adult Fiction",
    ];
    let selected_categorie = ref("All");
    function search() {
      selected_categorie.value === "All"
        ? router.replace(`/search/${textfield.value}`)
        : router.replace(
            `/search/${textfield.value}+subject:"${selected_categorie.value}"`
          );
      textfield.value = "";
      // selected_categorie.value = "All";
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
      categories,
      selected_categorie,
      icone_vbs,
    };
  },
};
</script>
<style scoped></style>
