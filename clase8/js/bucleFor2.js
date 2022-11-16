//const lista = document.getElementById('lista');
const lista = document.querySelector('#lista');
let italianos = [
    'Maseratti', 'Pagani',
    'Larmborghini', 'Ferrari',
    'Alfa Romeo', 'Bertone',
    'Bugatti', 'Lancia',
    'Fiat', 'Mazzanti',
    'Fornassari', 'Abarth'
];
let cantidad = italianos.length;

//for( inicio; condicion; incremento )
/*lista.innerHTML = '<li> Maseratti </li> <li> Pagani </li> <li> Lamborghini </li>';*/

let contenido = ''; //contenido de la lista
for( let i = 0; i < cantidad; i++){
    contenido = contenido + '<li>'+ italianos[i] +'</li>';
}

lista.innerHTML = contenido;


