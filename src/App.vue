<script>
import HeaderApp from './components/HeaderApp.vue'
import MainApp from './components/MainApp.vue'
import FooterApp from './components/FooterApp.vue'
import { store } from './data/store'
import axios from 'axios'

export default {
    name: "App",
    components: {
        HeaderApp,
        MainApp,
        FooterApp
    },
    data() {
        return {
            store
        }
    },
    created() {
        this.getMovie(this.store.urlAPI);
        this.getSerie(this.store.seriesAPI);
    },
    methods: {
        searchAll() {
            this.movieSearch();
            this.seriesSearch();
        },
        getMovie(path) {
            this.store.loading = true;
            axios.get(path).then(element => {
                const result = element.data.results;
                this.store.moviesArray = [];
                this.store.moviesArray.push(result);
                this.store.loading = false;
            });
        },
        movieSearch() {
            this.store.loading = true;
            if (this.store.search == "") {
                this.getMovie(this.store.urlAPI);
            }
            else {
                let url = this.store.searchMovieAPI;
                url += this.store.search
                axios.get(url).then(element => {
                    const result = element.data.results;
                    this.store.moviesArray = [];
                    this.store.moviesArray.push(result);
                    this.store.loading = false;
                });
            }
        },
        getSerie(path) {
            this.store.loading = true;
            axios.get(path).then(element => {
                const result = element.data.results;
                this.store.seriesArray = [];
                this.store.seriesArray.push(result);
                this.store.loading = false;
            });
        },
        seriesSearch() {
            this.store.loading = true;
            if (this.store.search == "") {
                this.getSeries(this.store.seriesAPI);
            }
            else {
                let url = this.store.searchSeriesAPI;
                url += this.store.search
                axios.get(url).then(element => {
                    const result = element.data.results;
                    this.store.seriesArray = [];
                    this.store.seriesArray.push(result);
                    this.store.loading = false;
                    console.log(this.store.seriesArray);
                });
            }
        }
    }
}
</script>

<template>
    <header class="w-100per flex jc-center ai-center bg-black">
        <HeaderApp />
    </header>
    <main class="w-100per flex jc-center ai-center fd-columns bg-black">
        <input @input="searchAll" v-model="store.search">
        <MainApp />
    </main>
    <footer class="w-100per h-20vh flex jc-center ai-center bg-black">
        <FooterApp />
    </footer>
</template>

<style lang="scss" scoped>
@use './style/specific/utility.scss' as *;
@use './style/specific/style.scss' as *;
</style>