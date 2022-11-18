//ubicamos elementos dentro del DOM
const formulario = document.querySelector('#formulario');
const errNombre = document.querySelector('#errNombre');
const campoNombre = document.querySelector('input[name="nombre"]');

formulario.addEventListener(
                'submit',
                function ( evento ){
                    //evitamos envío de formulario
                    evento.preventDefault();

                    //obtenemos dato escrito en el campo
                    let nombre = campoNombre.value;
                    if( nombre == null || nombre == '' ){
                        errNombre.innerText = 'Complete el campo nombre';
                        return false;
                    }
                    //si llegamos hasta acá , ya podemos enviar el form
                    formulario.submit();
                }
)