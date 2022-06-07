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
    <!-- Design here -->
    <!-- Recommandation par auteur -->
    <h1 class="text-h4 ml-5">Plus du même auteur</h1>
    <v-chip-group active-class="accent white--text" column>
      <v-chip class="ml-5">{{ this.choosenAuthor }}</v-chip>
    </v-chip-group>
    <div v-if="computedNoResultsAuthors">
      <v-container class="d-flex flex-column justify-center align-center">
        <v-icon class="grey--text pt-16" x-large>
          sentiment_very_dissatisfied
        </v-icon>
        <h1 class="grey--text Heading 1 pt-2">Aucuns livres trouvés !</h1>
        <h2 class="grey--text pt-2">
          Rechargez la page pour en avoir d'autres.
        </h2>
      </v-container>
    </div>
    <div v-else>
      <div v-if="!authorsBooksComputed">
        <div
          class="d-flex wrapper"
          style="overflow-x: auto; height: 350px !important"
        >
          <v-skeleton-loader
            v-bind="attrs"
            type="image, list-item-three-line, actions"
            v-for="i in 4"
            :key="i"
          ></v-skeleton-loader>
        </div>
      </div>
      <div
        v-else
        class="d-flex wrapper"
        style="overflow-x: auto; height: 350px !important"
      >
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
              book.volumeInfo.title.length > 30
                ? book.volumeInfo.title.slice(0, 30) + ".."
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
    </div>
    <!-- Recommandations par genre -->
    <h1 class="text-h4 mt-5 ml-5">Plus du même genre</h1>
    <v-chip-group active-class="accent white--text" column>
      <v-chip class="ml-5">{{ this.choosenCategory }}</v-chip>
    </v-chip-group>
    <div v-if="computedNoResultsCategory">
      <v-container class="d-flex flex-column justify-center align-center">
        <v-icon class="grey--text pt-16" x-large>
          sentiment_very_dissatisfied
        </v-icon>
        <h1 class="grey--text Heading 1 pt-2">Aucuns livres trouvés !</h1>
        <h2 class="grey--text pt-2">
          Rechargez la page pour en avoir d'autres.
        </h2>
      </v-container>
    </div>
    <div v-else>
      <div v-if="!genreBooksComputed">
        <div
          class="d-flex wrapper"
          style="overflow-x: auto; height: 350px !important"
        >
          <v-skeleton-loader
            v-bind="attrs"
            type="image, list-item-three-line, actions"
            v-for="i in 4"
            :key="i"
          ></v-skeleton-loader>
        </div>
      </div>
      <div
        v-else
        class="d-flex wrapper"
        style="overflow-x: auto; height: 350px !important"
      >
        <v-card
          v-for="book in this.genreBooks"
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
              book.volumeInfo.title.length > 30
                ? book.volumeInfo.title.slice(0, 30) + ".."
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
    </div>
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
import { globalSearch, subjectsList } from "@/api/api.js";

//TODO verifier que j'ai pas lu les livres qui sont dans recommendations
export default {
  name: "RecommandationView",
  data: () => {
    return {
      books: null,
      authorsBooks: null,
      choosenAuthor: null,
      genreBooks: null,
      choosenCategory: null,
      noResultsCategory: false,
      noResultsAuthor: false,
      attrs: {
        class: "rounded-lg mx-10",
        boilerplate: false,
        elevation: 2,
        width: "350px",
        height: "320px",
        loading: false,
        tile: true,
      },
    };
  },
  components: {},
  async mounted() {
    await this.getBooks().then(async () => {
      //Avoir un auteur aléatoire parmis tout les auteurs
      while (
        (this.choosenAuthor == null || this.choosenAuthor === "") &&
        (this.choosenCategory == null || this.choosencategory === "")
      ) {
        //choisir un aléatoire et s'assurer qu'on tire pas une string vide
        let keys = Object.keys(this.books);
        let author =
          this.books[keys[(keys.length * Math.random()) << 0]].volumeInfo
            .author;
        let genre =
          this.books[keys[(keys.length * Math.random()) << 0]].volumeInfo
            .categories[0];
        this.choosenAuthor = author;
        this.choosenCategory = genre;
      }
      await this.getBooksByauthor(this.choosenAuthor);
      await this.getBooksByGenre(this.choosenCategory);
    });
  },
  methods: {
    async getBooks() {
      let books = localStorage.getItem("vbs-bibliotheque");
      this.books = JSON.parse(books);
      //console.log(this.books);
    },
    async getBooksByauthor(author) {
      await globalSearch(author)
        .then((response) => {
          if (response.items) {
            if (response.items == null) {
              this.authorsBooks = {};
              this.noResultsAuthor = true;
            }
            this.authorsBooks = response.items;
          } else {
            this.authorsBooks = {};
            this.noResultsAuthor = true;
          }
          // console.log("authorsBooks");
          // console.log(this.authorsBooks);
        })
        .catch((err) => console.log(err));
    },
    Information(id) {
      router.replace("/information/" + id);
    },
    async getBooksByGenre(genre) {
      try {
        if (subjectsList[genre].length > 0) {
          let randomWord =
            subjectsList[genre][
              Math.floor(Math.random() * subjectsList[genre].length)
            ];
          // console.log("RANDOM WORD: " + randomWord);
          await globalSearch(randomWord + '+subject:"' + genre + '"')
            .then((response) => {
              if (response.items) {
                if (response.items == null) {
                  this.authorsBooks = {};
                  this.noResultsAuthor = true;
                }
                this.genreBooks = response.items;
              } else {
                this.genreBooks = {};
                this.noResultsCategory = true;
              }
              // console.log("genreBooks");
              // console.log(this.genreBooks);
            })
            .catch((err) => console.log(err));
        }
      } catch (error) {
        await globalSearch("subject:" + genre)
          .then((response) => {
            if (response.items) {
              this.genreBooks = response.items;
            } else {
              this.genreBooks = {};
              this.noResultsCategory = true;
            }
          })
          .catch((err) => console.log(err));
      }
    },
  },
  computed: {
    authorsBooksComputed() {
      return this.authorsBooks;
    },
    genreBooksComputed() {
      return this.genreBooks;
    },
    computedNoResultsAuthors() {
      return this.noResultsAuthor;
    },
    computedNoResultsCategory() {
      return this.noResultsCategory;
    },
  },
};
</script>
<style scoped>
.ic {
  font-size: 200px !important;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
  margin: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--v-primary-base);
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--v-secondary-base);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--v-accent-base);
}
</style>
