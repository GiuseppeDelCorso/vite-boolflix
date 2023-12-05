<script>
import { store } from "../store.js"
export default {
    name: "getFilm",


    data() {
        return {
            store
        }
    },
    methods: {
        search() {
            console.log("Cerca: ", this.store.searchMovie)
            this.$emit("search")
        }
    },

}



</script>
<template>
    <div>
        <input v-model="store.searchMovie" @keyup.enter="$emit('search')" placeholder="Cerca Qui Il Tuo Film" type="text">
        <button @click="search">Cerca</button>

    </div>
</template>
<style scoped>
input {
    width: 20rem;
    height: 2rem;
    margin-right: 10px;
    font-size: 20px;
}
</style>