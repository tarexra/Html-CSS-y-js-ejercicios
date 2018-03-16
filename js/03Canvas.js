
function iniciar(){
	
	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d'); //Genera un contexto de dibujo que será asignado al lienzo.

	var elemento2=document.getElementById('lienzo2');
	lienzo2=elemento2.getContext('2d'); //Genera un contexto de dibujo que será asignado al lienzo.

	var elemento3=document.getElementById('lienzo3');
	lienzo3=elemento3.getContext('2d'); //Genera un contexto de dibujo que será asignado al lienzo.

	var elemento4=document.getElementById('lienzo4');
	lienzo4=elemento4.getContext('2d'); //Genera un contexto de dibujo que será asignado al lienzo.

	/*****************************************************/

	Figuras_Lienzo2();
	trazadosstroke_lienzo2();
	trazadosfill_lienzo2();
	trazadosclip_lienzo2();

	/*****************************************************/
	Rectangulos_Lienzo3();

	/*****************************************************/

	Arcos_lienzo3();
	Imagenes_lienzo4();
	texto_Lienzo1();



	window.addEventListener('mousemove', animacion, false);

}

	/***************************************************************************************************************************************************/



function Figuras_Lienzo2(){
	/*
	strokeStyle: Esta propiedad declara el color para el contorno de la figura.
	fillStyle: Esta propiedad declara el color para el interior de la figura.
	globalAlpha: Esta propiedad no es para definir color sino transparencia. Especifica la transparencia para todas las figuras dibujadas en el lienzo.

-----------------------------
Gradientes.

createLinearGradient(x1, y1, x2, y2):		 Este método crea un objeto que luego será usado para aplicar un gradiente lineal al lienzo.
createRadialGradient(x1, y1, r1, x2, y2, r2):	 Este método crea un objeto que luego será usado para aplicar un gradiente circular o radial al lienzo usando dos círculos.
 																								Los valores representan la posición del centro de cada círculo y sus radios.
addColorStop(posición, color):	Este método especifica los colores a ser usados por el gradiente. El atributo posición es un valor entre 0.0 y 1.0 que determina dónde
																la degradación comenzará para ese color en particular.

	*/

	var gradiente2=lienzo2.createLinearGradient(0 ,0,10 ,100);
	gradiente2.addColorStop(0.5, '#0000FF');
	gradiente2.addColorStop(1, '#000000');
	lienzo2.fillStyle=gradiente2;
	lienzo2.fillRect(10,10,100,100);
	lienzo2.fillRect(150,10,200,100);
}



function trazadosstroke_lienzo2(){
	lienzo2.beginPath();  		//Comienza la descripción de una nueva figura.
	lienzo2.moveTo(50,130);		//Este método mueve el lápiz a una posición específica para continuar con el trazado
	lienzo2.lineTo(150,200);	//Este método genera una línea recta desde la posición actual del lápiz hasta la nueva declarada por los atributos x e y.
	lienzo2.lineTo(50,200);
	lienzo2.closePath();  		//cierra el trazado generando una línea recta desde el último punto hasta el punto de origen.
	lienzo2.stroke();     		//dibuja el trazado como una figura vacía
}

function trazadosfill_lienzo2(){
	lienzo2.beginPath();
	lienzo2.moveTo(200,130);
	lienzo2.lineTo(300,200);
	lienzo2.lineTo(200,200);
	lienzo2.closePath();
	lienzo2.fill();					//dibuja el trazado como una figura sólida.
}


function trazadosclip_lienzo2(){
	lienzo2.beginPath();
	lienzo2.moveTo(350,130);
	lienzo2.lineTo(450,200);
	lienzo2.lineTo(350,200);
	lienzo2.clip();					//declara una nueva área de corte para el contexto.

	lienzo2.beginPath();

	for(f=0; f<300; f=f+10){
		lienzo2.moveTo(0,f);
		lienzo2.lineTo(500,f);
	}

	lienzo2.stroke();

}


function Rectangulos_Lienzo3(){
	lienzo3.fillStyle="#000099";
	lienzo3.strokeStyle="#990000";
	lienzo3.strokeRect(380,0,120,120); /* fillRect(x, y, ancho, alto):Este método dibuja un rectángulo sólido. La esquina superior izquierda será ubicada en
																					la posición especificada por los atributos x e y. Los atributos ancho y alto declaran el tamaño.*/
	lienzo3.fillRect(390,10,100,100);   /*strokeRect(x, y, ancho, alto):Similar al método anterior, éste dibujará un rectángulo vacío (solo su contorno). */
	lienzo3.clearRect(400,20,80,80);    /*clearRect(x, y, ancho, alto): Esta método es usado para substraer pixeles del área especificada por sus atributos. Es un borrador rectangular. */

}


function Arcos_lienzo3(){
	lienzo3.strokeStyle="#000000"
	lienzo4.beginPath(); //Comienza la descripción de una nueva figura.
	var radianes=Math.PI/180*45;
  lienzo3.arc(100,100,50 ,0,radianes, false); 	/* arc(x, y, radio, ángulo inicio, ángulo final, dirección): Este método genera un arco o un círculo en la posición x e y,  con un radio y
																								desde un ángulo declarado por sus 	atributos. El último valor es un valor booleano para indicar la dirección a favor o en contra de las agujas del reloj. 	*/
	lienzo3.stroke();  //dibuja el trazado como una figura vacía


	lienzo3.lineWidth=10;			//Esta propiedad determina el grosor de la línea. Por defecto el valor es 1.0 unidades.
	lienzo3.lineCap="round";  //Esta propiedad determina la forma de la terminación de la línea. Puede recibir uno de estos tres valores: butt, round y square.
	lienzo3.beginPath();
	lienzo3.moveTo(50,50);
	lienzo3.quadraticCurveTo(100,125, 50,200); /*	quadraticCurveTo(cpx, cpy, x, y): Este método genera una curva Bézier cuadrática desde la posición actual del lápiz hasta la posición
																								declarada por los atributos x e y. Los atributos cpx y cpy indican el punto que dará forma a la curva. */
	lienzo3.stroke();


	lienzo3.lineWidth=5;
	lienzo3.lineJoin="miter";  //Esta propiedad determina la forma de la conexión entre dos líneas. Los valores posibles son: round,bevel y miter.
	lienzo3.beginPath();
	lienzo3.moveTo(250,50);
	lienzo3.bezierCurveTo(200,125, 300,125, 250,200); /* bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y): Este método es similar al anterior pero agrega dos atributos más para generar una curva Bézier cúbica.
																												Ahora disponemos de dos puntos para	moldear la curva, declarados por los atributos cp1x, cp1y, cp2x y cp2y. */
	lienzo3.stroke();

	/* miterLimit: Trabajando en conjunto con lineJoin, esta propiedad determina cuánto la conexión de dos líneas será extendida cuando la propiedad lineJoin es declarada con el valor miter.*/

}


function texto_Lienzo1(){
	lienzo4.font="bold 24px verdana, sans-serif";   //Esta propiedad tiene una sintaxis similar a la propiedad font de CSS, y acepta los mismos valores.

//	sombras
	lienzo4.shadowColor="rgba(0,0,0,0.5)";  //Esta propiedad declara el color de la sombra usando sintaxis CSS.
	lienzo4.shadowOffsetX=4;     //Esta propiedad recibe un número para determinar qué tan lejos la sombra estará ubicada del objeto (dirección horizontal).
	lienzo4.shadowOffsetY=4;    //Esta propiedad recibe un número para determinar qué tan lejos la sombra estará ubicada del objeto (dirección vertical).
	lienzo4.shadowBlur=5;			 //Esta propiedad produce un efecto de difuminación para la sombra.

	//alineamientos
	lienzo4.textAlign="start";						//Esta propiedad alinea el texto. Existen varios valores posibles: start (comienzo), end (final),	left (izquierda), right (derecha) y center (centro).
	lienzo4.textBaseline="top";				/*Esta propiedad es para alineamiento vertical. Establece diferentes posiciones para el texto 	(incluyendo texto Unicode). Los posibles valores son: top, hanging,
																				middle, alphabetic, ideographic y bottom. */

	//translaciones
	lienzo4.translate(50,70);     			//Este método de transformación es usado para mover el origen del lienzo4.
	lienzo4.rotate(Math.PI/180*45);		//Este método de transformación rotará el lienzo4 alrededor del origen

	//Pintar texto relleno(fillText). Usar strokeText para texto no elleno
	lienzo4.strokeText("Mi mensaje", 50,20);    //dibuja el texto especificado en la posición x,y como una figura vacía (solo los contornos).

	lienzo4.save(); /*  Este método graba el estado del lienzo4, incluyendo transformaciones ya aplicadas, valores de propiedades
											de estilo y la actual máscara (el área creada por el método clip(), si existe). */

	//translaciones
	lienzo4.rotate(-Math.PI/180*45);
	lienzo4.translate(0,100);
	lienzo4.scale(2,2);   //Este método de transformación incrementa o disminuye las unidades de la grilla para reducir o ampliar todo lo que esté dibujado en el lienzo4.

//	lienzo4.restore();  // Este método recupera el último estado grabado.

	lienzo4.fillText("Mi mensaje", 0,0);  //dibuja el texto solido especificado en la posición x,y com


	var tamano=lienzo4.measureText("Mi mensaje");
	lienzo4.strokeRect(100,100,tamano.width,24)  //Pintar un rectangulo al rededor del texto

/*
transform(m1, m2, m3, m4, dx, dy): El lienzo4 contiene una matriz de valores que especifican sus propiedades. El método transform() aplica una nueva matriz sobre la actual para modificar el lienzo4.
setTransform(m1, m2, m3, m4, dx, dy):  Este método reinicializa la actual matriz de transformación y establece una nueva desde los valores provistos en sus atributos.
 */

}


function Imagenes_lienzo4(){
	//var imagen=new Image();
	//imagen.src = "ImageSources\BorrarRegistro.png";
	var imagen = document.getElementById('Image2');
	lienzo4.drawImage(imagen,0,0)  //dibujar una imagen en el lienzo en la posición declarada

 //imagen.addEventListener("load", modificarimagen, false);  //No creo el patron de imagenes
}

function modificarimagen(e) {
    Myimagen = e.target;
    var patron = lienzo4.createPattern(Myimagen, 'repeat');
    lienzo4.fillStyle = patron;
    lienzo4.fillRect(0, 0, 500, 300);
}

function animacion(e) {
	var salida=document.getElementById("Angulo");
    lienzo.clearRect(0, 0, 300, 500);
    var xraton = e.clientX;
    var yraton = e.clientY;
    var xcentro = 220;
    var ycentro = 150;
    var angulo = Math.atan2(xraton - xcentro, yraton - ycentro);
		salida.innerHTML = 'Angulo ' + angulo;
    var x = xcentro + Math.round(Math.sin(angulo) * 10);
    var y = ycentro + Math.round(Math.cos(angulo) * 10);
    lienzo.beginPath();
    lienzo.arc(xcentro, ycentro, 20, 0, Math.PI * 2, false); /* arc(x, y, radio, ángulo inicio, ángulo final, dirección): Este método genera un arco o un círculo en la posición x e y,  con un radio y
																									desde un ángulo declarado por sus 	atributos. El último valor es un valor booleano para indicar la dirección a favor o en contra de las agujas del reloj. 	*/

	  //Mueve el lapiz a donde comenzara el siguiente trazo del ojo proximo
    lienzo.moveTo(xcentro + 70, 150);
    lienzo.arc(xcentro + 50, 150, 20, 0, Math.PI * 2, false);
    lienzo.stroke();
    lienzo.beginPath();
    lienzo.moveTo(x + 10, y);
    lienzo.arc(x, y, 10, 0, Math.PI * 2, false);
    lienzo.moveTo(x + 60, y);
    lienzo.arc(x + 50, y, 10, 0, Math.PI * 2, false);
    lienzo.fill();
}

window.addEventListener("load", iniciar, false);
