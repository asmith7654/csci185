function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    let y =0;
    let z =50;
    while (y <= 10000) {
        fill('red');
        circle(100, y, z);
        fill('blue');
        circle(300, y, z);
        fill('purple');
        circle(500, y, z);

        y += 5;
        z += 5;
    }
    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);
  

    drawGrid(canvasWidth, canvasHeight);
}
