function setup() {
  const canvas = createCanvas(640, 480);
}

function draw() {

  let sec = 0;
  let sec2 = 0;
  let min = 0;

  background(255, 240, 240);

  fill(40, 40, 40);
  textSize(24);
  text('フレーム = ' + frameCount, 40, 80); // frameCount は毎フレームカウントアップされる p5.js の変数

  const FRAMES_PER_SECOND = 60;  // この課題では 1 秒間は 60 フレームと仮定する
  sec = Math.floor(frameCount % FRAMES_PER_SECOND);
  sec2 = Math.floor(sec / FRAMES_PER_SECOND);
  // if (sec ==)
  min = Math.floor();



  text('経過時間 = ' + min + '分' + sec2 + '秒', 40, 130);
}
