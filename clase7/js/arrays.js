/*
let marca = 'Harmes';
let marca2 = 'Zara';
let marca3 = 'Boss';
let marca4 = 'Aeropostale';
let marca5 = 'Tommy';
let marca6 = 'Hollister';
*/

let marcas = [ 
                'Hermes', 'Zara', 
                'Boss', 'Aeropostale', 
                'Tommy', 'Hollister' 
            ];
console.log(marcas);
document.write( marcas[2] );
document.write('<br>');

         
//document.write( semana[ numSemana ] );

//ubicar elementos dentro del DOM
const txt = document.querySelector('#txt');
let semana = [ 
    'Domingo', 'Lunes', 'Martes',
    'Miércoles', 'Jueves', 'Viernes',
    'Sábado'
     ];

let fecha = new Date();
let numSemana = fecha.getDay();    
txt.innerText = semana[numSemana];

//declaramos funciones de control
function anterior()
{
    numSemana = numSemana - 1;
    if ( numSemana < 0 ){
        numSemana = 6;
    }
    txt.innerText = semana[numSemana];
}
function siguiente()
{
    numSemana = numSemana + 1;
    if( numSemana > 6 )
    {
        numSemana = 0;
    }

    txt.innerText = semana [numSemana];
}