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
  <!-- Si aucun résultat -->
  <div v-if="computedNoResults">
    <v-container class="d-flex flex-column justify-center align-center">
      <v-icon class="grey--text pt-16" x-large>
        sentiment_very_dissatisfied
      </v-icon>
      <h1 class="grey--text Heading 1 pt-16">Aucun livre trouvés !</h1>
      <h2 class="grey--text pt-12">Essayez un autre mot clé.</h2>
    </v-container>
  </div>
  <!-- Si on a des résultats -->
  <div v-else>
    <!-- tant qu'on a pas recu les résultats on affiche le skeleton loader -->
    <div v-if="!computedObjectKeys">
      <div
        class="d-flex justify-space-around align-space-around flex-wrap align-self-auto"
      >
        <v-skeleton-loader
          v-bind="attrs"
          type="image, list-item-three-line, actions"
          v-for="i in 10"
          :key="i"
        ></v-skeleton-loader>
      </div>
    </div>
    <div v-else>
      <GridOfCard :books="books" />
    </div>
  </div>
</template>
<script setup>
import { globalSearch } from "@/api/api.js";
import GridOfCard from "../components/GridOfCard";
// import router from "../router/index";
export default {
  name: "SearchView",
  components: { GridOfCard },
  props: {
    query: {
      required: true,
      type: String,
    },
  },
  data: () => {
    return {
      books: {},
      noResults: false,
      attrs: {
        class: "rounded-lg ma-10",
        boilerplate: false,
        elevation: 2,
        width: "350px",
        loading: false,
        tile: true,
      },
    };
  },
  mounted() {
    console.log("query: " + this.query);
    this.search();
  },
  computed: {
    computedObjectKeys() {
      return Object.keys(this.books).length > 0;
    },
    computedNoResults() {
      return this.noResults;
    },
  },
  methods: {
    async search() {
      await globalSearch(this.query).then((response) => {
        //console.log(response.items);
        if (response.items) {
          this.books = response.items;
        } else {
          this.books = {};
          this.noResults = true;
        }
      });
    },
  },
  watch: {
    //refresh components a chaque changement de name
    query: async function () {
      await this.search();
    },
  },
};
</script>
<style scoped>
.v-icon {
  font-size: 200px !important;
}
</style>
