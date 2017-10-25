# CanvasKit (JavaScript Library)

## How to set context
1. Get a canvas element  
`var canvas = document.getElementById('canvas_id')`

2. Get 2d context of canvas  
`var context = canvas.getContext('2d')`  

## Description of library functions

`cont.drawDot(x,y,size,color)`  
* cont ... context  
* x ... xpos  
* y ... ypos  
* size ... dot size  
* color ... dot color  

`cont.drawLine(x,y,x1,y1,bold,color)`  
* cont ... context
* x ... start xpos  
* y ... start ypos   
* x1 ... end xpos  
* y1 ... end ypos  
* bold ... line width  
* color ... line color  

`cont.drawGrid(x,y,size,width,height,bold,color)`  
* cont ... context  
* x ... center xpos  
* y ... center ypos  
* size ... size of one gird    
* width ... width grids  
* height ... height grids  
* bold ... grid line width  
* color ... grid line color  

`cont.drawBox(x,y,size,bold,color)`
* cont ... context  
* x ... center x pos  
* y ... center y pos  
* size ... box size  
* bold ... box line bold  
* color ... box line color  

`cont.drawFillBox(x,y,size,color)`  
* cont ... context  
* x ... center x pos  
* y ... center y pos  
* size ... box size
* color ... fill color of box  

`cont.drawText(text,x,y,font,bold,size,color,center,fill)`  
* cont ... context
* text ... draw text
* x ... text x pos  
* y ... text y pos  
* font ... text font  
* bold ... text bold  
* size ... text size  
* color ... text color  
* center ... x,y for center  
* fill ... fill switch false:stroke true:fill text  

## Demo codes
```
var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

canvas.width=640
canvas.height=640

context.drawDot(320,120,16,'#FFF') // (320,120) Size:16 Color:#FFF

context.drawLine(220,200,420,200,3,'#FFF') // (220,200) => (420,200) Bold:3 Color:#FFF

context.drawGrid(320,320,10,5,5,3,'#FFF') // (320,320) Size:5x5 Grid-size:10 Bold:3 Color:#FFF

context.drawBox(320,480,20,3,'#FFF') // (320,480) Box-size:20 Bold:3 Color:#FFF

context.drawFillBox(320,540,30,'#FFF // (320,320) Box-size:30 Color:#FFF (Fill)
```

[DEMO PROJECT PAGE](https://jpnykw.github.io/CanvasKit/)
