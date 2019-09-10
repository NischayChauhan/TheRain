function Drop(){
	this.x = random(10,width-10);
	this.y = random(10,height-10);
	this.len = 5;
	this.sp = random(1,5);

	this.show = function(){	

		strokeWeight(5);
	    stroke(138, 43, 226);
	    // stroke("#a1c6cc");
		line(this.x,this.y,this.x,this.y+this.len);
		// triangle(this.x,this.y,this.x+0.6,this.y+this.len,this.x-0.6,this.y+this.len);

	};

	this.fall = function(){

		this.y += this.sp;
		line(this.x,this.y,this.x,this.y+this.len);
		// triangle(this.x,this.y,this.x+0.6,this.y+this.len,this.x-0.6,this.y+this.len);

		if(this.y>height){
			this.y = -10;
		}
	}
};
