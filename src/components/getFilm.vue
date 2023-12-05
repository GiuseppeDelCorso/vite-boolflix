<script>
import { store } from "../store.js"
export default {
   name: "getFilm.vue",
   methods: {
   data(){
      return{
         store
      }
   },
        search(){
            console.log("Cerca: ", this.store.shearcMovie)
            this.$emit("search")
        }
    },

}



</script>
<template>
    <div>
        <input v-model="this.store.shearcMovie" @keyup.enter="$emit('search')" placeholder="Cerca Qui Il Tuo Film" type="text">
        <button @click="search">Cerca</button>

    </div>

</template>
<style scoped>

</style>