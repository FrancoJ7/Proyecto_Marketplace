app.component('informacion-notbook',{
    
    template:
    /*html*/ 
    
    `<p id="texto-descripcion">{{ description }}</p>
    <h2>Caracteristicas</h2>
    <ul>
        <li v-for="(notebooksType, indice) in notebooksTypes" :key="indice"> 
            <!-- EJE3 - 1)* Recorre el array de objetos de notebooksTypes por cada tipo, en este
            caso cada objeto del tipo es por RAM Y PRECIO, tambien obtengo sus indices tengo 2 objetos por lo tanto indice(0 y 1), sigue en HTML -->

            <button @click="seleccionarTipoComputadora(indice)">RAM {{ notebooksType.ramAmount }} </button>
            <!--/* EJE3 - 2)* Cuando hace click en el tipo que quiero saber el precio, llama a esa funcion y le pasa el indice que obtuve en el V-FOR de arriba,
            va al JS -->

            <button @click="agregarCarro(indice)"> Comprar </button> 
            <!-- EJE4 - 1)* Va a aparecer un boton de comprar al lado de los 2 tipos de RAM, cuando hago
            click en el boton de comprar, llama a esa funcion y le paso el indice del tipo de notbook del for que recorri anteriormente y que quiero ir 
            agregando, va al HTML -->

        </li>       
    </ul>
    `,
    props: {
        notebooksTypes :{
            type: Array,
            required: true,
        }
    },
    data(){
        return{
            description: "Computadora HP orientado para gama media. Procesador Intel® Core™ i3 de 11.ª generación.  Windows 10 Home 64.  Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB . Pantalla de 14 pulgadas.", 
        }
    },
    methods:{
        agregarCarro(indice) { 
            this.$emit('computadora-comprada', this.notebooksTypes[indice])


            /* EJE4 -2)*Cree una nueva variable que es un array que va a ir conteniendo las computadoras que voy seleccionando como compradas, el indice que recibo
            this.notebooksCompradas.push(this.notebooksTypes[indice]) es el tipo de notbook que va comprando y lo voy agregando al array*/
        },
        seleccionarTipoComputadora(indice){ 
         this.$emit('notbook-seleccionada', indice)

            /*EJE3 - 3)* Recibe el indice del tipo de notbook al cual hizo click en el boton (cada tipo tiene RAM y PRECIO, VER ARRIBA),
            this.notebookSeleccionada = indice; se lo asigna a la variable notebookSeleccionada, es decir, en ella se guardara el indice del objeto que tiene el tipo de
            notbook que quiero saber, en este caso, de tipo queiro saber su precio,por eso vuelve al HTML  */
        },
        }

})