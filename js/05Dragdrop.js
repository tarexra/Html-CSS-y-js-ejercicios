function iniciar(){
    origen1=document.getElementById('imagen');
    origen1.addEventListener('dragstart', arrastrado, false); //evento es disparado por el elemento origen cuando la operación de arrastre comienza.
    origen1.addEventListener('dragend', finalizado, false);   //evento es disparado por el elemento origen cuando una operación de arrastre es terminada

    Destino = document.getElementById('cajasoltar');
    Destino.addEventListener('dragenter', entrando, false); /*Este evento es disparado por el elemento destino cuando el puntero del ratón entra en el área ocupada por este elemento.
                                                              Este evento siempre tiene que ser cancelado usando el método preventDefault(). */
    Destino.addEventListener('dragleave', saliendo, false);   //evento es disparado por el elemento destino cuando el puntero del ratón sale del área ocupada por el mismo.

    /*dragover: Este evento es disparado periódicamente por el elemento destino cuando el puntero del ratón está sobre él. Este evento siempre tiene que ser cancelado usando el método preventDefault().*/
    Destino.addEventListener('dragover', function (e) { e.preventDefault(); }, false);
    /*drop Este evento es disparado por el elemento destino cuando el elemento origen es soltado en su interior. Este evento siempre tiene que ser cancelado usando el método preventDefault().*/
    Destino.addEventListener('drop', soltado, false);
}

function entrando(e) {
    e.preventDefault();
    Destino.style.background = 'rgba(0,150,0,.2)';
}

function saliendo(e) {
    e.preventDefault();
    Destino.style.background = '#FFFFFF';
}

function finalizado(e) {
    elemento = e.target;
    elemento.style.visibility = 'hidden';
}

function arrastrado(e) {
    var codigo='<img src="'+origen1.getAttribute('src')+'">';
    e.dataTransfer.setData('Text', codigo);  //Prepara informacion que esta siendo arrastrada
}

function soltado(e) {
    e.preventDefault();
    Destino.style.background = '#FFFFFF';
    Destino.innerHTML = e.dataTransfer.getData('Text'); //Asigna la informacion arrastrada en este caso un html

}

window.addEventListener('load', iniciar, false);
