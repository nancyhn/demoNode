/**
 * Created by nguyenkhoa on 9/22/16.
 */
// var dts = {foo:2, bar:3};
// var newDts = {bar:3, foofoo: 3, barbar:4};
//
// //ham assign obj2 cho obj 1 se so sanh cac gia tri cua obj 2 neu da co o obj1 se in de len va add them nhung gia tri chua co
// Object.assign(dts, newDts);
// console.log(dts);
//
// var arr = [1, 2, 3, 4, 5, 6];
// [first, second, ...ptconlai] =  arr;
// console.log(first);
// console.log(second);
// console.log(ptconlai);

var person = {
    name: {ho:'Nguyen', dem:'Minh', ten:'Khoa'},
    study: {lop:'CNPM', truong:'HUMG'},
    rank: 'newbie'
}
var {rank :myRank} = person;
var {name :{ho: myFirstName}} = person;
var {study: {lop: myClass, truong: mySchool}, name:{ten: myName}} = person;
console.log(myRank);
console.log(myFirstName);
console.log(myClass, mySchool, myName);
