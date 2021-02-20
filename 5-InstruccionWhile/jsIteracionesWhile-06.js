/*
Mónica Beatriz Huaygua Janko

WHILE Ejercicio 6
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while (contador < 5)
	 {
		numeroIngresado = prompt("Ingrese un numero. ");
		numeroIngresado = parseInt(numeroIngresado);
		console.log(numeroIngresado);

		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
	}
	
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/5;
}//FIN DE LA FUNCIÓN