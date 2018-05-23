
function iniciar() {
    var imagenes = document.querySelectorAll('#cajaimagenes > img');
    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener('dragstart', arrastrado, false);
        imagenes[i].addEventListener('dragend', finalizado, false);
    }
    soltar = document.getElementById('lienzo');
    lienzo = soltar.getContext('2d');
    soltar.addEventListener('dragenter', function (e) {
        e.preventDefault();
    }, false);
    soltar.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);
    soltar.addEventListener('drop', soltado, false);
}

function finalizado(e) {
    elemento = e.target;
    if (elemento.id != "imagen4") {
        elemento.style.visibility = 'hidden';
    }
}

function arrastrado(e) {
    elemento = e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
    /*setDragImage: Este método reemplaza la imagen en miniatura creada por el navegador en la operación arrastrar y soltar por una imagen personalizada.
      También declara la posición que esta imagen tendrá con respecto al puntero del ratón.*/
    e.dataTransfer.setDragImage(e.target, 0, 0);
}

function soltado(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    if (id != "imagen4") {
        var elemento = document.getElementById(id);
        var posx = e.pageX - soltar.offsetLeft;
        var posy = e.pageY - soltar.offsetTop;
        lienzo.drawImage(elemento, posx, posy);
      //  alert(e.pageX + ',' +  e.pageY)
      //  alert(soltar.offsetLeft + ',' +  soltar.offsetTop)
    }
    else {
        soltar.innerHTML='la imagen no es admitida';  //Este texto nunca se mostro ??
        
    }
}

window.addEventListener('load', iniciar, false);

