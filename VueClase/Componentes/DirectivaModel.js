let DirectivaModel = {
    template: `
        <div>
        <h2 v-html="titulo"> </h2>
        <input v-model = "inputText">
        <h2> Tipo Checkbox </h2>
        <label>
            <input type="checkbox" v-model ="checked">
                {{checked ? "Activado":"Desctivado"}}
        </label>
            <h2> Marca las pel(icula que has visto </h2>
            <label v-for="(pelicula, index) in peliculas" :key="index">
                <input type ="checkbox":value="pelicula" v-model = "peliculasFavoritas">
                {{pelicula}}
            </label>
            <br>
                {{peliculasFavoritas}}

                <h2> Marca las pel(icula favoritas objetos </h2>
                    <label v-for="(pelicula, index) in peliculasObjeto" :key="'_'+index">
                        <input type ="checkbox":value="pelicula.id" v-model = "peliculasFavoritasObjeto">
                        {{pelicula.nombre}}
                    </label>
                    <br>
                        {{peliculasFavoritasObjeto}}
        </div>
    `,

    data() {
        return {
            titulo: '<h2> Directiva-Model</h2>',
            inputText:'datos input',
            checked:true,
            peliculas:["Buscando a nemo","Titanic","toy Story"],
            peliculasFavoritas:[],
            peliculasObjeto:[
                {nombre:"Buscando a nemo",id:0},
                {nombre:"Titanic",id:1},
                {nombre:"Toy estory",id:2},
            ],
            peliculasFavoritasObjeto:[]

        
            }
        }
    }



