/*
Mónica Beatriz Huaygua Janko

WHILE Ejercicio 3
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	i = 0;

		
		while (claveIngresada != "utn750" || i < 3) 
		{
			claveIngresada = prompt("Clave incorrecta, reintente de nuevo.");
			i = i + 1;
		}
	
		
	alert("Supero los intentos disponibles")



	
}//FIN DE LA FUNCIÓN
