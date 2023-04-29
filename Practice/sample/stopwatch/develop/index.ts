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
    updateView()
};

// スタート処理
const onStart = () => {
    //停止中の場合
    if (isRunning === false) {
        //タイマー起動
        startTimer();

    }
    //計測中の場合
    else {
        //タイマー停止
        stopTimer();

    }
};

// リセット処理
const onReset = () => {
    //タイマーの停止
    stopTimer();
    //タイマーをリセット
    resetTimer();
    //描画の更新
    updateView();

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

// timeCount の値を「分：秒　ミリ秒」形式に変換し、画面描画更新
function updateView() {
    // 最大表示時間を超えない制限
    if (timeCount > 60 * 60 * 1000 - 1) {
        timeCount = 60 * 60 * 1000 -1 //59:59 99
    }

    // 「ミリ秒」を求める
    const ms: string = (timeCount % 1000).toString().padStart(3, '0').slice(0, 2);
    
    // 秒を求める
    const ss: string = (Math.floor(timeCount / 1000) % 60).toString().padStart(2, '0');
    
    //分を求める
    const mm: string = Math.floor(timeCount / 1000 / 60).toString().padStart(2, '0');

    //表示する文字列を編集
    const count: string = mm + ':' + ss + ' <small>' + ms + '</small>';
    // カウントの更新
    elmCount.innerHTML = count;
};

function startTimer() {
    // 指定された時間ごとにカウントを更新
    timerID = window.setInterval(() => {
        //経過時間を加算
        timeCount += 10;
        //描画を更新
        updateView();
    }, 10);

    //計測状態を「計測中」に変更
    isRunning = true;
}

function stopTimer() {
    //タイマーを停止
    clearInterval(timerID);
    //計測状態を「停止中」に変更
    isRunning = false;
}

function resetTimer() {
    timeCount = 0
}