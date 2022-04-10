<template>
  <v-navigation-drawer app class="secondary" clipped permanent>
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
    <template v-slot:append>
      <div class="pa-2">
        <v-card align="center" class="pa-3 secondary">
          <v-avatar size="40">
            <v-icon class="grey--text" x-large> account_circle </v-icon>
          </v-avatar>
          <div class="" v-if="computedConnected">
            <v-btn class="accent">
              <v-icon class="white--text pr-2"> logout</v-icon>
              Se Déconnecter
            </v-btn>
          </div>
          <div v-else>
            <v-btn class="accent">
              <v-icon class="white--text pr-2"> login</v-icon>
              Se Connecter
            </v-btn>
          </div>
        </v-card>
      </div>
    </template>
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
      connected: false,
    };
  },
  computed: {
    computedConnected() {
      return this.connected;
    },
  },
  methods: {
    setConnected: function () {
      //Je verifie si il y a des éléments dans le local storage
      //Si il n'y en a pas j'ajoute un objet pour me permettre de dire si il est connecté
      if (localStorage.getItem("vsb-connected").length == 0) {
        localStorage.setItem(
          "vbs-connected",
          JSON.stringify({ connected: false })
        ); //Je met un objet vide dans le local storage sous la clé fav pour me permettre de récupérer les favoris
      }
      try {
        let localStorageConnected = localStorage.getItem("vbs-connected");
        this.connected = JSON.parse(localStorageConnected);
      } catch (error) {
        console.log(
          "impossible de récupérer l'objet dans le local storage\nerror:",
          error
        );
        // notyf.error({
        //   message: "Un problème est survenu !",
        //   duration: 3000,
        //   position: { x: "right", y: "top" },
        // });
      }
    },
  },
};
</script>
<style scoped></style>
