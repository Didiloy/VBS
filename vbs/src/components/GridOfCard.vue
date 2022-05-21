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
  <div
    class="d-flex justify-space-around align-space-around flex-wrap align-self-auto"
  >
    <CardBook
      v-for="book in books"
      :key="book.id"
      :inBib="inBib"
      :inSouhait="inSouhait"
      :id="book.id || book.volumeInfo.id"
      :title="book.volumeInfo.title"
      :author="
        book.volumeInfo.authors
          ? book.volumeInfo.authors[0]
            ? book.volumeInfo.authors[0]
            : 'Inconnu'
          : 'Inconnu'
      "
      :description="
        book.volumeInfo.description
          ? book.volumeInfo.description.length > 100
            ? book.volumeInfo.description.slice(0, 100)
            : book.volumeInfo.description
          : 'Pas de description pour ce livre.'
      "
      :image="
        book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null
      "
      :categories="
        book.volumeInfo.categories ? book.volumeInfo.categories : null
      "
      class="ma-10"
    />
  </div>
</template>

<script>
// import { globalSearch } from "@/api/api.js";
// import router from "../router/index";
import CardBook from "../components/CardBook";
export default {
  name: "GridOfCard",
  components: {
    CardBook,
  },
  props: {
    books: {
      required: true,
      type: Array,
    },
    inBib: {
      required: false,
      type: Boolean,
    },
    inSouhait: {
      required: false,
      type: Boolean,
    },
  },
  data: () => {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped></style>
