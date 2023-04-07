
function aFunc2(data) {
    return new Promise(function(callback) {
        setTimeout(function() {
            callback(data * 2);
        }, Math.random() * 1000);
    });
}

async function sample_async_await() {
    var val = 100;
    val = await aFunc2(val);
    console.log(val);                    // 200
    val = await aFunc2(val);
    console.log(val);                    // 400
    val = await aFunc2(val);
    console.log(val);                    // 800
}

sample_async_await()

