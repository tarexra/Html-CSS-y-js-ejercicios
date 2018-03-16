function iniciar() {
	maximo=600;
	medio=document.getElementById('medio');
	reproducir=document.getElementById('reproducir');
	barra=document.getElementById('barra');
	progreso=document.getElementById('progreso');

	//Agregar eventos
	reproducir.addEventListener('click', presionar, false);
	barra.addEventListener('click', mover, false);
}

function presionar(){
	if(!medio.paused && !medio.ended) {
		medio.pause();
		reproducir.innerHTML='Reproducir'; //innerHTML reemplaza el contenido dentro del boton, en este caso el texto que se muestra.
		window.clearInterval(bucle);  //Borra temporizador
	}else{
		medio.play();
		reproducir.innerHTML='Pausa';
		bucle=setInterval(estado, 1000);  //Se activa un temporizador ciclico (Timmer)
	}

}

function estado(){
	if(!medio.ended){
		var total=parseInt(medio.currentTime*maximo/medio.duration);
		progreso.style.width=total+'px';
	}else{
		progreso.style.width='0px';
		reproducir.innerHTML='Reproducir';
		window.clearInterval(bucle); //Borra temporizador
	}
}


function mover(e){
	if(!medio.paused && !medio.ended){
		var ratonX=e.pageX-barra.offsetLeft;
		var nuevoTiempo=ratonX*medio.duration/maximo;
		medio.currentTime=nuevoTiempo;
		progreso.style.width=ratonX+'px';
	}
}

//Agrega el evento principal de la pagina
window.addEventListener('load', iniciar, false);


/*
Eventos
=============================
progress 					--> Este evento es disparado periódicamente para informar el progreso en la descarga del medio.
canplaythrough 		-->Este evento es disparado cuando el medio completo puede ser reproducido sin interrupción.
canplay 					-->Este evento es disparado cuando el medio puede ser reproducido. A diferencia del evento previo, éste es
								disparado cuando solo parte del archivo fue descargado (solo los primeros cuadros de un video, por ejemplo).
ended 						-->Este evento es disparado cuando la reproducción llega al final del medio.
pause 						-->Este evento es disparado cuando la reproducción es pausada.
play 							-->Este evento es disparado cuando el medio comienza a ser reproducido.
error 						-->Este evento es disparado cuando ocurre un error. El evento es despachado desde el elemento <source> (si se encuentra presente) correspondiente a la fuente del medio que produjo el error.


Métodos
=========================
play() 				-->Este método comienza o continúa la reproducción del medio.
pause() 			-->Este método pausa la reproducción del medio.
load() 				-->Este método descarga el archivo del medio. Es útil en aplicaciones dinámicas.
canPlayType(formato) 	-->Este método indica si el formato del archivo que queremos utilizar es soportado por el
													navegador o no. Retorna una cadena vacía si el navegador no puede reproducir el medio y los textos “maybe”
													(quizás) o “probably” (probablemente) basado en la confianza que tiene de que el medio pueda ser reproducido o
													no.


Propiedades
=========================
paused 				--> Esta propiedad retorna true (verdadero) si la reproducción del medio se encuentra pausada o no hacomenzado.
ended  				-->Esta propiedad retorna true (verdadero) si la reproducción llegó al final del medio.
duration  		-->Esta propiedad retorna la duración del medio en segundos.
currentTime 	-->Esta es una propiedad que puede retornar o recibir un valor para informar la posición en la cual el medio
									se encuentra reproduciendo o establecer una nueva posición donde comenzar a reproducir.
error 				--> Esta propiedad retorna el valor del error cuando un error ocurre.
buffered 			--> Esta propiedad ofrece información sobre la cantidad del archivo que fue descargado e introducido en el buffer.
									Retorna un array conteniendo datos sobre cada porción del medio que ha sido descargada. Si el usuario salta a otra
									parte del medio que no ha sido aún descargada, el navegador comenzará a descargar el medio desde ese punto,
									generando una nueva porción en el buffer. Los elementos del array son accesibles por medio de los atributos end()
									y start(). Por ejemplo, el código buffered.end(0) retornará la duración en segundos de la primera porción del
									medio encontrada en el buffer.

*/
