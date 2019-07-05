

/*
this.y_inicio =10;
var id=setInterval(finction(){alert("hola")};3000);

var id1;
var t = 0

function iniciar();
{
id1=setInterval(animacion,42);	
}

functio nanima(arregloPersonas);
{
var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");
context.fillStyle = "#fff";
context.fillRect(0,0,myCanvas.width,myCanvas.height);
	t+=42;
arregloPersonas.forEach(
		function(element) {
	  		element.Y=y_inicio+(element.Velocidad*(t/1000));
		}
	);

arregloPersonas.forEach(
		function(element) {
	  		element.Dibujar(context);
		}
	);	
	t+=42;

}

function detener()
{
	 if(id1 += null)
	{
	clearInterval(id1);
	}
}
*/

function crearTijeras()
{

var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

//Declaración, Creación e Inicialización de un arreglo
arregloTijeras = new Array(
                           new tijera("orange", 150, 120, 30, 30),
                           new tijera("red", 60, 75, 150, 30),
                           new tijera("green", 300, 70, 270, 30)); 


	context.fillStyle = "#fff";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);


for (var i = arregloTijeras.length - 1; i >= 0; i--) 
{
arregloTijeras[i].Dibujar(context);
}
}

var arregloTijeras;

function ordenarporAltura()
{
var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

	var n = arregloTijeras.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arregloTijeras[j].Altura > arregloTijeras[j+1].Altura)
			{
				//Intercambio
				aux = arregloTijeras[j];
				aux_x_j = arregloTijeras[j].X;
				aux_y_j = arregloTijeras[j].Y;
				aux_x_j_1 = arregloTijeras[j+1].X;
				aux_y_j_1 = arregloTijeras[j+1].Y;
				
				arregloTijeras[j] = arregloTijeras[j+1];
				arregloTijeras[j+1] = aux;

				arregloTijeras[j].X = aux_x_j;
				arregloTijeras[j].Y = aux_y_j;

				arregloTijeras[j+1].X = aux_x_j_1;
				arregloTijeras[j+1].Y = aux_y_j_1;
			}
		}
	}

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle = "#fff";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	for (var i = arregloTijeras.length - 1; i >= 0; i--) 
	{
		arregloTijeras[i].Dibujar(context);
	}
}

function ordenarporAncho()
{
var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

	var n = arregloTijeras.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arregloTijeras[j].Ancho > arregloTijeras[j+1].Ancho)
			{
				//Intercambio
				aux = arregloTijeras[j];
				aux_x_j = arregloTijeras[j].X;
				aux_y_j = arregloTijeras[j].Y;
				aux_x_j_1 = arregloTijeras[j+1].X;
				aux_y_j_1 = arregloTijeras[j+1].Y;
				
				arregloTijeras[j] = arregloTijeras[j+1];
				arregloTijeras[j+1] = aux;

				arregloTijeras[j].X = aux_x_j;
				arregloTijeras[j].Y = aux_y_j;

				arregloTijeras[j+1].X = aux_x_j_1;
				arregloTijeras[j+1].Y = aux_y_j_1;
			}
		}
	}

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle = "#fff";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	for (var i = arregloTijeras.length - 1; i >= 0; i--) 
	{
		arregloTijeras[i].Dibujar(context);
	}
}

function ordenarporColor()
{
var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

	var n = arregloTijeras.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arregloTijeras[j].Color > arregloTijeras[j+1].Color)
			{
				//Intercambio
				aux = arregloTijeras[j];
				aux_x_j = arregloTijeras[j].X;
				aux_y_j = arregloTijeras[j].Y;
				aux_x_j_1 = arregloTijeras[j+1].X;
				aux_y_j_1 = arregloTijeras[j+1].Y;
				
				arregloTijeras[j] = arregloTijeras[j+1];
				arregloTijeras[j+1] = aux;

				arregloTijeras[j].X = aux_x_j;
				arregloTijeras[j].Y = aux_y_j;

				arregloTijeras[j+1].X = aux_x_j_1;
				arregloTijeras[j+1].Y = aux_y_j_1;
			}
		}
	}

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle = "#fff";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	for (var i = arregloTijeras.length - 1; i >= 0; i--) 
	{
		arregloTijeras[i].Dibujar(context);
	}
}