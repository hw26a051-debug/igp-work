function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0, 0, 255);
  // ボディー
  stroke(0, 0, 0);
  noStroke();
  fill(255, 255, 255);
  circle(320, 150, 180);
  circle(320, 320, 220);
  // マフラー
  stroke(0, 200, 0);
  strokeWeight(30);
  line(250, 220, 390, 220);
  line(350, 220, 400, 260);
  // 顔
  strokeWeight(5);
  stroke(0, 0, 0);
  circle(320, 160, 40);
  fill(255, 255, 255);
  noStroke();
  rect(290, 160, 60, -40);
  strokeWeight(5);
  stroke(0, 0, 0);
  circle(280, 120, 10);
  circle(360, 120, 10);
  // 腕
  stroke(150, 75, 0);
  strokeWeight(10);
  line(260, 270, 190, 220);
  line(380, 270, 450, 220);
  // ボタン
  noStroke();
  fill(255, 0, 0);
  circle(320, 260, 20);
  circle(320, 290, 20);
  circle(320, 320, 20);
  fill(0, 255, 255);

  // textsize(200);
  fill(255, 0, 0);
  text('Happy New Year!', 100, 400);
  textSize(50);
}