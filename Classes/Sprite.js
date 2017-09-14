class Sprite extends Object {
  constructor(sprite, x, y, width, height) {
    super(x, y, width, height);
    this.sprite = sprite;
  }

  draw() {
	console.log(this.sprite);
    //this.context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
  }

}
