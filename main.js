var canv,cont;
var doc=document;

window.onload=()=>{
	canv=doc.getElementById('drawArea');
	cont=canv.getContext('2d');
	canv.style.backgroundColor='#2C2C2C';
	canv.width=640;
	canv.height=640;
	cont.clearRect(0,0,canv.width,canv.height);
	
	//CanvasKit Functions
	
	drawDot(cont,320,320,8,'#F3F3F3');

	drawLine(cont,50,128,590,128,3,'#F3F3F3');
	drawLine(cont,50,512,590,512,3,'#F3F3F3');

	drawGrid(cont,320,320,32,5,5,3,'#F3F3F3');
	drawGrid(cont,320,320,640,1,1,32,'#C5C5C5');
	drawGrid(cont,320,320,640,1,1,16,'#4D4D4D');
}

// For demonstoration

document.onkeydown=e=>{
	if(e.keyCode==82){
		cont.clearRect(0,0,canv.width,canv.height);
	}
}
