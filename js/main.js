/*
function principal(){
	var  menu = document.getElementById("menu-principal");
	menu.addEventListener("mouseover", function(){
		alert("hola estoy sobre el menu");
	})
}
principal();

document.queryselector("#menu-principal ul li:last-child")
document.querySelectorAll("#menu-principal ul li:last-child");


probar en console:
a.firstElementChild('li')



var cambiaTexto = function(){
	this.innerHTML = "hola mundo";
}

function principal(){
	var ultimo = document.querySelector("#menu-principal ul li:last-child");
	ultimo.addEventListener("mouseover", function(){
		alert("hola estoy sobre el menu");
	});

	var menu = document.getElementById("menu-principal");
	menu.addEventListener("click", cambiaTexto)
}
principal();
*/

var cambiaTexto = function (){
    this.childNodes[1].childNodes[1].innerHTML = "Hola Mundo";
}
function principal(){

    var ultimo = document.querySelector("#menu-principal ul li:last-child");
    ultimo.addEventListener("mouseover", function(){
        alert("Hola estoy sobre el menu");
    });

    var menu = document.getElementById("menu-principal");
    menu.addEventListener("click", cambiaTexto);

    var div = document.getElementsByTagName("div")[0];
    div.addEventListener("click", cambiaTexto);

    var miInput= document.getElementById("mi-input");
    miInput.addEventListener("focus", function(){
        console.log("Entro al input");
    });
    
    miInput.addEventListener("blur", function(){
        console.log("Salgo del input");
    });

    miInput.addEventListener("change", function(){
        console.log("Cambiando!");
    });
    
}
principal();



