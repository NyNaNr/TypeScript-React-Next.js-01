/*==============================
グローバル変数
================================*/
//スタートからの経過時間
let timeCount: number = 0;
//計測状態（計測中：true、停止中:false)
let isRunning: boolean = false;

//タイマーの識別ID
let timerID: number = 0;

// カウントダウン表示部
const elmCount: HTMLElement = document.querySelector('#count')!;  //Nullではない」を表す[!]

// スタートボタン
const elmStart: HTMLElement = document.querySelector('#start')!;

// リセットボタン
const elmReset: HTMLElement = document.querySelector('#reset')!;


/*==============================
イベントハンドラを定義する
================================*/

// アプリケーション初期化
const onPageLoad = () => {
    
};

// スタート処理
const onStart = () => {
    
};

// リセット処理
const onReset = () => {

};

/*==============================
/イベントリスナーを設定する
================================*/



/*==============================
//その他自作関数を定義する
================================*/


