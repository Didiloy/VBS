<template>
  <v-app-bar class="secondary" flat dense app clipped-left>
    <v-toolbar-title class="text-uppercase grey--text">vbs</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-text-field
      label="Recherche"
      placeholder="Recherche..."
      rounded
      background-color="primary"
      clearable
      dense
      hide-details
      clear-icon
      class="shrink mx-4"
      v-model="textfield"
    ></v-text-field>

    <v-btn icon class="accent" height="40px" @click="search">
      <v-icon class="white--text">mdi-magnify</v-icon>
    </v-btn>
    <!-- add a little spacing -->
    <div></div>
  </v-app-bar>
</template>

<script>
import { globalSearch } from "@/api/api.js";
export default {
  name: "NavBar",
  data: () => {
    return {
      textfield: "",
    };
  },
  methods: {
    async search() {
      await globalSearch(this.textfield).then((response) => {
        console.log(response);
      });
      this.textfield = "";
    },
  },
  mounted() {},
};
</script>
<style scoped></style>
