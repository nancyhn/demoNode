/**
 * Created by nguyenkhoa on 9/22/16.
 */
//De khai bao 1 generator function ta them * sau khi khai bao function
// var countDown = function *(start) {
//     while (start >=0) {
//         yield start;
//         start--;
//     }
// }
//
// var counter = countDown(5);
// var callback = function () {
//     var item = counter.next();
//     if (!item.done) {
//         console.log(item.value);
//         setTimeout(callback, 1000);
//     }
// }
// callback();

// var range = function *(stat, end, step) {
//     while (stat < end) {
//         yield stat;
//         stat += step;
//     }
// }
//
// //let value of mang la tao duyet mang voi value tang dan tuong tu for...
// for (let value of range(0, 10, 1)) {
//     console.log(value);
// }

// var counter = range(0, 10, 1);
// var callback = function () {
//     //next la ham call back co 2 gia tri done la da hoan thanh va value la gia tri cua ham.
//     var so = counter.next();
//     if (!so.done) {
//         console.log(so.value);
//         setTimeout(callback, 1000);
//     }
// }
// callback();

var g1 = function *() {
    yield 2;
    yield 3;
    yield 4;
}
var g2 = function *() {
    yield 1;
    yield *g1();
    yield 5;
}
var bien = g2();
console.log(bien.next());
console.log(bien.next());
console.log(bien.next());
console.log(bien.next());
console.log(bien.next());
console.log(bien.next());