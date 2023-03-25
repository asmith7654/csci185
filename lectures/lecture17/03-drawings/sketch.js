function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("#EEE");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    fill("white")
    circle(650, 350, 250);

    fill("white")
    circle(650, 200, 100);

    fill("black")
    circle(635, 185, 6.5);

    fill("black")
    circle(665, 185, 6.5);

    line(600, 200, 700, 200);
    strokeWeight(5);
    


    // https://p5js.org/reference/#/p5/rect
  
    // add your drawing here:
    // https://p5js.org/reference/#/p5/point

//     point(650, 350);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}