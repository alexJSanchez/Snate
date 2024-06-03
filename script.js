//Define html elemnents
const borad = document.getElementById();

//Define game variables
let snake = [{ x: 10, y: 10 }];

//Draw game map, snake, food
function draw() {
	borad.innerHTML = "";
	drawSnake();
}

// Draw snake
function drawSnake() {
	snake.forEach((segments) => {
		const snakeElement = createGameElements("div", "snake");
		setPosition(snakeElement, segments);
	});
}

//Create a snake and or food cube/div
function createGameElements(tag, className) {
	const element = document.createElement(tag);
	element.className = className;
	return element;
}

//set the position of snake or food
function setPosition(elemnent, position) {
	elemnent.style.gridColumn = position.x;
	elemnent.style.gridRow = position.y;
}
