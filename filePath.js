/**
 * Created by nguyenkhoa on 9/21/16.
 */
var fs = require('fs');
var path = require('path');

var filePath = path.join(__dirname, 'package.json');
console.log(filePath);
console.log(__dirname);
console.log(path.dirname(filePath));
console.log(path.basename(filePath));
console.log(path.basename(filePath), '.js');
console.log(path.extname(filePath));
console.log(path.resolve(filePath));

// fs.stat('package.json', function (err, stats) {
//     //console.log(stats);
//    if (stats.isDirectory()) {
//        console.log('thu muc');
//    }
//     else {
//        console.log('file');
//    }
// });
// var stats = fs.statSync('package.json');
//
// console.log(stats);

// var listFile = fs.readdir(__dirname, function (err,listFiles) {
//     console.log(listFiles);
// });

var searchFileName = require('./searchFile');
searchFileName.checkFile('filePath.js');
