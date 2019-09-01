const chalk = require('chalk');

process.stdin.setEncoding('utf8');
process.stdout.write('请输入模块名>');

process.stdin.on('readable', () => {
    let chunk = process.stdin.read();
    chunk = chunk.replace(/\s*/g, '');
    const reg = /![^(A-Za-z)]/g;
    if(!(reg.test(chunk))){
        console.log('模块名只能是英文字母');
        process.stdin.emit('end');
    }

    if(typeof chunk === 'string'){
        // chunk = chunk.slice(0,-1);
        process.stdout.write(`stringLength:${chunk.length}\n`);
    }
    if(chunk === ''){
        process.stdin.emit('end');
        return
    }
    if (chunk !== null) {
        process.stdout.write(`data: ${chunk}\n`);
    }
});

process.stdin.on('end', (a) => {
    console.log('没输入吗？');
});
