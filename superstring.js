/**
 * Created by nguyenkhoa on 9/20/16.
 */
String.prototype.reverse = function () {
    var stringDao = "";
    for (var i = this.length-1; i >=0; i--) {
        stringDao += this.charAt(i);
    }
    return stringDao;
}
module.exports = String;

module.exports.daochuoi = function (chuoinhap) {
    var stringDao = "";
    for (var i = chuoinhap.length-1; i >=0; i--) {
        stringDao += chuoinhap.charAt(i);
    }
    return stringDao;
}

module.exports.camel = function (chuoinhap) {
    var result = "";
    for (var  i = 0; i < chuoinhap.length; i++) {
        if (i == 0) {
            result += chuoinhap.charAt(0).toUpperCase();
        }
        else  {
            if (chuoinhap.charAt(i - 1) == " ") {
                result += chuoinhap.charAt(i).toUpperCase();
            }
            else  {
                result += chuoinhap.charAt(i).toLocaleLowerCase();
            }
        }
    }
    return result;
}
// module.exports = {
//     something: 123,
//     invertStr: function(inputString) {
//         for (var i = inputString.length-1; i >=0; i--) {
//             var stringDao = "";
//             stringDao += inputString.charAt(i);
//         }
//         return stringDao;
//     },
//     sayHelloInEnglish: function() {
//         console.log("HELLO");
//     },
//
//     sayHelloInSpanish: function() {
//         console.log("Hola");
//         foo2.b();
//     }
// };