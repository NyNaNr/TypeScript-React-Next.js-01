

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

function sample_finally2() {
    aFunc3(100).then((data) => {
        console.log(data);
        return aFunc3(data);
    })
    .then((data) => {
        console.log(data);
        return aFunc3(data);
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log("catch");
        console.log(e);
    })
    .finally(() => {
        console.log('*** Finally ***');
    });
}

sample_finally2()