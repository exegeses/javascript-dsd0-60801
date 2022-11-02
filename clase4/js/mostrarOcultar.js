//ubicamos elemento dentro del DOM
const caja = document.getElementById('caja');

//declaramos función/es de control
function ocultar()
{
    //caja.style.display = 'none';
    //caja.style.visibility = 'hidden';
    caja.style.opacity = '0';
}

function mostrar()
{
    //caja.style.display = 'block';
    //caja.style.visibility = 'visible';
    caja.style.opacity = '1';
}

function mostrarOcultar()
{
    //si la caja se ve
    //if( caja.style.display == 'block' ){
    //if( caja.style.visibility == 'visible' ){
    if( caja.style.opacity == '1' ){
        // que no se vea
        ocultar();
    }
    else{
        mostrar();
    }
}

