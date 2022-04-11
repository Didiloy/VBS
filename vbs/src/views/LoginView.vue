<template>
  <v-container class="primary" style="height: 100%">
    <v-row
      fill-height
      align="center"
      justify="space-around"
      style="height: 100%"
    >
      <v-col class="px-10">
        <h2 class="grey--text text-h3 text-center">Se connecter</h2>

        <v-text-field
          solo
          label="Username"
          clearable
          class="pt-10"
        ></v-text-field>
        <v-text-field
          solo
          label="Mot de passe"
          clearable
          type="password"
        ></v-text-field>
        <v-btn class="accent" block elevation="2">
          <v-icon class="white--text pr-2"> login</v-icon>
          Se Connecter
        </v-btn>
      </v-col>
      <v-col>
        <h2 class="grey--text text-h3 text-center">Créer un compte</h2>

        <v-text-field
          solo
          label="Username"
          clearable
          class="pt-10"
        ></v-text-field>
        <v-text-field
          solo
          label="Mot de passe"
          clearable
          type="password"
        ></v-text-field>
        <v-btn class="accent" block elevation="2">
          <v-icon class="white--text pr-2"> login</v-icon>
          S'inscrire
        </v-btn>
      </v-col>
    </v-row>
    >
  </v-container>
</template>

<script>
export default {
  name: "LoginView",
  components: {},
};
</script>
