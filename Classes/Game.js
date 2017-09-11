class Game {
  constructor(sceneWidth, sceneHeight, canvas, context) {
    this.gameObjects = [];
    this.sceneWidth = sceneWidth;
    this.sceneHeight = sceneHeight;
    this.canvas = canvas;
    this.context = context;

    this.start();
  }

  stayInGameScreen(obj) {
    if (obj.x + obj.width >= this.canvas.width) {
      obj.x = this.canvas.width - obj.width;
    }
    if (obj.x <= 0) {
      obj.x = 0;
    }

    if (obj.y + obj.height >= this.canvas.height) {
      obj.y = this.canvas.height - obj.height;
    }
    if (obj.y <= 0) {
      obj.y = 0;
    }
  }

  start() {
    this.canvas.width = this.sceneWidth;
    this.canvas.height = this.sceneHeight;
  }

  update() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.gameObjects.length; i++) {
      if (this.gameObjects[i].draw) {
        this.gameObjects[i].draw(this.context);
      }
    }
  }


  addGameObject(obj) {
    this.gameObjects.push(obj);
  }
  
  removeGameObject(obj) {
    this.gameObjects.splice(obj);
  }


}
