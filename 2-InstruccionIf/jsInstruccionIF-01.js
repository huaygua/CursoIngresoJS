/*
Mónica Beatriz Huaygua Janko
IF Ejercicio 1
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/
function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad)

	if(edad == 15){
		
		alert("Niña bonita");
	}

	alert("Fin de la funcion");

}