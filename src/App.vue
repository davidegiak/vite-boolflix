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
  }
}
</script>

<template>
  <HeaderApp :info="store"/>
  <div class="gradino"></div>
  <MainApp/>
</template>

<style scoped>
.gradino{
  height: 8rem;
}
</style>
