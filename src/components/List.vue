<script>
import store from "../data/store.js"
import Card from "./Card.vue"
import CardSeries from "./CardSeries.vue";
export default {
    components: {
        Card,
        CardSeries
    },
    data(){
        return {
            store
        }
    },
    methods:{
        over(){
            document.querySelector(".imgs").classList.add("d-none")
            document.querySelector(".info").classList.replace("d-none", "d-block")
        },
        leave(){
            document.querySelector(".imgs").classList.replace("d-none", "d-block")
            document.querySelector(".info").classList.replace("d-block", "d-none")
        }
    }
}

</script>


<template>
    <div class="myCont d-flex flex-wrap justify-content-center gap-2">
        <Card @mouseover="over()" @mouseleave="leave()" v-for="element in store.movies" :info="element" :lang="store.flags"/>
        <CardSeries v-for="element in store.series" :lang="store.flags" :infoDue="element" />
    </div>
</template>