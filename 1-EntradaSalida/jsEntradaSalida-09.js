/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let txtIdSueldo;
	let txtIdResultado;

	txtIdSueldo = document.getElementById("txtIdSueldo").value;
	txtIdResultado = document.getElementById("txtIdResultado").value;

	txtIdSueldo = parseInt(txtIdSueldo);

	porcentaje = txtIdSueldo *10/100
	resultado = txtIdSueldo+ porcentaje

	document.getElementById("txtIdResultado").value = resultado;
}
