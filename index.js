var x = screen.width;
var y = screen.width;

var d = [];
var n = 800;
function setup(){

	createCanvas(x,y);

	background(150);

	for(var i=0;i<n;i++){
		d[i] = new Drop();
		d[i].show();
	}
}

function draw(){
	background(0);

	for(var i=0;i<n;i++){
		d[i].fall();
	}
}


