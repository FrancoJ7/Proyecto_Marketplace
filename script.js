const app = Vue.createApp({
  data(){
      return{

          id: 1,
          title: "Notebook HP 14-dq2024la",
          image_url: "https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png",
          factory_url: "https://www.hp.com/ar-es/shop/notebook-hp-14-dq2024la-3v8j6la.html",
          notebookSeleccionada: 0,
          notebooksCompradas: [],
          notebooksTypes: [
            {
              ramAmount: "8 GB",
              price: 100000
            },
            {
              ramAmount: "16 GB",
              price: 122547
            }
          ],
          imagenes:[
            'https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png',
            'https://www.amutminshop.org.ar/wp-content/uploads/2022/01/3-5.png',
            'https://www.amutminshop.org.ar/wp-content/uploads/2022/01/4-5.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQ2J4oSbp7ijuhHVEs7Ul6g0Rl9jPBSHHeA&usqp=CAU'
          ],
      }
   },

   methods: {
  
    cambiarImagen(urlImagen){ //EJ2 - 1)* Cuando pasa el @mouseover, se le manda a esta funcion el la imagen por en la que esta posando, por lo que aca, dicha imagen que recibe
      this.image_url = urlImagen;//Se le asigna a this.image_url que es atributo que muestra por defecto una imagen en el div de imagen-producto que va a ir cambiando
                                //dependiendo de la imagen
    },


    eliminarCompra(indice){
      this.notebooksCompradas = this.notebooksCompradas.filter((value, index) => index !== indice)
    } //IMPORTANTE: ver que tambien se actualiza el precio cuando elimino, es decir, en la propiedad compuada, al eliminar ese tipo, se va a calcular nuevamente el valor
      //total
   },
   computadoraComprada(notebook){
    this.notebooksCompradas.push(notebook)
   },
   manejarNotbookSeleccionada(indice){
    this.notebookSeleccionada = indice
   },

   computed: {

    total(){

     let total = 0;

     for (let notebooksComprada of this.notebooksCompradas){ //EJE4 - 3)* Voy a recorrer this.notebooksCompradas aca estan todas las notbook que voy comprando, es decir, 
      total += notebooksComprada.price;//el array  con todos los tipos de notbook seleccionadas, y a medida que voy apretando el boton se vuelve a calcular porque se 
      }                               //agrego una notbook nueva y se tiene que ir recorriendo Y SUMANDO LOS PRECIOS otra vez
    
     return total; //EJE4 - 4)* DEVUELVO EL TOTAL CON TODOS LOS PRECIOS DE LOS TIPOS DE COMPUTADROAS SELECCIONADAS
    },

    mostrarCarroDeCompras(){
      return this.notebooksCompradas.length !== 0;
    }

   }
})




/*COMENTA TODO PARA IR PROBANDO VUE

function comentar(event) 
{
    event.preventDefault() //SE AGREGA ESTO CUANDO SE USA FORMULARIO

    const listaComentarios = document.getElementById('listaComentarios');
    const comentario = document.getElementById('texto-comentario').value;
    const puntajes = document.getElementById('puntaje-producto').value
    
    const parrafo = document.createElement('p')
    const nuevoComentario = document.createTextNode(comentario + ' - ' + puntajes + '/5')
    
    parrafo.appendChild(nuevoComentario)
    listaComentarios.appendChild(parrafo)

   //REINICIAR LOS VALORES DEL COMENTARIO

   document.getElementById('texto-comentario').value=''
   document.getElementById('puntaje-producto').value= '1'

}
*
async function cargarDatosProductos() {
    
    let response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1');
    let producto = await response.json();

    //TODO LO QUE VOY TRAYENDO DEL OBJETO JSON, LO CONVIERTO A U NODO TEXTO PARA PODER TRABAJARLO
    
    let titulo = document.createTextNode(producto.title);
    document.getElementById('titulo-producto').appendChild(titulo);

    let descripcion = document.createTextNode(producto.description);
    document.getElementById('descripcion-producto').appendChild(descripcion);

    /*La función document.createTextNode() se utiliza para crear un nuevo nodo de texto en el documento HTML. Esto es útil cuando deseas agregar contenido de texto 
    dentro de un elemento, como un párrafo (<p>), un encabezado (<h1>, <h2>, etc.) o cualquier otro elemento que acepte texto.


    //A no se utiliza document.createTextNode() porque se asignando valores a las propiedades src y href de los elementos, no creando nodos de texto.
    document.getElementById('imagen').src = producto.image_url;
    document.getElementById('link-fabricante').href = producto.factory_url;

    //RECORRE EL NOTEBOOKSTYPES DE LA API, DONDE TIPO VA A SER CADA UNO DE LOS EQUIPOS QUE SE VAN A IR RECORRIENDO Y MOSTRANDO CADA UNO DE SUS ATRIBUTOS
    for (let tipoNotebook of producto.notebooksTypes){

        let subtituloTipoComputadora = document.createElement('h3');
        subtituloTipoComputadora.appendChild(document.createTextNode ('Tipo computadora:'))
        
        document.getElementById('descripcion-producto').appendChild(subtituloTipoComputadora)

        let listaDesordenada = document.createElement('ul');
        let precio = document.createElement('li');
        let ram = document.createElement('li');

        let precioTextNode = document.createTextNode('Precio: ' + tipoNotebook.price);
        let ramTextNode = document.createTextNode('Ram: ' + tipoNotebook.ramAmount);
    
        precio.appendChild(precioTextNode);
        ram.appendChild(ramTextNode);

        listaDesordenada.appendChild(precio);
        listaDesordenada.appendChild(ram);
    
        document.getElementById('descripcion-producto').appendChild(listaDesordenada)
    }
}

cargarDatosProductos()

*/