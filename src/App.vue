<script>
import MainApp from './components/MainApp.vue'
import axios from "axios"
import store from './data/store.js'
import HeaderApp from './components/HeaderApp.vue'
export default {
  components: {
    MainApp,
    HeaderApp,
  },
  data() {
    return {
      store
    }
  },
  methods: {

  },
  mounted() {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie?api_key=a07beba54546d984c4eb2fe69436b1bc',
      params: { sort_by: 'popularity.desc', include_video: 'false', include_adult: 'false', language: 'it', page: '1' },
      headers: {
        accept: 'application/json',
      }
    };

    axios
      .request(options)
      .then((response) => {
        this.store.film = "FILM TROVATI"
        this.store.movies = response.data.results
        console.log(this.store.movies);
      })
      .catch(function (error) {
        console.error(error);
      });

  },
}
</script>

<template>
  <HeaderApp :info="store" />
  <div class="gradino"></div>
  <MainApp />
</template>

<style scoped>
.gradino {
  height: 8rem;
}
</style>
