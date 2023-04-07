const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a"];
const triangleData = [];
let i = 0;
while (i < 75) {
    triangleData.push(
        {
            x: randomInt(0,canvasWidth),
            y: randomInt(0,canvasHeight),
            size: randomInt(25,300),
            speed: randomInt(1,5)
        }
    )
i++;
}


function randomFloat(min, max) {
    // min and max included 
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    // frameRate(2);

    // fill("#08415c");

    // draw a random circle:
    let i = 0;
    let k = 0;
    let j = 0;

    while (i < 75) {
        fill(colors[randomInt(0, 4)]);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomFloat(25, 125);
        circle(x, y, size);
        i++;

    }


    while (k < 75) {
        fill("yellow");
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomFloat(25, 125);
        triangle(
            x, y - size / 2,
            x - size / 2.25, y + size / 4.3,
            x + size / 2.25, y + size / 4.3
        );
        k++;

    }

    while (j < 75) {
        fill("beige");
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomFloat(25, 125);
        circle(x, y, size);
        j++;

    }
}



// // anything that you want to animate goes in this function:  

function draw() {
    clear();
    let i = 0;
    while (i < triangleData.length) {
        const x = triangleData[i].x;
        const y = triangleData[i].y;
        const size = triangleData[i].size;
        triangle(
            x, y - size / 2,
            x - size / 2.25, y + size / 4.3,
            x + size / 2.25, y + size / 4.3
        );
        triangleData[i].x += triangleData[i].speed
       if (triangleData[i].x > canvasWidth) {
        triangleData[i].x = 0
       }
        i++;

    }
    i = 0;
    let k = 0;
    let j = 0;

    while (i < 75) {
        fill(colors[randomInt(0, 4)]);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomFloat(25, 125);
        circle(x, y, size);
        i++;

    }


    while (j < 75) {
        fill("beige");
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomFloat(25, 125);
        circle(x, y, size);
        j++;

    }
}





// // 1. draw a random square:
// square(x, y, size);

// // 2. draw a random triangle:
// triangle(
//     x, y - size / 2, 
//     x - size / 2.25, y + size / 4.3,
//     x + size / 2.25, y + size / 4.3
// );

// // 3. draw a random line:
// let coefX = randomFloat(-3, 3);
// let coefY = randomFloat(-3, 3);
// line(x, y, x + size * coefX, y + size * coefY);

