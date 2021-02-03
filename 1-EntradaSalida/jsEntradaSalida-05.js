/*
Debemos lograr tomar nombre, apellido y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José Perez  y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;
	let apellido;
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	apellido = prompt("Ingrese su apellido")

	alert("Usted se llama "+ nombre + " " + apellido + " y tiene " + edad + " años.");

}

