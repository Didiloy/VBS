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
  <v-navigation-drawer app class="primary" clipped permanent>
    <v-list nav dense>
      <v-list-item-group active-class="accent--text text--accent">
        <v-list-item v-for="(items, i) in items" :key="i" link :to="items.path">
          <v-list-item-title>
            <v-icon class="grey--text">{{ items.icon }}</v-icon>
            {{ items.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-card align="center" class="pa-3 primary">
          <v-avatar size="40">
            <v-icon class="grey--text" x-large> account_circle </v-icon>
          </v-avatar>
          <div class="d-flex justify-space-around">
            <div class="mt-4">
              <p class="grey--text font-italic">{{ username }}</p>
            </div>
          </div>
          <div class="d-flex justify-space-around">
            <div class="mt-4">
              <p class="grey--text">Dark mode</p>
            </div>
            <div>
              <v-switch inset color="secondary" @click="darkMode()"></v-switch>
            </div>
          </div>
          <div>
            <v-btn class="accent" to="/about">
              <v-icon class="white--text pr-2"> login</v-icon>
              A propos
            </v-btn>
          </div>
        </v-card>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import router from "../router/index";
export default {
  name: "NavBar",
  data: () => {
    return {
      username: "",
      items: [
        { title: "Acceuil", icon: "home", path: "/" },
        { title: "Recommendations", icon: "article", path: "/recommandation" },
        { title: "Liste de souhaits", icon: "playlist_add", path: "/souhaits" },
        { title: "Bibliothèque", icon: "favorite", path: "/bibliotheque" },
      ],
    };
  },
  computed: {},
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      let theme = localStorage.getItem("vbs-theme");
      if (!theme) {
        theme = { dark: this.$vuetify.theme.dark };
      } else {
        theme = JSON.parse(theme);
        theme.dark = this.$vuetify.theme.dark;
      }
      try {
        localStorage.setItem("vbs-theme", JSON.stringify(theme));
      } catch (error) {
        console.log(error);
      }
    },

    connectBtn() {
      router.replace("/login");
    },
  },
};
</script>
<style scoped></style>
