let canvas, context;
let game;
let grid;
let block;
let blockX, blockY, blockOffset;
let offset, offsetX, offsetY;
let mouseX, mouseY;
let tile;
let bomb;

let tiles = [];
let blocks = [];
let bombs = [];
let bombCounter = 10;


class Grid {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
	
	makeGrid(){
		for(let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) {
				tile = new Rectangle(blockX, blockY, 40, 40);
				tile.color = "black";
				
				block = new Rectangle(blockX, blockY, 40, 40);
				block.color = "grey";
				block.filled = true;
				
				
				blockX += blockOffset;
				
				tiles.push(tile);
				blocks.push(block);
			}
			blockX = 0;	
			blockY += blockOffset;
		}
	}
}


let init = ()=> {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	
	blockX = 0;
	blockY = 0;
	blockOffset = 40;
	game = new Game(640, 640, canvas, context);
	grid = new Grid(16, 16);
	grid.makeGrid();
	update();
	
	for (let i = 0; i < bombCounter;){
		let randomBombX = Math.floor(Math.random() * (canvas.width - blockOffset));
		let randomBombY = Math.floor(Math.random() * (canvas.height - blockOffset));
		
		let calcBombX = calcBomb(randomBombX);
		let calcBombY = calcBomb(randomBombY);
		
		if (calcBombX == 0 && calcBombY == 0) {
			console.log("Bomb X: " + randomBombX +", " + "Bomb Y: " + randomBombY);
			i++;
		} else{
			console.log("bomb not found");
		}
	}
}

let calcBomb = (item)=> {
	let calculateBombPosition = (item % 40);
	return calculateBombPosition;
}

let update = ()=> {
	setOffset();
	context.clearRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i < blocks.length; i++) {
		blocks[i].draw(context);
	}
	for (let i = 0; i < tiles.length; i++) {
		tiles[i].draw(context);
	}
	
	

	
	
	requestAnimationFrame(update);
	canvas.onmousedown = (e) => {
		mouseX = e.clientX - offsetX;
		mouseY = e.clientY - offsetY;
		for (let i = 0; i < blocks.length; i++) {
			if (mouseX >= blocks[i].x 
				&& mouseX <= blocks[i].x + blocks[i].width 
				&& mouseY >= blocks[i].y 
				&& mouseY <= blocks[i].y + blocks[i].height){
				//game.gameObjects[i].selected = true;
				let index = blocks.indexOf(blocks[i]);
				blocks.splice(index, 1);
	
				for (let i = 0; i < 10; i++) {
					let randomIndex = Math.floor(Math.random() * blocks.length);
					blocks.splice(randomIndex, 1);
				}
				
			}
		}
	}

}

let setOffset = ()=> {
	offset = canvas.getBoundingClientRect();
	offsetX = offset.left;
	offsetY = offset.top
}



init();

