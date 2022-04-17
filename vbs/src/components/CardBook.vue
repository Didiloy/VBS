<template>
  <v-card class="mx-auto secondary" elevation="6" max-width="380">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="
        image ||
        'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'
      "
    >
    </v-img>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle class="pb-0"> {{ author }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>
        <v-chip-group active-class="accent white--text" column>
          <v-chip v-for="cat in categories" :key="cat">{{ cat }}</v-chip>
        </v-chip-group>
      </div>

      <div>{{ description }}</div>
    </v-card-text>

    <v-card-actions class="pl-16">
      <v-btn color="accent" text>
        <v-icon class="accent--text">favorite</v-icon>
        Ajouter</v-btn
      >

      <v-btn color="accent" text>
        <v-icon class="accent--text">add</v-icon>
        informations
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "CardBook",
  props: {
    title: {
      required: true,
      type: String,
    },
    author: {
      required: false,
      type: String,
    },
    description: {
      required: false,
      type: String,
    },
    image: {
      required: false,
      type: String,
    },
    categories: {
      required: false,
      type: Array,
    },
  },
};
</script>
