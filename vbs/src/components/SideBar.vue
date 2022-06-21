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
  <v-navigation-drawer app class="primary" clipped v-model="drawer">
    <v-list nav dense>
      <v-list-item-group active-class="accent--text text--accent">
        <v-list-item v-for="(items, i) in items" :key="i" link :to="items.path">
          <v-list-item-title>
            <v-icon class="grey--text">{{ items.icon }}</v-icon>
            {{ $t(`SideBar.title_${i + 1}`) }}
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
            <div class="d-flex justify-space-around">
              <div class="mt-4 mr-4">
                <p class="grey--text"><v-icon>dark_mode</v-icon></p>
              </div>
              <div>
                <v-switch
                  inset
                  color="secondary"
                  @click="darkMode()"
                ></v-switch>
              </div>
            </div>
            <div class="locale-changer mt-4">
              <select
                v-model="$i18n.locale"
                class="accent--text pa-1"
                style="border: 1px solid; border-radius: 5px"
              >
                <option
                  v-for="locale in $i18n.availableLocales"
                  :key="`locale-${locale}`"
                  :value="locale"
                >
                  {{ locale.toUpperCase() }}
                </option>
              </select>
            </div>
          </div>
          <div>
            <v-btn class="accent" to="/about">
              <v-icon class="white--text pr-2"> info</v-icon>
              A propos
            </v-btn>
          </div>
        </v-card>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
/* eslint-disable vue/no-mutating-props */
import { ref } from "@vue/composition-api";
export default {
  name: "SideBar",
  props: {
    drawerEvent: Boolean,
  },
  setup() {
    const username = ref("");
    // let drawer = ref(props.drawerEvent);
    const items = ref([
      { title: "Acceuil", icon: "home", path: "/" },
      { title: "Recommandations", icon: "article", path: "/recommandation" },
      { title: "Liste de souhaits", icon: "playlist_add", path: "/souhaits" },
      { title: "Bibliothèque", icon: "favorite", path: "/bibliotheque" },
    ]);

    function darkMode() {
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
    }

    return {
      username,
      darkMode,
      items,
      // drawer,
    };
  },
  computed: {
    drawer: {
      get: function () {
        return this.drawerEvent;
      },
      set: function () {},
    },
  },
};
</script>
<style scoped></style>
