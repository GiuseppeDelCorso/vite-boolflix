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
					language: 'en-US',
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
					language: 'en-US',
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
	<section class="container">
		<findMoovie v-for="contenuti in store.movieList" :linksMovie="contenuti" />
	</section>
	<section class="container">
		<findSeries v-for="contenuti in store.seriesList" :linksSeries="contenuti" />
	</section>
</template> 

<style scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	background-color: black;
	color: red;
	font-size: 20px;
	padding: 4rem;
}

.container {
	width: 80%;
	height: 40vh;
	margin: 2rem auto;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	overflow: auto;
	flex-shrink: 0;
}
</style>
