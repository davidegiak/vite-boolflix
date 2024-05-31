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
}

</script>


<template>
    <h1 class="bg-danger text-center"> {{ this.store.film }} </h1>
    <div class="myCont d-flex flex-wrap justify-content-center gap-2">
        <Card v-if="this.store.mvs === true"  v-for="element in store.movies" :info="element" :lang="store.flags"/>
    </div>
    <h1 class="bg-danger text-center mt-2"> {{ this.store.serie }} </h1>
    <div class="myCont d-flex flex-wrap justify-content-center gap-2">
        <CardSeries v-if="this.store.srs === true" v-for="element in store.series" :lang="store.flags" :infoDue="element" />
    </div>
</template>