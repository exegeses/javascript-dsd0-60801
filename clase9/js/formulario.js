//ubicamos elementos dentor del DOM
const formulario = document.querySelector('#formulario');
  //campos de texto
const campoNombre = document.querySelector('input[name="nombre"]');
const campoEmail = document.querySelector('input[name="email"]');
const campoComentarios = document.querySelector('textarea[name="comentarios"]');
  //los span para mostrar mensajes de error
const txtNombre = document.querySelector('#txtNombre');
const txtEmail = document.querySelector('#txtEmail');
const txtComentarios = document.querySelector('#txtComentarios');

// función de validación
formulario.addEventListener(
            'submit',
            function( evento )
            {
                //evitamos el envío del formulario
                evento.preventDefault();

                //borramos mensajes de error
                borrarMensajes();

                let flag = true; 

                //obtenemos el contenido del campo Nombre
                let nombre = campoNombre.value;
                    //preguntamos si está vacío
                if( nombre == '' || nombre == null ){
                    txtNombre.innerText = 'Complete campo "Nombre"';
                    flag = false;
                }

                //obtenemos el contenido del campo email
                let email = campoEmail.value;
                const expresion = /\S+@\S+\.\S/;
                if ( !expresion.test( email ) ){
                    txtEmail.innerText = 'Complete el campo "Email"';
                    flag = false;
                }

                //obtenemos el contenido del campo comentarios
                let comentarios = campoComentarios.value;
                if( comentarios == '' || comentarios == null || comentarios.length < 4 ){
                    txtComentarios.innerText = 'Complete el campo "Comentarios" con al menos 3 caratéres';
                    flag = false;
                }

                //si el flag está en true, enviamos el form
                if( flag ){
                    formulario.submit();
                }

            }
);

function borrarMensajes()
{
    txtNombre.innerText = '';
    txtEmail.innerText = '';
    txtComentarios.innerText = '';
}
