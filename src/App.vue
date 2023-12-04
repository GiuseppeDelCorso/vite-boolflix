<script >
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
		  this.findLinks();
	},
  methods:{
    findLinks() {
    

axios

      let link = this.store;

  axios.request(link).then(function (response) {
    store.contenuto = response.data
    console.log( response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
    } 
  }
}

</script>



<template>

  <findMoovie  v-for="contenuti in store.contenuto" :links="contenuti" />
  

  <div>
    
  </div>
</template>

<style scoped>

</style>
