/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	let txtIdImporte;
	//let txtIdResultado;
	let resultado;

	txtIdImporte = document.getElementById("txtIdImporte").value;

	txtIdImporte = parseInt(txtIdImporte);

	/*
	descuento = txtIdImporte *25/100;
	resultado = txtIdImporte - descuento

	descuento = txtIdImporte*0.25;
	resultado = txtIdImporte - descuento;

	resultado = txtIdImporte - (txtIdImporte*0.25);

	resultado = txtIdImporte - (txtIdImporte*0.25);

	*/
	resultado = txtIdImporte * 0.75;
	
	document.getElementById("txtIdResultado").value = resultado;
}
