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
  <div class="" style="height: 100%">
    <v-row align="center" justify="space-around" style="height: 100%">
      <v-col
        cols="6"
        class="d-flex justify-center align-center"
        style="height: 100%"
      >
        <v-img
          max-height="80%"
          max-width="80%"
          width="80%"
          height="auto"
          class="pt-5"
          :src="
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.large
              : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'
          "
          style="border-radius: 20px !important; object-fit: cover"
        ></v-img>
      </v-col>
      <v-col cols="6" class="" style="height: 100%">
        <v-row align="center" justify="center">
          <h1 class="pt-10 text-h3">{{ book.volumeInfo.title }}</h1>
        </v-row>
        <v-row align="center" justify="space-around">
          <p
            v-for="author in book.volumeInfo.authors"
            :key="author"
            class="pt-10 text-h5"
          >
            {{ author }}
          </p>
          <p class="pt-10 text-body">{{ book.volumeInfo.publishedDate }}</p>
        </v-row>
        <v-row align="center" justify="space-around">
          <v-chip-group active-class="accent white--text" column>
            <v-chip
              v-for="n in book.volumeInfo.categories
                ? book.volumeInfo.categories.length - 1 > 3
                  ? 3
                  : book.volumeInfo.categories.length - 1
                : 0"
              :key="n"
              >{{ book.volumeInfo.categories[n] }}</v-chip
            >
          </v-chip-group>
        </v-row>
        <v-row align="center" justify="space-around">
          <p class="pt-10 text-body">
            Note Google: {{ book.volumeInfo.averageRating }}/5
          </p>
          <p class="pt-10 text-body">{{ book.volumeInfo.pageCount }} pages</p>
        </v-row>
        <v-row align="center" justify="space-around">
          <span
            class="pt-10 text-body"
            v-html="book.volumeInfo.description"
            style="width: 90%"
          ></span>
        </v-row>
        <v-row align="center" justify="space-around" class="py-10">
          <v-btn v-if="inBib" class="accent" text @click="DelFromBib">
            <v-icon class="white--text">delete</v-icon>
            Supprimer</v-btn
          >
          <v-btn v-else class="accent" text @click="AddToBib">
            <v-icon class="white--text">favorite</v-icon>
            Ajouter</v-btn
          >
          <v-btn v-if="inSouhaits" class="accent" text @click="DelFromSouhaits">
            <v-icon class="white--text">delete</v-icon
            ><!--Change icon -->
            Retirer des souhait</v-btn
          >
          <v-btn v-else class="accent" text @click="AddToSouhaits">
            <v-icon class="white--text">playlist_add</v-icon
            ><!--Change icon -->
            Liste de souhait</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      app
      right
      top
      content-class="d-flex justify-space-between align-center"
    >
      {{ snackbarText }}
      <v-btn color="accent" text @click="snackbar = false"> Fermer </v-btn>
    </v-snackbar>
  </div>
</template>
<script>
import { SearchById } from "@/api/api.js";
import router from "../router/index.js";

export default {
  name: "InformationView",
  components: {},
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  data: () => {
    return {
      book: {},
      inBib: false,
      inSouhaits: false,
      snackbar: false,
      timeout: 2000,
      snackbarText: "",
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    async search() {
      // console.log(this.id);
      await SearchById(this.id).then((response) => {
        this.book = response;
        // console.log(this.book);
        this.InBib();
        this.InSouhaits();
      });
    },
    InBib() {
      let books = localStorage.getItem("vbs-bibliotheque");
      books = JSON.parse(books);
      if (books[this.book.id]) {
        // console.log("InBib true ");
        this.inBib = true;
      } else {
        // console.log("false " + books[this.book.id]);
        this.inBib = false;
      }
    },
    InSouhaits() {
      let books = localStorage.getItem("vbs-souhaits");
      books = JSON.parse(books);
      if (books[this.book.id]) {
        // console.log("InSouhait true ");
        this.inSouhaits = true;
      } else {
        // console.log("InSouhait false " + books[this.book.id]);
        this.inSouhaits = false;
      }
    },
    async DelFromBib() {
      let books = localStorage.getItem("vbs-bibliotheque");
      if (!books) {
        books = {};
      } else {
        books = JSON.parse(books);
      }
      try {
        // console.log(books, this.id);
        delete books[this.id];
        localStorage.setItem("vbs-bibliotheque", JSON.stringify(books));
        this.snackbar = true;
        this.snackbarText = "Livre supprimé !";
        await new Promise((r) => setTimeout(r, 2000));
        router.go();
      } catch (error) {
        console.warn(error);
      }
    },
    async DelFromSouhaits() {
      let books = localStorage.getItem("vbs-souhaits");
      if (!books) {
        books = {};
      } else {
        books = JSON.parse(books);
      }
      try {
        // console.log(books, this.id);
        delete books[this.id];
        localStorage.setItem("vbs-souhaits", JSON.stringify(books));
        this.snackbar = true;
        this.snackbarText = "Livre supprimé !";
        await new Promise((r) => setTimeout(r, 2000));
        router.go();
      } catch (error) {
        console.warn(error);
      }
    },
    async AddToBib() {
      let books = localStorage.getItem("vbs-bibliotheque");
      if (!books) {
        books = {};
      } else {
        books = JSON.parse(books);
      }

      let bookToAdd = {
        id: this.book.id,
        title: this.book.volumeInfo.title,
        author: this.book.volumeInfo.authors,
        description: this.book.volumeInfo.description,
        imageLinks: {
          thumbnail: this.book.volumeInfo.imageLinks
            ? this.book.volumeInfo.imageLinks.thumbnail
            : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png",
        },
        categories: this.book.volumeInfo.categories,
      };
      // console.log(books, this.id);
      try {
        books[this.id] = {
          volumeInfo: bookToAdd,
        };
        // books = Object.assign(books, bookToAdd);
        localStorage.setItem("vbs-bibliotheque", JSON.stringify(books));
        this.snackbar = true;
        this.snackbarText = "Livre enregistré !";
        await new Promise((r) => setTimeout(r, 2000));
        router.go();
      } catch (error) {
        console.warn(error);
      }
    },
    async AddToSouhaits() {
      let books = localStorage.getItem("vbs-souhaits");
      if (!books) {
        books = {};
      } else {
        books = JSON.parse(books);
      }

      let bookToAdd = {
        id: this.book.id,
        title: this.book.volumeInfo.title,
        author: this.book.volumeInfo.authors,
        description: this.book.volumeInfo.description,
        imageLinks: {
          thumbnail: this.book.volumeInfo.imageLinks
            ? this.book.volumeInfo.imageLinks.thumbnail
            : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png",
        },
        categories: this.book.volumeInfo.categories,
      };
      // console.log(books, this.id);
      try {
        books[this.id] = {
          volumeInfo: bookToAdd,
        };
        // books = Object.assign(books, bookToAdd);
        localStorage.setItem("vbs-souhaits", JSON.stringify(books));
        this.snackbar = true;
        this.snackbarText = "Livre enregistré !";
        await new Promise((r) => setTimeout(r, 2000));
        router.go();
      } catch (error) {
        console.warn(error);
      }
    },
  },
  watch: {
    //refresh components a chaque changement de name
    id: function () {
      this.search();
    },
  },
};
</script>
<style scoped>
/* .v-icon {
  font-size: 200px !important;
} */
</style>
