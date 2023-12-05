<script >
export default {
    name: "findSerie",
    props: {
        linksSeries: Object
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
                <p>{{ linksSeries.original_name }}</p>
                <p>{{ linksSeries.vote_count }}</p>
                <p>{{ linksSeries.original_language }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.BgCard {
    background-color: black;
}
</style>