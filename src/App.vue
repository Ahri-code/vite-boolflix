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
    },
    methods: {
        getMovie(path) {
            this.store.loading = true;
            axios.get(path).then(element => {
                const result = element.data.results;
                this.store.moviesArray.push(result);
                this.store.loading = false;
            });
        }
    }
}
</script>

<template>
    <header class="w-100per h-20vh flex jc-center ai-center bg-black">
        <HeaderApp />
    </header>
    <main class="w-100per flex jc-center ai-center bg-black">
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