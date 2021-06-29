var song = "";

var leftWristX = 0;
var leftWristY = 0;

var rightWristX = 0;
var rightWristY = 0;

var leftWristScore = 0;
var rightWristScore = 0;

function preload() {
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, function () {
        console.log("Model Loaded");
    });

    poseNet.on("pose", gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        leftWristScore = results[0].pose.keypoints[9].score;
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
}

if(leftWristScore > 0.2){
    fill("#ff0000");
    stroke("#ff0000")
    circle(leftWristX, leftWristY, 20);
}

function playSound() {
    song.play();

    song.setVolume(1);
    song.rate(1);

    document.getElementById("stop").innerHTML = '<button class = "btn btn-danger sound" onclick="stopSound()">Pause</button>'
    document.getElementById("play").innerHTML = ''
}

function stopSound() {
    song.pause();
    document.getElementById("stop").innerHTML = ''
    document.getElementById("stop").innerHTML = '<button class = "btn btn-danger sound" onclick="playSound()">Play</button>'
}