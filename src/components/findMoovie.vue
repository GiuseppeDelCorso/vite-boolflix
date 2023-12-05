<script >
export default {
	name: "findMoovie",
	props: {
		links: Object
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
	<div class="container BgCard">
		<div class="row">
			<div class="col-12">
				<p>{{ links.title }}</p>
				<p>{{ links.original_title }}</p>
				<p>{{ links.vote_count }}</p>
				<p>{{ links.original_language }}</p>
			</div>
		</div>

	</div>
</template>

<style scoped>
.BgCard {
	background-color: black;
}
</style>
