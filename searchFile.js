/**
 * Created by nguyenkhoa on 9/21/16.
 */
var fs = require('fs');

var checkfile = 0;

module.exports.checkFile = function (tenfile) {
    fs.readdir(__dirname, function (err,listFiles) {
        //console.log(listFiles);
        for (var i = 0; i < listFiles.length-1; i++){
            if (tenfile == listFiles[i]) {
                checkfile = checkfile+1;
                //console.log('Co file ' + tenfile + ' trong thu muc');
            }
            else  {
                //console.log('Thu muc hien tai khong co file vua tim');
            }
        }
        if (checkfile == 0) {
            console.log('~~~Thu muc hien tai khong co file vua tim');
        }
        else {

            console.log('~~~Co file ' + tenfile + ' trong thu muc');
        }
    });


}