<template>
  <div>
    <v-app-bar app color="blue darken-4" dark class="justify-center">
      <v-toolbar-title
        class="hidden-sm-and-down ml-6"
        @click="goToHome()"
        style="cursor:pointer"
        >Movies
      </v-toolbar-title>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
        dark
      ></v-app-bar-nav-icon>
      <v-spacer class="hidden-sm-and-down" />

      <v-autocomplete
        v-model="search"
        :loading="loading"
        :items="items"
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="Search for movies"
        solo-inverted
      >
        <v-btn
          class="hidden-sm-and-down"
          slot="append"
          rounded
          @click="searchMovie"
        >
          Search
          <v-icon class="ml-3">
            mdi-magnify
          </v-icon>
        </v-btn>

        <v-btn
          class="hidden-md-and-up"
          max-height="35px"
          max-width="35px"
          slot="append"
          fab
          @click="searchMovie"
        >
          <v-icon>
            mdi-magnify
          </v-icon>
        </v-btn>
      </v-autocomplete>

      <v-spacer class="hidden-sm-and-down" />

      <v-btn
        class="mr-2 hidden-sm-and-down"
        :loading="loading"
        :disabled="loading"
        color="secondary"
        to="/register"
      >
        Register Movie
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="text--accent-4">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/register">
            <v-list-item-icon>
              <v-icon>mdi-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Register movie</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  created() {
    this.$store.dispatch("getMovies").then(() => {
      this.movies = this.$store.state.movies;
      this.$store.state.movies.map(movie => {
        this.items.push(movie.title);
      });
    });
  },
  data() {
    return {
      movies: [],
      drawer: false,
      loading: false,
      items: [],
      search: null
    };
  },
  methods: {
    searchMovie() {
      console.log(this.search);
      const searchedMovie = this.movies.find(
        movie => movie.title.toLowerCase() == this.search.toLowerCase()
      );

      this.$router.push(`/about/${searchedMovie.id}`);
    },
    goToHome() {
      if (this.$route.name != "Home") {
        this.$router.push("/");
      }
    }
  },
  computed: {
    searchedMovies() {
      return this.movies.filter(
        movie => movie.title.toLowerCase() == this.search.toLowerCase()
      );
    }
  }
};
</script>

<style></style>
