/**
 * Created by nguyenkhoa on 9/21/16.
 */
var fs = require('fs');

// fs.open('filePath.js', 'r', function (err, fd) {
//     if (err) {
//         console.log(err);
//     }
//     fs.close();
// })

// var url = require("url");
// var parts = url.parse("http://techmaster.vn/khoa-hoc/25480/nodejs-truc-tuyen", true);



//readFile nhan tham so dau la ten file tham so thu 2 tuy chon va ham callback gia tri dau la loi gia tri 2 la noi dung file
// fs.readFile('filePath.js', function (err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else  {
//         console.log(result);
//         var url = require("url");
//         var parts = url.parse("http://techmaster.vn/khoa-hoc/25480/nodejs-truc-tuyen", true);
//         result.replace('PHP', "<a href='http://techmaster.vn/khoa-hoc/25480/nodejs-truc-tuyen'>PHP</a>");
//
//     }
// });

fs.readFile('index.html', {encoding: 'utf8'}, function (err, result) {
    if (err) {
        console.log(err);
    }
    else  {
        //console.log(result);
        //var htmlToText = require('html-to-text');
        var htmlText = '<a href="techmaster.vn/khoa-hoc/25480/nodejs-truc-tuyen">PHP</a>';
        // var text = htmlToText.fromString('<a href="techmaster.vn/khoa-hoc/25480/nodejs-truc-tuyen">PHP</a>', {
        //     wordwrap: 130
        // });

        var newHtml = result.replace(/PHP/g, htmlText);
        console.log(newHtml);
        reWrite(newHtml);
    }

});

//writeFile nhan tham so dau la ten file tham so thu 2 la noi dung them va ham callback tra ve loi
function reWrite(textToWrite) {
    fs.writeFile('index.html', textToWrite, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('write success');
        }
    });
}

//
// fs.appendFile('index.html', 'them du lieu', function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('write success');
//     }
// });

// var htmlToText = require('html-to-text');
//
// htmlToText.fromFile(path.join(__dirname, 'test.html'), {
//     tables: ['#invoice', '.address']
// }, (err, text) => {
//     if (err) return console.error(err);
//     console.log(text);
// });