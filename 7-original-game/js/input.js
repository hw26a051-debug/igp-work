/**
 * @file キー入力
 *
 * キーの状態を調べる関数は、どれも p5.js の key と同じ値 (' '、'x'、'ArrowLeft' など) でキーを指定する。
 * 大文字・小文字は区別しない。
 *
 * - wasKeyPressed(): キーが「押された瞬間」だけ true。画面遷移のように 1 回だけ反応させたい場面で使う。
 * - isKeyDown(): キーが押されている間ずっと true。キャラクターの移動のように、押しっぱなしを使いたい場面で使う。
 */

/** このフレームで押されたキー (p5.js の key と同じ値) の配列 */
let pressedKeys = [];

/** キー (p5.js の key と同じ値) とキーコードの対応。keyPressed() で記録する */
const keyCodes = {};

/**
 * 入力履歴のクリア
 *
 * draw() の末尾で毎フレーム呼ぶ。
 */
function clearFrameInput() {
  pressedKeys = [];
}

/**
 * キーがこのフレームで押されたかどうか
 *
 * 前のフレームから押され続けている場合は含まれない。
 * 大文字・小文字は区別しない。
 * @param {string} key - 確認したいキー (例: ' ' はスペースキー、'x' は X キー)
 * @returns {boolean} 押されたかどうか
 */
function wasKeyPressed(key) {
  return pressedKeys.includes(key.toLowerCase());
}

/**
 * キーが押されている間、ずっと true になるかどうか
 *
 * 大文字・小文字は区別しない。一度も押されていないキーは false になる。
 * @param {string} key - 確認したいキー (例: ' ' はスペースキー、'x' は X キー、'ArrowLeft' は左矢印キー)
 * @returns {boolean} 押されているかどうか
 */
function isKeyDown(key) {
  // p5.js の keyIsDown() はキーコードでしか調べられないので、keyPressed() で記録した対応を使って変換する
  const code = keyCodes[key.toLowerCase()];
  return code !== undefined && keyIsDown(code);
}

/**
 * キーが押された時に p5.js から呼び出される関数
 */
function keyPressed() {
  pressedKeys.push(key.toLowerCase());
  keyCodes[key.toLowerCase()] = keyCode;
}
