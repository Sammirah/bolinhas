function preload() {

}
function setup() {
    canvas = createCanvas(600, 400);
    canvas.position(200, 100);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 50, 100, 300, 250);
    fill(216, 191, 216);
    stroke(216, 191, 216)
    circle(50, 100, 40);
    circle(350, 100, 40);
    circle(350, 350, 40);
    circle(50, 350, 40);
    fill(230, 230, 250);
    stroke(230, 230, 250)
    circle(90, 100, 40);
    circle(320, 100, 40);
    circle(320, 350, 40);
    circle(90, 350, 40);
}

function morango() {
    save('morangueteémtobom.png')
}