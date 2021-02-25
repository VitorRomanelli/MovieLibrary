<template>
  <div
    class="d-flex flex-column align-center justify-center"
    dark
    style="width: 100%"
  >
    <v-card class="ma-5" max-width="100%">
      <v-carousel :show-arrows="true" style="height: 100%">
        <v-carousel-item
          v-for="(image, i) in movie.images"
          :key="i"
          :src="image.url"
        ></v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card dark class="" width="70%">
      <v-card-title>{{ movie.title }}</v-card-title>
      <v-card-subtitle>{{ movie.gender }}</v-card-subtitle>
      <v-card-text>{{ movie.classification }}</v-card-text>
      <v-card-text>{{ movie.description }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "About",
  computed: {
    movie() {
      const movies = this.$store.state.movies;
      return movies.find(movie => movie.id == this.$route.params.id);
    }
  }
};
</script>

<style></style>
