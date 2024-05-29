<script>
import MainApp from './components/MainApp.vue'
import axios from "axios"

// ******************AXIOS TESTATO E FUNZIONANTE
mounted: {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDdiZWJhNTQ1NDZkOTg0YzRlYjJmZTY5NDM2YjFiYyIsInN1YiI6IjY2NTcyNmQ4ODBiNTM3ZjA4OTcwOTgyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L0pc_jyclpXbulnDXm6e5m6NxVO4EpiSNAveWbVJJ14'
  }
  axios.get('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1').then((r)=> {
    console.log(r);
  })
}
</script>

<template>

</template>

<style scoped>

</style>
