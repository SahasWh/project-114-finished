noseX=0;
noseY=0;

function preload() {
    Mustache = loadImage('https://i.postimg.cc/T1CRyswb/mustache.png');
}

function setup() {
 canvas = createCanvas(500, 500);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(450, 400);
 video.hide();
 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 10;
        noseY = results[0].pose.nose.y + 35;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

function draw() {
    image(video, 0, 0, 500, 500);
    image(Mustache, noseX, noseY, 100, 100);
}

function snapshot() {
    save('Mustach_filter.png')
}