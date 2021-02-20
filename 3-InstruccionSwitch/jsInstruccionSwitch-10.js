/*
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos,
informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/


function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let precioBase;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (estacionIngresada) {
		case "Invierno":
		switch (key) {
			case value:
				
				alert("se viaja");
				break;
	
			default:


				break;
		}
		
			break;
		case "Verano":

			break;
		
	
		default:
			break;
	}


}//FIN DE LA FUNCIÓN