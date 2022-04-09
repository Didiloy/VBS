<template>
  <v-navigation-drawer app class="secondary" clipped>
    <v-list nav dense>
      <v-list-item-group
        v-model="group"
        active-class="accent--text text--accent-4"
      >
        <v-list-item v-for="(items, i) in items" :key="i" link :to="items.path">
          <v-list-item-title>
            <v-icon class="grey--text">{{ items.icon }}</v-icon>
            {{ items.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavBar",
  data: () => {
    return {
      items: [
        { title: "Recherche", icon: "mdi-magnify", path: "/about" },
        { title: "Recommendations", icon: "article", path: null },
        { title: "Bibliothèque", icon: "favorite", path: null },
      ],
    };
  },
};
</script>
<style scoped></style>
