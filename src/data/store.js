import { reactive } from 'vue';



let moviesList = reactive({
    film:"",
    movies:[],
    mvs:true,
    movieSearched: [],
    mvsSrcd: true,
    actionM:  [],
    animationM: [],
    comedyM: [],
    fantasyM: [],

    moviesGenres: [],


    input: "",
    flags:{
        it:"/img/it.png",
        en:"/img/en.png",
        fr:"/img/fr.png",
        es:"/img/es.png"
    },
    prefisso:"https://image.tmdb.org/t/p/w342",
    imgZero: '',
    consigliati: [],


    serie:"",
    series:[],
    srs:true,
    serieSearched: [],
    actionAdventureS: [],
    animationS: [],

})

export default (moviesList)