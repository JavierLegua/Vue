let Pelicula = {
    template: `
        <div style="width:300px;
                display:inline-block;
                vertical-align:top">
            <h2> {{title | mayusculas}} </h2>
            <img :src="cover">
            <p v-text="synopsis"></p>
            <button @click= "favoritos()">
            {{like ? 'like':'Add Favoritos'}}
            </button>
           
        </div>
    `,

    props:['id','title','synopsis','cover','like'],

    data(){ 

        return{
            
            
        }
    },
    filters:{
            mayusculas(value){
                return value.toUpperCase()
            }
    },
    methods:{
        favoritos(){
          this.$emit('update:like',!this.like)        }
    }


}