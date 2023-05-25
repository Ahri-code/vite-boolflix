<script>
import { store } from '../data/store'
import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css';


export default {
    name: "MainApp",
    data() {
        return {
            store
        }
    },
    methods: {
        posterImg(index) {
            console.log(index);
            let path = "https://image.tmdb.org/t/p/w185/"
            path += index.poster_path;
            return path;
        }
    }
}
</script>

<template>
    <div class="std-width p-2 flex ai-center relative">
        <button class="fa-solid fa-chevron-left absolute left-0"></button>
        <div class="flex ai-center gap-1 overflow-hidden">
            <div v-for="i in store.moviesArray[0]">
                <div>
                    <img :src="posterImg(i)">
                    <div>
                        <!-- title -->
                        <!-- relese date -->
                        <!-- lang -->
                        <!-- trama -->
                        <!-- voto -->
                    </div>
                </div>
            </div>
        </div>
        <button class="h-278 fa-solid fa-chevron-right absolute right-0"></button>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/specific/utility.scss' as *;
@use '../style/specific/style.scss' as *;
</style>