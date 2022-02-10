let z = {x: 220, y: 200, height: 300, width: 200, color:20}

function setup(){
    createCanvas(700, 600);
    background(180);
}

function draw(){
    rect(z.x, z.y, z.height, z.width, z.color);
}