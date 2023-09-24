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
  <v-card class="mx-3 secondary rounded-xl" elevation="0" max-width="380">
    <v-img
      class="onsecondary--text align-end"
      height="200px"
      :src="
        image ||
        'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'
      "
    >
    </v-img>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle class="pb-0"> {{ author }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>
        <v-chip-group active-class="onsecondary secondary--text" column>
          <div v-if="cat">
            <v-chip
              v-for="(cat, i) in cat"
              :key="i"
              class="onsecondary secondary--text"
              >{{ cat }}</v-chip
            >
          </div>
        </v-chip-group>
      </div>

      <div v-html="description"></div>
    </v-card-text>

    <v-card-actions class="justify-end">
      <v-btn
        v-if="inBib"
        color="onprimary--text primary"
        @click="DelFromBib"
        rounded
      >
        <v-icon class="onprimary--text">delete</v-icon>
        {{ $t("CardBook.delete") }}</v-btn
      >
      <v-btn
        v-else-if="inSouhait"
        color="onprimary--text primary"
        @click="DelFromSouhaits"
        rounded
      >
        <v-icon class="onprimary--text">delete</v-icon>
        {{ $t("CardBook.delete") }}</v-btn
      >
      <v-btn v-else color="onprimary--text primary" @click="AddToBib" rounded>
        <v-icon class="onprimary--text">favorite</v-icon>
        {{ $t("CardBook.add") }}</v-btn
      >

      <v-btn color="onprimary--text primary" @click="Information" rounded>
        <v-icon class="onprimary--text">add</v-icon>
        {{ $t("CardBook.informations") }}
      </v-btn>
    </v-card-actions>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      app
      right
      top
      content-class="d-flex justify-space-between align-center"
    >
      {{ snackbarText }}
      <v-btn color="primary" text @click="snackbar = false">
        {{ $t("CardBook.close") }}
      </v-btn>
    </v-snackbar>
  </v-card>
</template>
<script>
import router from "../router/index.js";

export default {
  name: "CardBook",
  props: {
    id: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    author: {
      required: false,
      type: String,
    },
    description: {
      required: false,
      type: String,
    },
    image: {
      required: false,
      type: String,
    },
    categories: {
      required: false,
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
    return {
      cat: null,
      snackbar: false,
      timeout: 2000,
      snackbarText: "",
    };
  },
  mounted() {
    if (this.categories) {
      if (this.categories.length < 3) {
        this.cat = [...this.categories];
      } else {
        this.cat = this.categories.slice(0, 3);
      }
    }
  },
  methods: {
    AddToBib() {
      let books = localStorage.getItem("vbs-bibliotheque");
      if (!books) {
        books = {};
      } else {
        books = JSON.parse(books);
      }
      let bookToAdd = {
        id: this.id,
        title: this.title,
        author: this.author,
        description: this.description,
        imageLinks: {
          thumbnail: this.image,
        },
        categories: this.categories,
      };
      console.log(books, this.id);
      try {
        books[this.id] = {
          volumeInfo: bookToAdd,
        };
        // books = Object.assign(books, bookToAdd);
        localStorage.setItem("vbs-bibliotheque", JSON.stringify(books));
        this.snackbar = true;
        this.snackbarText = "Livre enregistré !";
      } catch (error) {
        console.log(error);
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
        console.log(books, this.id);
        delete books[this.id];
        localStorage.setItem("vbs-bibliotheque", JSON.stringify(books));
        this.snackbar = true;
        this.snackbarText = "Livre supprimé !";
        await new Promise((r) => setTimeout(r, 2000));
        router.go();
      } catch (error) {
        console.log(error);
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
        console.log(books, this.id);
        delete books[this.id];
        localStorage.setItem("vbs-souhaits", JSON.stringify(books));
        this.snackbar = true;
        this.snackbarText = "Livre supprimé !";
        await new Promise((r) => setTimeout(r, 2000));
        router.go();
      } catch (error) {
        console.log(error);
      }
    },
    Information() {
      router.replace("/information/" + this.id);
    },
  },
};
</script>
