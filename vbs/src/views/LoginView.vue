<template>
  <v-container class="primary" style="height: 100%">
    <v-row
      fill-height
      align="center"
      justify="space-around"
      style="height: 100%"
    >
      <v-col>
        <h2 class="grey--text text-h3 text-center">Créer un compte</h2>

        <v-text-field
          solo
          label="Username"
          clearable
          class="pt-10 px-16"
          v-model="tfCreate"
        ></v-text-field>
        <v-text-field
          solo
          label="Mot de passe"
          clearable
          type="password"
          class="px-16"
          v-model="tfPwCreate"
        ></v-text-field>
        <v-btn class="accent" block elevation="2" @click="createUser">
          <v-icon class="white--text pr-2"> login</v-icon>
          S'inscrire
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { Notyf } from "notyf";
import "notyf/notyf.min.css";

// Create an instance of Notyf
// const notyf = new Notyf();

export default {
  name: "LoginView",
  data() {
    return {
      tfConnect: "",
      tfCreate: "",
      tfPwConnect: "",
      tfPwCreate: "",
    };
  },
  components: {},
  methods: {
    setConnected: function (name) {
      localStorage.setItem(
        "vbs-connected",
        JSON.stringify({ connected: true, name: name })
      );
    },
  },
};
</script>
