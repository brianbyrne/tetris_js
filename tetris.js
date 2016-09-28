// tetris tutorial video: https://www.youtube.com/watch?v=H2aW5V46khA
// 51:34

const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
context.scale(20, 20);



const matrix = [
	[0, 0, 0],
	[1, 1, 1],
	[0, 1, 0],
];

function collide(arena, player) {
	const[m, o] = [player.matrix, player.pos]
	// brian start here
}

function createMatrix(w, h) {
	const matrix = [];
	while(h--) {
		matrix.push(new Array(w).fill(0));
	}
	return matrix;
}

function draw() {
	// clear canvas first
	context.fillStyle = '#000'
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	drawMatrix(player.matrix, player.pos);
}

function drawMatrix(matrix, offset) {
	matrix.forEach((row, y) => {
		row.forEach((value, x) => {
			if (value !== 0) {
				context.fillStyle = 'red';
				context.fillRect(x + offset.x, y + offset.y, 1, 1);
			}
		});
	});
}

function merge(arena, player) {
	player.matrix.forEach((row, y) => {
		row.forEach((value, x) => {
			if (value !== 0) {
				arena[y + player.pos.y][x + player.pos.x] = value;
			}
		});
	});
}

function playerDrop() {
	player.pos.y++;
	dropCounter = 0;
}

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
function update(time = 0) {
	const deltaTime = time - lastTime;
	lastTime = time;
	
	dropCounter += deltaTime;
	
	if (dropCounter > dropInterval) {
		playerDrop();
	}
	
	draw();
	requestAnimationFrame(update);
}

const arena = createMatrix(12, 20);
console.log(arena); console.table(arena);

const player = {
	pos: { x: 5, y: 5 },
	matrix: matrix
}

document.addEventListener('keydown', event => {
	console.log(event);
	
	if (event.keyCode === 37) {
		player.pos.x--;
	} 
	else if (event.keyCode === 39)  {
		player.pos.x++;
	}
	else if (event.keyCode === 40) {
		playerDrop();
	}
	
});

update();
