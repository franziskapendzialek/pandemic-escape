// Start Screen

document.querySelector(".startButton").addEventListener('click', () => {
document.getElementById('home').classList.add('hidden');
document.getElementById('infoOne').classList.remove('hidden');
});

// Info Screen One 

document.querySelector(".infoOneButton").addEventListener('click', () => {
    document.getElementById('infoOne').classList.add('hidden');
    document.getElementById('levelOne').classList.remove('hidden');
    // eventually Countdown to startGame
    startLevelOne();

});

// Level One

const canvasOne = document.getElementById("levelOneCanvas");
let ctxOne = canvasOne.getContext("2d");

// Background
class Background {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = canvasOne.width;
        this.height = canvasOne.height;
        this.img = new Image();
        this.img.src = "./images/gameBg.jpeg";
        this.speed = -2;
    }
    drawBg() {
        ctxOne.drawImage(this.img, this.x, this.y, this.width, this.height);
        ctxOne.drawImage(
            this.img,
            this.x + canvasOne.width,
            this.y, 
            this.width,
            this.height
        );
    }
    move() {
        this.x += this.speed;
        this.x %= canvasOne.width;
    }
}
let bg = new Background(0,0);

// Player
class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = "./images/player.jpeg";
    }
    drawPlayer() {
        ctxOne.drawImage(this.img, this.x, this.y, 50, (50/this.width)*this.height);
    }
}
let player = new Player(0, 240, 10, 10);

let gameFrames = 0;


// Keys
document.onkeydown = function (e) {
    //left
    if (e.keyCode === 37) {
        if (player.x >= 0 && player.x < 621) { 
            player.x -= 20;
        }
    }
    //right
    if (e.keyCode === 39) {
        if (player.x >= 0 && player.x < 620) {
            player.x += 20;
        }
    }
    //up
    if (e.keyCode === 38) {
        if (player.y > 0 && player.y < 500) {
            player.y -= 20;
        }
    }
    //down
    if (e.keyCode === 40) {
        if (player.y >=0 && player.y < 449) {
            player.y += 20;
        }
    }
};


// Start Game
function startLevelOne() {
    setInterval(() => {
        ctxOne.clearRect(0, 0, 700, 500);

        // Background
        bg.move();
        bg.drawBg();

        // Player Image
        player.drawPlayer();

        gameFrames++;
    }, 20);
}


// Task 1
// Timer that runs out = 60 seconds --> SetInterval mit 1000 ms
// "Lives" --> DOM
// Counter that counts points --> DOM
// Start Level 1 Button

// Task 2
// Canvas
// Background that moves --> image looping
// Class Player needed: Mouth 
// Control via Arrows
// Class Counterpart = Masks, Virus
// "Obstacles" = Virus --> How do they move?
// "Points" = Masks

// Task 3
// Start Game Function Game Logic (collect points etc.)

// function startLevelOne() {

// }


// Add Class Hidden to Level One to get to Info Screen Two - You loose or next level? = Section mit class hidden

// Info Screen Two

// document.querySelector(".infoTwoButton").addEventListener('click', () => {
//     document.getElementById('infoTwo').classList.add('hidden');
//     document.getElementById('levelTwo').classList.remove('hidden');
// })

// // Level Two 

// const canvasTwo = document.getElementById("levelTwoCanvas");
// let ctxTwo = canvasTwo.getContext("2d");

// Timer that runs out --> Same as Level 1
// Counter that counts points --> Same as Level 1
// "Lives" --> Same as Level 1

// Canvas
// Background --> Same as Level 1 (maybe different image)
// Class Player = Mouth --> Same as Level 1
// Control via Arrows --> Same as Level 1
// Class Counterpart: Virus, Masks, Needles, "Querdenker" --> Querdenker, Needles as an addition
// Masks = more points --> Same as Level 1
// Virus, Querdenker (quicker than virus) = costs a live --> Same as Level 1
// Needles = You need at least two to win --> New as an addition


// You loose = Section mit class hidden

// You won! = Section mit class hidden - add "You collected XX masks!"
// Highscore for Mask points