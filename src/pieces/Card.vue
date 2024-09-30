<script>
import store from '../data/store.js';
import CountryFlag from 'vue-country-flag-next';
export default {
    name: "Card",
    props: ["info", "lang", "infoDue"],
    components: {
        CountryFlag
    },
    data() {
        return {
            prefisso: "https://image.tmdb.org/t/p/w342",
            store
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
    <div class="card my-auto">
        <div v-if="this.$route.name == 'searched'" class="info p-2">
            <span class="h7">Titolo </span>
            <h5 class="color-white"> {{ info.title }} </h5>
            <span class="h7">Anno di uscita</span>
            <h6 class="color-white"> {{ info.release_date }} </h6>
            <span class="h7">Titolo Originale </span>
            <h6> {{ info.original_title }} </h6>
            <h6 class="h7">Lingua Originale </h6>
            <!-- <h6> {{ info.original_language }}
                <img :src="img()" class="flags"> -->
            <!-- <img :src="lang[info.original_language]" class="flags"> -->
            <!-- </h6> -->
            <CountryFlag :country='lang(info.original_language)' size="normal" />
            <div class="vote-cont d-flex gap-1">
                <div v-if="Math.ceil(info.vote_average / 2) >= 1"><i class="fa-solid fa-star text-warning"></i></div>
                <div v-if="Math.ceil(info.vote_average / 2) < 1"><i class="fa-regular fa-star"></i></div>
                <div v-if="Math.ceil(info.vote_average / 2) >= 2"><i class="fa-solid fa-star text-warning"></i></div>
                <div v-if="Math.ceil(info.vote_average / 2) < 2"><i class="fa-regular fa-star"></i></div>
                <div v-if="Math.ceil(info.vote_average / 2) >= 3"><i class="fa-solid fa-star text-warning"></i></div>
                <div v-if="Math.ceil(info.vote_average / 2) < 3"><i class="fa-regular fa-star"></i></div>
                <div v-if="Math.ceil(info.vote_average / 2) >= 4"><i class="fa-solid fa-star text-warning"></i></div>
                <div v-if="Math.ceil(info.vote_average / 2) < 4"><i class="fa-regular fa-star"></i></div>
                <div v-if="Math.ceil(info.vote_average / 2) >= 5"><i class="fa-solid fa-star text-warning"></i></div>
                <div v-if="Math.ceil(info.vote_average / 2) < 5"><i class="fa-regular fa-star"></i></div>
            </div>
            <span v-if='!info.overview == ""'>Trama </span>
            <p class="fw-lighter"> {{ info.overview }} </p>
        </div>
        <div class="imgs">
            <h2 class="sostituto d-flex justify-content-center align-items-center"
                v-if="info.poster_path == null && info.backdrop_path == null">PIRATAFLIX</h2>
            <img v-if="info.poster_path != null" class="movie-img" :src="prefisso + info.poster_path" alt="">
            <img v-if="info.poster_path == null" class="movie-img backdrop" :src="prefisso + info.backdrop_path" alt="">
        </div>
    </div>
</template>

<style scoped>
.card {
    /* width: 18rem; */
    position: relative;
    background-color: #222;
    object-fit: contain;
    /* height: 80%; */
    /* overflow-y: hidden; */
}

.flags {
    width: 20px;
}

.movie-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    aspect-ratio: auto;
}

.info {
    z-index: 2;
    opacity: 0;
    position: absolute;
    /* height: 100%;*/
    width: 100%; 
    color: white;
    overflow-y: scroll;
    cursor: pointer;
    background-color: transparent;
}

.imgs {
    z-index: 1;
    height: 24rem;
    /* width: 100%; */
    /* position: absolute; */
}

.info:hover {
    opacity: 1;
    overflow-y: scroll;
    height: 100%;
    background-color: black;
}

::-webkit-scrollbar {
    width: 3px;
}

.sostituto {
    width: 100%;
    height: 100%;
    background-color: #222;
    text-align: center;
    vertical-align: middle;
    font-size: 3rem;
    color: red;
}
</style>