

let Cantantes = {
    template: `
        <div>
        <div v-for="(hit, index) in hits" :key="index">
        <h2>{{ hit.result.title }}</h2>
        <img :src="hit.result.header_image_url" width=300px></img>
        
        
        </div>
        </div>
        `,
        

        data(){
            return{
                titulo:'Cantantes',
                hits: [],
            }
        },
        components:{
           Cantante
        },
        methods:{
            getCantantes(){
                fetch("https://genius.p.rapidapi.com/search?q=lil%20peep", {
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
            this.getCantantes()
        },
}


