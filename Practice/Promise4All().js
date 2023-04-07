function taskA() {
    return new Promise((callback) => {
        console.log("taskA start.");
        setTimeout(function() {
            console.log("taskA end.");
            callback();
        }, Math.random() * 3000);
    });
}
function taskB() {
    return new Promise((callback) => {
        console.log("taskB start.");
        setTimeout(function() {
            console.log("taskB end.");
            callback();
        }, Math.random() * 3000);
    });
}
function sample_all() {
    p1 = taskA();
    p2 = taskB();
    Promise.all([p1, p2]).then(() => {
        console.log("taskA and taskB are finished.");
    });
}

sample_all()