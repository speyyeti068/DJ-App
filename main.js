var song = "";

function preload(){
 song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,500,400);
}

function playSound(){
    song.play();

    document.getElementById("stop").innerHTML = '<button class = "btn btn-danger sound" onclick="stopSound()">Stop</button>'
    document.getElementById("play").innerHTML = ''
}

function stopSound(){
    song.pause();
    document.getElementById("stop").innerHTML = ''
    document.getElementById("stop").innerHTML = '<button class = "btn btn-danger sound" onclick="playSound()">Play</button>'
}