const APIKEY = '7fa41e64945fa2fe482ea00acdb454be'
const BASEURL = 'https://api.themoviedb.org/3/'
let Peliculas = {
    template: `
        <div>       
        <h2 v-text="titulo"></h2>
        <p v-for="(pelicula,index) in peliculas" :key="index"> 
            <pelicula 
                :id="pelicula.id"
                :title="pelicula.title "
                :synopsis="pelicula.overview"
                :cover="'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+pelicula.poster_path"
                :like.sync="pelicula.like"
            >
            </pelicula>    
        </p>

       <div  v-for ="(pelicula,index) in peliculas":key=" '_'+index">
        <h3 v-if="pelicula.like" v-text="pelicula.title"> {{pelicula.title }}</h3>
         
       </div>


        </div>
    `,
    data(){

        return{
            titulo:'Películas',
            peliculas: []
        }
    },
    components:{
        Pelicula
    },
    methods:{
        getPopularMovies(){
            const URL = `${BASEURL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`
            fetch(URL)
                .then(response => response.json())
                .then(data => {
                    this.peliculas = data.results   
                    console.log(data.results)
                })
        }
    },

    mounted(){
        this.getPopularMovies()
    },
}