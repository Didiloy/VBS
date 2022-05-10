<template>
  <div>
    <v-container class="d-flex flex-column justify-center align-center">
      <h1 class="grey--text Heading 1 pt-16">Bienvenue dans VBS !</h1>
      <h3 class="grey--text pt-8">
        Voici quelques éléments pour vous aider à poursuivre...
      </h3>
      <!-- Big first card -->
      <v-card
        class="mx-auto secondary mt-8 rounded-xl"
        elevation="6"
        max-width="100%"
        width="100%"
      >
        <div class="d-flex align-space-between" width="100%">
          <div>
            <v-img
              width="350px !important"
              max-width="350px"
              class="rounded-l-xl"
              src="@/assets/livres_empiles.jpg"
            >
            </v-img>
          </div>
          <div class="" width="75% !important">
            <v-card-subtitle class="pb-0"> {{ author }}</v-card-subtitle>

            <v-card-text class="text--primary">
              <v-card-title> Bienvenue ! </v-card-title>
              <div>
                Bienvenue sur <b>VBS</b>, cherchez et ajoutez des livres dans
                votre bibliothèque pour profiter des recommendations
                personnalisées par rapport à votre lecture ! <br />
                Découvrez de nouveaux auteurs ou de nouvelles sagas grâce aux
                recherche par auteur, titre ou genre ! <br />
                Pour commencer je vous conseil de jeter un oeil aux best sellers
                ;)
              </div>
            </v-card-text>

            <v-card-actions class="pl-16">
              <v-btn color="accent" text @click="search('inspirational')">
                <v-icon class="accent--text">favorite</v-icon>
                Voir les best-sellers !</v-btn
              >
            </v-card-actions>
          </div>
        </div>
      </v-card>
      <!-- 3 little cards -->
      <div
        class="d-flex flex-row justify-space-between align-space-around mt-8"
        style="width: 100%"
      >
        <v-card
          class="mx-auto secondary mt-8 rounded-xl"
          elevation="6"
          max-width="300px"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="@/assets/livre_cafe_fenetre.jpg"
          >
          </v-img>
          <v-card-title>Fiction</v-card-title>
          <v-card-subtitle class="pb-0">
            Envie de s'évader dans un autre monde ?</v-card-subtitle
          >

          <v-card-actions class="">
            <v-btn color="accent" text @click="search('fantasy')">
              <v-icon class="accent--text">rocket_launch</v-icon>
              Voir les livres de fiction !</v-btn
            >
          </v-card-actions>
        </v-card>
        <v-card
          class="mx-auto secondary mt-8 rounded-xl"
          elevation="6"
          max-width="300px"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="@/assets/livre_fenetre_clair.jpg"
          >
          </v-img>
          <v-card-title> Romance</v-card-title>
          <v-card-subtitle class="pb-0">
            Envie de voyager au pays de l'amour ?</v-card-subtitle
          >
          <v-card-actions class="">
            <v-btn color="accent" text @click="search('romance')">
              <v-icon class="accent--text">favorite</v-icon>
              Voir les livres de romance !</v-btn
            >
          </v-card-actions>
        </v-card>
        <v-card
          class="mx-auto secondary mt-8 rounded-xl"
          elevation="6"
          max-width="300px"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="@/assets/bookshelf.jpg"
          >
          </v-img>
          <v-card-title>Mystère</v-card-title>
          <v-card-subtitle class="pb-0">
            Envi de se creuser la tête</v-card-subtitle
          >
          <v-card-actions class="">
            <v-btn color="accent" text @click="search('thriller')">
              <v-icon class="accent--text">question_mark</v-icon>
              Je veux du mystère !</v-btn
            >
          </v-card-actions>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
// https://www.googleapis.com/books/v1/volumes?q=subject:inspirational les bestsellers
import router from "../router/index";
export default {
  name: "HomeView",
  components: {},
  methods: {
    search(categorie) {
      // await this.search("subject:inspirational").then();
      router.replace(`/search/subject:${categorie}`);
    },
  },
};
</script>
