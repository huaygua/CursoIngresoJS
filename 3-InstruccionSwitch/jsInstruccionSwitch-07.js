/*
Mónica Beatriz Huaygua Janko

Switch Ejercicio 7
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	switch (destinoIngresado) 
	{
		case "Cataratas":
			
			alert("El punto cardinal del destino seleccionado es el Norte");
			break;
		case "Bariloche":

			alert("El punto cardinal del destino seleccionado es el Oeste");
			break
		case "Mar del plata":

			alert("El punto cardinal del destino seleccionado es el Este");
			break;
		default:
			alert("El punto cardinal del destino seleccionado es el Sur")

			break;
	}

}//FIN DE LA FUNCIÓN