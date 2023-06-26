app.component('formulario-evaluacion',{

    template: 
    /*html*/`
    <div id="comentarios">
        <h2>Comentarios</h2>
        <div id="listado-comentarios">
        <p v-for="(evaluacion, indice) in evaluaciones" :key="indice">
        {{evaluacion.comentario}} - {{evaluacion.puntaje}}/5</p>
    </div>

    <h3>¡Deja tu comentario!</h3>

    <form @submit.prevent="agregarComentario">
        <label>Comentario: 
            <textarea id="texto-comentario" name="comentario" v-model="comentario"></textarea>
        </label>

        <label>
            Calificación:
            <select id="puntaje-feedback" v-model.number="puntaje">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </label>

        <input id="boton-enviar-comentario" type="submit" value="Enviar">
    </form>
</div>    
    `,
    data(){
        return{
            puntaje:null,
            comentario: '',
            evaluaciones:[]
        }
    },
    methods:{
        agregarComentario(){
            if(this.comentario.trim()=== '' || this.puntaje.null === null){
                alert("Datos incompletos")
                return; 
            } 
            this.evaluaciones.push({
                comentario: this.comentario,
                puntaje:this.puntaje
            })
            
        this.comentario = '';
        this.puntaje = null;
        }
    }
})