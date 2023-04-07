

//エラー処理に対応するコード




function aFunc3(data) {
    return new Promise(function(okCallback, ngCallback) {
        setTimeout(function() {
            if (Math.random() < 0.30) {
                ngCallback(new Error('ERROR!'));
            } else {
                okCallback(data * 2);
            }
        }, Math.random() * 1000);
    });
}

async function sample_async_await_with_catch() {
    var val = 100;
    try {
        val = await aFunc3(val);
        console.log(val);
        val = await aFunc3(val);
        console.log(val);
        val = await aFunc3(val);
        console.log(val);
    } catch (e) {
        console.log(e);
    }
}

sample_async_await_with_catch()