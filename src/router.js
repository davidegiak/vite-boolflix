import {createRouter , createWebHistory } from 'vue-router'

import mainApp from './components/MainApp.vue';
import SearchView from './views/SearchView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', //  ROTTA CHE COMPARIRà SULL'URL
      name: 'home', //  NOME DELLA ROTTA
      component: mainApp, //  COMPONENTE COLLEGATO ALLA ROTTA (DEVE ESSERE IMPORTATO)
    },
    {
      path: '/search', //  ROTTA CHE COMPARIRà SULL'URL
      name: 'searched', //  NOME DELLA ROTTA
      component: SearchView, //  COMPONENTE COLLEGATO ALLA ROTTA (DEVE ESSERE IMPORTATO)
    }
  ]
});

export { router };