let canvas, context;
let game;
let grid;
let block;
let blockX, blockY, blockOffset;
let offset, offsetX, offsetY;
let mouseX, mouseY;
let tile;
let bomb;
let randomBombX, randomBombY, calcBombX, calcBombY;

let tiles = [];
let blocks = [];
let bombs = [];
let bombCounter = 10;
let gamestate = false;


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
	gamestate = true;
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
		randomBombX = Math.floor(Math.random() * (canvas.width - blockOffset));
		randomBombY = Math.floor(Math.random() * (canvas.height - blockOffset));
		
		calcBombX = calcBomb(randomBombX);
		calcBombY = calcBomb(randomBombY);
		
		if (calcBombX == 0 && calcBombY == 0) {
			for(let i = 0; i < tiles.length; i ++) {
				
				if (randomBombX == tiles[i].x && randomBombY == tiles[i].y) {
					bomb = new Rectangle(randomBombX, randomBombY, 40, 40);
					bomb.filled = true;
					bomb.color = "red";
					bombs.push(bomb);
				}
			}
			i++;
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
	for (let i = 0; i < bombs.length; i++) {
		bombs[i].draw(context);
	}
	
	for (let i = 0; i < blocks.length; i++) {
		blocks[i].draw(context);
	}
	
	for (let i = 0; i < tiles.length; i++) {
		tiles[i].draw(context);
	}

	
	if (gamestate) {
		requestAnimationFrame(update);	
	
		canvas.onmousedown = (e) => {
			mouseX = e.clientX - offsetX;
			mouseY = e.clientY - offsetY;
			for (let i = 0; i < blocks.length; i++) {
				if (mouseX >= blocks[i].x 
					&& mouseX <= blocks[i].x + blocks[i].width 
					&& mouseY >= blocks[i].y 
					&& mouseY <= blocks[i].y + blocks[i].height){
					let index = blocks.indexOf(blocks[i]);
					blocks.splice(index, 1);
					
				}
			}

			for (let i = 0; i < bombs.length; i++) {
				if (mouseX >= bombs[i].x 
					&& mouseX <= bombs[i].x + bombs[i].width 
					&& mouseY >= bombs[i].y 
					&& mouseY <= bombs[i].y + bombs[i].height){
					gamestate = false;
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

