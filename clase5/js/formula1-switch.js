//ubicar elemento/s dentro del DOM
const redbull = document.querySelector('#redbull');
const ferrari = document.querySelector('#ferrari');
const mercedes = document.querySelector('#mercedes');
const mclaren = document.querySelector('#mclaren');

/* estado inicial */
ferrari.style.display = 'none';
mercedes.style.display = 'none';
mclaren.style.display = 'none';

//declaramos función/es de control
function mostrarOcultar( escuderia )
{
    switch( escuderia )
    {
        case 'redbull':
            redbull.style.display = 'flex';
            mercedes.style.display = 'none';
            mclaren.style.display = 'none';
            ferrari.style.display = 'none';
            break;
        case 'ferrari':
            redbull.style.display = 'none';
            mercedes.style.display = 'none';
            mclaren.style.display = 'none';
            ferrari.style.display = 'flex';
            break;
        case 'mercedes':
            redbull.style.display = 'none';
            mercedes.style.display = 'flex';
            mclaren.style.display = 'none';
            ferrari.style.display = 'none';
            break;
        default:
            redbull.style.display = 'none';
            mercedes.style.display = 'none';
            mclaren.style.display = 'flex';
            ferrari.style.display = 'none';
            break;
    }
}