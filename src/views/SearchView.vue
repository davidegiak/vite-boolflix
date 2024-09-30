<script>
import store from "../data/store.js"
import Card from "../pieces/Card.vue"
import CardSeries from "../pieces/CardSeries.vue";
import CountryFlag from 'vue-country-flag-next';

import 'swiper/css';
import 'swiper/css/navigation';
export default {
    components: {
        Card,
        CardSeries,
        CountryFlag,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        lang(lang) {
            const validLang = {
                en: 'gb',
                ja: 'jp',
                ko: 'kr',
                zh: 'cn',
                hi: 'in'

            }
            if (lang in validLang) {
                return validLang[lang]
            }

            else {
                return lang
            }
        }
    },
    mounted() {
      
    }

}
</script>

<template>
    <div v-if="store.mvs === true || store.srs === true" id="cont" class="container h-100">
        <h1 v-if="store.input != ''" class="p-2">HAI CERCATO: {{ store.input }}, RISULTATI TROVATI: <span class="font-weight-bold rounded-circle p-2 bg-primary">{{ store.movieSearched.length }}</span> FILM & <span class="font-weight-bold rounded-circle p-2 bg-primary">{{ store.serieSearched.length }}</span> SERIE TV</h1>
        <h4 v-if="store.mvs === true" class="bg-danger text-light">FILM TROVATI</h4>
        <div id="row" class="row my-4">
            <div id="col" class="col-12 d-flex gap-4">
                <Card class="mx-auto" v-for="(element, index) in store.movieSearched" v-if="store.mvs === true" :info="element"
                :lang="element.original_language" />
            </div>
        </div>
        <h4 v-if="store.srs === true" class="bg-danger text-light">SERIE TV TROVATE</h4>
        <div class="row my-4">
            <div id="col" class="col-12 d-flex gap-4">
                <CardSeries class="mx-auto" v-for="(element, index) in store.serieSearched" v-if="store.srs === true" :lang="element.original_language" :infoDue="element" />
            </div>
        </div>
    </div>
</template>

<style scoped>
#col{
    flex-wrap: wrap;
}
</style>