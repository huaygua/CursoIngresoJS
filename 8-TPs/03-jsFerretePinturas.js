/*
Mónica Beatriz Huaygua Janko

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con
 un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").

txtIdTemperatura
*/
function FahrenheitCentigrados () 
{
	let Temperatura;
    let centígrados;

    Temperatura = document.getElementById("txtIdTemperatura").value;

    Temperatura = parseInt(Temperatura);

    centígrados = ( Temperatura - 32)/ 1.8

    alert( Temperatura + " Fahrenheit son " + centígrados + " centigrados.")
}

function CentigradosFahrenheit () 
{
	let Temperatura;
    let Fahrenheit;

    Temperatura = document.getElementById("txtIdTemperatura").value;

    Temperatura = parseInt(Temperatura);

    Fahrenheit = (Temperatura * 1.8) + 32

    alert( Temperatura + " centigrados son " + Fahrenheit + " en Fahrenheit.")
	
}
