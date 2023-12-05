<script >
import findMoovie from './components/findMoovie.vue'
import getFilm from './components/getFilm.vue'
import getSeries from './components/getSeries.vue'
import findSeries from './components/findSeries.vue'
import { store } from "./store.js"
import axios from 'axios'


export default {
	components: {
		findMoovie,
		getFilm,
		getSeries,
		findSeries
	},
	data() {
		return {
			store
		}
	},
	mounted() {
		this.findLinksMovie();
		this.findLinksSeries();
	},
	methods: {
		findLinksMovie() {
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
		},
		findLinksSeries() {
			const opzioniRichiestaSeries = {
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


		}

	}
};

</script>



<template>
	<getFilm @search="findLinksMovie" />
	<getSeries @search="findLinksSeries" />
	<findMoovie v-for="contenuti in store.movieList" :linksMovie="contenuti" />
	<findSeries v-for="contenuti in store.seriesList" :linksSeries="contenuti" />
</template>

<style scoped></style>
