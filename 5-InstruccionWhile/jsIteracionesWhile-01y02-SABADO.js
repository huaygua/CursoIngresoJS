/*
Mónica Beatriz Huaygua Janko

WHILE
2. Mismo ejercicio, pero no se cuantos numeros se ingresan.
 (Lo decide el usuario). Mostrar tambien el promedio de los numeros que cumplen la condicion.
*/
function mostrar()
{
	let numeroIngresado;
	let contadorIteracion;
	let contadorNumeroSolicitado;
	let acumuladorDeNumerosIngresados;
	let respuesta;

	respuesta = "si";
	contadorIteracion = 0;
	contadorNumeroSolicitado = 0;
	acumuladorDeNumerosIngresados = 0;
	
	while(respuesta == "si")
	{	
		numeroIngresado = prompt("Ingrese el °" + (contadorIteracion+1) + " número.");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > 9 && numeroIngresado < 21)
		{
			acumuladorDeNumerosIngresados = acumuladorDeNumerosIngresados + numeroIngresado;
			contadorNumeroSolicitado = contadorNumeroSolicitado + 1;
			console.log(numeroIngresado);
		}

		respuesta = prompt("¿Desea ingresar otro numero?");
		respuesta = respuesta.toLowerCase();
		contadorIteracion = contadorIteracion + 1;
	}
	promedioDeNumerosIngresados = acumuladorDeNumerosIngresados / contadorNumeroSolicitado;
	

	alert(contadorNumeroSolicitado + " numeros cumplen con la condicion solicitada.");
	alert ("El promedio es " + promedioDeNumerosIngresados);

}



/*
Mónica Beatriz Huaygua Janko

WHILE
1. Ingresar 5 numeros, y determinar la cantidad de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos)
*/
/*
function mostrar()
{
	let numeroIngresado;
	let contadorIteracion;
	let contadorNumeroSolicitado;

	contadorIteracion = 0;
	contadorNumeroSolicitado = 0;
	
	while(contadorIteracion < 5)
	{	
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		

		if(numeroIngresado > 9 && numeroIngresado < 21)
		{
			contadorNumeroSolicitado = contadorNumeroSolicitado + 1;
		}
		contadorIteracion = contadorIteracion + 1;
	}

	alert("Usted ingreso " + contadorNumeroSolicitado + " numeros que son mayores que 10 y menores 20 (incluisive en ambos casos).")
}
*/