<template>
  <div
    class="d-flex justify-space-around align-space-around flex-wrap align-self-auto"
  >
    <CardBook
      v-for="book in books"
      :key="book.id"
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
          : ''
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
  },
  data: () => {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped></style>
