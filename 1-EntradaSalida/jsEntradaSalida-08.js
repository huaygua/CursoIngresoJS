/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let Dividendo;
	let Divisor;
	let resultado;

	Dividendo = document.getElementById("txtIdNumeroDividendo").value;
	Divisor = document.getElementById("txtIdNumeroDivisor").value;

	Dividendo = parseInt(Dividendo);
	Divisor = parseInt(Divisor);

	resultado = Dividendo % Divisor

	alert("El resto es " + resultado)
}
