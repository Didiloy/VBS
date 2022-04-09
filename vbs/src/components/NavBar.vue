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
    ></v-text-field>

    <v-btn icon class="accent" height="40px">
      <v-icon class="white--text">mdi-magnify</v-icon>
    </v-btn>
    <!-- add a little spacing -->
    <div></div>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
<style scoped></style>
