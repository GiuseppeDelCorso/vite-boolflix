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
    <div>
        <div class="card2">
            <div class="contianerCard">
                <img class="imgCard" :src="`https://image.tmdb.org/t/p/w342${this.linksSeries.poster_path}`">
            </div>
            <div class="containerInfo">
                <p class="styleTitle">{{ linksSeries.original_name }}</p>
                <p class="styleOverview">{{ linksSeries.overview }}</p>
                <img class="imgLenguage" :src="`/img/${linksSeries.original_language}.png`">
                <p class="styleVote">{{ linksSeries.vote_count }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card2 {
    width: 300px;
    height: 300px;
    margin: 0.5rem;
    background-color: red;

}

.contianerCard {
    width: 100%;
    object-fit: contain;
}

.imgCard {
    width: 100%;
    height: 420px;

}

.imgLenguage {
    width: 15%;
    height: 30px;
    object-fit: cover;
    object-position: center;
    margin-left: 126px;
    bottom: 150px;
}

.styleTitle {
    text-align: center;
    font-weight: bold;
    color: white;
    bottom: 150px;

}

.styleVote {
    text-align: center;
    color: white;
    padding-top: 5px;
    bottom: 130px;
}

.styleOverview {
    font-family: sans-serif;
    text-align: center;
    color: white;
    padding-top: 5px;
    bottom: 130px;
}


.containerInfo {
    background-color: black;
    position: relative;
    bottom: 420px;
    height: 420px;

}

.containerrdCa:hover {
    display: none;
}
</style>