const enlace = document.querySelector('#enlace');

enlace.addEventListener(
            'click',
            function( mango )
            {
                mango.preventDefault(); //evita la acción predeterminada
                // en un enlace, si evitamos la acción.
                // no va al sitio solictado
            }
)