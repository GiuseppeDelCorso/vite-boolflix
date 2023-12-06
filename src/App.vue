<script >
import findMoovie from './components/findMoovie.vue'
import getFilm from './components/getFilm.vue'
import findSeries from './components/findSeries.vue'
import { store } from "./store.js"
import axios from 'axios'


export default {
	components: {
		findMoovie,
		getFilm,
		findSeries
	},
	data() {
		return {
			store
		}
	},
	mounted() {
		this.findLinks();
	},
	methods: {
		findLinks() {
			let opzioniRichiestaMovie = {
				method: 'GET',
				url: this.store.urlApiMovie,
				params: {
					query: this.store.searchMovie,
					include_adult: 'false',
					language: '',
					page: '1',
					api_key: this.store.apy_key
				},
				headers: {
					accept: 'application/json',
				},
			};
			axios.request(opzioniRichiestaMovie).then(response => {
				this.store.movieList = response.data.results
				console.log("Ricevuto1", response.data);
			})
				.catch(error => {
					console.error(error);
				});

			let opzioniRichiestaSeries = {
				method: 'GET',
				url: this.store.urlApiSeries,
				params: {
					query: this.store.searchMovie,
					include_adult: 'false',
					language: '',
					page: '1',
					api_key: this.store.apy_key
				},
				headers: {
					accept: 'application/json',
				}
			};
			axios.request(opzioniRichiestaSeries).then(response => {
				this.store.seriesList = response.data.results
				console.log("Ricevuto2", response.data);
			})
				.catch(error => {
					console.error(error);
				});
		},


	}
};

</script>
	


<template>
	<header>
		<h1>Boolflix</h1>
		<getFilm @search="findLinks" />
	</header>
	<h2 class="styleTitle">Risultati Film</h2>
	<section class="container">
		<findMoovie v-for="contenuti in store.movieList" :linksMovie="contenuti" />
	</section>
	<h2 class="styleTitle">Risultati Serie</h2>
	<section class="container">
		<findSeries v-for="contenuti in store.seriesList" :linksSeries="contenuti" />
	</section>
</template> 

<style scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 20px;
	background-color: black;
	color: red;
	font-size: 20px;
	padding: 4rem;
}

.container {
	width: 100%;
	height: 46vh;
	flex-shrink: 0;
	margin: 3rem auto;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	overflow: auto;
}

.styleTitle {
	text-align: center;
	font-weight: bold;
	color: white;
	margin: 0;
}
</style>
