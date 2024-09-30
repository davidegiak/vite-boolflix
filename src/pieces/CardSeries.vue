<script>
import store from  '../data/store.js';
import CountryFlag from 'vue-country-flag-next';
export default {
    name: "CardSeries",
    props: ["lang", "infoDue"],
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
    }
}
</script>

<template>
    <!-- CARD PER LE SERIE -->
    <div class="card my-auto">
        <div v-if="this.$route.name == 'searched'" class="info p-2">
            <span>Titolo </span>
            <h3> {{ infoDue.name }} </h3>
            <span>Titolo Originale </span>
            <h4> {{ infoDue.original_name }} </h4>
            <h6 class="h7">Lingua Originale </h6>
            <CountryFlag :country='lang(infoDue.original_language)' size="normal" />
            <div class="vote-cont d-flex gap-1">
                <div v-if="Math.ceil(infoDue.vote_average / 2) >= 1"><i class="fa-solid fa-star text-warning"></i></div>
                <div v-if="Math.ceil(infoDue.vote_average / 2) < 1"><i class="fa-regular fa-star"></i></div>
                <div v-if="Math.ceil(infoDue.vote_average / 2) >= 2"><i class="fa-solid fa-star text-warning"></i></div>
                <div v-if="Math.ceil(infoDue.vote_average / 2) < 2"><i class="fa-regular fa-star"></i></div>
                <div v-if="Math.ceil(infoDue.vote_average / 2) >= 3"><i class="fa-solid fa-star text-warning"></i></div>
                <div v-if="Math.ceil(infoDue.vote_average / 2) < 3"><i class="fa-regular fa-star"></i></div>
                <div v-if="Math.ceil(infoDue.vote_average / 2) >= 4"><i class="fa-solid fa-star text-warning"></i></div>
                <div v-if="Math.ceil(infoDue.vote_average / 2) < 4"><i class="fa-regular fa-star"></i></div>
                <div v-if="Math.ceil(infoDue.vote_average / 2) >= 5"><i class="fa-solid fa-star text-warning"></i></div>
                <div v-if="Math.ceil(infoDue.vote_average / 2) < 5"><i class="fa-regular fa-star"></i></div>
            </div>
            <span v-if='!infoDue.overview == ""'>Trama </span>
            <p> {{ infoDue.overview }} </p>
        </div>
        <div class="imgs">
            <h2 class="sostituto d-flex justify-content-center align-items-center"
                v-if="infoDue.poster_path == null && infoDue.backdrop_path == null">PIRATAFLIX</h2>
            <img class="movie-img" v-if="infoDue.poster_path != null" :src="prefisso + infoDue.poster_path" alt="">
            <img v-if="infoDue.poster_path == null" class="movie-img backdrop" :src="prefisso + infoDue.backdrop_path"
                alt="">
        </div>
    </div>
</template>

<style scoped>
.card {
    /* width: 18rem; */
    position: relative;
    background-color: #222;
    object-fit: contain;
    /* height: 80%;
    overflow-y: hidden; */
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

.backdrop {
    object-fit: contain;
    width: 100%;
    height: 100%;
    /* object-position: center; */
}

.info {
    opacity: 0;
    position: absolute;
     width: 100%;
   /* height: 100%; */
    color: white;
    z-index: 2;
    background-color: #222;
    cursor: pointer;
    overflow: hidden;
}

.imgs {
    z-index: 1;
    height: 24rem;
}

.info:hover {
    opacity: 1;
    overflow-y: scroll;
    height: 100%;
}

::-webkit-scrollbar {
    width: 1px;
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