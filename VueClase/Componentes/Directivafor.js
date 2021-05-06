let DirectivaFor = {
    template: `
        <div>
        <h2 v-html="titulo"> </h2>
        <h3> Listar un Objeto </h3>
        <ul>
            <li v-for="(color,index) in lista" :key = "index"
            v-show="index==mostrar ">
            {{index+1}}--{{color}} 
            </li>
        </ul>
        <button @click="restarUno()">-</button>
        <button @click="sumarUno()">+</button>
        {{mostrar}}

        <h3> Listar un Objeto </h3>
        <ul>
            <li
                v-for="(valor, index,key) in objeto" :key="key"
            > 
            {{key}}.-{{index}}. -{{valor}}
            </li>
        </ul>
        <ul>
            <li v-for="(profesor,key) in arrayObjetos":key="key"
            >
                Nombre: {{profesor.nombre}} 
                Apellido: {{profesor.apellido}}
            </li>
        </ul>   

        </div>
    `,

    data() {
        return {
            titulo: 'Directiva For',
            lista: ['Rojo', 'Amarillo', 'Azul', 'Purpura', 'Rosa'],
            mostrar: 1,
            objeto: {
                nombre: 'Oscar',
                apellido: 'Magallon',
                profesion: 'Parado',
            },
            arrayObjetos:[

                {

                    nombre: 'Oscar',
                    apellido: 'Magallon',
                    profesion: 'Parado',
                },
                {
                    nombre: 'si',
                    apellido: 'no',
                    profesion: 'nada   ',
                }
            ]

        }
    },
    methods:{
        sumarUno(){
           
           if(this.mostrar<this.lista.length-1  ){
            this.mostrar++
           }
        },
        restarUno(){
            if(this.mostrar>0 ){
                this.mostrar--
               }  
        }
    },
}


