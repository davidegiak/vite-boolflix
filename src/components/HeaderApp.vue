<script>
import store from '../data/store.js'
import axios from "axios"
export default {
    name: "HeaderApp",
    props: ["info"],
    data() {
        return {
            store,
            title: "PIRATAFLIX",
        }
    },
    methods: {
        cerca() {
            this.store.film = "FILM TROVATI"
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/search/movie?api_key=a07beba54546d984c4eb2fe69436b1bc',
                params: { query: this.store.input, include_adult: 'false', language: 'it', page: '1' },
                headers: {
                    accept: 'application/json',
                }
            };

            axios
                .request(options)
                .then((response) => {
                    this.store.movies = response.data.results
                    console.log(this.store.movies);
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
        cercaDue() {
            this.store.serie = "SERIE TROVATE"
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/search/tv?api_key=a07beba54546d984c4eb2fe69436b1bc',
                params: { query: this.store.input, include_adult: 'false', language: 'it', page: '1' },
                headers: {
                    accept: 'application/json',
                }
            };

            axios
                .request(options)
                .then((r) => {
                    this.store.series = r.data.results
                    console.log(this.store.series);
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
    }
}
</script>

<template>
    <header>
        <nav class="position-fixed w-100 p-3">
            <div class="myCont d-flex justify-content-between">
                <div class="appNameCont">
                    <a class="appName" href="#"> {{ title }} </a>
                </div>
                <div class="d-flex align-items-center">
                    <input v-model="info.input" type="text" placeholder="cerca qui">
                    <button @click="cerca(), cercaDue()">cerca</button>
                </div>
            </div>
        </nav>
    </header>
</template>

<style>
header {
    z-index: 99999;
}

.appName {
    color: red;
    font-weight: 900;
    font-size: 2rem;
}

nav {
    background-color: #222;
    z-index: 99999;
}
</style>
