var canvas = document.getElementById( 'game' );
var ctx = canvas.getContext( '2d' );

canvas.width = 480;
canvas.height = 320;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let unit = 16;

let food = {
    x: Math.floor( Math.random() * 30 ) * unit ,
    y: Math.floor( Math.random() * 20 ) * unit
};

function renderObjects() {
    ctx.fillStyle = "red";
    ctx.fillRect( food.x, food.y, unit, unit );
}

function render() {
    renderObjects();
}

setInterval( render, 1000 / 60 )


