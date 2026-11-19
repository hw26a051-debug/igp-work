/**
 * @file プレイ画面
 *
 * ここに自分のゲームを作っていく。
 * 今は、矢印キーで動く自機と、時間とともに増えるスコアがあるだけの仮の内容になっている。
 */

/** 自機の移動速度 (px/フレーム) */
const PLAYER_SPEED = 4;

/** 自機 (x, y は画像の中心の座標) */
let player = { x: 0, y: 0 };

/**
 * 自機の初期化
 *
 * ゲームを始めるたびに呼ばれる。
 */
function resetPlayer() {
  player.x = CANVAS_W / 2;
  player.y = CANVAS_H / 2;
}

/**
 * プレイ画面の更新
 */
function updatePlaying() {
  // 矢印キーで自機を動かす
  if (isKeyDown('ArrowLeft')) {
    player.x -= PLAYER_SPEED;
  }
  if (isKeyDown('ArrowRight')) {
    player.x += PLAYER_SPEED;
  }
  if (isKeyDown('ArrowUp')) {
    player.y -= PLAYER_SPEED;
  }
  if (isKeyDown('ArrowDown')) {
    player.y += PLAYER_SPEED;
  }

  // 画面の外に出ないようにする (中心の座標なので、画像の半分の大きさだけ内側まで動ける)
  const halfWidth = images.player.width / 2;
  const halfHeight = images.player.height / 2;
  if (player.x < halfWidth) {
    player.x = halfWidth;
  } else if (player.x > CANVAS_W - halfWidth) {
    player.x = CANVAS_W - halfWidth;
  }
  if (player.y < halfHeight) {
    player.y = halfHeight;
  } else if (player.y > CANVAS_H - halfHeight) {
    player.y = CANVAS_H - halfHeight;
  }

  // スコアを増やす (仮)
  gameData.score++;

  // X キーでゲーム終了 (仮)
  // (本来は「やられた」「クリアした」などの条件にする)
  if (wasKeyPressed('x')) {
    goToResult();
  }
}

/**
 * プレイ画面の描画
 */
function drawPlaying() {
  // 背景
  image(images.playingBg, 0, 0, CANVAS_W, CANVAS_H);

  // キャラクター
  // (中心の座標 (player.x, player.y) から、画像を描く左上の座標を計算する)
  const x = player.x - images.player.width / 2;
  const y = player.y - images.player.height / 2;
  image(images.player, x, y);

  // テキスト UI
  fill(40, 40, 40);
  textAlign(LEFT, TOP);
  textSize(24);
  text('SCORE: ' + gameData.score, 16, 16);
  textSize(16);
  text('矢印キー: 移動 / X: 終了', 16, 48);
}
