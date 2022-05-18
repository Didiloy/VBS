<template>
  <v-navigation-drawer app class="primary" clipped permanent>
    <v-list nav dense>
      <v-list-item-group active-class="accent--text text--accent">
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
        <v-card align="center" class="pa-3 primary">
          <v-avatar size="40">
            <v-icon class="grey--text" x-large> account_circle </v-icon>
          </v-avatar>
          <div class="d-flex justify-space-around">
            <div class="mt-4">
              <p class="grey--text font-italic">{{ username }}</p>
            </div>
          </div>
          <div class="d-flex justify-space-around">
            <div class="mt-4">
              <p class="grey--text">Dark mode</p>
            </div>
            <div>
              <v-switch inset color="secondary" @click="darkMode()"></v-switch>
            </div>
          </div>

          <div class="" v-if="computedConnected">
            <v-btn class="accent">
              <v-icon class="white--text pr-2"> logout</v-icon>
              Se Déconnecter
            </v-btn>
          </div>
          <div v-else>
            <v-btn class="accent" to="/login">
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
import router from "../router/index";
export default {
  name: "NavBar",
  data: () => {
    return {
      username: "",
      items: [
        { title: "Acceuil", icon: "home", path: "/" },
        { title: "Recommendations", icon: "article", path: "/recommandation" },
        { title: "Bibliothèque", icon: "favorite", path: "/bibliotheque" },
        { title: "Liste de souhaits", icon: "favorite", path: "/souhaits" }, //remplacer l'icone
      ],
    };
  },
  computed: {
    computedConnected() {
      return this.$store.state.connected;
    },
  },
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      console.log(this.$store.state.connected);
    },
    setConnected: function () {
      //Je verifie si il y a des éléments dans le local storage
      //Si il n'y en a pas j'ajoute un objet pour me permettre de dire si il est connecté
      if (localStorage.getItem("vbs-connected").length == 0) {
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
          "impossible de récupérer l'objet dans le local storage:",
          error
        );
      }
    },
    connectBtn() {
      router.replace("/login");
    },
  },
};
</script>
<style scoped></style>
