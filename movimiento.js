function inicio(){
	var boton = document.getElementById("boton");
	boton.addEventListener("click" , cambiar); 
}

function cambiar(){
	var lista = ["#F00", "#cdd", "#000", "#abc", "#cff"];
	var div = document.getElementById("cuadro");
	div.style.background = lista[Math.floor(Math.random() * lista.length)];
}

