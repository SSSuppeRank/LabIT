var canvas = document.getElementById( 'game' );
var ctx = canvas.getContext( '2d' );

const unit = 16;

const map = {
    w: 30,
    h: 20
};

canvas.width = map.w * unit;
canvas.height = map.h * unit;

let dir = 0;

document.addEventListener( 'keydown', direction );

function direction( event ) {
    if( event.keyCode == 68 && dir != 2 ) dir = 1;
    if( event.keyCode == 65 && dir != 1 ) dir = 2;
    if( event.keyCode == 87 && dir != 4 ) dir = 3;
    if( event.keyCode == 83 && dir != 3 ) dir = 4;
}

let food = {
    x: Math.floor( Math.random() * 30 ) * unit ,
    y: Math.floor( Math.random() * 20 ) * unit
};

let snake = [];

snake[0] = {
    x: ( map.w / 2 - 1 ) * unit,
    y: ( map.h / 2 - 1 ) * unit
};

function renderObjects() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";
    ctx.fillRect( food.x, food.y, unit, unit );
    
    ctx.fillStyle = "green";

    for( let i = 0; i < snake.length; i++ ) {
        ctx.fillRect( snake[i].x, snake[i].y, unit, unit );
    }
}

function snakeMovement() {
    snakeX = snake[0].x;
    snakeY = snake[0].y;

    snake.pop();

    if( dir == 1 ) snakeX += unit;
    if( dir == 2 ) snakeX -= unit;
    if( dir == 3 ) snakeY -= unit;
    if( dir == 4 ) snakeY += unit;

    snake.unshift( {
        x: snakeX,
        y: snakeY
    } );
}

function objInteraction() {
    if( snake[0].x == food.x && snake[0].y == food.y ) {
        food.x = Math.floor( Math.random() * 30 ) * unit;
        food.y = Math.floor( Math.random() * 20 ) * unit;
        snake.push( {
            x: snake[0].x,
            y: snake[0].y
        } );
    }
}

function render() {
    renderObjects();
    snakeMovement();
    objInteraction()
}

setInterval( render, 1000 / 20 );


