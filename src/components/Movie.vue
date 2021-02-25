<template>
  <v-card class="mx-auto" shaped max-width="420" dark>
    <v-img :src="movie.images[0].url" height="440px"></v-img>

    <v-card-title>
      {{ movie.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ movie.gender }}
    </v-card-subtitle>

    <v-card-text>
      {{ movie.classification }}
    </v-card-text>

    <v-card-actions>
      <v-btn color="blue darken-1" light @click="goTo(`/about/${movie.id}`)">
        About
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ movie.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "Movie",
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style></style>
