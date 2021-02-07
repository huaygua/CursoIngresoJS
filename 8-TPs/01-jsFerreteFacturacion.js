/*
Mónica Beatriz Huaygua Janko

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let num1;
    let num2;
    let num3;
	let resultado;

	num1 = document.getElementById("txtIdPrecioUno").value;
    num2 = document.getElementById("txtIdPrecioDos").value;
    num3 = document.getElementById("txtIdPrecioTres").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
    num3 = parseInt(num3);

	resultado = num1 + num2 + num3

	alert("El resultado de la suma es " + resultado)
}
function Promedio () 
{
    let num1;
    let num2;
    let num3;
	let resultado;

	num1 = document.getElementById("txtIdPrecioUno").value;
    num2 = document.getElementById("txtIdPrecioDos").value;
    num3 = document.getElementById("txtIdPrecioTres").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
    num3 = parseInt(num3);

    resultado = (num1 + num2 + num3)/3
    

	alert("El promedio es " + resultado)
}
function PrecioFinal () 
{
    let num1;
    let num2;
    let num3;
	let resultado;

	num1 = document.getElementById("txtIdPrecioUno").value;
    num2 = document.getElementById("txtIdPrecioDos").value;
    num3 = document.getElementById("txtIdPrecioTres").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
    num3 = parseInt(num3);

    precio = num1 + num2 + num3
    
	resultado = (precio*21/100) + precio

	alert("El precio final mas IVA es " + resultado)
    
}