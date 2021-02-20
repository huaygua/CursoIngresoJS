/*
Mónica Beatriz Huaygua Janko

1-con if
pedir a una persoan que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace
*/

function mostrar()
{
    let distancia;
	let tiempo;
	let velocidad;
	let mensaje;

    distancia = prompt("Ingrese la distancia del viaje");
	tiempo = prompt("Ingrese el tiempo de viaje");
	velocidad = distancia/tiempo

	distancia = parseInt(distancia);
	tiempo = parseInt(tiempo);
	

	if(velocidad < 61 )
	{
		mensaje = "Muy lento.";
	}
	else
	{
		if( velocidad < 81)
		{
			mensaje = "Lento.";
		}
		else
		{
			if( velocidad < 101)
			{
				mensaje ="buen ritmo.";
			}
			else
			{
				if( velocidad < 121)
				{
					mensaje = "ahi de la ley.";
				}
				else
				{
					mensaje = "eso no se hace";
				}
			}
		}
	}
	alert(mensaje)
}


/*
Mónica Beatriz Huaygua Janko

2- con if
ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III
*/

function mostrar()
{
    let nombre;
	let peso;
	let altura;
	let mensaje;

    nombre = prompt("Ingrese su nombre");
	peso = prompt("Ingrese su peso");
	altura = prompt("Ingrese su altura");
	IMC = peso/(Math.pow(altura , 2));

	peso = parseFloat(peso);
	altura = parseFloat(altura);

	if(IMC < 16 )
	{
		mensaje = nombre + " segun tus datos ingresados tu IMC es bajo peso.";
	}
	else
	{
		if( IMC > 18.5 && IMC < 25)
		{
			mensaje = nombre + " segun tus datos ingresados tu IMC es peso normal.";
		}
		else
		{
			if( IMC < 30)
			{
				mensaje = nombre + " segun tus datos ingresados tu IMC es Preobesidad.";

			}
			else
			{
				if( IMC < 35)
				{
					mensaje = nombre + " segun tus datos ingresados tu IMC es Obesidad I.";

				}
				else
				{
					if( IMC < 40)
					{
						mensaje = nombre + " segun tus datos ingresados tu IMC es Obesidad II.";
	
					}
					else
					{
						mensaje = nombre + " segun tus datos ingresados tu IMC es Obesidad III.";

					}
				}
			}
		}
	}
	console.log("IMC: " + IMC);
	alert(mensaje)
}