/*==============================
型定義
================================*/


// 動作モード
enum MODE {
    Count, // ストップウォッチ
    Watch, //時計
}

/*==============================
グローバル変数
================================*/

//動作モード
let appMode: MODE = MODE.Count;    //初めはストップウォッチモードで読み込む

//スタートからの経過時間
let timeCount: number = 0;
//計測状態（計測中：true、停止中:false)
let isRunning: boolean = false;

//タイマーの識別ID
let timerID: number = 0;

// タイマーの識別ID（時計用）
let timerID2: number = 0;

// カウントダウン表示部
const elmCount: HTMLElement = document.querySelector('#count')!;  //Nullではない」を表す[!]

// スタートボタン
const elmStart: HTMLElement = document.querySelector('#start')!;

// リセットボタン
const elmReset: HTMLElement = document.querySelector('#reset')!;

// 日付表示部
const elmDate: HTMLElement = document.querySelector("#date")!;


/*==============================
イベントハンドラを定義する
================================*/

// アプリケーション初期化
const onPageLoad = () => {
    //日付表示部分を非表示
    elmDate.style.visibility = 'hidden'
    updateView()
};

// スタート処理
const onStart = () => {
    //ストップウォッチモードの場合
    if (appMode === MODE.Count) {
        //停止中の場合
        if (isRunning === false) {
            //タイマー起動
            startTimer(10);

        }
        //計測中の場合
        else if(isRunning === true) {
            //タイマー停止
            stopTimer(timerID);
        }
    }
};

// リセット処理
const onReset = () => {
    if (appMode === MODE.Count) {
    //ストップウォッチモードの場合
    //タイマーの停止
    stopTimer(timerID);
    //タイマーをリセット
    resetTimer();
    //描画の更新
    updateView(timeCount);}
}



const onChangeMode = () => {
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
    
}

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
function updateView(timeCount: number = 0) {
    //ストップウォッチモードの場合
    if (appMode === MODE.Count){
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
    }
    
    //時計モードの場合
    else if (appMode === MODE.Watch) {
        const now:Date = new Date();
        //日付を取得2022/12/12の形式
        const date = now.toLocaleDateString(); 

        //曜日リストを作成
        const dayOfWeek: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        //曜日を取得
        const day: string = dayOfWeek[now.getDay()];
        // 表示する文字列を編集
        const today: string = date + ' ' + day;
        elmDate.innerHTML = today;

        //時を取得
        const hh: string = now.getHours().toString().padStart(2, '0');
        //分を取得
        const mm: string = now.getMinutes().toString().padStart(2, '0');
        //秒を取得
        const ss: string = now.getSeconds().toString().padStart(2, '0');
        const time: string = hh + ':' + mm +  ' <small>' + ss + '</small>'
        elmCount.innerHTML =time;

    }

};

//計測スタート
function startTimer(interval: number = 1000) {
    //ストップウォッチモードの場合
    if (appMode === MODE.Count) {
        // 指定された時間ごとにカウントを更新
        timerID = window.setInterval(() => {
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
        timerID2 = window.setInterval(() => {
            updateView();
        }, interval)
    }
}


//計測ストップ
function stopTimer(timerID: number ) {
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
        isRunning = false;}
}

function resetTimer() {
    // ストップウォッチモードの場合
    if (appMode === MODE.Count) {
        //経過時間を初期化
        timeCount = 0
    }
    
}

//動作モードを切り替え
function changeMode(){
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