class Rectangle extends Object {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.id;
    this.color = "black";
    this.filled = false;
    this.selected = false;
    this.remove = false;
  }

  start() {

  }

  update() {

  }

  draw(context) {
	if (this.remove) {

	} else{

		if (this.filled) {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);	

		} else {
			context.beginPath();
			context.strokeStyle = this.color;	
			context.strokeRect(this.x, this.y, this.width, this.height);
		}


		if (this.selected) {
		context.lineWidth = 4;
		context.strokeRect(this.x, this.y, this.width, this.height);
		}
	}

  }

}
