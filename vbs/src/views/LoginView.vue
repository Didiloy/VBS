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
          v-model="tfConnect"
        ></v-text-field>
        <v-text-field
          solo
          label="Mot de passe"
          clearable
          type="password"
          v-model="tfPwConnect"
        ></v-text-field>
        <v-btn class="accent" block elevation="2" @click="login">
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
          v-model="tfCreate"
        ></v-text-field>
        <v-text-field
          solo
          label="Mot de passe"
          clearable
          type="password"
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
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

// Create an instance of Notyf
const notyf = new Notyf();

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
    login() {
      try {
        fetch(
          `http://localhost:4000/login/${this.tfConnect}/${this.tfPwConnect}`
        ).then((response) => {
          if (response.status == 200) {
            console.log(response);
            response.json().then((data) => {
              if (data.length > 0) {
                notyf.success({
                  message: "Vous êtes connecté !",
                  duration: 3000,
                  position: { x: "right", y: "top" },
                });
              } else {
                notyf.error({
                  message: "Impossible de se connecter !",
                  duration: 3000,
                  position: { x: "right", y: "top" },
                });
              }
            });
          } else {
            response.json().then((d) => console.log(d));
            notyf.error({
              message: "Un problème est survenu !",
              duration: 3000,
              position: { x: "right", y: "top" },
            });
          }
        });
      } catch (error) {
        console.log(error);
        notyf.error({
          message: "Un problème est survenu !",
          duration: 3000,
          position: { x: "right", y: "top" },
        });
      }
    },
    async createUser() {
      try {
        fetch(
          `http://localhost:4000/create/${this.tfCreate}/${this.tfPwCreate}`
        ).then((response) => {
          if (response.status == 200) {
            response.json().then((d) => console.log(d));
            notyf.success({
              message: "Utilisateur créé !",
              duration: 3000,
              position: { x: "right", y: "top" },
            });
          } else {
            response.json().then((d) => console.log(d));
            notyf.error({
              message: "Un problème est survenu !",
              duration: 3000,
              position: { x: "right", y: "top" },
            });
          }
        });
      } catch (error) {
        console.log(error);
        notyf.error({
          message: "Un problème est survenu !",
          duration: 3000,
          position: { x: "right", y: "top" },
        });
      }
    },
  },
};
</script>
