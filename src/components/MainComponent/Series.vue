<script>
import { store } from '../../data/store'
import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";


export default {
    name: "Series",
    data() {
        return {
            store
        }
    },
    methods: {
        posterImg(index) {
            let path = "https://image.tmdb.org/t/p/w154/";
            path += index.poster_path;
            if (index.poster_path != null) {
                return path;
            }
        },
        starConverter(index) {
            let converted = parseInt(index.vote_average);
            converted = converted / 2;
            return converted;
        },
        flagChooser(index) {
            let flag = "fi-";
            flag += store.flagConverter[index.original_language];
            return flag;
        }
    }
}
</script>

<template>
    <div class="std-width p-2 flex ai-center relative">
        <button class="fa-solid fa-chevron-left absolute left-0"></button>
        <div class="flex gap-1 overflow-hidden">
            <div v-for="i in store.seriesArray[0]">
                <div class="flex fd-columns gap-1 relative">
                    <img :src="posterImg(i)">
                    <div class="p-05 c-white flex fd-columns gap-05 absolute movieInfo">
                        <h3 class="ta-center">{{ i.name }}</h3>
                        <div class="flex jc-between">
                            <p>{{ i.release_date }}</p>
                            <p><span class="fi" :class="flagChooser(i)"></span> {{ i.original_language }}</p>
                        </div>
                        <p class="overflow-hidden"><small>{{ i.overview }}</small></p>
                        <p>{{ starConverter(i) }}</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="h-278 fa-solid fa-chevron-right absolute right-0"></button>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/specific/utility.scss' as *;
@use '../../style/specific/style.scss' as *;
</style>