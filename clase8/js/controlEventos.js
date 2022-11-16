const body = document.querySelector('body');
const txt = document.querySelector('#txt');
const boton = document.querySelector('#boton');

function mostrarTexto( mensaje )
{
    txt.innerHTML = '<b>'+ mensaje +'</b>';
}

/*  adjuntamos un controlador de eventos  */

boton.addEventListener( 
                        'click', 
                        function(){ 
                            txt.innerHTML = '<b>hiciste click y lo "escuchamos" en el javascript</b>'; 
                        } 
                    );
boton.addEventListener( 
                        'mouseover', 
                        function(){ 
                            txt.innerHTML = '<b>pusiste mouse sobre y lo "escuchamos" en el javascript</b>'; 
                        } 
                    );
boton.addEventListener( 
                        'mouseout', 
                        function(){ 
                            txt.innerHTML = '<b>quitaste el mouse y lo "escuchamos" en el javascript</b>'; 
                        } 
                    );

body.addEventListener(

            'contextmenu',
            function( evento )
            {
                evento.preventDefault();
                alert('registrese para copiar el cotenido');
            }

);