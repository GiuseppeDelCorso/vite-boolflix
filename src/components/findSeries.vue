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
    <div class="card2">
        <p>{{ linksSeries.original_name }}</p>
        <img :src="`/img/${linksSeries.original_language}.png`">
        <p>{{ linksSeries.vote_count }}</p>
        <p>{{ linksSeries.original_language }}</p>
    </div>
</template>

<style scoped>
.card2 {
    width: 23%;
    margin: 0.5rem;
    background-color: red;
}
</style>