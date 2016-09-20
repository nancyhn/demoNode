/**
 * Created by nguyenkhoa on 9/20/16.
 */
"use strict"

var String = require('./superstring');
//console.log(ss.invertStr('asdfgh'));
console.log("Hello".reverse());
console.log(String.daochuoi("asdfgh"));
console.log(String.camel("cong hoa xa hoi chu nghia viet nam"));
console.log(String.longestChar("dau la tu dai nhau trong string nay nhi aaa dfj adhfkdjsfk sj"));
const Person = require('./superstring').Person;
var  person = new Person("khoa");
console.log(person.sayName());