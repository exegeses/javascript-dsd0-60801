//ubicamos elemento dentro del DOM
const txt = document.getElementById('txt');

//ventana emergente
//alert('texto informativo');
let nombre = prompt('Ingrese su nombre');

//escribimos en el span el contenido de la variable nombre
txt.innerText = nombre;

