mouthX=0;
mouthY=0;

function preload()
{
moustache=loadImage("https://i.postimg.cc/qM4BQv9G/download.png");
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Intalized");
}

function gotPoses(results)
{
 if(results.length>0)   
 {
     console.log(results);
    noseX= results[0].pose.mouth.x;
    noseY= results[0].pose.mouth.y;
 }
}
function draw()
{
image(video,0,0,300,300);
 
 fill(255,0,0);
 stroke(255,0,0);
 mouthX,mouthY,20;
}

function snap_shot()
{
    save("download.png");
}