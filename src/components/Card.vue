<script>
export default {
    name: "Card",
    props: ["info", "lang", "infoDue"],
    components: {
    },
    data() {
        return {
            prefisso: "https://image.tmdb.org/t/p/w342"
        }
    },
    methods: {
        language(j, x) {
            if (j.startsWith(x)) {
                return
            }
        },
        // truncateString(str, maxLength) {
        //     if (str.length > maxLength) {
        //         return str.slice(0, maxLength - 3) + '...';
        //     }
        //     return str;
        // }
    }
}
</script>

<template>
    <div class="myCard mb-2">
        <div class="info p-2">
            <span>Titolo </span>
            <h3 class="color-white"> {{ info.title }} </h3>
            <span>Titolo Originale </span>
            <h4> {{ info.original_title }} </h4>
            <span>Lingua Originale </span>
            <h5> {{ info.original_language }}
                <img :src="lang[info.original_language]" class="flags">
            </h5>
            <div class="vote-cont d-flex gap-1">
                <div v-if="Math.ceil(info.vote_average / 2) >= 1"><i class="fa-solid fa-star"></i></div>
                <div v-if="Math.ceil(info.vote_average / 2) >= 2"><i class="fa-solid fa-star"></i></div>
                <div v-if="Math.ceil(info.vote_average / 2) >= 3"><i class="fa-solid fa-star"></i></div>
                <div v-if="Math.ceil(info.vote_average / 2) >= 4"><i class="fa-solid fa-star"></i></div>
                <div v-if="Math.ceil(info.vote_average / 2) >= 5"><i class="fa-solid fa-star"></i></div>
            </div>
            <span v-if='!info.overview == "" '>Trama </span>
            <p> {{ info.overview }} </p>
        </div>
        <div class="imgs">
            <h2 class="sostituto d-flex justify-content-center align-items-center" v-if="info.poster_path == null && info.backdrop_path == null">PIRATAFLIX</h2>
            <img v-if="info.poster_path != null" class="movie-img" :src="prefisso + info.poster_path" alt="">
            <img v-if="info.poster_path == null" class="movie-img backdrop" :src="prefisso + info.backdrop_path" alt="">
        </div>
    </div>
</template>

<style scoped>
.myCard {
    width: calc(100% / 4 - 3rem);
    position: relative;
    background-color: #222;
    object-fit: contain;
    height: 480px;
    overflow-y: hidden;
}

.flags {
    width: 20px;
}

.movie-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: auto;
}

.info {
    z-index: 2;
    opacity: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    color: white;
    overflow-y: hidden;
    background-color: #222;
    cursor: pointer;
}

.imgs {
    z-index: 1;
    height: 100%;
    width: 100%;
    position: absolute;
}

.info:hover {
    opacity: 1;
    overflow-y: scroll;
}

::-webkit-scrollbar{
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