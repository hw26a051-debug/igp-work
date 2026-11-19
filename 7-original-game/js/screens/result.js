/**
 * @file リザルト画面
 */

/**
 * リザルト画面の更新
 */
function updateResultScreen() {
  if (wasKeyPressed(' ')) { // スペースキーでタイトルへ戻る
    goToTitle();
  }
}

/**
 * リザルト画面の描画
 */
function drawResultScreen() {
  // 背景
  image(images.resultBg, 0, 0, CANVAS_W, CANVAS_H);

  // スコア
  push(); // 色などの設定を退避 (他に影響させない)
  fill(255, 220, 220);
  stroke(200, 100, 200);
  strokeWeight(3);
  textAlign(CENTER, CENTER);
  textSize(48);
  text('SCORE: ' + gameData.score, CANVAS_W / 2, 200);
  pop();  // 色などの設定を復元

  // ガイドメッセージ
  if (Math.floor(frameCount / BLINK_FRAMES) % 2 === 0) {
    const textX = CANVAS_W / 2 - images.resultText.width / 2;
    image(images.resultText, textX, 345);
  }
}
