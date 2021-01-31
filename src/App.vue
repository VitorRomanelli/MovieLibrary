<template>
  <v-app dark>
    <AppBar />
    <v-main transition="slide-x-transition" class="main-app">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";

export default {
  name: "App",
  components: {
    AppBar
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.main-app {
  background: #444444;
}
</style>
