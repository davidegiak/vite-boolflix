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
        <div class="info p-2">
            <span>Titolo </span>
            <h3> {{ infoDue.name }} </h3>
            <span>Titolo Originale </span>
            <h4> {{ infoDue.original_name }} </h4>
            <span>Lingua Originale </span>
            <h5> {{ infoDue.original_language }}
                <img :src="lang[ infoDue.original_language ]" class="flags">
            </h5>
            <div class="vote-cont d-flex gap-1">
                <div v-if=" Math.ceil(infoDue.vote_average / 2) >= 1"><i class="fa-solid fa-star"></i></div>
                <div v-if=" Math.ceil(infoDue.vote_average / 2) >= 2"><i class="fa-solid fa-star"></i></div>
                <div v-if=" Math.ceil(infoDue.vote_average / 2) >= 3"><i class="fa-solid fa-star"></i></div>
                <div v-if=" Math.ceil(infoDue.vote_average / 2) >= 4"><i class="fa-solid fa-star"></i></div>
                <div v-if=" Math.ceil(infoDue.vote_average / 2) >= 5"><i class="fa-solid fa-star"></i></div>
            </div>
            <span v-if='!infoDue.overview == "" '>Trama </span>
            <p> {{ infoDue.overview }} </p>
        </div>
        <div class="imgs">
            <h2 class="sostituto d-flex justify-content-center align-items-center" v-if="infoDue.poster_path == null && infoDue.backdrop_path == null">PIRATAFLIX</h2>
            <img class="movie-img" v-if="infoDue.poster_path != null" :src="prefisso + infoDue.poster_path" alt="">
            <img v-if="infoDue.poster_path == null" class="movie-img backdrop" :src="prefisso + infoDue.backdrop_path" alt="">
        </div>
    </div>
</template>

<style scoped>
.card {
    width: calc(100% / 4 - 3rem);
    position: relative;
    background-color: #222;
    height: 30rem;
}
.flags {
    width: 20px;
}
.movie-img {
    width: 100%;
    height: 100%;

}
.backdrop {
    object-fit: cover;
    height: 100%;
    object-position: center;
}
.info{
    opacity: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    height: 100%;
    color: white;
    z-index: 2;
    background-color: #222;
    cursor: pointer;
    overflow: hidden;
}
.imgs {
    z-index: 1;
    height: 100%;
}
.info:hover {
    opacity: 1;
    overflow-y: scroll;
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