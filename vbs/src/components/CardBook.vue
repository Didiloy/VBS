<template>
  <v-card class="mx-auto secondary rounded-xl" elevation="6" max-width="380">
    <v-img
      class="white--text align-end"
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
        <v-chip-group active-class="accent white--text" column>
          <v-chip v-for="cat in categories" :key="cat">{{ cat }}</v-chip>
        </v-chip-group>
      </div>

      <div v-html="description"></div>
    </v-card-text>

    <v-card-actions class="pl-16">
      <v-btn v-if="inBib" color="accent" text @click="DelFromBib">
        <v-icon class="accent--text">delete</v-icon>
        Supprimer</v-btn
      >
      <v-btn v-else color="accent" text @click="AddToBib">
        <v-icon class="accent--text">favorite</v-icon>
        Ajouter</v-btn
      >

      <v-btn color="accent" text @click="Information">
        <v-icon class="accent--text">add</v-icon>
        informations
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { Notyf } from "notyf";
import router from "../router/index.js";
const notyf = new Notyf({
  duration: 2000,
  position: {
    x: "right",
    y: "top",
  },
});
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
        notyf.success("Livre enregistré !");
      } catch (error) {
        notyf.error("Un problème est survenu.");
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
        notyf.success("Livre supprimé !");
        await new Promise((r) => setTimeout(r, 2500));
        router.go();
      } catch (error) {
        notyf.error("Un problème est survenu.");
        console.log(error);
      }
    },
    Information() {
      router.replace("/information/" + this.id);
    },
  },
};
</script>
