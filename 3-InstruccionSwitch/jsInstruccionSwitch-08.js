/*
Mónica Beatriz Huaygua Janko

Switch Ejercicio 8
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch (destinoIngresado) {
		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor en el destino seleccionado");
			break;
	
		default:
			alert("Hace frio en el destino seleccionado");
			break;
	}

}//FIN DE LA FUNCIÓN