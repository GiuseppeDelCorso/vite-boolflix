<script >
import { onMounted } from 'vue'
import findMoovie from './components/findMoovie.vue'
import { store } from "./store.js"
import axios from 'axios'


export default {
  components: {
    findMoovie,
  },
  data(){
    return {
      store
    }
  },
  
  mounted() {
    this.findlinks();
  },
  methods:{
    findlinks(){
      
    }


  }
}

  

</script>



<template>
  
  <findMoovie msg="Vite + Vue" />
</template>

<style scoped>

</style>
