//Array con mis productos

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
    }
}

const productos = [];
productos.push(new Producto("CAFE CON LECHE CON 2 MEDIALUNAS", "249.99"));//a
productos.push(new Producto("CAPUCHINO MAS PORCION DE TORTA","399.99"));//b
productos.push(new Producto("LICUADO MAS ALFAJOR A ELECCION", "499.99" ));//c
productos.push(new Producto("SUBMARINO MAS MASITAS FINAS","649.99"));//d
productos.push(new Producto("EMPANADAS SALTEÑAS", "99.99"));//e
productos.push(new Producto("BIFES A LA PORTUGUESA","1099.99"));//f
productos.push(new Producto("MILANESA NAPOLITANA","849.99"));//g
productos.push(new Producto("TALLARINES O RAVIOLES","699.99"));//h
productos.push(new Producto("ASADO","1199.99"));//i
productos.push(new Producto("CAZUELA DE MARISCOS","1399.99"));//j
productos.push(new Producto("ÑOQUIS ROMANOS","999.99"));//k
productos.push(new Producto("SALMON ROSADO","1649.99"));//l

productos.forEach((num)=> {
    console.log(num)
});

//----//

//Desestructuracion

console.log("DESAYUNOS/MERIENDAS:")
const [a, b, c, d ] = productos 
console.log(a, b, c, d)

console.log("MENU CON CARNE:")
const [, , , , e, f, g, , i, j, ,l ] = productos 
console.log(e, f, g, i, j, l)

console.log("PASTAS:")
const [ , , , , , , , h, , , k, ] = productos
console.log(h, k)

//----//

//DOM: cambios en el menu

let articulo1 = document.getElementById("articulo1")
articulo1.innerText = "CAFE CON LECHE CON 2 MEDIALUNAS"
let precio1 = document.getElementById("precio1")
precio1.innerText = "$249.99"

let articulo2 = document.getElementById("articulo2")
articulo2.innerText = "CAPUCHINO MAS PORCION DE TORTA"
let precio2 = document.getElementById("precio2")
precio2.innerText = "$399.99"

let articulo3 = document.getElementById("articulo3")
articulo3.innerText = "LICUADO MAS ALFAJOR A ELECCION"
let precio3 = document.getElementById("precio3")
precio3.innerText = "$499.99"

let articulo4 = document.getElementById("articulo4")
articulo4.innerText = "SUBMARINO MAS MASITAS FINAS"
let precio4 = document.getElementById("precio4")
precio4.innerText = "$649.99"

let articulo5 = document.getElementById("articulo5")
articulo5.innerText = "EMPANADAS SALTEÑAS"
let precio5 = document.getElementById("precio5")
precio5.innerText = "$99.99"

let articulo6 = document.getElementById("articulo6")
articulo6.innerText = "BIFES A LA PORTUGUESA"
let precio6 = document.getElementById("precio6")
precio6.innerText = "$1099.99"

let articulo7 = document.getElementById("articulo7")
articulo7.innerText = "MILANESA NAPOLITANA"
let precio7 = document.getElementById("precio7")
precio7.innerText = "$849.99"

let articulo8 = document.getElementById("articulo8")
articulo8.innerText = "TALLARINES O RAVIOLES"
let precio8 = document.getElementById("precio8")
precio8.innerText = "$699.99"

let articulo9 = document.getElementById("articulo9")
articulo9.innerText = "ASADO"
let precio9 = document.getElementById("precio9")
precio9.innerText = "$1199.99"

let articulo10 = document.getElementById("articulo10")
articulo10.innerText = "CAZUELA DE MARISCOS"
let precio10 = document.getElementById("precio10")
precio10.innerText = "$1399.99"

let articulo11= document.getElementById("articulo11")
articulo11.innerText = "ÑOQUIS ROMANOS"
let precio11 = document.getElementById("precio11")
precio11.innerText = "$999.99"

let articulo12 = document.getElementById("articulo12")
articulo12.innerText = "SALMON ROSADO"
let precio12 = document.getElementById("precio12")
precio12.innerText = "$1649.99"

//Formulario

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
    )

    localStorage.setItem("guardarReserva", JSON.stringify(data))
})

//----//

//API

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_2vagz38';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Sumbit';
      Swal.fire(
        'Reserva realizada!',
        'Gracias por elegirnos!',
        'success'
      )
    }, (err) => {
      btn.value = 'Sumbit';
      alert(JSON.stringify(err));
    });
});

//----//

let reserva;
let reservaLS;

if (localStorage.getItem(`guardarReserva`) !== null) {

  reserva = (swal.fire (("Su reserva:"), JSON.stringify(localStorage.getItem(`guardarReserva`))));
  
} 
else {

  reserva = Swal.fire ( {
    title: 'Bienvenidos a "El Timón", un lugar especializado en comida Argentina. Si desea reservar una mesa complete el formulario que se encuentra en la parte inferior de la pagina',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }

  }
  )
};

//----//

fetch('/data.json')
  .then( res => res.json())
  .then( data => {console.log(data) } )
