/*
Mónica Beatriz Huaygua Janko

IF Ejercicio 4
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/
function mostrar() {
	
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad)
	
	if (edad >=13 && edad <= 17){
		
			alert("Usted es un adolescente");

	} 
	
}