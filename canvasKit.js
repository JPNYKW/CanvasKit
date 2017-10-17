function drawDot(cont,x,y,size,color){
	cont.beginPath();
	cont.fillStyle=color;
	cont.arc(x,y,size,Math.PI*2,false);
	cont.fill();
}

function drawLine(cont,x,y,x1,y1,bold,color){
	cont.beginPath();
	cont.lineWidth=bold;
	cont.strokeStyle=color;
	cont.moveTo(x,y);
	cont.lineTo(x1,y1);
	cont.closePath();
	cont.stroke();
}

function drawGrid(cont,x,y,size,grids,bold,color){
	width=grids;
	height=grids;
	baseX=x-width/2*size;
	baseY=y-height/2*size;
	for(i=0;i<width+1;i++){
		drawLine(cont,baseX,baseY+i*size,baseX+width*size,baseY+i*size,bold,color);
	}
	for(i=0;i<height+1;i++){
		drawLine(cont,baseX+i*size,baseY,baseX+i*size,baseY+height*size,bold,color);
	}
}
