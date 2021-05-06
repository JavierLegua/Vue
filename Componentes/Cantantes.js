

let Cantantes = {
    template: `
        <p>hola</p>
        `,
        

        data(){
            return{
                titulo:'Cantantes',
            }
        },
        components:{
  //          Cantante
        },
        methods:{
            getCantantes(){
                fetch("https://genius.p.rapidapi.com/search?q=fernando%20costa", {
	            "method": "GET",
	            "headers": {
	        	"x-rapidapi-key": "24ac918ccamshdd8ce0d31207769p19ffa8jsn601d3a5fb311",
		        "x-rapidapi-host": "genius.p.rapidapi.com"
	            }
                })
                .then(response => response.json())
                .then(data => {
                    this.cantantes = data.response   
                    console.log(data.response)
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


