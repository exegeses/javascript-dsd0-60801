//ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');

//declaramos función de control
function regresiva()
{
    //creamos objetos de fecha
    const ahora = new Date();
    const final = new Date( 2022, 10, 20 );

    //conversion a unix timestamp
        //tiempo transcurrido desde el 01/01/1970
        //expresado en milisegundos
    let actual = ahora.getTime();
    let evento = final.getTime();
    
    //diferencia ente momentos de fecha
    let diferencia = evento - actual

    //obtenemos el tiempo expresado en 
    // segundos, minutos, dias y horas
    let segundos = Math.trunc( diferencia/1000 );
    let minutos = Math.trunc( segundos/60 );
    let horas = Math.trunc( minutos/60 );
    let dias = Math.trunc( horas/24 );

    //calculamor el resto de horas, minutos y segundos
    horas = horas%24;  
    minutos = minutos%60;
    segundos = segundos%60;

    /* imprimimos en html */
    txtDias.innerText = dias;
    txtHoras.innerText = dosDigitos( horas );
    txtMinutos.innerText = dosDigitos( minutos );
    txtSegundos.innerText = dosDigitos( segundos );
}

function dosDigitos( numero )
{
    if( numero < 10 ){
        numero = '0'+ numero;
    }
    return numero;
}


regresiva();
setInterval( regresiva );