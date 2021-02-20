/*
Mónica Beatriz Huaygua Janko

WHILE Ejercicio 8
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while (respuesta == "si") 
	{
		numeroIngresado = prompt("Ingrese un numero. ");
		numeroIngresado = parseInt(numeroIngresado);
		console.log(numeroIngresado);

		
		if (numeroIngresado > 0) 
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}

		respuesta = prompt("¿Desea continuar ingresando numeros?");
	}


	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN