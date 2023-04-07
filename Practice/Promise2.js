

// エラー処理
function aFunc3(date) {
    return new Promise(function(okCallback, ngCallback){
        setTimeout(function(){
            // 30%の確率でエラーになる非同期関数
            if (Math.random() < 0.30){
                ngCallback(new Error('ERROR!!'));
            }else{
                okCallback(date * 2)
            }

        },Math.random() * 1000);
    })
}

function sample_reject() {
    aFunc3(1000).then(
        (date) => {console.log(date);}, //成功時の処理
        (e) => {console.log(e);}
    )
}
sample_reject()