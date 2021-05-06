let DirectivaShowIf = {
    template: `
        <div>
        <h2 v-html="titulo"> </h2>
        <p v-show="mostrar" v-html="mensaje"> </p>

        <p v-if="user.permiso"> El usuario tiene permiso para ver esto</p>
        <p v-else="!user.permiso"> El usuario no tinene permiso para ver esto </p>   

            <button @click="user.permiso=!user.permiso"> permiso </button>
        </div>
    `,

    data() {
        return {
            titulo: '<h2> Directiva Show IF </h2>',

            mensaje: '<strong> Hola desde directiva v-sow </strong',
            mostrar: true,
            user: {
                permiso: false
            }
        }
    },



}