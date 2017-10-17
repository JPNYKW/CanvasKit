# CanvasKit (JavaScript Library)

## How to set context
1. Get a canvas element  
`var canvas = document.getElementById('canvas_id')`

2. Get 2d context of canvas  
`var context = canvas.getContext('2d')`  

## Description of library functions

`drawDot(cont,x,y,size,color)`  
* cont ... context  
* x ... xpos  
* y ... ypos  
* size ... dot size  
* color ... dot color  

`drawLine(cont,x,y,x1,y1,bold,color)`  
* cont ... context
* x ... start xpos  
* y ... start ypos   
* x1 ... end xpos  
* y1 ... end ypos  
* bold ... line width  
* color ... line color  

`drawGrid(cont,x,y,size,width,height,bold,color)`  
* cont ... context  
* x ... center xpos  
* y ... center ypos  
* size ... size of one gird    
* width ... width grids  
* height ... height grids  
* bold ... grid line width  
* color ... grid line color  

`drawBox(cont,x,y,size,bold,color)`
* cont ... context  
* x ... center x pos  
* y ... center y pos  
* size ... box size  
* bold ... box line bold  
* color ... box line color  

## Demo codes
`var canvas = document.getElementById('canvas')`  
`var context = canvas.getContext('2d')`  

`canvas.width=640`  
`canvas.height=640`  

`drawDot(context,320,120,16,'#FFF') // (320,120) Size:16 Color:#FFF`  
`drawLine(context,220,200,420,200,3,'#FFF') // (220,200) => (420,200) Bold:3 Color:#FFF`  
`drawGrid(context,320,320,10,5,5,3,'#FFF') // (320,320) Size:5x5 Grid-size:10 Bold:3 Color:#FFF`  
`drawBox(context,320,480,20,3,'#FFF') // (320,480) Box-size:20 Bold:3 Color:#FFF`  

*Project demo link : https://jpnykw.github.io/CanvasKit/*
