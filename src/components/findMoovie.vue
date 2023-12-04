<script >
import { store } from "../store.js"

export default {
   name: "findMoovie",
   props:{
      info: Object
   },
   data(){
      return{
         store
      }
   }

}


</script>

<template>
      <div v-for="contenuti in this.store.contenuto">
         
         <p>{{ contenuti }}</p>
         
      </div>

</template>

<style scoped>

</style>
