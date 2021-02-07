/*
Mónica Beatriz Huaygua Janko

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular 
y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular 
y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas
 se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
	let CantidadAlambres;

	largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	CantidadAlambres = (largo*2 + ancho*2)*3

	alert("La cantidad de alambres a comprar a comprar es " + CantidadAlambres)

}
function Circulo () 
{

    let radio;

    radio = document.getElementById("txtIdRadio").value;
   
    radio = parseInt(radio)

    CantidadAlambresRadio = (radio * Math.PI * 2) * 3
   

alert("La cantidad de alambres a comprar a comprar es " + CantidadAlambresRadio)

}


function Materiales () 
{
    let contrapiso;
    let cemento;
    let cal;
    
    contrapiso = document.getElementById("txtIdRadio").value;
    cemento = 2;
    cal = 3;

    contrapiso = parseInt(contrapiso)

    BolsasCemento = contrapiso * cemento
    BolsasCal = contrapiso * cal

    alert("Para un contrapiso de " + contrapiso + " metros es necesario " + BolsasCemento + " bolsas de cemento y " + BolsasCal + " bolsas de cal.");

    
}