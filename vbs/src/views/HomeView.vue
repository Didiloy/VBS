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
              <v-card-title> Lorem </v-card-title>
              <div>test</div>
            </v-card-text>

            <v-card-actions class="pl-16">
              <v-btn color="accent" text @click="AddToBib">
                <v-icon class="accent--text">favorite</v-icon>
                Ajouter</v-btn
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
          <v-card-title>Categorie</v-card-title>
          <v-card-subtitle class="pb-0"> {{ author }}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ description }}</div>
          </v-card-text>

          <v-card-actions class="pl-16">
            <v-btn color="accent" text @click="AddToBib">
              <v-icon class="accent--text">favorite</v-icon>
              Ajouter</v-btn
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
          <v-card-title> Categorie</v-card-title>
          <v-card-subtitle class="pb-0"> {{ author }}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ description }}</div>
          </v-card-text>

          <v-card-actions class="pl-16">
            <v-btn color="accent" text>
              <v-icon class="accent--text">favorite</v-icon>
              Ajouter</v-btn
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
          <v-card-title>Categorie</v-card-title>
          <v-card-subtitle class="pb-0"> {{ author }}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ description }}</div>
          </v-card-text>

          <v-card-actions class="pl-16">
            <v-btn color="accent" text>
              <v-icon class="accent--text">favorite</v-icon>
              Ajouter</v-btn
            >
          </v-card-actions>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
