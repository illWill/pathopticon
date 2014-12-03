//Fix document scrolling with keys:
var ar=new Array(33,34,35,36,37,38,39,40);

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var keyCode = evt.keyCode;
    if (keyCode >= 37 && keyCode <= 40) {
        return false;
    }
};

var c = document.getElementById("myCanvas");
c.halfW = c.width / 2;
c.halfH = c.height / 2; 

var ctx = c.getContext("2d");
ctx.fillStyle = "#114444";
ctx.fillRect(0,0,c.width,c.height);

var toLoad = 1;
var loaded = 0;

var spriteDict = {};
//xhrGet("zaqSprites.json", function (data) {
	// Once the XMLHttpRequest loads, call the
	// parseMapJSON method.
//	parseSpriteJSON(data.target.responseText);
//});

//Last minute, activate listeners
document.addEventListener('keydown', keydownHandler);
document.addEventListener('keyup', keyupHandler);
c.addEventListener('mousedown', mousedowntest);

/* Below are UTILITY FUNCTIONS, handling key input, data loading, sprite sheets, drawing
 and other such thingies. */

//Key event handlers
function keydownHandler(event) { 
    //MOVEMENT
    if(event.keyCode == 37) {
		leftDown = true;
    }
	if(event.keyCode == 38) {
		upDown = true;
    }
    if(event.keyCode == 39) {
		rightDown = true;
    }
    if(event.keyCode == 40) {
		downDown = true;
    }
    
    //ACTIONS
    if(event.keyCode == 82) {
		throwDown = true;
    }
    if(event.keyCode == 70) {
    	pickupDown = true;
    }
    if(event.keyCode == 69) {
    	jabDown = true;
    }    
}

function keyupHandler(event) { 
    //MOVEMENT
    if(event.keyCode == 37) {
		leftDown = false;
    }
    if(event.keyCode == 38) {
		upDown = false;
    }
    if(event.keyCode == 39) {
		rightDown = false;
    }
	if(event.keyCode == 40) {
		downDown = false;
    }
    
    //ACTIONS
    if(event.keyCode == 82) {
		throwDown = false;
    }
    if(event.keyCode == 70) {
    	pickupDown = false;
    }
    if(event.keyCode == 69) {
    	jabDown = false;
    }    
}

function mousedowntest(event) {
	var clickX = 0;
	var clickY = 0;
	if (event.layerX || event.layerX == 0) { // Firefox
		clickX = event.layerX;
		clickY = event.layerY;
	} else if (event.offsetX || event.offsetX == 0) { // Opera
		clickX = event.offsetX;
		clickY = event.offsetY;
	}
	console.log(event);
}

//Image drawing function
//function drawIm(imID,xCenter,yCenter) {
//	var spr = spriteDict[imID];
//	ctx.drawImage(spriteDict.image, spr.frame.x, spr.frame.y, spr.frame.w, spr.frame.h,
//		xCenter + spr.xOffset, yCenter + spr.yOffset, spr.frame.w, spr.frame.h);
//}


//Image loading tools
// function xhrGet(reqUri,callback) {
// 	var xhr = new XMLHttpRequest();
// 
// 	xhr.open("GET", reqUri, true);
// 	xhr.onload = callback;
// 
// 	xhr.send();
// }
// 
// function parseSpriteJSON(datJSON) {
// 	var map = JSON.parse(datJSON);
// 	
// 	// Loop through 'frames' object...
// 	for (var sName in map.frames) {
// 		spriteDict[sName] = {
// 			frame : map.frames[sName].frame,
// 			xOffset : -1 * Math.floor(map.frames[sName].frame.w / 2),
// 			yOffset : -1 * Math.floor(map.frames[sName].frame.h / 2)
// 		};
// 	}
// 	
// 	//Load in the overall image
// 	spriteDict.image = loadSrc(map.meta.image,loader);
// }
// 
// function loadSrc(source, loadFunc) {
// 	var img = new Image();
// 	toLoad += 1;
// 	img.onload = loadFunc;
// 	img.src = source;
// 	return img;
// }
// 
// function loader() {
// 	//should check for full loading
// 	loaded += 1;
// 	if (loaded == toLoad) {
// 		setInterval(run, 1000 / 20);
// 	} 
// }