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
  url: 'https://api.themoviedb.org/3/search/movie',
  params: {
    query: 'ritorno%20al%20futuro',
    include_adult: 'false',
    language: 'en-US',
    page: '1'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjQ5YThhNGUwOTNjNzZkYjk5NTljOWRlNjQwNWE1YiIsInN1YiI6IjY1NmRkZWJlNjUxN2Q2MDEwZTU5Zjk3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s4MVvj4WTl3oWg6ElBUJnfeTRzCwLv8tp5NuSSYP4Js'
  }
};

axios
  .request(options)
  .then(function (response) {
    store.contenuto = response.data
    console.log(store.contenuto);
  })
  .catch(function (error) {
    console.error(error);
  });
    } 
  }
}

</script>



<template>

  <findMoovie/>

  <div>
    
  </div>
</template>

<style scoped>

</style>
