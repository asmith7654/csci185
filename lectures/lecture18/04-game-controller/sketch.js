let x = 100;
let y = 200;
let width = 150;
let fillColor = 'green';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    fill(fillColor);
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController (ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down
    if (ev. code === 'ArrowUp') {
        console.log('move tie fighter up!');
        y = y - 10;
    }
    else if (ev. code === 'ArrowDown') {
        console.log('move tie fighter down!');
        y = y + 10;
    }
    else if (ev. code === 'ArrowRight') {
        console.log('move tie fighter right!');
        x = x + 10;
    }
    else if (ev. code === 'ArrowLeft') {
        console.log('move tie fighter left!');
        x = x - 10;
    }
    else if (ev. code === 'Space') {
        console.log('increase tie fighter size!');
        width = width + 10;
    }
    else if (ev. code === 'Slash') {
        console.log('decrease tie fighter size!');
        width = width - 10;
    }
    else if (ev. code === 'KeyR') {
        console.log('change tie fighter color to red!');
        fillColor = 'red';
    }
    else if (ev. code === 'KeyB') {
        console.log('change tie fighter color to blue!');
        fillColor = 'blue';
    }
    else if (ev. code === 'KeyG') {
        console.log('change tie fighter color to blue!');
        fillColor = 'green';
    }

    // redraw circle:
    clear();
    fill(fillColor);
    // noFill();
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
