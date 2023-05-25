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
    }
}
</script>

<template>
    <header>
        <HeaderApp />
    </header>
    <main>
        <MainApp />
    </main>
    <footer>
        <FooterApp />
    </footer>
</template>

<style lang="scss" scoped>
@use './style/specific/utility.scss' as *;
@use './style/specific/style.scss' as *;
</style>