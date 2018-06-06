
//Descomenta la funcion que se quiera probar.
function hacerclic(){
	AgregaEventoATodasLasEtiquetas();
	
	//AgregaEventoPorTagName();
	
	//AgregaEventoPrimerParrafo();
  
	//AgregarEventosATodosLosParrafos();

	//AgregaEventoPorID();

 }

function AgregaEventoATodasLasEtiquetas(){
  //querySelectorAll retorna todos los elementos que concuerdan con el grupo de selectores declarados entre paréntesis
    var lista=document.querySelectorAll("#principal Label");
    for(var f=0; f<lista.length; f++){
      lista[f].onclick=MostrarAlerta;
    }
  }

/*5919*/

function AgregaEventoPorTagName(){
  document.getElementsByTagName('p')[0].onclick=MostrarAlerta;
}

function AgregarEventosATodosLosParrafos(){
  var lista=document.querySelectorAll("#principal p");
  for(var f=0; f<lista.length; f++){
    lista[f].onclick=MostrarAlerta;
  }
}

function AgregaEventoPorID(){
  //Obtiene un elemento por ID y posteriormente obtiene todos los parafos de texto dentro de ella.
  var lista=document.getElementById('principal').querySelectorAll("p");
  lista[0].onclick=MostrarAlerta;
}

function AgregaEventoPrimerParrafo(){
  //querySelector retorna 
  document.querySelector("#principal p:first-child").onclick=MostrarAlerta;
}

function MostrarAlerta(){
  alert('hizo clic!');
}

//window.onload=hacerclic;
window.addEventListener('load', hacerclic, false );
