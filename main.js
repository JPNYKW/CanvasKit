var $E;
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
	
	cont.drawDot(320,320,8,'#F3F3F3');

	cont.drawLine(50,128,590,128,3,'#F3F3F3');
	cont.drawLine(50,512,590,512,3,'#F3F3F3');

	cont.drawGrid(320,320,32,5,5,3,'#F3F3F3');
	cont.drawGrid(320,320,640,1,1,32,'#C5C5C5');
	cont.drawGrid(320,320,640,1,1,16,'#4D4D4D');
	
	cont.drawText('CanvasKit.js',330,500,'Arial',2,50,'#EEE',true,true);
}

// For demonstoration

document.onkeydown=e=>{
	if(e.keyCode==82){
		cont.clearRect(0,0,canv.width,canv.height);
	}
	if(e.keyCode==32){
		$E=[];
		switch (['DOT','LINE','GRID','BOX','FILLBOX','TEXT'][prompt('Select DOT,LINE,GRID,BOX,FILLBOX,TEXT / 0,1,2,3,4,5')]){
			case 'DOT':
				$E.push(prompt('Enter x pos'));
				$E.push(prompt('Enter y pos'));
				$E.push(prompt('Enter size'));
				$E.push(prompt('Enter color (hex)'));
				cont.drawDot(~~$E[0],~~$E[1],~~$E[2],$E[3]);
			break;
			case 'LINE':
				$E.push(prompt('Enter start x pos'));
				$E.push(prompt('Enter start y pos'));
				$E.push(prompt('Enter end x pos'));
				$E.push(prompt('Enter end y pos'));
				$E.push(prompt('Enter bold'));
				$E.push(prompt('Enter color (hex)'));
				cont.drawLine(~~$E[0],~~$E[1],~~$E[2],~~$E[3],~~$E[4],$E[5]);
			break;
			case 'GRID':
				$E.push(prompt('Enter x pos'));
				$E.push(prompt('Enter y pos'));
				$E.push(prompt('Enter grid size'));
				$E.push(prompt('Enter width'));
				$E.push(prompt('Enter height'));
				$E.push(prompt('Enter bold'));
				$E.push(prompt('Enter color (hex)'));
				if($E[$E.length-1].substr(0,1)!=='#'){$E[$E.length-1]=`#${$E[$E.length-1]}`}
				cont.drawGrid(~~$E[0],~~$E[1],~~$E[2],~~$E[3],~~$E[4],~~$E[5],$E[6]);
			break;
			case 'BOX':
				$E.push(prompt('Enter x pos'));
				$E.push(prompt('Enter y pos'));
				$E.push(prompt('Enter size'));
				$E.push(prompt('Enter bold'));
				$E.push(prompt('Enter color'));
				cont.drawBox(~~$E[0],~~$E[1],~~$E[2],~~$E[3],$E[4]);
			break;
			case 'FILLBOX':
				$E.push(prompt('Enter x pos'));
				$E.push(prompt('Enter y pos'));
				$E.push(prompt('Enter size'));
				$E.push(prompt('Enter color'));
				cont.drawFillBox(~~$E[0],~~$E[1],~~$E[2],$E[3]);
			break;
			case 'TEXT':
				$E.push(prompt('Enter text'));
				$E.push(prompt('Enter x pos'));
				$E.push(prompt('Enter y pos'));
				$E.push(prompt('Enter font'));
				$E.push(prompt('Enter bold'));
				$E.push(prompt('Enter size'));
				$E.push(prompt('Enter color'));
				cont.drawText($E[0],~~$E[1],~~$E[2],$E[3],~~$E[4],~~$E[5],~~$E[6],true,true);
			break;
		}
	}
}
