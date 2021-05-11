let Cantantes = {
    template: `
        <div>
            <input v-model="busqueda">
            <button @click="getCantantes">Buscar</button>
            <span v-if="hits[0]">
            <br><br>
            <h2>Top 10 canciones de {{hits[0].result.primary_artist.name}}</h2>
            <img :src="hits[0].result.primary_artist.image_url" width=300px></img>
            </span>
            <div v-for="(hit, index) in hits" :key="index">
                <h3>{{ hit.result.title }}</h3>
                <img :src="hit.result.header_image_url" width=250px></img>
                
            </div>
        </div>
        `,
        

        data(){
            return{
                titulo:'Cantantes',
                hits: [],
                busqueda: ''
            }
        },
        components:{
           Cantante
        },
        methods:{
            getCantantes(){
                fetch(`https://genius.p.rapidapi.com/search?q=${this.busqueda}`, {
	            "method": "GET",
	            "headers": {
	        	"x-rapidapi-key": "24ac918ccamshdd8ce0d31207769p19ffa8jsn601d3a5fb311",
		        "x-rapidapi-host": "genius.p.rapidapi.com"
	            }
                })
                .then(response => response.json())
                .then(data => {
                    this.hits = data.response.hits   
                    console.log(data.response.hits)
                })
                .catch(err => {
	            console.error(err);
                });
            }
        },
        mounted(){
  //          this.getCantantes()
        },
}


