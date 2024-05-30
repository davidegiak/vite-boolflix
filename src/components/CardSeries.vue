<script>
export default {
    name:"CardSeries",
    props: ["lang", "infoDue"],
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
        }
    }
}
</script>

<template>
    <!-- CARD PER LE SERIE -->
    <div class="card">
        <img class="movie-img" v-if="infoDue.poster_path != null" :src="prefisso + infoDue.poster_path" alt="">
        <img v-if="infoDue.poster_path == null" class="movie-img backdrop" :src="prefisso + infoDue.backdrop_path" alt="">
        <!-- <h3>Titolo: {{ infoDue.name }} </h3>
        <h4>Titolo Originale: {{ infoDue.original_title }} </h4>
        <h5>Lingua Originale: {{ infoDue.original_language }}
            <img :src="lang[ infoDue.original_language ]" class="flags">
        </h5>
        <div class="vote-cont d-flex gap-3">
            <h4>Voto: {{ Math.ceil(infoDue.vote_average / 2) }} </h4>
            <div v-if=" Math.ceil(infoDue.vote_average / 2) >= 1"><i class="fa-solid fa-star"></i></div>
            <div v-if=" Math.ceil(infoDue.vote_average / 2) >= 2"><i class="fa-solid fa-star"></i></div>
            <div v-if=" Math.ceil(infoDue.vote_average / 2) >= 3"><i class="fa-solid fa-star"></i></div>
            <div v-if=" Math.ceil(infoDue.vote_average / 2) >= 4"><i class="fa-solid fa-star"></i></div>
            <div v-if=" Math.ceil(infoDue.vote_average / 2) >= 5"><i class="fa-solid fa-star"></i></div>
        </div> -->
    </div>
</template>

<style scoped>
.card {
    width: calc(100% / 4 - 2rem)
}
.flags {
    width: 20px;
}
.movie-img {
    width: 100%;
}
.backdrop {
    object-fit: cover;
    height: 100%;
    object-position: center;
}
</style>