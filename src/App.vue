<script>
import MainApp from './components/MainApp.vue'
import axios from "axios"

// ******************AXIOS TESTATO E FUNZIONANTE
mounted: {
  // axios.get('https://api.themoviedb.org/3/', {
  //   headers: {
  //   accept: 'application/json',
  //   Authorization: 'Bearer a07beba54546d984c4eb2fe69436b1bc',
  //   query:'search/movie?include_adult=false&language=en-US&page=1'
  // }
  // }).then((r)=> {
  //   console.log(r);
  // })
  axios.get('https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d').then((r)=> {
    console.log(r);
  })
}
</script>

<template>

</template>

<style scoped>

</style>
