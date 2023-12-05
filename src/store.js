import { reactive } from 'vue'

export const store = reactive({
	movieList: [],
	searchMovie: "",
	urlApi: 'https://api.themoviedb.org/3/search/movie',
	apy_key: '7f49a8a4e093c76db9959c9de6405a5b'
}); 