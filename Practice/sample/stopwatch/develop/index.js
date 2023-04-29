/*==============================
型定義
================================*/
// 動作モード
var MODE;
(function (MODE) {
    MODE[MODE["Count"] = 0] = "Count";
    MODE[MODE["Watch"] = 1] = "Watch";
})(MODE || (MODE = {}));
/*==============================
グローバル変数
================================*/
//動作モード
var appMode = MODE.Count; //初めはストップウォッチモードで読み込む
//スタートからの経過時間
var timeCount = 0;
//計測状態（計測中：true、停止中:false)
var isRunning = false;
//タイマーの識別ID
var timerID = 0;
// タイマーの識別ID（時計用）
var timerID2 = 0;
// カウントダウン表示部
var elmCount = document.querySelector('#count'); //Nullではない」を表す[!]
// スタートボタン
var elmStart = document.querySelector('#start');
// リセットボタン
var elmReset = document.querySelector('#reset');
// 日付表示部
var elmDate = document.querySelector("#date");
/*==============================
イベントハンドラを定義する
================================*/
// アプリケーション初期化
var onPageLoad = function () {
    //日付表示部分を非表示
    elmDate.style.visibility = 'hidden';
    updateView();
};
// スタート処理
var onStart = function () {
    //ストップウォッチモードの場合
    if (appMode === MODE.Count) {
        //停止中の場合
        if (isRunning === false) {
            //タイマー起動
            startTimer(10);
        }
        //計測中の場合
        else if (isRunning === true) {
            //タイマー停止
            stopTimer(timerID);
        }
    }
};
// リセット処理
var onReset = function () {
    if (appMode === MODE.Count) {
        //ストップウォッチモードの場合
        //タイマーの停止
        stopTimer(timerID);
        //タイマーをリセット
        resetTimer();
        //描画の更新
        updateView(timeCount);
    }
};
var onChangeMode = function () {
    //動作モードの変更
    changeMode();
    //ストップウォッチモードの場合
    if (appMode === MODE.Count) {
        //カウントリセット
        resetTimer();
        //描画を更新
        updateView();
    }
    //時計モードの場合
    else if (appMode === MODE.Watch) {
        //すぐにタイマーを開始
        startTimer(1000);
        //描画を更新
        updateView();
    }
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
//リセットボタンのダブルクリックで時計モードに変更
elmReset.addEventListener('dblclick', onChangeMode);
/*==============================
//その他自作関数を定義する
================================*/
// timeCount の値を「分：秒　ミリ秒」形式に変換し、画面描画更新
function updateView(timeCount) {
    if (timeCount === void 0) { timeCount = 0; }
    //ストップウォッチモードの場合
    if (appMode === MODE.Count) {
        // 最大表示時間を超えない制限
        if (timeCount > 60 * 60 * 1000 - 1) {
            timeCount = 60 * 60 * 1000 - 1; //59:59 99
        }
        // 「ミリ秒」を求める
        var ms = (timeCount % 1000).toString().padStart(3, '0').slice(0, 2);
        // 秒を求める
        var ss = (Math.floor(timeCount / 1000) % 60).toString().padStart(2, '0');
        //分を求める
        var mm = Math.floor(timeCount / 1000 / 60).toString().padStart(2, '0');
        //表示する文字列を編集
        var count = mm + ':' + ss + ' <small>' + ms + '</small>';
        // カウントの更新
        elmCount.innerHTML = count;
    }
    //時計モードの場合
    else if (appMode === MODE.Watch) {
        var now = new Date();
        //日付を取得2022/12/12の形式
        var date = now.toLocaleDateString();
        //曜日リストを作成
        var dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        //曜日を取得
        var day = dayOfWeek[now.getDay()];
        // 表示する文字列を編集
        var today = date + ' ' + day;
        elmDate.innerHTML = today;
        //時を取得
        var hh = now.getHours().toString().padStart(2, '0');
        //分を取得
        var mm = now.getMinutes().toString().padStart(2, '0');
        //秒を取得
        var ss = now.getSeconds().toString().padStart(2, '0');
        var time = hh + ':' + mm + ' <small>' + ss + '</small>';
        elmCount.innerHTML = time;
    }
}
;
//計測スタート
function startTimer(interval) {
    if (interval === void 0) { interval = 1000; }
    //ストップウォッチモードの場合
    if (appMode === MODE.Count) {
        // 指定された時間ごとにカウントを更新
        timerID = window.setInterval(function () {
            //経過時間を加算
            timeCount += interval;
            //描画を更新
            updateView(timeCount);
        }, interval);
        //計測状態を「計測中」に変更
        isRunning = true;
    }
    else if (appMode === MODE.Watch) {
        //1秒ごとに描画を更新
        timerID2 = window.setInterval(function () {
            updateView();
        }, interval);
    }
}
//計測ストップ
function stopTimer(timerID) {
    if (appMode === MODE.Count) {
        //タイマーを停止
        clearInterval(timerID);
        //計測状態を「停止中」に変更
        isRunning = false;
    }
    else if (appMode === MODE.Watch) {
        //タイマーを停止
        clearInterval(timerID);
        //計測状態を「停止中」に変更
        isRunning = false;
    }
}
function resetTimer() {
    // ストップウォッチモードの場合
    if (appMode === MODE.Count) {
        //経過時間を初期化
        timeCount = 0;
    }
}
//動作モードを切り替え
function changeMode() {
    //ストップウォッチモードの場合
    if (appMode === MODE.Count) {
        //時計モードに変更  
        appMode = MODE.Watch;
        // 日付表示部分を表示
        elmDate.style.visibility = 'visible';
    }
    //時計モードの場合
    else if (appMode === MODE.Watch) {
        //ストップウォッチモードに変更
        appMode = MODE.Count;
        // 日付表示部非表示
        elmDate.style.visibility = 'hidden';
        //本では以下の部分がなかったため、バグが発生していた。この部分がないと、モード切り替え後、ストップウォッチモードの挙動がおかしくなる。
        stopTimer(timerID2);
        resetTimer();
        updateView(timeCount);
    }
}
