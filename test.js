var fs = require('fs');

// 打开一个流:
/*var rs = fs.createReadStream(__dirname+'/README.md', 'utf-8');

rs.on('data', function (chunk) {
    console.log('DATA:',chunk);
    console.log(typeof chunk);
});

rs.on('end', function () {
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});*/
fs.open(__dirname+'/package.json', (e,d)=>{
    console.log(d);
});
