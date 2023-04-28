/*==============================
グローバル変数
================================*/
//スタートからの経過時間
var timeCount = 0;
//計測状態（計測中：true、停止中:false)
var isRunning = false;
//タイマーの識別ID
var timerID = 0;
// カウントダウン表示部
var elmCount = document.querySelector('#count'); //Nullではない」を表す[!]
// スタートボタン
var elmStart = document.querySelector('#start');
// リセットボタン
var elmReset = document.querySelector('#reset');
/*==============================
イベントハンドラを定義する
================================*/
// アプリケーション初期化
var onPageLoad = function () {
};
// スタート処理
var onStart = function () {
};
// リセット処理
var onReset = function () {
};
/*==============================
/イベントリスナーを設定する
================================*/
// ページの読み込み完了イベント
window.addEventListener('load', onPageLoad);
//スタートボタンのクリックイベント
elmStart.addEventListener('click', onStart);
//リセットボタンのクリックイベント
elmReset.addEventListener('click', onReset);
/*==============================
//その他自作関数を定義する
================================*/
// timeCount の値を分：秒　ミリ秒
