function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

makeCreature(200, 400, 'green', 'white');
makeCreature(500, 100, 'pink', 'yellow');
makeCreature(1100, 200, 'purple');


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function makeCreature(x, y, fillColor, eyeColor='black') {
   // your creature:
   fill(fillColor);
   circle(x, y, 300);

   fill(eyeColor);
   ellipse(x - 50, y - 50, 30, 40);
   ellipse(x + 50, y - 50, 30, 40);
}

function mouseClicked() {
    makeCreature(mouseX, mouseY, 'violet', 'orange')
}

function mouseDragged() {
    makeCreature(mouseX, mouseY, 'brown', 'pink')
}