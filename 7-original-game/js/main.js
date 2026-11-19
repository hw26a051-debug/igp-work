/**
 * @file ゲーム全体の状態管理と p5.js のエントリーポイント
 */

/** ゲームの状態の識別定数 */
const STATE = {
  TITLE: 'TITLE',
  PLAYING: 'PLAYING',
  RESULT: 'RESULT',
};

/** ゲーム全体の情報を保持 */
let gameData = {
  gameState: STATE.TITLE, // ゲームの状態
  score: 0, // スコア
};

/**
 * p5.js: 読み込み
 *
 * 画像などの読み込みは、必ずここで行う。
 */
function preload() {
  loadImages();
  loadSounds();
}

/**
 * p5.js: 初期化
 *
 * 最初に 1 回だけ呼ばれる。
 */
function setup() {
  createCanvas(CANVAS_W, CANVAS_H);

  gameData.gameState = STATE.TITLE;
}

/**
 * p5.js: 毎フレームの描画・更新
 *
 * 1 秒間に約 60 回呼ばれる。今の状態に応じた画面の更新と描画を行う。
 */
function draw() {
  switch (gameData.gameState) {
    case STATE.TITLE:
      updateTitleScreen();
      drawTitleScreen();
      break;
    case STATE.PLAYING:
      updatePlaying();
      drawPlaying();
      break;
    case STATE.RESULT:
      updateResultScreen();
      drawResultScreen();
      break;
  }

  clearFrameInput();
}

// ------------------------------------------------------------
// ゲーム状態の遷移
// ------------------------------------------------------------
/**
 * 状態遷移: タイトル画面へ
 */
function goToTitle() {
  gameData.gameState = STATE.TITLE;
}

/**
 * 状態遷移: ゲーム開始
 */
function startGame() {
  gameData.score = 0;
  resetPlayer();
  gameData.gameState = STATE.PLAYING;
}

/**
 * 状態遷移: リザルト画面へ
 */
function goToResult() {
  gameData.gameState = STATE.RESULT;
}
