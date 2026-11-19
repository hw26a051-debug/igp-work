/**
 * @file タイトル画面
 */

/**
 * タイトル画面の更新
 */
function updateTitleScreen() {
  if (wasKeyPressed(' ')) { // スペースキーでゲーム開始
    sounds.start.play();
    startGame();
  }
}

/**
 * タイトル画面の描画
 */
function drawTitleScreen() {
  // 背景
  image(images.titleBg, 0, 0, CANVAS_W, CANVAS_H);

  // ガイドメッセージ
  if (Math.floor(frameCount / BLINK_FRAMES) % 2 === 0) {
    const textX = CANVAS_W / 2 - images.titleText.width / 2;
    image(images.titleText, textX, 310);
  }
}
