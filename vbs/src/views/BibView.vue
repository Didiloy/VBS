<template>
  <div v-if="books">
    <GridOfCard :books="books" />
  </div>
  <div v-else>
    <v-container class="d-flex flex-column justify-center align-center">
      <v-icon class="grey--text pt-16" x-large>
        sentiment_very_dissatisfied
      </v-icon>
      <h1 class="grey--text Heading 1 pt-16">Vous n'avez aucun livres !</h1>
      <h2 class="grey--text pt-12">Recherchez en pour en ajouter.</h2>
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
      this.books = localStorage.getItem("vbs-bibliotheque");
    },
  },
  watch: {
    //refresh components a chaque changement de name
    query: function () {
      this.search();
    },
  },
};
</script>
<style scoped>
.v-icon {
  font-size: 200px !important;
}
</style>
