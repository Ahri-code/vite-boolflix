<script>
import Films from './MainComponent/Films.vue'
import Series from './MainComponent/Series.vue'
import { store } from '../data/store'
import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";


export default {
    name: "MainApp",
    components: {
        Films,
        Series
    },
    data() {
        return {
            store
        }
    },
    methods: {
        posterImg(index) {
            let path = "https://image.tmdb.org/t/p/w185/";
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
    <h2 class="pt-2">Movies</h2>
    <Films />
    <h2>Series</h2>
    <Series />
</template>

<style lang="scss" scoped>
@use '../style/specific/utility.scss' as *;
@use '../style/specific/style.scss' as *;
</style>