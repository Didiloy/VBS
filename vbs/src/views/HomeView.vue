<!-- This file is part of VBS.
    Copyright (C) 2022  Dylan Loya

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>. -->
<template>
  <div>
    <v-container class="d-flex flex-column justify-center align-center">
      <h1 class="grey--text Heading 1 pt-16">
        {{ $t("HomeView.welcome") }}
      </h1>
      <h3 class="grey--text pt-8">
        {{ $t("HomeView.subtitle") }}
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
              height="100%"
              max-width="350px"
              class="rounded-l-xl"
              src="@/assets/livres_empiles.jpg"
            >
            </v-img>
          </div>
          <div class="" width="75% !important">
            <v-card-text class="text--primary">
              <v-card-title> {{ $t("HomeView.big_card_title") }} </v-card-title>
              <div>
                Bienvenue sur <b>VBS</b>, cherchez et ajoutez des livres dans
                votre bibliothèque pour profiter des recommendations
                personnalisées par rapport à votre lecture ! <br />
                Découvrez de nouveaux auteurs ou de nouvelles sagas grâce aux
                recherches par auteur, titre ou genre ! <br />
                Pour commencer je vous conseille de jeter un oeil aux best
                sellers ;)
              </div>
            </v-card-text>

            <v-card-actions class="pl-16 justify-end">
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

          <v-card-actions class="justify-end">
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
          <v-card-actions class="justify-end">
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
            Envi de se creuser la tête ?</v-card-subtitle
          >
          <v-card-actions class="justify-end">
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
