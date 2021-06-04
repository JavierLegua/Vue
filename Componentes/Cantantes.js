let Cantantes = {
    template: `
        <div>
            <nav>
                <ul>
                    <li><a href="#" @click="menu1()">General</a></li>
                    <li><a href="#" @click="menu2()">BlackBear</a></li>
                    <li><a href="#" @click="menu3()">Travis Scott</a></li>
                    <li><a href="#" @click="menu4()">Rels b</a></li>
                </ul>
            </nav>

            <div v-if="menu==1">
                <p>Introduce el nombre del cantante o grupo que desea buscar :)</p>
                <p>Toda la informacion es otorgada por <a href="https://genius.com/" target="_blank"><Strong>Genius</Strong></a></p>
                <input v-model="busqueda" @keydown.enter="getCantantes">
                <button @click="getCantantes">Buscar</button>
             </div>   
                
            <div v-if="menu==2">
                <br>
                <h2 v-if="hits[0]">Estas buscando información de {{hits[0].result.primary_artist.name}}</h2>
            </div>

            <div v-if="menu==3">
                <br>
                <h2 v-if="hits[0]">Estas buscando información de {{hits[0].result.primary_artist.name}}</h2>
            </div>

            <div v-if="menu==4">
                <br>
                <h2 v-if="hits[0]">Estas buscando información de {{hits[0].result.primary_artist.name}}</h2>
            </div>

            <span v-if="hits[0]">
                <br>
                <strong><a :href="hits[0].result.primary_artist.url" target="_blank">Información de {{hits[0].result.primary_artist.name}}</a></strong>
                <h2>Top 10 canciones de {{hits[0].result.primary_artist.name}}</h2>
                <img :src="hits[0].result.primary_artist.image_url" width=300px></img>
            </span>
                
            <div v-for="(hit, index) in hits" :key="index">
                <h3>{{ hit.result.title }}</h3>
                <a :href="hit.result.url" target="_blank">Lyrics de {{ hit.result.title }}</a>
                <br><br>
                <img :src="hit.result.header_image_url" width=250px></img>
            </div>

            
        </div>
        `,


    data() {
        return {
            titulo: 'Cantantes',
            hits: [],
            busqueda: '',
            menu: 0
        }
    },
    components: {
        Cantante
    },
    methods: {
        getCantantes() {
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
        },


        menu1() {
            this.menu = 1
            this.hits = []
            this.busqueda = ""
        },

        menu2() {
            this.menu = 2
            this.busqueda = "BlackBear"
            this.getCantantes()
        },

        menu3() {
            this.menu = 3
            this.busqueda = "Travis Scott"
            this.getCantantes()
        },

        menu4() {
            this.menu = 4
            this.busqueda = "Rels B"
            this.getCantantes()
        }
    },
    mounted() {
        //          this.getCantantes()
    },
}