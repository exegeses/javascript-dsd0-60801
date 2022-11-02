//ubicamos elemento dentro del DOM
const caja = document.getElementById('caja');

//declaramos función/es de control
function pintarVerde( )
{
    caja.style.backgroundColor = '#5c5';
    caja.innerText = 'verde';
}

function pintarNaranja( )
{
    caja.style.backgroundColor = '#f80';
    caja.innerText = 'naranja';
}

function pintarCeleste( )
{
    caja.style.backgroundColor = '#28f';
    caja.innerText = 'celeste';
}