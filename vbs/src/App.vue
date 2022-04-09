<template>
  <v-app>
    <NavBar />
    <SideBar />
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
  components: {
    NavBar,
    SideBar,
  },
};
</script>
