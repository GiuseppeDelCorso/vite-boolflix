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
	<div class="container">
		<div class="row d-flex ">
			<div class="col-2 my-2 BgCard">
				<p>{{ linksMovie.original_title }}</p>
				<p>{{ linksMovie.vote_count }}</p>
				<p>{{ linksMovie.original_language }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.BgCard {
	background-color: rgb(207, 13, 13);
}
</style>
