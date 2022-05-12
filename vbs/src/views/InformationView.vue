<template>
  <div class="" style="height: 100%">
    <v-row align="center" justify="space-around" style="height: 100%">
      <v-col
        cols="6"
        class="d-flex justify-center align-center"
        style="height: 100%"
      >
        <v-img
          max-height="600"
          max-width="600"
          width="auto"
          height="auto"
          class="px-5"
          :src="book.volumeInfo.imageLinks.large"
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
        <v-row align="center" justify="space-around" class="pt-10">
          <v-btn v-if="inBib" class="accent" text @click="DelFromBib">
            <v-icon class="white--text">delete</v-icon>
            Supprimer</v-btn
          >
          <v-btn v-else class="accent" text @click="AddToBib">
            <v-icon class="white--text">favorite</v-icon>
            Ajouter</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { SearchById } from "@/api/api.js";
import router from "../router/index.js";
import { Notyf } from "notyf";
const notyf = new Notyf({
  duration: 2000,
  position: {
    x: "right",
    y: "top",
  },
});
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
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    async search() {
      console.log(this.id);
      await SearchById(this.id).then((response) => {
        this.book = response;
        console.log(this.book);
        this.InBib();
      });
    },
    InBib() {
      let books = localStorage.getItem("vbs-bibliotheque");
      books = JSON.parse(books);
      if (books[this.book.id]) {
        console.log("true ");
        this.inBib = true;
      } else {
        console.log("false " + books[this.book.id]);
        this.inBib = false;
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
          thumbnail: this.book.volumeInfo.imageLinks.thumbnail,
        },
        categories: this.book.volumeInfo.categories,
      };
      console.log(books, this.id);
      try {
        books[this.id] = {
          volumeInfo: bookToAdd,
        };
        // books = Object.assign(books, bookToAdd);
        localStorage.setItem("vbs-bibliotheque", JSON.stringify(books));
        notyf.success("Livre enregistré !");
        await new Promise((r) => setTimeout(r, 2500));
        router.go();
      } catch (error) {
        notyf.error("Un problème est survenu.");
        console.log(error);
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
