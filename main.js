canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_array=["nasa1.jpg","nasa2.jpg","nasa3.jpg","nasa4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);

 rover_width = 100;
 rover_height = 90;

 bg_image = nasa_array[random_number];
 rover_image = "rover.png";
 rover_x = 10;
 rover_y = 10;

function add() {
    bgimage_tag = new Image(); //defining a variable with a new image
    bgimage_tag.onload = uploadBackground;//setting a function, onloading this variable
    bgimage_tag.src = bg_image; //load image

    roverimage_tag = new Image();
    roverimage_tag.onload = uploadRover;
    roverimage_tag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(bgimage_tag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverimage_tag, rover_x, rover_y, rover_width, rover_height);
}

function up() {
    if(rover_y>=0) {
        rover_y=rover_y-10;
        console.log("When up arrow is pressed,x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();

    }
}

function down() {
    if(rover_y<=500) {
        rover_y=rover_y+10;
        console.log("When down arrow is pressed,x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();

    }
}

function left() {
    if(rover_x>=0) {
        rover_x=rover_x-10;
        console.log("When left arrow is pressed,x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();

    }
}

function right() {
    
        if(rover_x<=700) {
            rover_x=rover_x+10;
            console.log("When right arrow is pressed,x="+rover_x+"y="+rover_y);
            uploadBackground();
            uploadRover();
    
        }
    }

    window.addEventListener("keydown", my_key_down);
    function my_key_down(e) {
        keyPressed=e.keyCode;
        console.log(keyPressed);
        if(keyPressed=='38') {
            up();
            console.log("up");
        }
        if(keyPressed=='40') {
            down();
            console.log("down");
        }
        if(keyPressed=='37') {
            left();
            console.log("left");
        }
        if(keyPressed=='39') {
            right();
            console.log("right");
        }
    }