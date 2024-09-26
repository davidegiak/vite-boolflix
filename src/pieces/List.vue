<script>
import store from "../data/store.js"
import Card from "./Card.vue"
import CardSeries from "./CardSeries.vue";
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import CountryFlag from 'vue-country-flag-next';

import 'swiper/css';
import 'swiper/css/navigation';
export default {
    components: {
        Card,
        CardSeries,
        Swiper,
        SwiperSlide,
        CountryFlag,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, A11y],
        };
    },
    data() {
        return {
            store,
            attiva: '',
            img: '',
            imgSeries: '',
            imgAction: '',
            imgAnimation: '',
            imgComedy: '',
            imgFantasy: '',
            imgActionS: '',
            imgAnimationS: '',
        }
    },
    methods: {
        change(index) {
            this.imgSeries = '',
                this.imgAction = '',
                this.imgAnimation = '',
                this.imgComedy = '',
                this.imgFantasy = '',
                this.imgActionS = '',
                this.imgAnimationS = '',
                this.attiva = index;
            this.img = this.store.prefisso + this.store.movies[this.attiva].poster_path;
            // console.log(this.img);

            // console.log(this.attiva);

        },
        changeDue(index) {
            this.img = '',
                this.imgAction = '',
                this.imgAnimation = '',
                this.imgComedy = '',
                this.imgFantasy = '',
                this.imgActionS = '',
                this.imgAnimationS = '',
                this.attiva = index;
            this.imgSeries = this.store.prefisso + this.store.series[this.attiva].poster_path;
            console.log(this.imgSeries);

            console.log(this.attiva);

        },
        changeAction(index) {
            this.img = '';
            this.imgSeries = '';
            this.imgAnimation = '';
            this.imgComedy = '';
            this.imgFantasy = '';
            this.imgActionS = '',
                this.imgAnimationS = '',
                this.attiva = index;
            this.imgAction = this.store.prefisso + this.store.actionM[this.attiva].poster_path;
            // console.log(this.imgAction);

            // console.log(this.attiva);

        },
        changeActionS(index) {
            this.img = '';
            this.imgSeries = '';
            this.imgAnimation = '';
            this.imgComedy = '';
            this.imgFantasy = '';
            this.imgAction = '',
                this.imgAnimationS = '',
                this.attiva = index;
            this.imgActionS = this.store.prefisso + this.store.actionAdventureS[this.attiva].poster_path;
            // console.log(this.imgAction);

            // console.log(this.attiva);

        },
        changeAnimation(index) {
            this.img = '',
                this.imgSeries = '',
                this.imgAction = '',
                this.imgComedy = '',
                this.imgFantasy = '',
                this.imgActionS = '',
                this.imgAnimationS = '',
                this.attiva = index;
            this.imgAnimation = this.store.prefisso + this.store.animationM[this.attiva].poster_path;
            // console.log(this.imgAction);

            // console.log(this.attiva);

        },
        changeComedy(index) {
            this.img = '',
                this.imgSeries = '',
                this.imgAction = '',
                this.imgAnimation = '',
                this.imgFantasy = '',
                this.imgActionS = '',
                this.imgAnimationS = '',
                this.attiva = index;
            this.imgComedy = this.store.prefisso + this.store.comedyM[this.attiva].poster_path;
            // console.log(this.imgComedy);

            // console.log(this.attiva);

        },
        changeFantasy(index) {
            this.img = '',
                this.imgSeries = '',
                this.imgAction = '',
                this.imgAnimation = '',
                this.imgComedy = '',
                this.imgActionS = '',
                this.imgAnimationS = '',
                this.attiva = index;
            this.imgFantasy = this.store.prefisso + this.store.fantasyM[this.attiva].poster_path;
            // console.log(this.imgAction);

            // console.log(this.attiva);

        },
        changeAnimationS(index) {
            this.img = '',
                this.imgSeries = '',
                this.imgAction = '',
                this.imgAnimation = '',
                this.imgComedy = '',
                this.imgActionS = '',
                this.imgFantasy = '',
                this.attiva = index;
            this.imgAnimationS = this.store.prefisso + this.store.animationS[this.attiva].poster_path;
            // console.log(this.imgAction);

            // console.log(this.attiva);

        },
        // changeSearchedDue(index) {
        //     this.img =  '',
        //     this.imgMvsSrcd = '',
        //     this.imgSeries = '',
        //     this.attiva = index;
        //     this.imgSrsSrcd = this.store.prefisso + this.store.serieSearched[this.attiva].poster_path;
        //     console.log(this.imgSrsSrcd);

        //     console.log(this.attiva);

        // },
        lang(lang) {
            const validLang = {
                en: 'gb',
                ja: 'jp',
                ko: 'kr',
                zh: 'cn',
                hi: 'in'

            }
            if (lang in validLang) {
                return validLang[lang]
            }

            else {
                return lang
            }
        }
    },
    mounted() {
    }

}

</script>


<template>
    <div class="m-0">
        <div id="cont-top" class="" data-bs-spy="scroll" data-bs-target="#slides" data-bs-offset="0"
            data-bs-smooth-scroll="true">

            <!-- ****************SE APPENA APERTO  LA PAGINA**************** -->


            <div v-if="img == '' && imgSeries == '' && imgAction == '' && imgAnimation == '' && imgComedy == '' && imgFantasy == '' && imgActionS == '' && imgAnimationS == ''"
                :style="{ backgroundImage: `url(${store.imgZero})` }" id="img-top">
                <div id="top-desc" class="">
                    <div v-if="store.movies.length > 0" class="desc-cont mx-5">
                        <h1>{{ store.movies[0].title }}</h1>
                        <p>{{ store.movies[0].original_title }}</p>
                        <p>{{ store.movies[0].overview }}</p>
                        <CountryFlag :country='lang(store.movies[0].original_language)' size="big" />
                        <div class="vote-cont d-flex gap-1">
                            <div v-if="Math.ceil(store.movies[0].vote_average / 2) >= 1"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.movies[0].vote_average / 2) < 1"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.movies[0].vote_average / 2) >= 2"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.movies[0].vote_average / 2) < 2"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.movies[0].vote_average / 2) >= 3"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.movies[0].vote_average / 2) < 3"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.movies[0].vote_average / 2) >= 4"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.movies[0].vote_average / 2) < 4"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.movies[0].vote_average / 2) >= 5"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.movies[0].vote_average / 2) < 5"><i
                                    class="fa-regular fa-star"></i></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- *******************SE SI CLICCA SU UNA SERIE*************** -->
            <div v-else-if="imgSeries != '' && img == '' && imgAction == '' && imgAnimation == '' && imgComedy == '' && imgFantasy == '' && imgActionS == '' && imgAnimationS == ''"
                :style="{ backgroundImage: `url(${imgSeries})` }" id="img-top">
                <div id="top-desc" class="">
                    <div class="desc-cont">
                        <h1>{{ store.series[attiva].name }}</h1>
                        <p>{{ store.series[attiva].original_name }}</p>
                        <p>{{ store.series[attiva].first_air_date }}</p>
                        <p>{{ store.series[attiva].overview }}</p>
                        <CountryFlag :country='lang(store.series[attiva].original_language)' size="big" />
                        <div class="vote-cont d-flex gap-1">
                            <div v-if="Math.ceil(store.series[attiva].vote_average / 2) >= 1"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.series[attiva].vote_average / 2) < 1"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.series[attiva].vote_average / 2) >= 2"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.series[attiva].vote_average / 2) < 2"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.series[attiva].vote_average / 2) >= 3"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.series[attiva].vote_average / 2) < 3"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.series[attiva].vote_average / 2) >= 4"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.series[attiva].vote_average / 2) < 4"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.series[attiva].vote_average / 2) >= 5"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.series[attiva].vote_average / 2) < 5"><i
                                    class="fa-regular fa-star"></i></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- *******************SE SI CLICCA SU UN FILM*************** -->
            <div v-else-if="img != '' && imgSeries == '' && imgAction == '' && imgAnimation == '' && imgComedy == '' && imgFantasy == '' && imgActionS == '' && imgAnimationS == ''"
                :style="{ backgroundImage: `url(${img})` }" id="img-top">
                <div id="top-desc" class="">
                    <div class="desc-cont">
                        <h1>{{ store.movies[attiva].title }}</h1>
                        <p>{{ store.movies[attiva].original_title }}</p>
                        <p>{{ store.movies[attiva].overview }}</p>
                        <CountryFlag :country='lang(store.movies[attiva].original_language)' size="big" />
                        <div class="vote-cont d-flex gap-1">
                            <div v-if="Math.ceil(store.movies[attiva].vote_average / 2) >= 1"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.movies[attiva].vote_average / 2) < 1"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.movies[attiva].vote_average / 2) >= 2"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.movies[attiva].vote_average / 2) < 2"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.movies[attiva].vote_average / 2) >= 3"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.movies[attiva].vote_average / 2) < 3"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.movies[attiva].vote_average / 2) >= 4"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.movies[attiva].vote_average / 2) < 4"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.movies[attiva].vote_average / 2) >= 5"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.movies[attiva].vote_average / 2) < 5"><i
                                    class="fa-regular fa-star"></i></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- *******************SE SI CLICCA SU UN FILM ACTION*************** -->
            <div v-else-if="imgAction != '' && imgSeries == '' && img == '' && imgAnimation == '' && imgComedy == '' && imgFantasy == '' && imgActionS == '' && imgAnimationS == ''"
                :style="{ backgroundImage: `url(${imgAction})` }" id="img-top">
                <div id="top-desc" class="">
                    <div class="desc-cont">
                        <h1>{{ store.actionM[attiva].title }}</h1>
                        <p>{{ store.actionM[attiva].original_title }}</p>
                        <p>{{ store.actionM[attiva].overview }}</p>
                        <CountryFlag :country='lang(store.actionM[attiva].original_language)' size="big" />
                        <div class="vote-cont d-flex gap-1">
                            <div v-if="Math.ceil(store.actionM[attiva].vote_average / 2) >= 1"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.actionM[attiva].vote_average / 2) < 1"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.actionM[attiva].vote_average / 2) >= 2"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.actionM[attiva].vote_average / 2) < 2"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.actionM[attiva].vote_average / 2) >= 3"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.actionM[attiva].vote_average / 2) < 3"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.actionM[attiva].vote_average / 2) >= 4"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.actionM[attiva].vote_average / 2) < 4"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.actionM[attiva].vote_average / 2) >= 5"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.actionM[attiva].vote_average / 2) < 5"><i
                                    class="fa-regular fa-star"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- *******************SE SI CLICCA SU UNA SERIE ACTION*************** -->
            <div v-else-if="imgActionS != '' && imgSeries == '' && img == '' && imgAnimation == '' && imgComedy == '' && imgFantasy == '' && imgAction == '' && imgAnimationS == ''"
                :style="{ backgroundImage: `url(${imgActionS})` }" id="img-top">
                <div id="top-desc" class="">
                    <div class="desc-cont">
                        <h1>{{ store.actionAdventureS[attiva].name }}</h1>
                        <p>{{ store.actionAdventureS[attiva].original_name }}</p>
                        <p>{{ store.actionAdventureS[attiva].first_air_date }}</p>
                        <p>{{ store.actionAdventureS[attiva].overview }}</p>
                        <CountryFlag :country='lang(store.actionAdventureS[attiva].original_language)' size="big" />
                        <div class="vote-cont d-flex gap-1">
                            <div v-if="Math.ceil(store.actionAdventureS[attiva].vote_average / 2) >= 1"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.actionAdventureS[attiva].vote_average / 2) < 1"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.actionAdventureS[attiva].vote_average / 2) >= 2"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.actionAdventureS[attiva].vote_average / 2) < 2"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.actionAdventureS[attiva].vote_average / 2) >= 3"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.actionAdventureS[attiva].vote_average / 2) < 3"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.actionAdventureS[attiva].vote_average / 2) >= 4"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.actionAdventureS[attiva].vote_average / 2) < 4"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.actionAdventureS[attiva].vote_average / 2) >= 5"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.actionAdventureS[attiva].vote_average / 2) < 5"><i
                                    class="fa-regular fa-star"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- *******************SE SI CLICCA SU UN FILM Animazione*************** -->
            <div v-else-if="imgAnimation != '' && imgSeries == '' && img == '' && imgAction == '' && imgComedy == '' && imgFantasy == '' && imgActionS == '' && imgAnimationS == ''"
                :style="{ backgroundImage: `url(${imgAnimation})` }" id="img-top">
                <div id="top-desc" class="">
                    <div class="desc-cont">
                        <h1>{{ store.animationM[attiva].title }}</h1>
                        <p>{{ store.animationM[attiva].original_title }}</p>
                        <p>{{ store.animationM[attiva].overview }}</p>
                        <CountryFlag :country='lang(store.animationM[attiva].original_language)' size="big" />
                        <div class="vote-cont d-flex gap-1">
                            <div v-if="Math.ceil(store.animationM[attiva].vote_average / 2) >= 1"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.animationM[attiva].vote_average / 2) < 1"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.animationM[attiva].vote_average / 2) >= 2"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.animationM[attiva].vote_average / 2) < 2"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.animationM[attiva].vote_average / 2) >= 3"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.animationM[attiva].vote_average / 2) < 3"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.animationM[attiva].vote_average / 2) >= 4"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.animationM[attiva].vote_average / 2) < 4"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.animationM[attiva].vote_average / 2) >= 5"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.animationM[attiva].vote_average / 2) < 5"><i
                                    class="fa-regular fa-star"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- *******************SE SI CLICCA SU UN FILM COMEDY*************** -->
            <div v-else-if="imgComedy != '' && imgSeries == '' && img == '' && imgAction == '' && imgAnimation == '' && imgFantasy == '' && imgActionS == '' && imgAnimationS == ''"
                :style="{ backgroundImage: `url(${imgComedy})` }" id="img-top">
                <div id="top-desc" class="">
                    <div class="desc-cont">
                        <h1>{{ store.comedyM[attiva].title }}</h1>
                        <p>{{ store.comedyM[attiva].original_title }}</p>
                        <p>{{ store.comedyM[attiva].overview }}</p>
                        <CountryFlag :country='lang(store.comedyM[attiva].original_language)' size="big" />
                        <div class="vote-cont d-flex gap-1">
                            <div v-if="Math.ceil(store.comedyM[attiva].vote_average / 2) >= 1"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.comedyM[attiva].vote_average / 2) < 1"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.comedyM[attiva].vote_average / 2) >= 2"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.comedyM[attiva].vote_average / 2) < 2"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.comedyM[attiva].vote_average / 2) >= 3"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.comedyM[attiva].vote_average / 2) < 3"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.comedyM[attiva].vote_average / 2) >= 4"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.comedyM[attiva].vote_average / 2) < 4"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.comedyM[attiva].vote_average / 2) >= 5"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.comedyM[attiva].vote_average / 2) < 5"><i
                                    class="fa-regular fa-star"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- *******************SE SI CLICCA SU UN FILM FANTASY*************** -->
            <div v-else-if="imgFantasy != '' && imgSeries == '' && img == '' && imgAction == '' && imgAnimation == '' && imgComedy == '' && imgActionS == '' && imgAnimationS == ''"
                :style="{ backgroundImage: `url(${imgFantasy})` }" id="img-top">
                <div id="top-desc" class="">
                    <div class="desc-cont">
                        <h1>{{ store.fantasyM[attiva].title }}</h1>
                        <p>{{ store.fantasyM[attiva].original_title }}</p>
                        <p>{{ store.fantasyM[attiva].overview }}</p>
                        <CountryFlag :country='lang(store.fantasyM[attiva].original_language)' size="big" />
                        <div class="vote-cont d-flex gap-1">
                            <div v-if="Math.ceil(store.fantasyM[attiva].vote_average / 2) >= 1"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.fantasyM[attiva].vote_average / 2) < 1"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.fantasyM[attiva].vote_average / 2) >= 2"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.fantasyM[attiva].vote_average / 2) < 2"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.fantasyM[attiva].vote_average / 2) >= 3"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.fantasyM[attiva].vote_average / 2) < 3"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.fantasyM[attiva].vote_average / 2) >= 4"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.fantasyM[attiva].vote_average / 2) < 4"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.fantasyM[attiva].vote_average / 2) >= 5"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.fantasyM[attiva].vote_average / 2) < 5"><i
                                    class="fa-regular fa-star"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- *******************SE SI CLICCA SU UNA SERIE TV D'ANIMAZIONE*************** -->
            <div v-else-if="imgAnimationS != '' && imgSeries == '' && img == '' && imgAction == '' && imgAnimation == '' && imgComedy == '' && imgActionS == '' && imgFantasy == ''"
                :style="{ backgroundImage: `url(${imgAnimationS})` }" id="img-top">
                <div id="top-desc" class="">
                    <div class="desc-cont">
                        <h1>{{ store.animationS[attiva].name }}</h1>
                        <p>{{ store.animationS[attiva].original_name }}</p>
                        <p>{{ store.animationS[attiva].first_air_date }}</p>
                        <p>{{ store.animationS[attiva].overview }}</p>
                        <CountryFlag :country='lang(store.animationS[attiva].original_language)' size="big" />
                        <div class="vote-cont d-flex gap-1">
                            <div v-if="Math.ceil(store.animationS[attiva].vote_average / 2) >= 1"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.animationS[attiva].vote_average / 2) < 1"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.animationS[attiva].vote_average / 2) >= 2"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.animationS[attiva].vote_average / 2) < 2"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.animationS[attiva].vote_average / 2) >= 3"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.animationS[attiva].vote_average / 2) < 3"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.animationS[attiva].vote_average / 2) >= 4"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.animationS[attiva].vote_average / 2) < 4"><i
                                    class="fa-regular fa-star"></i></div>
                            <div v-if="Math.ceil(store.animationS[attiva].vote_average / 2) >= 5"><i
                                    class="fa-solid fa-star text-warning"></i></div>
                            <div v-if="Math.ceil(store.animationS[attiva].vote_average / 2) < 5"><i
                                    class="fa-regular fa-star"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ***************************************CONSIGLIATI************************************************** -->

    <div v-if="store.mvs === true" class="translate ">
        <div class="myCont d-flex justify-content-center flex-wrap gap-2 mt-4">
            <div class="col-12">
                <h1 class="text-start"> FILM POPOLARI </h1>
            </div>
        </div>
        <a id="slides" href="#cont-top">
            <swiper class="my-swiper px-5" :modules="modules" :slides-per-view="6" :space-between="5" navigation
                :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
                @slideChange="onSlideChange">
                <swiper-slide @click="change(index)" class="d-flex slide" v-slot="{ isActive }"
                    v-for="(element, index) in store.movies">
                    <Card :class="isActive ? console.log(index) : 'no'" v-if="store.mvs === true" :info="element"
                        :lang="element.original_language" />
                </swiper-slide>
            </swiper>
        </a>
    </div>
    <div v-if="store.srs === true" class="translate-second">
        <div class="myCont d-flex justify-content-center flex-wrap gap-2">
            <div class="col-12">
                <h1 class="text-start"> SERIE TV POPOLARI </h1>
            </div>
        </div>
        <a id="slides" href="#cont-top">

            <swiper class="my-swiper px-5" :modules="modules" :slides-per-view="6" :space-between="5" navigation
                :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
                @slideChange="onSlideChange">
                <swiper-slide @click="changeDue(index)" class="d-flex slide" v-slot="{ isActive }"
                    v-for="(element, index) in store.series">
                    <CardSeries v-if="store.srs === true" :lang="store.flags" :infoDue="element"
                        :class="isActive ? console.log(index) : 'no'" />
                </swiper-slide>
            </swiper>
        </a>
    </div>

    <!-- ******************************************************************************************************************** -->

    <!-- +++++++++++++++++++++++++++++++++++++++++++++++PER GENERE ************************************************* -->

    <!-- **********FANTASY****************** -->


    <div v-if="store.mvs === true" class="translate-second">
        <div class="myCont d-flex justify-content-center flex-wrap gap-2">
            <div class="col-12">
                <h1 class="text-start"> FILM FANTASY </h1>
            </div>
        </div>
        <a id="slides" href="#cont-top">

            <swiper class="my-swiper px-5" :modules="modules" :slides-per-view="6" :space-between="5" navigation
                :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
                @slideChange="onSlideChange">
                <swiper-slide @click="changeFantasy(index)" class="d-flex slide" v-slot="{ isActive }"
                    v-for="(element, index) in store.fantasyM">
                    <Card v-if="store.mvs === true" :info="element" :lang="element.original_language"
                        :class="isActive ? console.log(index) : 'no'" />
                </swiper-slide>
            </swiper>
        </a>
    </div>


    <!-- **********ACTION MOVIES****************** -->

    <div v-if="store.mvs === true" class="translate-second">
        <div class="myCont d-flex justify-content-center flex-wrap gap-2">
            <div class="col-12">
                <h1 class="text-start"> FILM AZIONE </h1>
            </div>
        </div>
        <a id="slides" href="#cont-top">

            <swiper class="my-swiper px-5" :modules="modules" :slides-per-view="6" :space-between="5" navigation
                :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
                @slideChange="onSlideChange">
                <swiper-slide @click="changeAction(index)" class="d-flex slide" v-slot="{ isActive }"
                    v-for="(element, index) in store.actionM">
                    <Card v-if="store.mvs === true" :info="element" :lang="element.original_language"
                        :class="isActive ? console.log(index) : 'no'" />
                </swiper-slide>
            </swiper>
        </a>
    </div>
    <!-- **********ACTION TV****************** -->

    <div v-if="store.srs === true" class="translate-second">
        <div class="myCont d-flex justify-content-center flex-wrap gap-2">
            <div class="col-12">
                <h1 class="text-start"> SERIE TV D'AZIONE </h1>
            </div>
        </div>
        <a id="slides" href="#cont-top">

            <swiper class="my-swiper px-5" :modules="modules" :slides-per-view="6" :space-between="5" navigation
                :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
                @slideChange="onSlideChange">
                <swiper-slide @click="changeActionS(index)" class="d-flex slide" v-slot="{ isActive }"
                    v-for="(element, index) in store.actionAdventureS">
                    <CardSeries v-if="store.srs === true" :lang="store.flags" :infoDue="element"
                        :class="isActive ? console.log(index) : 'no'" />
                </swiper-slide>
            </swiper>
        </a>
    </div>

    <!-- **********ANIMATION****************** -->

    <div v-if="store.mvs === true" class="translate-second">
        <div class="myCont d-flex justify-content-center flex-wrap gap-2">
            <div class="col-12">
                <h1 class="text-start"> FILM ANIMAZIONE </h1>
            </div>
        </div>
        <a id="slides" href="#cont-top">

            <swiper class="my-swiper px-5" :modules="modules" :slides-per-view="6" :space-between="5" navigation
                :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
                @slideChange="onSlideChange">
                <swiper-slide @click="changeAnimation(index)" class="d-flex slide" v-slot="{ isActive }"
                    v-for="(element, index) in store.animationM">
                    <Card v-if="store.mvs === true" :info="element" :lang="element.original_language"
                        :class="isActive ? console.log(index) : 'no'" />
                </swiper-slide>
            </swiper>
        </a>
    </div>
    <!-- **********SERIE TV ANIMAZIONE****************** -->

    <div v-if="store.srs === true" class="translate-second">
        <div class="myCont d-flex justify-content-center flex-wrap gap-2">
            <div class="col-12">
                <h1 class="text-start"> SERIE TV D'ANIMAZIONE </h1>
            </div>
        </div>
        <a id="slides" href="#cont-top">

            <swiper class="my-swiper px-5" :modules="modules" :slides-per-view="6" :space-between="5" navigation
                :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
                @slideChange="onSlideChange">
                <swiper-slide @click="changeAnimationS(index)" class="d-flex slide" v-slot="{ isActive }"
                    v-for="(element, index) in store.animationS">
                    <CardSeries v-if="store.srs === true" :lang="store.flags" :infoDue="element"
                        :class="isActive ? console.log(index) : 'no'" />
                </swiper-slide>
            </swiper>
        </a>
    </div>
    <!-- **********COMEDY****************** -->


    <div v-if="store.mvs === true" class="translate-second">
        <div class="myCont d-flex justify-content-center flex-wrap gap-2">
            <div class="col-12">
                <h1 class="text-start"> FILM COMMEDIA </h1>
            </div>
        </div>
        <a id="slides" href="#cont-top">

            <swiper class="my-swiper px-5" :modules="modules" :slides-per-view="6" :space-between="5" navigation
                :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
                @slideChange="onSlideChange">
                <swiper-slide @click="changeComedy(index)" class="d-flex slide" v-slot="{ isActive }"
                    v-for="(element, index) in store.comedyM">
                    <Card v-if="store.mvs === true" :info="element" :lang="element.original_language"
                        :class="isActive ? console.log(index) : 'no'" />
                </swiper-slide>
            </swiper>
        </a>
    </div>

    <!-- <div v-if="store.serieSearched.length > 0">
        <div class="translate-second">
        <div class="myCont d-flex justify-content-center flex-wrap gap-2">
            <div class="col-12">
                <h1 class="text-start"> SERIE TV TROVATE </h1>
            </div>
        </div>
        <a id="slides" href="#cont-top">

            <swiper class="my-swiper px-5" :modules="modules" :slides-per-view="6" :space-between="5" navigation
                :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
                @slideChange="onSlideChange">
                <swiper-slide @click="changeSearchedDue(index)" class="d-flex slide" v-slot="{ isActive }"
                    v-for="(element, index) in store.serieSearched">
                    <CardSeries v-if="store.srs === true" :lang="store.flags" :infoDue="element"
                        :class="isActive ? console.log(index) : 'no'" />
                </swiper-slide>
            </swiper>
        </a>
    </div>
    </div> -->
</template>

<style scoped>
#cont-top {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    height: 90vh;
}

#img-top {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

#top-desc {
    background: rgb(34, 34, 34);
    background: linear-gradient(90deg, rgba(34, 34, 34, 1) 27%, rgba(34, 34, 34, 0.6439308145133054) 65%);
    height: 100%;
}

.translate {
    transform: translateY(-9rem);
}

.translate-second {
    transform: translateY(-7rem);
}

.desc-cont {
    width: 50%;
    padding: 1rem;
}

.slide {
    transition: transform 200ms ease-in-out;
    overflow: visible;
    position: relative;
    height: auto;

}

.slide:hover {
    transform: scale(1.2);
    z-index: 3;
    transform-origin: center;
}

.my-swiper {
    height: 30rem;
    /* width: 20rem; */
}
</style>