<script >
import findMoovie from './components/findMoovie.vue'
import getFilm from './components/getFilm.vue'
import { store } from "./store.js"
import axios from 'axios'


export default {
	components: {
		findMoovie,
		getFilm
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
			let opzioniRichiesta = {
				method: 'GET',
				url: this.store.urlApi,
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
			axios.request(opzioniRichiesta).then(response => {
				this.store.movieList = response.data.results
				console.log("Ricevuto", response.data);
			})
				.catch(error => {
					console.error(error);
				});
		}
	}
};

</script>



<template>
	<getFilm @search="findLinks" />
	<findMoovie v-for="contenuti in store.movieList" :links="contenuti" />
</template>

<style scoped></style>
