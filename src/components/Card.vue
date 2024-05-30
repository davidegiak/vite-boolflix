<script>
export default {
    name:"Card",
    props: ["info", "lang", "infoDue"],
    components: {
    },
    data() {
        return {
            prefisso:"https://image.tmdb.org/t/p/w342"
        }
    },
    methods:{
        language(j, x) {
            if (j.startsWith(x)) {
                return 
            }
        },
    }
}
</script>

<template>
    <div class="card mb-2">
        <div class="info d-none">
            <h3>Titolo: {{ info.title }} </h3>
            <h4>Titolo Originale: {{ info.original_title }} </h4>
            <h5>Lingua Originale: {{ info.original_language }}
                <img :src="lang[ info.original_language ]" class="flags">
            </h5>
            <div class="vote-cont d-flex gap-3">
                <h4>Voto: {{ Math.ceil(info.vote_average / 2) }} </h4>
                <div v-if=" Math.ceil(info.vote_average / 2) >= 1"><i class="fa-solid fa-star"></i></div>
                <div v-if=" Math.ceil(info.vote_average / 2) >= 2"><i class="fa-solid fa-star"></i></div>
                <div v-if=" Math.ceil(info.vote_average / 2) >= 3"><i class="fa-solid fa-star"></i></div>
                <div v-if=" Math.ceil(info.vote_average / 2) >= 4"><i class="fa-solid fa-star"></i></div>
                <div v-if=" Math.ceil(info.vote_average / 2) >= 5"><i class="fa-solid fa-star"></i></div>
            </div>
        </div>
        <div class="imgs">
            <img v-if="info.poster_path != null" class="movie-img" :src="prefisso + info.poster_path" alt="">
            <img v-if="info.poster_path == null" class="movie-img backdrop" :src="prefisso + info.backdrop_path" alt="">
        </div>
    </div>
</template>

<style scoped>
.card {
    width: calc(100% / 4 - 2rem);
}
.flags {
    width: 20px;
}
.movie-img {
    width: 100%;
    /* object-fit: cover; */
}
</style>