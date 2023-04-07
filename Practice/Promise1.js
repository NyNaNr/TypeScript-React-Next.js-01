function aFunc2(data) {
    return new Promise(function(callback) {
        setTimeout(function() {
            callback(data * 2);
        }, Math.random() * 1000);
    });
}

function sample_promise3() {
    aFunc2(100).then((data) => {
        console.log(data);      // => 200
        return aFunc2(data);
    })
    .then((data) => {
        console.log(data);      // => 400
        return aFunc2(data);
    })
    .then((data) => {
        console.log(data);      // => 800
    });
}
sample_promise3()

