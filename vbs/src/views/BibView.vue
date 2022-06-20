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
  <div v-if="Object.keys(books).length > 0">
    <GridOfCard :books="books" :inBib="true" />
  </div>
  <div v-else>
    <v-container class="d-flex flex-column justify-center align-center">
      <v-icon class="grey--text pt-16" x-large>
        sentiment_very_dissatisfied
      </v-icon>
      <h1 class="grey--text Heading 1 pt-16">{{ $t("BibView.no_books") }}</h1>
      <h2 class="grey--text pt-12">{{ $t("BibView.search_to_add") }}</h2>
    </v-container>
  </div>
</template>
<script>
import GridOfCard from "../components/GridOfCard";
export default {
  name: "BibView",
  components: { GridOfCard },
  data: () => {
    return {
      books: {},
    };
  },
  mounted() {
    this.getBooks();
  },
  methods: {
    async getBooks() {
      let books = localStorage.getItem("vbs-bibliotheque");
      this.books = JSON.parse(books);
      console.log(this.books);
    },
  },
};
</script>
<style scoped>
.v-icon {
  font-size: 200px !important;
}
</style>
