//ubicamos elementos dentro del DOM
const formulario = document.querySelector('#formulario');
const errNombre = document.querySelector('#errNombre');
const campoNombre = document.querySelector('input[name="nombre"]');

formulario.addEventListener(
                'submit',
                function ( evento ){
                    //evitamos envío de formulario
                    evento.preventDefault();
                }
)