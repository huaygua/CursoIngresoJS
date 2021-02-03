/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;
	//guardo en la variable nombre el texto que escribio el usuario dentro de la ventana prompt
	nombre = prompt("Ingrese su nombre");
	//Copio el nombre que tengo guardo en la variable nombre de la caja de texto embebido en la pagina html
	document.getElementById("txtIdNombre").value = nombre;
	//document.getElementById("txtIdNombre").value = "";

}

