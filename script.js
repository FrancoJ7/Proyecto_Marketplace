
const app = Vue.createApp({
  data(){
      return{

          "id": 1,
          "title": "Notebook HP 14-dq2024la",
          "description": "Computadora HP orientado para gama media. Procesador Intel® Core™ i3 de 11.ª generación.  Windows 10 Home 64.  Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB . Pantalla de 14 pulgadas.",
          "image_url": "https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png",
          "factory_url": "https://www.hp.com/ar-es/shop/notebook-hp-14-dq2024la-3v8j6la.html",
          "notebooksTypes": [
            {
              "ramAmount": "8 GB",
              "price": 100000
            },
            {
              "ramAmount": "16 GB",
              "price": 122547
            }
          ]
      }
   }
})

app.mount(id="#grid-layout")




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