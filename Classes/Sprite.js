class Sprite extends Object {
  constructor(x, y, width, height, sprite, context) {
    super(x, y, width, height, context);
    this.sprite = sprite;
    this.image;
    this.src;
  }

  drawSprite() {
    this.context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
  }

}
