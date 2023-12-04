import { reactive } from 'vue'

export const store = reactive({

    
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
          query: 'arancia',
          include_adult: 'false',
          language: 'en-US',
          page: '1'
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjQ5YThhNGUwOTNjNzZkYjk5NTljOWRlNjQwNWE1YiIsInN1YiI6IjY1NmRkZWJlNjUxN2Q2MDEwZTU5Zjk3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s4MVvj4WTl3oWg6ElBUJnfeTRzCwLv8tp5NuSSYP4Js'
        },
     

    contenuto: [],
    shearcMovie: ""
}); 