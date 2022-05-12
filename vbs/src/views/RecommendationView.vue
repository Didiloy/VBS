<template>
  <div v-if="Object.keys(books).length > 0">
    <!-- Design here -->
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
// import GridOfCard from "../components/GridOfCard";
export default {
  name: "RecommandationView",
  components: {},
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
.ic {
  font-size: 200px !important;
}
</style>
