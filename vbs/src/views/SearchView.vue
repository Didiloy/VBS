<template>
  <GridOfCard :books="books" />
</template>
<script>
import { globalSearch } from "@/api/api.js";
import GridOfCard from "../components/GridOfCard";
export default {
  name: "SearchView",
  components: { GridOfCard },
  props: {
    query: {
      required: true,
      type: String,
    },
  },
  data: () => {
    return {
      books: {},
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    async search() {
      await globalSearch(this.query).then((response) => {
        console.log(response.items);
        this.books = response.items;
      });
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
<style scoped></style>
