/*
Mónica Beatriz Huaygua Janko

IF Ejercicio 08
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/

function mostrar()
{
	let edad;
	let estado;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad)
	estado = document.getElementById("estadoCivil").value;
	
	
	if (edad > 18 && estado == "Soltero" ) {

		alert("Es soltero y no es menor.");

	} 
}