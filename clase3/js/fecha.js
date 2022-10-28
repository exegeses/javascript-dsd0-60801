/*
*   mostrar la fecha actual
*   formato: Viernes 28/10/2022    
*/

//ubicamos elemento dentro del DOM
const txt = document.getElementById('txt');

//creamos un objeto de fecha
let fecha = new Date();
    console.log( fecha );

/* ### obtenemos el número del día de la semana ### */
let numDiaSemana = fecha.getDay();
    console.log( numDiaSemana );

if( numDiaSemana == 0 ){
    diaSemana = 'Domingo';
}
else if( numDiaSemana == 1 ){
    diaSemana = 'Lunes';
}
else if( numDiaSemana == 2 ){
    diaSemana = 'Martes';
}
else if( numDiaSemana == 3 ){
    diaSemana = 'Miércoles';
}
else if( numDiaSemana == 4 ){
    diaSemana = 'Jueves';
}
else if( numDiaSemana == 5 ){
    diaSemana = 'Viernes';
}
else{
    diaSemana = 'Sábado';
}

/* ### listo día de la semana ### */


//obtenemos el número del día de mes
let diaMes = fecha.getDate();
if ( diaMes < 10 ){
    diaMes = '0'+ diaMes;
}
    console.log( diaMes );

//obtenemos número de mes actual
let mes = fecha.getMonth() + 1;
if ( mes < 10 ){
    mes = '0'+ mes;   
}
    console.log( mes );

//obtenemos el número de año actual
let anio = fecha.getFullYear();
    console.log( anio );

//imprimimos en el span concatenando
//txt.innerText = diaSemana +' '+ diaMes +'/'+ mes +'/'+ anio;

//imprimimos en el span usando "template literal"  backtick ${}
txt.innerText = `${diaSemana} ${diaMes}/${mes}/${anio}`;
