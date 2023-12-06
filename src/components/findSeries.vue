<script >
export default {
    name: "findSerie",
    props: {
        linksSeries: Object
    },
    data() {
        return {
            voteInt: (Math.ceil(this.linksSeries.vote_average) / 2)
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
                <div class="card-star">
                    <i v-for="i in 5" :class="{ 'filled': i <= voteInt }" class="fas fa-star"></i>
                </div>
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
    font-weight: bold;
    color: #000000;
}

.styleTitle {
    text-align: center;
    font-weight: bold;
    color: white;
    bottom: 150px;
    margin: 5%;
    font-weight: bold;
    color: white;

}

.styleVote {
    text-align: center;
    color: white;
    padding-top: 5px;
    bottom: 130px;
    margin: 5%;
    font-weight: bold;
    color: white;
}

.styleOverview {
    font-family: sans-serif;
    text-align: center;
    color: white;
    padding-top: 5px;
    bottom: 130px;
    margin: 5%;
    font-weight: bold;
    color: white;
}


.containerInfo {
    position: relative;
    bottom: 420px;
    height: 420px;
    display: none;
    background-color: #000000;
    border: 1px solid black;
    opacity: 0.6;
    overflow: auto;

}

.card-star {
    display: flex;
    justify-content: center;
    margin: 20px;
    font-weight: bold;
    color: white;
}

.filled {
    color: red;
}

.card2:hover .containerInfo {
    display: block;
}
</style>