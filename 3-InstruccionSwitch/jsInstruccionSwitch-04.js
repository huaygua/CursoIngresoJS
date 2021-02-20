/*
Mónica Beatriz Huaygua Janko

Switch Ejercicio 4
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
		

*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	
	switch (mesDelAño) 
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			
			alert("tiene 31 días.");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":

			alert("tiene 30 días.")
			break;
		default:
			alert("tiene 28 días.");
			break;
	}

}//FIN DE LA FUNCIÓN