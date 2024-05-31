import { reactive } from 'vue';



let moviesList = reactive({
    movies:[],
    input: "",
    flags:{
        it:"../../public/img/it.png",
        en:"../../public/img/en.png",
        fr:"../../public/img/fr.png",
        es:"../../public/img/es.png"

    },
    prefisso:"https://image.tmdb.org/t/p/w342",
    series:[],
    film:"",
    serie:"",
    moviesShut:[],
    seriesShut:[]
})

export default (moviesList)