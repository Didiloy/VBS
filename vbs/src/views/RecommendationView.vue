<template>
  <div v-if="Object.keys(books).length > 0">
    <!-- Design here -->
    <h1 class="text-h4">Recommendations par auteur</h1>
    <p class="text-subtitle-1">{{ this.choosenAuthor }}</p>
    <div class="d-flex wrapper" style="overflow-x: auto" height="400">
      <v-card
        v-for="book in this.authorsBooks"
        :key="book.id"
        class="mx-2 secondary rounded-xl"
        elevation="6"
        max-width="380"
        max-height="320"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          width="380"
          max-width="380px"
          :src="
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'
          "
        />
        <v-img />
        <v-card-title>
          {{
            book.volumeInfo.title.length > 35
              ? book.volumeInfo.title.slice(0, 35) + ".."
              : book.volumeInfo.title
          }}
        </v-card-title>
        <v-card-actions class="justify-end">
          <v-btn color="accent" text @click="Information(book.id)">
            <v-icon class="accent--text">add</v-icon>
            informations
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <h1 class="text-h4 mt-5">Recommendations par genre</h1>
    <p class="text-subtitle-1">{{ this.choosenAuthor }}</p>
  </div>
  <div v-else>
    <v-container class="d-flex flex-column justify-center align-center">
      <v-icon class="grey--text pt-16 ic" x-large>
        sentiment_very_dissatisfied
      </v-icon>
      <h1 class="grey--text Heading 1 pt-16">Vous n'avez aucun livre !</h1>
      <h2 class="grey--text pt-12">Recherchez en pour en ajouter.</h2>
    </v-container>
  </div>
</template>
<script>
import router from "../router/index.js";

import { globalSearch } from "@/api/api.js";

export default {
  name: "RecommandationView",
  data: () => {
    return {
      books: null,
      authorsBooks: null,
      choosenAuthor: null,
    };
  },
  components: {},
  async mounted() {
    await this.getBooks().then(async () => {
      //Avoir un auteur aléatoire parmis tout les auteurs
      let keys = Object.keys(this.books);
      let author =
        this.books[keys[(keys.length * Math.random()) << 0]].volumeInfo.author;
      this.choosenAuthor = author;
      await this.getBooksByauthor(author);
    });
  },
  methods: {
    async getBooks() {
      let books = localStorage.getItem("vbs-bibliotheque");
      this.books = JSON.parse(books);
      // console.log(this.books);
    },
    async getBooksByauthor(author) {
      await globalSearch(author)
        .then((response) => {
          this.authorsBooks = response.items;
          console.log("authorsBooks");
          console.log(this.authorsBooks);
        })
        .catch((err) => console.log(err));
    },
    Information(id) {
      router.replace("/information/" + id);
    },
  },
  computed: {
    authorsBooksComputed() {
      return this.authorsBooks;
    },
  },
};
</script>
<style scoped>
.ic {
  font-size: 200px !important;
}
.wrapper::-webkit-scrollbar-track {
  color: var(--v-primary-base);
}
.wrapper::-webkit-scrollbar-thumb {
  color: var(--v-secondary-base);
}
</style>
