<script >
import { store } from "../store.js"

export default {
   name: "findMoovie",
   props: {
      links: Object
   },
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
      
      <div >
         
         <p>{{ links.title }}</p>
         
      </div>

</template>

<style scoped>
   p{
      color: white;
   }
</style>
