let Cantante = {
    template: `
        <div style="width:300px;
                display:inline-block;
                vertical-align:top">
        <h2> {{title}}</h2>
        <img :src="cover">
        </div>
    `,

    props:['header_image_url', 'title'],

    data(){
        return{

        }
    },

}