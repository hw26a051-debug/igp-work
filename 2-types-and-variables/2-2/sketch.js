function setup() {
  const canvas = createCanvas(640, 480);
}

function draw() {
  background(240, 255, 240);

  noStroke();
  fill(255, 128, 128);
  circle(width / 2, height / 2, 200); // width と height は画面の幅と高さを表す p5.js の変数
  let A;

  A = Math.floor(frameCount % 255);

  fill(0, 0, 0, A);
  rect(width / 2, 0, width / 2, height);

  fill(40, 40, 40);
  textSize(24);
  text('フレーム = ' + frameCount, 40, 80); // frameCount は毎フレームカウントアップされる p5.js の変数
  text('アルファ = ' + A, 40, 120);
}
