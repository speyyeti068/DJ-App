var leftWristX = 0;
var leftWristY = 0;

var rightWristX = 0;
var rightWristY = 0;

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

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        rightWristScore = results[0].pose.keypoints[10].score;

        console.log(leftWristX, leftWristY, rightWristX, rightWristY, leftWristScore, rightWristScore);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
}