## Chapter 3 Snippets

```javascript
<style type="text/css">
	#Canvas1 {
		border: dotted 3px black;
		background-color: lightGray;
	}
</style>

<canvas id="Canvas1" width="400" height="300">Your browser does not support canvas.</canvas>
```

## Chapter 4 Snippets

##### ContextDraw
```javascript
var theCanvas = document.getElementById('Canvas1');
if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		ctx.fillStyle = "lightGray";
		ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
	}
}
```

##### ContextProps
```javascript
var theCanvas = document.getElementById('Canvas1');
theCanvas.width = 150;
theCanvas.height = 150;
```

## Chapter 5 Snippets

##### Colors
```javascript
ctx.fillStyle = "green";
ctx.fillRect(20,20,100,100);

ctx.lineWidth = 5;
ctx.strokeStyle="rgba(0,0,255,1)";
ctx.strokeRect(20,20,100,100);
```

##### Arcs
```javascript
ctx.strokeStyle = "blue";
ctx.fillStyle = "red";
ctx.lineWidth = 5;

// stroke a quarter arc
ctx.beginPath();
ctx.arc(50,150,100,1.5*Math.PI,2*Math.PI);
ctx.stroke();

// stroke a three-quarter arc, going anti-clockwise
ctx.beginPath();
ctx.arc(300,150,100,0,1.5*Math.PI,false);
ctx.stroke();

// stroke and fill a circle
ctx.beginPath();
ctx.arc(550,150,100,0,2*Math.PI);
ctx.fill();
ctx.stroke();
```

##### Curves
```javascript
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;

// stroke a simple bezier curve
ctx.beginPath();
ctx.moveTo(50,200);
ctx.bezierCurveTo(50,100,200,100,200,150);
ctx.stroke();
// now make the control points visible
ctx.strokeStyle = "rgba(0,0,0,.25)";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(50,200);
ctx.lineTo(50,100);
ctx.lineTo(200,100);
ctx.lineTo(200,150);
ctx.stroke();

// stroke a quadratic curve
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(400,200);
ctx.quadraticCurveTo(400,100,600,150);
ctx.stroke();
// now make the control points visible
ctx.strokeStyle = "rgba(0,0,0,.25)";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(400,200);
ctx.lineTo(400,100);
ctx.lineTo(600,150);
ctx.stroke();
```

##### Drawing State
```javascript
// set up some drawing information
ctx.strokeStyle = "red";
ctx.fillStyle = "yellow";
ctx.lineWidth = 10;

// draw the first Rectangle
ctx.fillRect(25,25,100,125);
ctx.strokeRect(25,25,100,125);

// now, draw another rectangle with different settings
ctx.save(); // this will save the current settings

ctx.strokeStyle = "green";
ctx.fillStyle = "blue";
ctx.lineWidth = 5;
ctx.fillRect(175, 25, 100, 125);
ctx.strokeRect(175, 25, 100, 125);

ctx.restore(); // now restore the original settings

// draw a stroked and filled rectangle
ctx.fillRect(325, 25, 100, 125);
ctx.strokeRect(325,25,100,125);
```

##### Lines
```javascript
// draw lines of varying widths
var theCanvas = document.getElementById('Canvas1');
if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		for (var i = 0; i < 10; i++){
			ctx.beginPath();
			ctx.lineWidth = i+1;
			ctx.moveTo(25, 25+i*15);
			ctx.lineTo(475, 25+i*15);
			ctx.stroke();
		}
	}
}


// demonstrate the lineCap endings
var theCanvas = document.getElementById('Canvas2');
if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		// draw the guidelines
		ctx.strokeStyle="cyan";
		ctx.lineWidth=1;
		ctx.beginPath();
		ctx.moveTo(50,25);
		ctx.lineTo(50,175);
		ctx.moveTo(450,25);
		ctx.lineTo(450,175);
		ctx.stroke();

		// draw lines using each lineCap;
		ctx.lineWidth = 25;
		ctx.strokeStyle="black";
		ctx.lineCap="butt";
		ctx.beginPath();
		ctx.moveTo(50,50);
		ctx.lineTo(450,50);
		ctx.stroke();
		ctx.lineCap="round";
		ctx.beginPath();
		ctx.moveTo(50,100);
		ctx.lineTo(450,100);
		ctx.stroke();
		ctx.lineCap="square";
		ctx.beginPath();
		ctx.moveTo(50,150);
		ctx.lineTo(450,150);
		ctx.stroke();
	}
}


// Show the lineJoin variations
var theCanvas = document.getElementById('Canvas3');
if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		ctx.lineWidth = 15;
		ctx.strokeStyle="black";
		ctx.lineJoin="round";
		ctx.beginPath();
		ctx.moveTo(25,150);
		ctx.lineTo(75,50);
		ctx.lineTo(125,150);
		ctx.stroke();
		ctx.lineJoin="bevel";
		ctx.beginPath();
		ctx.moveTo(175,150);
		ctx.lineTo(225,50);
		ctx.lineTo(275,150);
		ctx.stroke();
		ctx.lineJoin="miter";
		ctx.beginPath();
		ctx.moveTo(325,150);
		ctx.lineTo(375,50);
		ctx.lineTo(425,150);
		ctx.stroke();
	}
}
```

##### Paths
```javascript
ctx.strokeStyle = "blue";
ctx.fillStyle = "red";
ctx.lineWidth = 5;

// draw an open path (not closed)
ctx.beginPath();
ctx.moveTo(25,175);
ctx.lineTo(50,25);
ctx.lineTo(125,50);
ctx.lineTo(175,175);
ctx.stroke();

// draw a closed path
ctx.beginPath();
ctx.moveTo(225,175);
ctx.lineTo(250,25);
ctx.lineTo(325,50);
ctx.lineTo(375,175);
ctx.closePath();
ctx.stroke();

// draw a closed path
ctx.beginPath();
ctx.moveTo(425,175);
ctx.lineTo(450,25);
ctx.lineTo(525,50);
ctx.lineTo(575,175);
ctx.fill();
ctx.stroke();
```

##### Rectangles
```javascript
// draw just a stroked rectangle
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.strokeRect(25,25,100,125);

// draw just a filled rectangle
ctx.fillStyle = "green";
ctx.fillRect(175, 25, 100, 125);

// draw a stroked and filled rectangle
ctx.strokeStyle = "red";
ctx.fillStyle = "yellow";
ctx.lineWidth = 10;
ctx.fillRect(325, 25, 100, 125);
ctx.strokeRect(325,25,100,125);

// clear a rectangle
ctx.clearRect(15, 75, 450, 50);

```

##### Text
```javascript
var theString = "Drawing Text on a Canvas";

// draw a simple text string using the default settings
ctx.fillText(theString, 20,20);

// draw the string with some font information
ctx.font = "25pt Georgia"
ctx.fillText(theString, 20,60);

// draw the string with a fillStyle color
ctx.fillStyle = "blue";
ctx.fillText(theString, 20,100);

// draw the string with both a stroke and a fill with some opacity setting
ctx.font = "32pt Verdana"
//ctx.textBaseline="middle";
ctx.fillStyle = "yellow";
ctx.strokeStyle = "rgba(0,255,0,0.8)";
ctx.fillText(theString, 20,160);
ctx.strokeText(theString, 20,160);

// use measureText to draw a line under the text
var textW = ctx.measureText(theString);
ctx.beginPath();
ctx.strokeStyle="black";
ctx.moveTo(20,170);
ctx.lineTo(textW.width,170);
ctx.stroke();

```

## Chapter 6

##### Gradients
```javascript
// create a linear gradient
var linGrd = ctx.createLinearGradient(20,20,20,280);
// add some color stops: red to blue, blue to green
linGrd.addColorStop(0, "#f00"); // start with red at 0
linGrd.addColorStop(0.5, "#00f"); // put blue at the halfway point
linGrd.addColorStop(1,"#0f0"); // finish with green

// create a rectangle and fill it with the gradient
ctx.fillStyle = linGrd;
ctx.fillRect(20,20,200,260);
ctx.lineWidth = 3;
ctx.strokeRect(20,20,200,260);

// create a radial gradient
var radGrd = ctx.createRadialGradient(525,150,20,525,150,100);
radGrd.addColorStop(0, "#f00"); // start with red at 0
radGrd.addColorStop(0.5, "#00f"); // put blue at the halfway point
radGrd.addColorStop(1,"#0f0"); // finish with green
ctx.fillStyle = radGrd;

ctx.beginPath();
ctx.arc(525,150,100,0,2*Math.PI);
ctx.stroke();
ctx.fill();
```

##### Images
```javascript
	// draw an image directly onto the canvas at the top left
var srcImg = document.getElementById("img1");
ctx.drawImage(srcImg, 0,0);

// draw the image scaled down onto the canvas
ctx.drawImage(srcImg, 50,50,350,150);

// draw just a portion of the source image onto the canvas
ctx.drawImage(srcImg, 350,200,125,100,50,50,125,100);

// draw the video onto the canvas. We need to set an interval function
// in order to grab each frame from the video and paint it onto the canvas.
var srcVid = document.getElementById("vid1");
srcVid.play();
setInterval(function () {
	var theCanvas = document.getElementById('Canvas1');
	var ctx = theCanvas.getContext("2d");
	var srcVid = document.getElementById("vid1");
	ctx.drawImage(srcVid, 0,0);
}, 16);

```

##### Patterns
```javascript
// create a pattern from an image
var patImg = new Image();
patImg.onload = function() {
	ctx.fillStyle = ctx.createPattern(patImg,"repeat");
	//ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
patImg.src = "images/desert_desc_bug.gif";

// create a pattern from a video
setTimeout(function() {
	var vid = document.getElementById('vidEl');
	var theCanvas = document.getElementById('Canvas1');
	var ctx = theCanvas.getContext("2d");
	var vidPat = ctx.createPattern(vid,"repeat");
	ctx.fillStyle = vidPat;
	ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
},3000);

// create a pattern from another canvas
var patCanvas = document.getElementById('patCan');
var patCtx = patCanvas.getContext("2d");
// draw a line in the canvas
patCtx.strokeStyle = "red";
patCtx.lineWidth=1;
patCtx.beginPath();
patCtx.moveTo(0,0);
patCtx.lineTo(25,25);
patCtx.stroke();

// now use that canvas as a pattern
var strokePat = ctx.createPattern(patCanvas,"repeat");
ctx.strokeStyle = strokePat;
ctx.lineWidth = 25;
ctx.strokeRect(50,50,200,200);

```

##### Shadows
```javascript
// set up our basic shadow settings
ctx.shadowColor = "#000000";
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 10;

// draw a simple rectangle with a shadow effect
ctx.fillStyle = "rgba(0,0,255,1)";
ctx.fillRect(20,20,200,100);

var theString = "Drawing Text on a Canvas";
// draw the string with some font information
// change the shadow settings to be a bit lighter
ctx.fillStyle = "green";
ctx.shadowColor = "rgba(0,100,100,0.5)";
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
ctx.shadowBlur = 5;
ctx.font = "25pt Georgia";
ctx.fillText(theString, 250,75);

// draw a red line with a purplish shadow
ctx.lineCap="round";
ctx.lineWidth = 25;
ctx.shadowColor = "rgba(150,0,150,0.5)";
ctx.shadowBlur = 15;
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(50,200);
ctx.lineTo(450,200);
ctx.stroke();

```

##### Clipping Paths
```javascript
// draw an image
var srcImg = document.getElementById("img1");

// create a circle clipping path
//ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, 150, 0, 2 * Math.PI);
//ctx.clip();

// create an arbitrary clipping path
ctx.beginPath();
ctx.moveTo(105, 200);
ctx.lineTo(250, 25);
ctx.lineTo(525, 50);
ctx.lineTo(475, 285);
ctx.closePath();
ctx.clip();

ctx.drawImage(srcImg, 0, 0);
```


## Chapter 7

##### Compositing
```javascript
var compMethods = ["source-over","source-in","source-out","source-atop","lighter","xor",
					"destination-over", "destination-in", "destination-out", "destination-atop", "darker", "copy"];

var rects = [
{ x: 20, y:20, width: 75, height: 75},
{ x: 40, y:50, width: 75, height: 75},
];

var method = 0;
// draw a series of rectangles
for (var i= 0; i < compMethods.length; i++) {
	var cvsName = "Canvas" + (i+1);
	var curCanvas = document.getElementById(cvsName);
	var exampCtx = curCanvas.getContext("2d");

	exampCtx.fillStyle = "blue";
	exampCtx.fillRect(rects[0].x, rects[0].y, rects[0].width, rects[0].height);

	exampCtx.globalCompositeOperation = compMethods[method++];

	exampCtx.fillStyle = "green";
	exampCtx.fillRect(rects[1].x, rects[1].y, rects[1].width, rects[1].height);
}

```
	
##### Global Alpha
```javascript
ctx.globalAlpha = 1.0 // the default value, but set it anyway

var rects = [
{ x: 20, y:20, width: 75, height: 75},
{ x: 40, y:50, width: 75, height: 75},
{ x: 150, y:20, width: 75, height: 75},
{ x: 170, y:50, width: 75, height: 75},
{ x: 280, y:20, width: 75, height: 75},
{ x: 300, y:50, width: 75, height: 75},
{ x: 410, y:20, width: 75, height: 75},
{ x: 430, y:50, width: 75, height: 75},
];

// draw a series of rectangles
for (var i= 0; i < rects.length; i+=2) {
	ctx.fillStyle = "blue";
	ctx.fillRect(rects[i].x, rects[i].y, rects[i].width, rects[i].height);
	ctx.fillStyle = "red";
	ctx.fillRect(rects[i+1].x, rects[i+1].y, rects[i+1].width, rects[i+1].height);

	ctx.globalAlpha -= 0.3;
}
```

##### Raw data
```javascript
// draw an image directly onto the canvas at the top left
var srcImg = document.getElementById("img1");
ctx.drawImage(srcImg, 0, 0, ctx.canvas.width, ctx.canvas.height);

// get the image data and convert every 15th row to
// a 5-row strip of inverted pixels
var curRow = 0, maxRow = ctx.canvas.height;
var imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
var pixels = imgData.data;

while (curRow < maxRow) {
    for (var i = 0; i < 5; i++) {
        var thisRowBytes = (curRow + i) * ctx.canvas.width * 4;
        for (var j = 0; j < ctx.canvas.width * 4; j += 4) {
            pixels[thisRowBytes + j] = 255 - pixels[thisRowBytes + j]; // red
            pixels[thisRowBytes + j + 1] = 255 - pixels[thisRowBytes + j + 1]; // green
            pixels[thisRowBytes + j + 2] = 255 - pixels[thisRowBytes + j + 2]; // blue
        }
    }
    curRow += 15;
}
ctx.putImageData(imgData, 0, 0);
```

##### Rotate Transform
```javascript
ctx.fillStyle = "blue";
ctx.fillRect(150,30,100,50);

ctx.rotate(.5);
ctx.fillRect(150,30,100,50);

ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2);
var radian=(Math.PI / 180) * 20;
for (var degrees = 0; degrees < 360; degrees += 20) {
	ctx.rotate(radian);
	ctx.beginPath();
	ctx.moveTo(-100,0);
	ctx.lineTo(100,0);
	ctx.stroke();
}

```

##### Scale Transform
```javascript
ctx.fillStyle = "blue";
ctx.fillRect(0,0,100,50);

// now perform a scale transform and draw the same size rect again
ctx.save();
ctx.scale(1.5,2);

ctx.fillRect(125,50,100,50);
ctx.restore();
```

##### Custom Transform
```javascript
		       ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 100, 50);

// now translate the origin to the middle of the canvas
// using a custom translation matrix
// (a translate operation is defined as:)
//  1  0  tx
//  0  1  ty
//  0  0  1
ctx.fillStyle = "red";
var tx = ctx.canvas.width / 2;
var ty = ctx.canvas.height / 2;
ctx.transform(1, 0, 0, 1, tx, ty);
ctx.fillRect(0, 0, 100, 50);
ctx.transform(1, 0, 0, 1, -tx, -ty);

// now let's set the current transform to a skewing one
// (a skew transform is defined as:)
//  1  sx 0
//  sy 1  0
//  0  0  1
ctx.fillStyle = "green";
var sx = 0.2;
var sy = 0;
ctx.setTransform(1, sy, sx, 1, 0, 0);
ctx.fillRect(250, 20, 100, 50);

```

##### Translate Transform
```javascript

ctx.fillStyle = "blue";
ctx.fillRect(0,0,100,50);

// now translate the origin to the middle of the canvas
ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2);

ctx.fillRect(0,0,100,50);
```

## Chapter 8

##### Simple Animation
```javascript
var rectY=200, rectW=40;
var rectX = -rectW;
var canvas = null;
var context = null;
function init() {
	canvas = document.getElementById('testCanvas');
	context = canvas.getContext("2d");

	blank();

	context.fillStyle= "yellow";
	context.fillRect(rectX,rectY,rectW,rectW);
	setInterval(anim, 30);
}

function blank() {
	context.fillStyle = "#00ddee";
	context.fillRect(0,0,context.canvas.width, context.canvas.height);
}

function anim() {
	if (rectX < context.canvas.width) {
		blank();
		rectX += 5;
		context.fillStyle = "yellow";
		context.strokeStyle = "red";
		context.lineWidth = 3;
		context.fillRect(rectX,rectY,rectW,rectW);
		context.strokeRect(rectX,rectY,rectW,rectW);
	}
	else rectX=-rectW;
}
```
	
##### Double Buffer Animation
```javascript
	var canvas = null;
	var context = null;
	var bufferCanvas = null;
	var bufferCanvasCtx = null;
	var flakeArray = [];
	var flakeTimer = null;
	var maxFlakes = 200;

	function Flake() {
	    this.x = Math.round(Math.random() * context.canvas.width);
	    this.y = -10;
	    this.drift = Math.random();
	    this.speed = Math.round(Math.random() * 5) + 1;
	    this.width = (Math.random() * 3) + 2;
	    this.height = this.width;
	}

	function init() {
		canvas = document.getElementById('testCanvas');
		context = canvas.getContext("2d");

		bufferCanvas = document.createElement("canvas");
		bufferCanvasCtx = bufferCanvas.getContext("2d");
		bufferCanvasCtx.canvas.width = context.canvas.width;
		bufferCanvasCtx.canvas.height = context.canvas.height;

		// initialize the rects
		flakeTimer = setInterval(addFlake, 200);

		Draw();

		setInterval(animate, 30);
	}

	function addFlake() {
	    flakeArray[flakeArray.length] = new Flake();
	    if (flakeArray.length == maxFlakes)
	        clearInterval(flakeTimer);
	}

	function blank() {
		bufferCanvasCtx.fillStyle = "#330033";
		bufferCanvasCtx.fillRect(0,0,bufferCanvasCtx.canvas.width, bufferCanvasCtx.canvas.height);
	}

	function animate() {
		Update();
		Draw();
	}

	function Update() {
	    for (var i = 0; i < flakeArray.length; i++) {
    if (flakeArray[i].y < context.canvas.height) {
        flakeArray[i].y += flakeArray[i].speed;
        if (flakeArray[i].y > context.canvas.height)
            flakeArray[i].y = -5;
        flakeArray[i].x += flakeArray[i].drift;
        if (flakeArray[i].x > context.canvas.width)
            flakeArray[i].x = 0;
    }
	    }
	}

	function Draw(){
		context.save();

		// create a clipping region
		bufferCanvasCtx.beginPath();
		bufferCanvasCtx.fillStyle="black";
		bufferCanvasCtx.fillRect(0,0,bufferCanvas.width,bufferCanvas.height);
		bufferCanvasCtx.arc(bufferCanvas.width/2,bufferCanvas.height/2,bufferCanvas.height/3,0,2*Math.PI);
		bufferCanvasCtx.clip();

		blank();

		for (var i = 0; i < flakeArray.length; i++) {
		    bufferCanvasCtx.fillStyle = "white";
		    bufferCanvasCtx.fillRect(flakeArray[i].x,flakeArray[i].y,flakeArray[i].width,flakeArray[i].height);
		}

		// copy the entire rendered image from the buffer canvas to the visible one
		context.drawImage(bufferCanvas, 0,0,bufferCanvas.width, bufferCanvas.height);
		context.restore();
	}
```
	
##### Slideshow
```javascript
var imagePaths = [
	"images/j0149014.jpg", "images/j0149024.jpg", "images/j0149029.jpg", "images/j0178677.jpg"
];
var showCanvas = null;
var showCanvasCtx = null;
var img = document.createElement("img");
var currentImage = 0;

window.onload = function () {
	showCanvas = document.getElementById('showCanvas');
	showCanvasCtx = showCanvas.getContext('2d');

	img.setAttribute('width','600');
	img.setAttribute('height','400');
	switchImage();

	// start the animation
	setInterval(switchImage,3000);
}

function switchImage() {
	img.setAttribute('src',imagePaths[currentImage++]);
	if (currentImage >= imagePaths.length)
		currentImage = 0;


	showCanvasCtx.drawImage(img,0,0,600,400);
}

```

##### SlideShow Smooth
```javascript
var imagePaths = [
	"images/j0149014.jpg", "images/j0149024.jpg", "images/j0149029.jpg", "images/j0178677.jpg"
];
var showCanvas = null;
var showCanvasCtx = null;
var img = document.createElement("img");
var currentImage = 0;
var revealTimer;

window.onload = function () {
	showCanvas = document.getElementById('showCanvas');
	showCanvasCtx = showCanvas.getContext('2d');

	img.setAttribute('width','600');
	img.setAttribute('height','400');
	switchImage();

	// start the animation
	setInterval(switchImage,3000);
}

function switchImage() {
	img.setAttribute('src',imagePaths[currentImage++]);
	if (currentImage >= imagePaths.length)
		currentImage = 0;

	showCanvasCtx.globalAlpha = 0.1;
	revealTimer = setInterval(revealImage,100);
}

function revealImage() {
	showCanvasCtx.save();
	showCanvasCtx.drawImage(img,0,0,600,400);
	showCanvasCtx.globalAlpha += 0.1;
	if (showCanvasCtx.globalAlpha >= 1.0)
		clearInterval(revealTimer);
	showCanvasCtx.restore();
}
```
	
##### Explore CA
```
<script type="text/javascript">
var tourdata = [
{ name: "Big Sur Retreat", duration: 200, elevation: 160, environment: 180, difficulty: 250 },
{ name: "Channel Islands Excursion", duration: 100, elevation: 50, environment: 100, difficulty: 75 },
{ name: "The Death Valley Survivor's Trek", duration: 100, elevation: 75, environment: 350, difficulty: 300 },
{ name: "In the Steps of John Muir", duration: 300, elevation: 200, environment: 100, difficulty: 350 },
{ name: "The Mt. Whitney Climbers Tour", duration: 400, elevation: 350, environment: 300, difficulty: 400 }
];
var tourChart = null;
var tourCtx = null;

function drawChart(forWhichTour) {
drawBackground();
drawLabels(forWhichTour);
drawTourData(forWhichTour);
}

function drawBackground() {
tourCtx.save();

// fill in the chart background
tourCtx.fillStyle = "#e1d8b9";
tourCtx.fillRect(0,0,tourCtx.canvas.width,tourCtx.canvas.height);

// create the graph area
tourCtx.strokeStyle = "#252525";
tourCtx.strokeRect(180, 100, 480, 260);

// draw the chart lines
tourCtx.strokeStyle = "#989898";
for (var x = 180; x < 660; x += 20) {
    tourCtx.beginPath();
    tourCtx.moveTo(x, 100);
    tourCtx.lineTo(x, 360);
    tourCtx.stroke();
}

tourCtx.restore();
}

function drawLabels(forWhichTour) {
tourCtx.save();

// draw tour name
tourCtx.font = "24pt Arial";
tourCtx.fillStyle = "#3C6B92";
tourCtx.fillText("Tour Name: " + tourdata[forWhichTour].name, 20, 65);

// draw the labels
tourCtx.font = "20pt Arial";
tourCtx.fillStyle = "#3C6B92";
tourCtx.fillText("Duration", 20, 155);
tourCtx.fillText("Elevation", 20, 210);
tourCtx.fillText("Environment", 20, 265);
tourCtx.fillText("Difficulty", 20, 320);

tourCtx.restore();
}

function drawTourData(forWhichTour) {
tourCtx.save();

tourCtx.strokeStyle = "#606060";
tourCtx.fillStyle = "#f7f700";
// draw duration
tourCtx.fillRect(181, 130, tourdata[forWhichTour].duration, 30);
tourCtx.strokeRect(181, 130, tourdata[forWhichTour].duration, 30);
// draw elevation
tourCtx.fillRect(181, 185, tourdata[forWhichTour].elevation, 30);
tourCtx.strokeRect(181, 185, tourdata[forWhichTour].elevation, 30);
// draw environment
tourCtx.fillRect(181, 240, tourdata[forWhichTour].environment, 30);
tourCtx.strokeRect(181, 240, tourdata[forWhichTour].environment, 30);
// draw difficulty - green for easy, yellow for moderate, red for hard
if (tourdata[forWhichTour].difficulty <= 150)
    tourCtx.fillStyle = "#00d366";
else if (tourdata[forWhichTour].difficulty > 150 && tourdata[forWhichTour].difficulty < 300)
    tourCtx.fillStyle = "#f7f700";
else if (tourdata[forWhichTour].difficulty >= 300)
    tourCtx.fillStyle = "#ce0000";
tourCtx.fillRect(181, 295, tourdata[forWhichTour].difficulty, 30);
tourCtx.strokeRect(181, 295, tourdata[forWhichTour].difficulty, 30);

tourCtx.restore();
}

$("document").ready(function () {
tourChart = document.getElementById("tourfinder");
tourCtx = tourChart.getContext("2d");

$("#tourselector").bind("change", function () { drawChart(this.selectedIndex) });

drawChart(0);
});
</script>

    <p>Choose a tour: <select id="tourselector">
        <option value="BigSur">Big Sur Retreat</option>
        <option value="ChIs">Channel Islands Excursion</option>
        <option value="DeathVal">The Death Valley Survivor's Trek</option>
        <option value="JohnMuir">In the Steps of John Muir</option>
        <option value="MtWhit">The Mt. Whitney Climbers Tour</option>
    </select></p>
    <canvas id="tourfinder" width="700" height="400" style="border: 1px solid"></canvas>
```
