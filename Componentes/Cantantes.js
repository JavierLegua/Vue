let Cantantes = {
    template: `
        <div>
            <p>Introduce el nombre del cantante o grupo que desea buscar :)</p>
            <p>Toda la informacion es otorgada por <a href="https://genius.com/" target="_blank">Genius</a></p>
            <input v-model="busqueda" @keydown.enter="getCantantes">
            <button @click="getCantantes">Buscar</button>
            <span v-if="hits[0]">
            <br><br>
            <a :href="hits[0].result.primary_artist.url" target="_blank">Información de {{hits[0].result.primary_artist.name}}</a>
            <h2>Top 10 canciones de {{hits[0].result.primary_artist.name}}</h2>
            <img :src="hits[0].result.primary_artist.image_url" width=300px></img>
            </span>
            <div v-for="(hit, index) in hits" :key="index">
                <h3>{{ hit.result.title }}</h3>
                <a :href="hit.result.url" target="_blank">Letra de {{ hit.result.title }}</a>
                <br><br>
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


