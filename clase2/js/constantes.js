//ubicamos elemento dentro  del DOM
const txt = document.getElementById('txt');

let numero = 127;
const nombre = 'Rick Sánchez';

console.log( numero );
console.log( nombre );

/** 
*más código
*/

//intentamos sobre escrtibir la variable y la contsnte
numero = '127-c';
console.log( numero );

//nombre = 'Otro Nombre';  no se puede sobreescribir una constante
//document.getElementById('txt').innerText = nombre;
txt.innerText = nombre;
