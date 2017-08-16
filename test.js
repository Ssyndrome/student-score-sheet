var readlineSync = require('readline-sync');
/*
    readlineSync.promptCLLoop({

    1: function() {
        console.log('hhh');
        // Do something...
    },
    2: function() {
        console.log(' is removed.');
        // Do something...
    },
    3: function() { return true; }
});
console.log('Exited');
readlineSync.setDefaultOptions({limit: ['1', '2', '3']});
a1 = readlineSync.question("傻瓜吧");
if(a1 = 1){console.log(`傻蛋`);}
process.on('SIGINT', function() {
    console.log('收到 SIGINT 信号。');
});

console.log('试着按下 ctrl + C');
setTimeout(function() {
    console.log('end');
}, 50000);*/
process.stdin.on('end', function() {
    process.stdout.write('end');
});

function gets(cb){
    process.stdin.setEncoding('utf8');
    //输入进入流模式（flowing-mode，默认关闭，需用resume开启），注意开启后将无法read到数据
    //见 https://github.com/nodejs/node-v0.x-archive/issues/5813
    process.stdin.resume();
    process.stdin.on('data', function(chunk) {
        console.log('start!');
        //去掉下一行可一直监听输入，即保持标准输入流为开启模式
        process.stdin.pause();
        cb(chunk);
    });
    console.log('试着在键盘敲几个字然后按回车吧');
}

gets(function(reuslt){
    console.log("["+reuslt+"]");
    //process.stdin.emit('end'); //触发end事件
});