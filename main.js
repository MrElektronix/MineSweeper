let canvas, context;
let game;



let init = ()=> {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	
	game = new Game(800, 600, canvas, context);
	
}



init();

