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
	<div class="card">
		<p>{{ linksMovie.original_title }}</p>
		<img :src="`/img/${linksMovie.original_language}.png`">
		<p>{{ linksMovie.vote_count }}</p>
		<p>{{ linksMovie.original_language }}</p>
	</div>
</template>

<style scoped>
.card {
	width: 23%;
	margin: 0.5rem;
	background-color: blue;
}
</style>
