<template>
  <v-container fill-height>
    <v-layout align-center justify-center fill-height>
      <v-snackbar v-model="snackbarSuccess" :timeout="3000">
        Movie successfully registered!
      </v-snackbar>
      <v-snackbar v-model="snackbarFailed" :timeout="3000">
        It was not possible to register the film!
      </v-snackbar>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                prepend-icon="mdi-film"
                name="title"
                label="Title"
                type="text"
                v-model="title"
                :rules="titleRules"
                required
              />

              <v-textarea
                id="description"
                prepend-icon="mdi-clipboard-text"
                name="description"
                label="Description"
                type="text"
                v-model="description"
                :rules="descriptionRules"
                required
              />

              <v-text-field
                prepend-icon="mdi-google-circles-extended"
                name="gender"
                label="Gender"
                type="text"
                v-model="gender"
                :rules="genderRules"
                required
              />

              <v-slider
                v-model="classification"
                color="primary"
                label="Classification"
                min="6"
                max="28"
                thumb-label
                required
              ></v-slider>

              <v-file-input
                multiple
                solo
                v-model="images"
                :rules="imageRules"
                @change="setImage($event)"
                label="Image"
                filled
                prepend-icon="mdi-camera"
                required
              ></v-file-input>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" :disabled="!valid" @click="submit">
              Register
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from "../services/api";

export default {
  name: "Register",
  data() {
    return {
      valid: false,
      title: "",
      titleRules: [
        v => !!v || "Title is required",
        v => (v && v.length > 0) || "Title is required"
      ],
      description: "",
      descriptionRules: [
        v => !!v || "Description is required",
        v =>
          (v && v.length >= 15) || "Description must be more than 15 characters"
      ],
      gender: "",
      genderRules: [
        v => !!v || "Gender is required",
        v => (v && v.length > 3) || "Gender must be more than 3 characters"
      ],
      classification: 0,
      images: null,
      imageRules: [v => !!v || "Image is required"],
      selectedImages: [],
      snackbarSuccess: false,
      snackbarFailed: false
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        try {
          const movie = {
            Title: this.title,
            Description: this.description,
            Classification: this.classification.toString(),
            Gender: this.gender,
            Images: this.selectedImages
          };
          const response = await api.post("/movie", movie);
          console.log(response);
          this.snackbarFailed = true;
          this.$router.push("/");
        } catch {
          this.snackbarFailed = true;
        }
      } else {
        console.log("Tem algo errado");
      }
    },
    setImage() {
      this.images.map(image => {
        var reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => {
          this.selectedImages.push({ Url: reader.result });
        };
      });
    }
  }
};
</script>

<style></style>
