//shahein hall && mondale




function setup() {
    createCanvas(501, 501);

    background("black");
}

let shipX = 245;
let bulletY = 450;
let bulletX = 0;
let moving = false;
let set_x = false;
let set_x_checker = true;
let i = 0

function draw() {
    background("black");
    fill("red");
    rect(shipX, 450, 16, 30);

//while (i <)

    if (keyIsDown(LEFT_ARROW) && shipX > 3) {
        shipX -= 10;
    }

    if (keyIsDown(RIGHT_ARROW) && shipX < 482) {
        shipX += 10;
    }

    if (set_x == true) {
        bulletX = shipX;
        set_x = false;
        set_x_checker = false;
    }


    if (moving == true) {
        bulletY -= 10;
        rect(bulletX + 3, bulletY, 10, 10);
    } 
         
    if (bulletY == 0){
        bulletY = 450;
        moving = false;
        set_x_checker = true;
    }



}

function keyPressed() {
    if (keyCode === SHIFT) {
        moving = true;
        if (set_x_checker == true) {
            set_x = true;
        }
    }
}