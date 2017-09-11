class Object {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color || "black";
    /*
    addEventListener('keydown', evt => ) {
      switch (evt.keyCode) {
        case 37:

          break;
        default:

      }
    }
    */
  }


  start() {}


  update() {

  }

  set collider(value) {
    this._collider = value;
  }

  get collider() {
    return this._collider;
  }

  set controls(value) {
    this._controls = value;
  }

  get controls() {
    return this._controls;
  }

  /*
  attachToObject(ObjectToGetAttached) {
    this.x = ObjectToGetAttached.x;
    this.y = ObjectToGetAttached.y;
  }
  */

  /*
  boxCollider(obj, showBorder, lineWidth, lineColor) {
    if (this.x < obj.x + obj.width &&
      this.x + this.width > obj.x &&
      this.y < obj.y + obj.height &&
      this.y + this.height > obj.y) {

    }

    if (showBorder) {
      this.context.strokeStyle = lineColor || "green";
      this.context.lineWidth = lineWidth || 1;
      this.context.strokeRect(this.x, this.y, this.width, this.height);
    }
  }
  */





}
