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
    firstCall() {
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
        this.store.movies = response.data.results;
        this.store.imgZero = this.store.prefisso +  this.store.movies[0].poster_path;
        console.log(this.store.movies);
      })
      .catch(function (error) {
        console.error(error);
      });
      if (this.store.srs === true) {
        this.store.serie = "SERIE TROVATE"
      }
      if (this.store.mvs === true) {
        this.store.film = "FILM TROVATI"
      }
    },
    secondCall() {
      const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/tv?api_key=a07beba54546d984c4eb2fe69436b1bc',
      params: { sort_by: 'popularity.desc', include_video: 'false', include_adult: 'false', language: 'it', page: '1' },
      headers: {
        accept: 'application/json',
      }
    };
    
    axios
    .request(options)
    .then((r) => {
      this.store.series = r.data.results
      console.log(r.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  },
  genresCall() {
    axios.get('https://api.themoviedb.org/3/genre/movie/list', {
      params: {
        api_key: 'a07beba54546d984c4eb2fe69436b1bc'
      }
    }).then((respo) => {
      // console.log(respo.data);
      
      this.store.moviesGenres = respo.data.genres;
      console.log('generi FILM :', this.store.moviesGenres);
      
    })
  },
  actionMcall() {
    axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=it&page=1&sort_by=popularity.desc&with_genres=28', {
      params: {
        api_key: 'a07beba54546d984c4eb2fe69436b1bc'
      }
    }).then((response) => {
      // console.log(response.data.results);
      this.store.actionM = response.data.results;
      
    })
  },
  actionAdventureScall() {
    axios.get('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=it&page=1&sort_by=popularity.desc&with_genres=10759', {
      params: {
        api_key: 'a07beba54546d984c4eb2fe69436b1bc'
      }
    }).then((response) => {
      console.log('SERIE TV', response.data.results);
      this.store.actionAdventureS = response.data.results;
      
    })
  },
  animationMcall() {
    axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&&language=it&page=1&sort_by=popularity.desc&with_genres=16', {
      params: {
        api_key: 'a07beba54546d984c4eb2fe69436b1bc'
      }
    }).then((response) => {
      // console.log(response.data.results);
      this.store.animationM = response.data.results;
      
    })
  },
  animationScall() {
    axios.get('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&&language=it&page=1&sort_by=popularity.desc&with_genres=16', {
      params: {
        api_key: 'a07beba54546d984c4eb2fe69436b1bc'
      }
    }).then((response) => {
      // console.log(response.data.results);
      this.store.animationS = response.data.results;
      
    })
  },
  comedyMcall() {
    axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=it&page=1&sort_by=popularity.desc&with_genres=35', {
      params: {
        api_key: 'a07beba54546d984c4eb2fe69436b1bc'
      }
    }).then((response) => {
      // console.log(response.data.results);
      this.store.comedyM = response.data.results;
      
    })
  },
  fantasyMcall() {
    axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=it&page=1&sort_by=popularity.desc&with_genres=14', {
      params: {
        api_key: 'a07beba54546d984c4eb2fe69436b1bc'
      }
    }).then((response) => {
      // console.log(response.data.results);
      this.store.fantasyM = response.data.results;
      
    })
  }
  },
  mounted() {
    this.firstCall();
    this.secondCall();
    this.genresCall();
    this.actionMcall();
    this.animationMcall();
    this.comedyMcall();
    this.fantasyMcall();
    this.actionAdventureScall();
    this.animationScall();
  }
}
</script>

<template>
  <!-- 
    <div class="nav-side"> -->
      <div id="app-cont" class="d-flex">
      <HeaderApp :info="store" />
    <!-- </div>  <MainApp class="text-light" /> -->
    <div class="main-side">
  
      <router-view></router-view>
    </div>
  </div>
  
</template>

<style scoped>
.main-side {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden
}
#app-cont{
  overflow: hidden
}
</style>
