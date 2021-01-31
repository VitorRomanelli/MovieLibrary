import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    setMovies(state, payload) {
      state.movies = payload;
    }
  },
  actions: {
    getMovies({ commit }) {
      try {
        const response = [
          {
            Id: 1,
            Title: "Star Wars",
            Description: "Filme legal de ficção cientifica",
            Classification: "16",
            Gender: "Ficção Cientifica",
            imgs: [
              "https://img.ibxk.com.br/2021/01/13/13184201318384.jpg",
              "https://sm.ign.com/ign_br/news/s/star-wars-/star-wars-more-new-disney-shows-in-development_1w6s.jpg"
            ]
          },
          {
            Id: 2,
            Title: "Star Trek",
            Description: "Filme bem legal de ficção cientifica",
            Classification: "14",
            Gender: "Ficção Cientifica",
            imgs: [
              "https://images-na.ssl-images-amazon.com/images/I/91AjJxhfeGL.jpg",
              "https://miro.medium.com/max/777/1*48zbJ4CsrSXVW_EXlPobvA.jpeg",
              "https://uploads.jovemnerd.com.br/wp-content/uploads/2016/09/star-trek-especial1-1210x500.jpg"
            ]
          },
          {
            Id: 3,
            Title: "Harry Potter",
            Description: "Harry Potter é um bruxo habilidoso",
            Classification: "12",
            Gender: "Magia",
            imgs: [
              "https://i.pinimg.com/originals/96/57/3a/96573a8a7d9748a3d5b16d0c2e3e14c2.jpg",
              "https://rota1976.com/wp-content/uploads/2020/08/harry-potter-780x520-1.jpg"
            ]
          },
          {
            Id: 4,
            Title: "Jurassic Park",
            Description: "Filme legal de dinossauros",
            Classification: "18",
            Gender: "Dinossauro",
            imgs: [
              "https://images-na.ssl-images-amazon.com/images/I/81mZVebGhRL.jpg",
              "https://img1.looper.com/img/gallery/every-jurassic-park-and-world-movie-ranked-worst-to-best/intro-1601480558.jpg",
              "https://www.alternativanerd.com.br/wp-content/uploads/2020/09/painel-em-lona-2x1m-jurassic-park-desenho-animado.jpg",
              "https://www.midiorama.com/wp-content/uploads/2018/06/jurassic-world-chris-pratt-920x627.jpeg"
            ]
          }
        ];
        commit("setMovies", response);
      } catch {
        commit("setMovies", []);
      }
    }
  },
  modules: {}
});
