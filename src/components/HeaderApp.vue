<script>
import store from '../data/store.js';
import axios, { all } from "axios";
import { RouterLink } from 'vue-router';
export default {
    name: "HeaderApp",
    props: ["info"],
    data() {
        return {
            store,
            title: "PX",
        }
    },
    methods: {
        cerca() {
            this.store.mvsSrcd = true
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
                    this.store.movieSearched = response.data.results;
                    console.log(this.store.movieSearched);
                    
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
        cercaDue() {
            this.store.serie = "SERIE TROVATE"
            this.store.srs = true
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
                    this.store.serieSearched = r.data.results
                    console.log('cercato', this.store.serieSearched);
                    // console.log(this.store.series);
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
        seriesLink() {
            if (this.store.srs === false) {
                this.store.srs = true
                this.store.mvs = false
                // this.store.serie = "SERIE TROVATE"
            }
            else if (this.store.srs === true) {
                this.store.mvs = false
                // this.store.film = null
            }
        },
        moviesLink() {
            if (this.store.mvs === false) {
                this.store.mvs = true
                this.store.srs = false
                // this.store.film = "FILM TROVATI"
            }
            else if (this.store.mvs === true) {
                this.store.srs = false
                // this.store.serie = null
            }
        },
        all() {
            this.store.srs = true
            this.store.mvs = true
        },
        firstCall() {
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/discover/movie?api_key=a07beba54546d984c4eb2fe69436b1bc',
                params: { sort_by: 'popularity.desc', include_video: 'false', include_adult: 'false', language: 'it', page: '1' },
                headers: {
                    accept: 'application/json',
                }
            };
            axios
                .request(options)
                .then((response) => {
                    this.store.movies = response.data.results
                    // console.log(this.store.movies);
                })
                .catch(function (error) {
                    console.error(error);
                });
            if (this.store.srs === true) {
                this.store.serie = "SERIE TROVATE"
            }
            if (this.store.mvs === true) {
                this.store.film = "FILM TROVATI"
            }
        },
        secondCall() {
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/discover/tv?api_key=a07beba54546d984c4eb2fe69436b1bc',
                params: { sort_by: 'popularity.desc', include_video: 'false', include_adult: 'false', language: 'it', page: '1' },
                headers: {
                    accept: 'application/json',
                }
            };

            axios
                .request(options)
                .then((r) => {
                    this.store.series = r.data.results
                    // console.log(this.store.series);
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
        filterCall() {
            axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=it&page=1&with_genres=28', {
                params: { query: 'batman', api_key: 'a07beba54546d984c4eb2fe69436b1bc' },
            }).then((response) => {
                console.log('FILTROOOOO', response.data.results);
                // this.store.actionM = response.data.results;

            })
        },
    },
}
</script>

<template>
    <header class="h-100">
        <nav class="d-flex flex-column flex-shrink-0 align-item-center navbar-dark">
            <RouterLink to="/" class="appName navbar-brand d-block p-3 text-decoration-none" href="#"> {{ title }}
            </RouterLink>
            <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
                <!-- <li class="nav-item">
                        <a class="nav-link text-light py-3 rounded-0" @click="moviesLink()" href="#">Film</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light py-3 rounded-0" @click="seriesLink()" href="#">Serie TV</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light py-3 rounded-0" @click="all()" href="#">Tutto</a>
                    </li> -->
                <li class="nav-item d-flex justify-content-center position-relative">
                    <RouterLink to="/" class="nav-link text-light py-3 rounded-0">Home</RouterLink>
                </li>
            </ul>
            <div class="btn-group dropend">
                <button type="button" class="btn dropdown-toggle text-light" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Filtra
                </button>
                <ul class="dropdown-menu bg-dark px-2">
                    <!-- Dropdown menu links -->
                    <li class="nav-item border-bottom">
                        <a class="nav-link text-light py-3 rounded-0" @click="all()" href="#">Tutto</a>
                    </li>
                    <li class="nav-item border-bottom">
                        <a class="nav-link text-light py-3 rounded-0" @click="moviesLink()" href="#">Film</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light py-3 rounded-0" @click="seriesLink()" href="#">Serie TV</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light py-3 rounded-0" @click="filterCall()" href="#">AZIONE</a>
                    </li>
                </ul>
            </div>

            <div id="search-bar" class="ms-2 search-bar">
                <input class="search-bar-input" @keyup.enter="cerca(), cercaDue()" v-model="info.input" type="text"
                    placeholder="cerca qui">
                <RouterLink to="/search" class="search-bar-submit d-flex justify-content-center align-items-center"
                    @click="cerca(), cercaDue()">
                    <i class="fa-solid fa-magnifying-glass" aria-hidden="true">
                    </i>
                </RouterLink>
            </div>
        </nav>
    </header>
</template>

<style>
header {
    width: 5rem;
    /* width: 40rem; */
    height: 100vh;
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
