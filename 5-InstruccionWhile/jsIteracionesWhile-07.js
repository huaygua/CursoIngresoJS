/*
Mónica Beatriz Huaygua Janko

WHILE Ejercicio 7
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	while (respuesta == "si") 
	{
		numeroIngresado = prompt("Ingrese un numero. ");
		numeroIngresado = parseInt(numeroIngresado);
		console.log(numeroIngresado);

		acumulador = acumulador + numeroIngresado;
		respuesta = prompt("¿Desea continuar ingresando numeros?");
		contador = contador + 1;
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador;

}//FIN DE LA FUNCIÓN