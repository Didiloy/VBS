<template>
  <p>Hello wordl</p>
</template>
<script>
import { SearchById } from "@/api/api.js";

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
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    async search() {
      console.log(this.id);
      await SearchById(this.id).then((response) => {
        console.log(response);
        this.book = response;
      });
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
.v-icon {
  font-size: 200px !important;
}
</style>
