import { reactive } from "vue";

export const store = reactive({
    urlAPI: "https://api.themoviedb.org/3/discover/movie?api_key=1a5990cf8ebd3b17beab02e7c9255f22",
    loading: true,
    moviesArray: []
});