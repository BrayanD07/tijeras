class tijera
{
constructor(c, al, an, x, y,vel)
{
this.Color = c;
this.Altura = al;
this.Ancho = an;
this.X = x;
this.Y = y;

this.radiop = this.Ancho/6.3;
this.Velocidad = vel;

}


Dibujar(contextoDeDibujo)
{

//Crear una pluma con el color
contextoDeDibujo.strokeStyle = this.Color; 

//hoja
contextoDeDibujo.moveTo(this.X,

                        this.Y);
contextoDeDibujo.fillStyle="#8a9597"
contextoDeDibujo.fillRect(this.X+this.Ancho/2,
                         this.Y,this.Ancho/3,this.Altura/2);

contextoDeDibujo.stroke();

//puntahoja

var radio = this.Ancho/6.3;
contextoDeDibujo.beginPath();
contextoDeDibujo.fillStyle="#8a9597";
contextoDeDibujo.arc(this.X+this.Ancho*.665,
                         this.Y,
            	     radio,0,3.1416,true);

contextoDeDibujo.strokeStyle="#808080";
contextoDeDibujo.stroke();
contextoDeDibujo.fill();

//basei
//var radio = this.Ancho/3.5;
contextoDeDibujo.beginPath();

contextoDeDibujo.fillStyle=this.Color;

contextoDeDibujo.arc(this.X+this.Ancho/3.5,
                         this.Y+this.Altura/1,
            	     this.radiop*1.7,0,2*3.1416,true);

contextoDeDibujo.strokeStyle=this.Color;
contextoDeDibujo.stroke();
contextoDeDibujo.fill();

//based
//var radio = this.Ancho/3.5;
contextoDeDibujo.beginPath();
contextoDeDibujo.fillStyle=this.Color;
contextoDeDibujo.arc(this.X+this.Ancho*1,
                         this.Y+this.Altura/1,
            	     this.radiop*1.7,0,2*3.1416,true);

contextoDeDibujo.strokeStyle=this.Color;
contextoDeDibujo.stroke();
contextoDeDibujo.fill();


//union basehojad

contextoDeDibujo.fillStyle=this.Color;
contextoDeDibujo.strokeStyle=this.Color;
contextoDeDibujo.beginPath();
contextoDeDibujo.moveTo(this.X+this.Ancho*.83,
                         this.Y+this.Altura/2.5);
contextoDeDibujo.lineTo(this.X+this.Ancho*.67,
                         this.Y+this.Altura/2);//aqui quite 50
contextoDeDibujo.lineTo(this.X+this.Ancho*.736,
                         this.Y+this.Altura/1);//aqui quite 50  this.Y+50+this.Altura/.88)
contextoDeDibujo.lineTo(this.X+this.Ancho*.736+this.radiop*3.4,
                         this.Y+this.Altura/1);//aqui quite 50
contextoDeDibujo.lineTo(this.X+this.Ancho*.83,
                         this.Y+this.Altura/2.5);

contextoDeDibujo.stroke();
contextoDeDibujo.fill();

//union basehojai

contextoDeDibujo.fillStyle=this.Color;
contextoDeDibujo.strokeStyle=this.Color;
contextoDeDibujo.beginPath();
contextoDeDibujo.moveTo(this.X+this.Ancho*.50,
                         this.Y+this.Altura/2.5);
contextoDeDibujo.lineTo(this.X+this.Ancho*.67,
                         this.Y+this.Altura/2);//aqui quite 50
contextoDeDibujo.lineTo(this.X+this.Ancho*.547,
                         this.Y+this.Altura/1);//aqui quite 50
contextoDeDibujo.lineTo(this.X+this.Ancho*.547-this.radiop*3.4,
                         this.Y+this.Altura/1);
contextoDeDibujo.lineTo(this.X+this.Ancho*.50,
                         this.Y+this.Altura/2.5);
contextoDeDibujo.stroke();
contextoDeDibujo.fill();
contextoDeDibujo.closePath();


//agujeroi
//var radio = this.Ancho/5.5;
contextoDeDibujo.beginPath();

contextoDeDibujo.fillStyle="#FFFFFF";

contextoDeDibujo.arc(this.X+this.Ancho/3.5,
                         this.Y+this.Altura/1,
                       this.radiop*1.15,0,2*3.1416,true);

contextoDeDibujo.strokeStyle="#FFFFFF";
contextoDeDibujo.stroke();
contextoDeDibujo.fill();

//agujerod
//var radio = this.Ancho/5.5;
contextoDeDibujo.beginPath();

contextoDeDibujo.fillStyle="#FFFFFF";

contextoDeDibujo.arc(this.X+this.Ancho*1,
                         this.Y+this.Altura/1,
            	     this.radiop*1.15,0,2*3.1416,true);

contextoDeDibujo.strokeStyle="#FFFFFF";
contextoDeDibujo.stroke();
contextoDeDibujo.fill();

//tornillo
contextoDeDibujo.beginPath();
var radio = this.Ancho/16;

contextoDeDibujo.fillStyle="#8a9597";
contextoDeDibujo.arc(this.X+this.Ancho*.67,
                         this.Y+this.Altura/2.7,
            	     radio,0,2*3.1416,true);

contextoDeDibujo.strokeStyle="#000000";
contextoDeDibujo.stroke();
contextoDeDibujo.fill();

//cruz
contextoDeDibujo.beginPath();
contextoDeDibujo.fillStyle="#8a9597";
contextoDeDibujo.strokeStyle="#000000";
//horizontales
contextoDeDibujo.moveTo(this.X+this.Ancho*.62,
                         this.Y+this.Altura/2.7);
contextoDeDibujo.lineTo(this.X+this.Ancho*.73,
                         this.Y+this.Altura/2.7);
//verticales
contextoDeDibujo.moveTo(this.X+this.Ancho*.67,
                         this.Y+this.Altura/2.9);
contextoDeDibujo.lineTo(this.X+this.Ancho*.67,
                         this.Y+this.Altura/2.55);
contextoDeDibujo.stroke();
contextoDeDibujo.fill();
contextoDeDibujo.closePath();
}
}	
