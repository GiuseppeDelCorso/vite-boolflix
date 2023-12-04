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
   

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/authentication',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 7f49a8a4e093c76db9959c9de6405a5b'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
    } 
  }
}

</script>



<template>
  
  <findMoovie msg="Vite + Vue" />
</template>

<style scoped>

</style>
