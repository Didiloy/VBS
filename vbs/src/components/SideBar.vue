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
  <v-navigation-drawer app class="tertiary" temporary v-model="drawer">
    <v-list nav dense>
      <v-list-item-group active-class="ontertiary--text text--ontertiary">
        <v-list-item v-for="(items, i) in items" :key="i" link :to="items.path">
          <v-list-item-title>
            <v-icon class="ontertiary--text">{{ items.icon }}</v-icon>
            {{ $t(`SideBar.title_${i + 1}`) }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-card align="center" class="pa-3 tertiary">
          <div class="d-flex justify-space-around">
            <div class="d-flex justify-space-around">
              <div class="mt-4 mr-4">
                <p class="ontertiary--text">
                  <v-icon class="ontertiary--text">dark_mode</v-icon>
                </p>
              </div>
              <div>
                <v-switch
                  inset
                  color="ontertiary"
                  @click="darkMode()"
                  v-model="switchDarkMode"
                ></v-switch>
              </div>
            </div>
            <div class="locale-changer mt-4">
              <select
                v-model="$i18n.locale"
                class="onsecondary--text pa-1 secondary"
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
            <v-btn class="ontertiary" to="/about">
              <v-icon class="tertiary--text pr-2"> info</v-icon>
              {{ $t("SideBar.about") }}
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
import { EventBus } from "./event_bus";
export default {
  name: "SideBar",
  setup() {
    const items = ref([
      { title: "Acceuil", icon: "home", path: "/" },
      { title: "Recommandations", icon: "article", path: "/recommandation" },
      { title: "Liste de souhaits", icon: "playlist_add", path: "/souhaits" },
      { title: "Bibliothèque", icon: "favorite", path: "/bibliotheque" },
    ]);

    const drawer = ref(false);

    EventBus.$on("drawerEvent", () => {
      drawer.value = !drawer.value;
    });

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
      darkMode,
      items,
      drawer,
    };
  },
  computed: {
    switchDarkMode: {
      get: function () {
        return this.$vuetify.theme.dark;
      },
      set: function () {},
    },
  },
};
</script>
<style scoped></style>
