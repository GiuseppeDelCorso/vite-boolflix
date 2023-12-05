import { reactive } from 'vue'

export const store = reactive({
	movieList: [],
	seriesList: [],
	searchMovie: "",
	urlApiMovie: 'https://api.themoviedb.org/3/search/movie',
	urlApiSeries: 'https://api.themoviedb.org/3/search/tv',
	apy_key: '7f49a8a4e093c76db9959c9de6405a5b'
}); 