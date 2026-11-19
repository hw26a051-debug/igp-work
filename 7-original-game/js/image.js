/**
 * @file 画像の読み込みと保持
 *
 * 読み込んだ画像は、グローバル変数 images のプロパティとして保持する。
 * 画像を使う側は images.title のように直接参照する。
 */

/** 画像オブジェクトを一括で保持するオブジェクト */
const images = {};

/**
 * 画像の読み込み
 *
 * 画像を増やすときは、ここに 1 行追加する。
 * p5.js の制約により、この関数は preload() から呼ぶ必要がある。
 */
function loadImages() {
  images.titleBg = loadImage('assets/images/title_bg.png');
  images.titleText = loadImage('assets/images/title_text.png');
  images.playingBg = loadImage('assets/images/playing_bg.png');
  images.resultBg = loadImage('assets/images/result_bg.png');
  images.resultText = loadImage('assets/images/result_text.png');
  images.player = loadImage('assets/images/player.png');
}
