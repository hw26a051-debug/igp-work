/**
 * @file 効果音の読み込みと保持
 *
 * 読み込んだ効果音は、グローバル変数 sounds のプロパティとして保持する。
 * 効果音を使う側は sounds.start.play() のように直接参照する。
 */

/** 効果音を一括で保持するオブジェクト */
const sounds = {};

/**
 * 効果音の読み込み
 *
 * 効果音を増やすときは、ここに 1 行追加する。
 * 画像と同様に、この関数は preload() から呼ぶ必要がある。
 */
function loadSounds() {
  sounds.start = loadSound('assets/sounds/start.mp3');
}
