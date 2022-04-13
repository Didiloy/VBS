<template>
  <v-app>
    <NavBar />
    <SideBar
      :key="key"
      v-on:updateKey="updateKey"
    /><!-- key is for re-render the component -->
    <v-main class="primary">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
export default {
  name: "App",
  data() {
    return {
      key: 0,
    };
  },
  components: {
    NavBar,
    SideBar,
  },
  mounted() {
    if (localStorage.getItem("vbs-connected").length == 0) {
      localStorage.setItem(
        "vbs-connected",
        JSON.stringify({ connected: false })
      );
    }
    try {
      let localStorageConnected = localStorage.getItem("vbs-connected");
      let obj = JSON.parse(localStorageConnected);
      this.$store.state.connected = obj.connected;
      this.key++;
    } catch (error) {
      console.log(
        "impossible de récupérer l'objet dans le local storage:",
        error
      );
    }
  },
  methods: {
    updateKey() {
      this.key++;
    },
  },
};
</script>
