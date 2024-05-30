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
    }
}

</script>


<template>
    <div class="myCont d-flex flex-wrap justify-content-center gap-2">
        <Card v-for="element in store.movies" :info="element" :lang="store.flags"/>
        <CardSeries v-for="element in store.series" :lang="store.flags" :infoDue="element" />
    </div>
</template>