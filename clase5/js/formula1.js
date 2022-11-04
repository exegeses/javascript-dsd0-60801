//ubicar elemento/s dentro del DOM
const redbull = document.getElementById('redbull');
const ferrari = document.getElementById('ferrari');
const mercedes = document.getElementById('mercedes');
const mclaren = document.getElementById('mclaren');

/* estado inicial */
ferrari.style.display = 'none';
mercedes.style.display = 'none';
mclaren.style.display = 'none';

//declaramos función/es de control
function mostrarOcultar( escuderia )
{
    if( escuderia == 'ferrari' ){
        redbull.style.display = 'none';
        mercedes.style.display = 'none';
        mclaren.style.display = 'none';
        ferrari.style.display = 'flex';
    }
    else if( escuderia == 'mercedes' ){
        redbull.style.display = 'none';
        mercedes.style.display = 'flex';
        mclaren.style.display = 'none';
        ferrari.style.display = 'none';
    }
    else if( escuderia == 'mclaren' ){
        redbull.style.display = 'none';
        mercedes.style.display = 'none';
        mclaren.style.display = 'flex';
        ferrari.style.display = 'none';
    }
    else {
        redbull.style.display = 'flex';
        mercedes.style.display = 'none';
        mclaren.style.display = 'none';
        ferrari.style.display = 'none';
    }
}