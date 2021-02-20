functionSumar()
{
	let numero1;
	let numero2;
	let numero3;
	let numero4;
	let numero5;
	let numero6;
	let numero7;
	let numero8;
	let numero9;
	let numero10;
	

	numero1 = prompt("Ingrese el primer numero");
	numero2 = prompt("Ingrese el segundo numero");
	numero3 = prompt("Ingrese el tercer numero");
	numero4 = prompt("Ingrese el cuarto numero");
	numero5 = prompt("Ingrese el quinto numero");
	numero6 = prompt("Ingrese el sexto numero");
	numero7 = prompt("Ingrese el septimo numero");
	numero8 = prompt("Ingrese el octavo numero");
	numero9 = prompt("Ingrese el noveno numero");
	numero10 = prompt("Ingrese el decimo numero");

	suma = numero1 + numero2 + numero3 + numero4 + numero5 + numero6 + numero7 + numero8 + numero9 +numero10;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	numero3 = parseInt(numero3);
	numero1 = parseInt(numero4);
	numero2 = parseInt(numero5);
	numero3 = parseInt(numero6);
	numero1 = parseInt(numero7);
	numero2 = parseInt(numero8);
	numero3 = parseInt(numero9);
	numero1 = parseInt(numero10);


	alert("las suma de los 10 numero ingresados es " + suma);
}





/*
Mónica Beatriz Huaygua Janko

3-con if
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y
localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento
*/

/*
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let precioBase;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	precioBase = 15000;

	if(estacionIngresada == "Invierno")
	{
		if(destinoIngresado == "Bariloche")
		{
			precioFinal = precioBase + (precioBase *0.2);
		}
		else
		{
			if( destinoIngresado == "Mar del plata")
			{
				precioFinal = precioBase - (precioBase *0.2);
			}
			else
			{
				precioFinal = precioBase - (precioBase *0.1);
			}
		}
	}
	else
	{
		if( estacionIngresada == "Verano")
		{
			if(destinoIngresado == "Bariloche")
			{
				precioFinal = precioBase - (precioBase *0.2);
			}
			else
			{
				if( destinoIngresado == "Mar del plata")
				{
					precioFinal = precioBase + (precioBase *0.2);
				}
				else
				{
					precioFinal = precioBase + (precioBase *0.1);
				}
			}
		}
		else
		{
			if(destinoIngresado == "Cordoba")
			{
				precioFinal = precioBase
			}
			else
			{
					precioFinal = precioBase + (precioBase *0.1);
			}
		}
	}
	alert("El precio final es " + precioFinal);
}
/*

	switch (estacionIngresada) 
	{
		case "Invierno":
			switch (destinoIngresado) 
			{
				case "Bariloche":
					
				 	precioFinal = precioBase + (precioBase *0.2);
					alert("El precio final es " + precioFinal);
					break;
				case "Cataratas":
				case "Cordoba":
                
					precioFinal = precioBase - (precioBase *0.1);
					alert("El precio final es " + precioFinal);
				    break;
				default:

					precioFinal = precioBase - (precioBase *0.2);
					alert("El precio final es " + precioFinal);
					break;
			}
		case "Verano":
			switch (destinoIngresado) 
			{
				case "Bariloche":
						
					precioFinal = precioBase - (precioBase *0.2);
					alert("El precio final es " + precioFinal);
					break;
				case "Cataratas":
				case "Cordoba":
					
					precioFinal = precioBase + (precioBase *0.1);
					alert("El precio final es " + precioFinal);
					break;
				default:
	
					precioFinal = precioBase + (precioBase *0.2);
					alert("El precio final es " + precioFinal);
					break;
			}	
		default:
			switch (destinoIngresado) 
			{
				/*
				case "Bariloche":						
				case "Mar del plata":
				 case "Cataratas":
			
				precioFinal = precioBase + (precioBase *0.1);
				alert("El precio final es " + precioFinal);
				break;
				case "Cordoba":
				
					alert("El precio final es " + precioBase);
				break;
				
			}

	}

}//FIN DE LA FUNCIÓN
*/