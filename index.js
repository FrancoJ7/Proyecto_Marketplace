const app = Vue.createApp({
  data(){
    return { 
      productos: [
      {
        "title": "Notebook HP 14-dq2024la",
        "image_url": "https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png",
      },
      {
        "title": "Notebook Max L5 i7 Microsoft 365 Personal ",
        "image_url": "https://bangho.vtexassets.com/arquivos/ids/160155/Notebook-Max-L5-i5-cuotas-sin-interes.jpg?v=637697603076200000",
      },
      {
        "title": "Notebook N14WCE128 14\" IntelCeleron N3350 128GB Noblex",
        "image_url": "https://noblex.com.ar/media/catalog/product/cache/aa999612044d357928d16abd893bc3dd/1/_/1_5_1.jpg",
      },
      {
        "title": "Notebook Dell 3190 Intel Celeron 4Gb SSD 128Gb 11,6\" HD Windows 10",
        "image_url": "https://www.bidcom.com.ar/publicacionesML/productos/NOT00260/1000x1000-NOT00260.jpg",
      }
     ]
    } 
  }

})

app.mount('#app')




/* COMENTA TODO PARA IR PROBANDO VUE

// FUNCION ASINCRONICA PARA OBTENER MEDANTE UNA API LA CANTIDA DE PRODUCTOS QUE HAY
async function mostrarCantidadPoductos(){
  let response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics')
  let objeto = await response.json() //LO QUE OBTENGO DE LA API LO CONVIERTO A JSON
  let cantidadDeProductos = objeto.amount_of_products;

  let texto = document.createTextNode(cantidadDeProductos)

  document.getElementById('cantArt').appendChild(texto)

}

//PREGUNTAR SI LAS 2 SE EJECUTAN A LA VEZ. MINUTO 2:08:25
// FUNCION ASINCRONICA PARA OBTENER MEDANTE UNA API TODOS LOS PRODUCTOS A MOSTRAR 
let productos

async function mostrarProductos () {

  let response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products')
   productos = await response.json();

   const inputTexto = document.getElementById('inputTexto').value.toLowerCase(); 

 for (let producto of productos) { //RECORRO POR PRODUCTOS EN LA API DE PRODUCTOS QUE ES LA VARIBLE DONDE SE VA A GUARDAR LO QUE OBTENGO DE LA API QUE SE ESTABLECIO ARRIBA


//CADA PRODUCTO ES UN DIV INDEPENDIENTE QUE TIENE UNA IMAGEN, UN A Y UN STRONG

if (producto.title.toLowerCase().includes(inputTexto) || inputTexto === '') { //VERIFICA QUE LO QUE INGRESE EN INPUTTEXTO ESTE EN PRODUCTO.TITLE (SEA UN SOLO CARACTER O UNA PALABRA COMPLETA)
                                                                          // Y SI ESTA VACIO, SE MUESTRAN TODOS

  let nombre = document.createElement('strong'); //CREA UN STRONG PARA REMARCAR Y GUARDAR EN EL, EL TITULO (NOMBRE) DEL PRODUCTO, COMO ES TEXTO PLANO LO QUE OBTENGO API
  nombre.appendChild(document.createTextNode(producto.title)); //LE TENGO QUE CREAR UN NODO DE TEXTO PARA QUE LO ENTIENDA

  let imagen = document.createElement('img'); //CREO EL IMG QUE VA A CONTENER LA IMAGEN DEL PRODUCTO Y LE ASIGNO LO QUE OBTENGO DE LA API
  imagen.src = producto.image_url; 

  let link = document.createElement('a'); //CREO UN A, QUE ES EL QUE VA A CONTENER EL LINK QUE ME LLEVA AL HTML DEL PRODUCTO
  link.href = 'Marketplace.html'
  link.target = '_blank'

  link.appendChild(imagen); //AGREGA AMBOS AL LINK
  link.appendChild(nombre);

  let div = document.createElement('div'); //CREO EL DIV DE CADA UNO DE LOS PRODUCTOS Y LE CREO UNA CLASE PARA TRABAJARLOS INDIVIDUALEMTE
  div.className= 'contenido-productos';

  div.appendChild(link); 

  document.getElementById('contenedor-principal').appendChild(div) 
  }
 }
}
mostrarCantidadPoductos() 


function buscar() {
  const contenedorPrincipal = document.getElementById('contenedor-principal'); //OBTIENE EL CONTENEDOR PRINCIPA DONDE SE MOSTRARAN LOS PRODUCTOS
  contenedorPrincipal.innerHTML = ''; //LIMPIA EL CONTENIDO PRINCIPAL PARA QUE CUANDO REALICE OTRA BUSQUEDA, QUEDE LIMPIO TODO EL PANEL
  mostrarProductos();
}

/*
function buscar() {

  //OBTIENE EL VALOR INGRESADO DEL INPUT Y LO CONVIERTE A MINUSCULAS PARA QUE NO HAYA INTERFERENCIAS
  const inputTexto = document.getElementById('inputTexto').value.toLowerCase(); 

  const contenedorPrincipal = document.getElementById('contenedor-principal'); //OBTIENE EL CONTENEDOR PRINCIPA DONDE SE MOSTRARAN LOS PRODUCTOS
  contenedorPrincipal.innerHTML = ''; //LIMPIA EL CONTENIDO PRINCIPAL PARA QUE CUANDO REALICE OTRA BUSQUEDA, QUEDE LIMPIO TODO EL PANEL

  const productosFiltrados = productos.filter(producto => producto.title.toLowerCase().includes(inputTexto));
  mostrarProductos()
}
*/

/*CREA UNA VARIABLE LLAMADA productosFiltrados DONDE SE GUARDARA UN NUEVO ARRAY CON LOS PRODUCTOS QUE CUMPLAN CON LA LETRA, NUMERO O PALABRA QUE INGRESE EN EL INPUT, 
ESTE NUEVO ARRAY SE CREA DEBIDO A QUE FILTER() (es una función de los arrays en JS, que permite recorrer todos los elementos de un array y devolver un nuevo array 
con aquellos elementos que cumplen ciertas condiciones.)

Creo la variable y luego del "=" le aplico el FILTER() al array PRODUCTOS (este internamente funciona como un for). PRODUCTO QUE SE PASA COMO PARAMETRO A LA FUNCION 
(producto =>) REPRESENTA A CADA UNO DE LOS PRODUCTOS QUE SE VAN A IR ITERANDO, Y DENTRO DE LA FUNCION, SI EN SU ATRIBUTO PRODUCTO.NOMBRE CUMPLE CON ALGUNA DE LAS 
CONDICIONES DEVUELVE TRUE LA FUNCION ANONIMA (=>) y se guarda en el ARRAY*/

//--------------------------------------------------------------------------------------------------------------------
/*
OTRA FORMA DE HACER PRIMER LLAMADA

{
  async function mostrarCantidadPoductos(){fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics')
  .then((response) => {
    return response.json(); 
  })
  .then((objeto) => {

    let cantidadDeProductos = objeto.amount_of_products;

    let texto = document.createTextNode(cantidadDeProductos)
  
    document.getElementById('cantArt').appendChild(texto)

  })
}
}

mostrarCantidadPoductos() */

//-------------------------------------------------------------------------------
/*
ASI ERA EL EJERCICIO CUANDO SE AGREGAN MANUALMENTE LOS PRODUCTOS


//ASI INCERTABA LOS PRODUCTOS MEDIANTE OBJETOS

const productos = [ //CREA UN ARRAY DE OBJETOS CON LA IMAGEN Y EL NOMBRE DE CADA PRODUCTO COMO ATRIBUTOS

    {srcImagen: 'https://http2.mlstatic.com/D_NQ_NP_948839-MLA46869223637_072021-O.webp', nombre: 'Teclado bluetooth Logitech K380'},

    {srcImagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_892908-MLA50045198770_052022-F.webp', nombre: 'Teclado bluetooth Logitech Pop Keys'},

    {srcImagen: 'https://http2.mlstatic.com/D_NQ_NP_902606-MLA43542876076_092020-O.webp', nombre: 'Teclado Pro X Rgb Lightsync Mecanico Logitech'},

    {srcImagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_881127-MLA44387261059_122020-F.webp',nombre: 'Teclado gamer bluetooth Logitech Serie G G918'},
    
    {srcImagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_939703-MLA43754579245_102020-F.webp', nombre: 'Teclado Logitech K120'},
       
    {srcImagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_729345-MLA44052027542_112020-F.webp"',nombre: 'Teclado gamer Logitech Serie G G513'}
]

LUEGO RECORRIA LOS PRODUCTOS FILTRADOS E IBA CREANDO Y MOSTRANDO LOS ELEMENTOS NECESARIOS PARA PODER MOSTRARLOS EN EL CONTENEDOR PRINCIPAL

for (let producto of productosFiltrados) {
        
  let texto = document.createTextNode(producto.nombre); //CREA UN NODO TEXTO PARA PODER TRABAJAR CON sEL ATRIBUTO NOMBRE DE ESE PRODUCTO FILTRADO

  let strong = document.createElement('strong'); //CREO UN TAG "STRONG" PARA APLICARSELO AL TEXTO DONDE ESTA GUARDADO EL NOMBRE DEL PRODUCTO
  strong.appendChild(texto);        //GUARDO EL TEXTO DENTRO DE ESA ETIQUETA

  let imagen = document.createElement('img'); //CREO UNA TAG "IMG"
  imagen.src = producto.srcImagen; // GUARDO EL ATRIBUTO DE LA IMAGEN DEL PRODUCTO DENDTRE DE IMG.SRC (IMG ES EL ATRIBUTO QUE CREE RECION) Y (SRC ES UNA PROPIEDAD)
                                    //DEL ATRIBUTO IMG QUE YA VIENE POR DEFECTO

  let link = document.createElement('a'); //CREA UN TAG "a"

  link.href = 'Marketplace.html'; //AL IGUAL QUE IMG, VIENE CON PROPIEDADES POR DEFECTO, LO CUAL TRABAJA CON ELLAS
  link.target = '_blank';

  link.appendChild(imagen); //CARGO LA IMAGEN AL LINK
  link.appendChild(strong); //CARGO EL TEXTO (NOMBRE DEL PRODUCTO) QUE ESTA EN LA ETIQUETA STRONG DENTRO DE LINK

  let contenedor = document.createElement('div'); //CREA UN DIV PARA CADA UNO DE LOS PRODUCTOS PARA PODER TENERLOS POR SEPARADO Y LE ASIGNO LA CLASE
  contenedor.className = 'teclado'; // TECLADO

  contenedor.appendChild(link); //CARGO EL LINK AL CONTENEDOR QUE VA A SER CADA DIV POR PROCTO

  contenedorPrincipal.appendChild(contenedor); //CARGO CADA CONTENEDOR QUE SE LLAME AL CONTENEDOR PRINCIPAL
}

*/