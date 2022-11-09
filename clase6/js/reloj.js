//ubicamos elemento dentro del DOM
const txt = document.querySelector('#txt');

// formato 14:21:46
function reloj()
{
    //creamos objeto de fecha
    let fecha = new Date();

    //obtenemos el número de las horas
    let horas = fecha.getHours();

    //obtenemos el número de los minutos
    let minutos = dosDigitos( fecha.getMinutes() );

    //obtenemos el número de los segundos
    let segundos = dosDigitos( fecha.getSeconds() );

    //imprimimos dentro del span
    //txt.innerText = horas +':'+ minutos +':'+ segundos;
    txt.innerText = `${horas}:${minutos}:${segundos}`;
}

function dosDigitos( numero )
{
    if( numero < 10 ){
        numero = '0'+ numero;
    }
    return numero;
}


//invocamos función reloj
reloj();

//actualizamos el llamado a la función reloj
setInterval( reloj );