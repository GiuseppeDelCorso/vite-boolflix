<script >
export default {
	name: "findMoovie",
	props: {
		linksMovie: Object
	},
	data() {
		return {

		}
	},
	methods: {

	},

}


</script>

<template>
	<div>
		<div class="card">
			<div class="containerInfo">
				<p>{{ linksMovie.original_title }}</p>
				<img class="imgLenguage" :src="`/img/${linksMovie.original_language}.png`">
				<p>{{ linksMovie.vote_count }}</p>

			</div>
			<div class="contianerCard">
				<img class="imgCard" :src="`https://image.tmdb.org/t/p/w342${this.linksMovie.poster_path}`">
			</div>
		</div>

	</div>
</template>

<style scoped>
.card {
	width: 300px;
	margin: 0.5rem;
	background-color: blue;
}

.contianerCard {
	width: 100%;
}

.imgCard {
	width: 100%;
	height: 420px;
}

.imgLenguage {
	width: 100%;
	height: 40px;
}

.containerInfo {}
</style>
