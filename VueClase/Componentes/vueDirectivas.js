let vueDirectivas = {
    template: `
        <div>
            <p v-html="descripcion"> </p>
            <directiva-show-if></directiva-show-if>
            <Directiva-for> </Directiva-for>    
            <Directiva-model></Directiva-model>
        </div>
    `,

    data() {
        return {
            descripcion: ' Este es un curso de Vue. Un framework de JavaScript'
        }
    },
    components: {
        DirectivaShowIf,
        DirectivaFor,
        DirectivaModel
    }


}