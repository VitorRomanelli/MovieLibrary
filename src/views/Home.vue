<template>
  <div class="home mr-3 ml-3 mt-8" dark>
    <v-row>
      <v-col v-for="movie in movies" :key="movie.id">
        <Movie :movie="movie" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Movie from "../components/Movie";
export default {
  name: "Home",
  components: {
    Movie
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  }
};
</script>
