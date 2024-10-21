
// 1. loose equality  => return true/false => checks only value not data type

const n1 = 5 == 5;
const n2 = 15 == 5;
const n3 = 5 == "5";        // true => it checks only value not data type

// 2. strict equality operator => return true/false => checks value + data type
var n4 = 5 === 5;
var n5 = Number("5") === 5;     // we are coverting explicitely "5" to number
var n6 = "5" === 5              // value are same but not data type

// 3. loose inequality operator => return true/false => checks only value not data type
// !  => not operator
// != => not equal to operator

var n = 5 != 5;         // => 5==5 => !true => false
var a1 = 15 != 5;       // => 15 == 5 => !false => true

var a1 = 5 != "5";


// 4. strictly inequality operator => return true/false => checks only value  + data type

var a1 = 5 !== 5;       // 5 === 5 => !true => false
var a1 = 15 !== 5;      // 15 === 5 => !false   => true 
var a1 = 5 !== "5";     // 5 === "5" => !false => true

// 4. greater/lower than operator (<) => return true/false

var a1 = 10 > 7;           // 10 is greater than 5 => true
var a1 = 10 < 5;           // 10 is lower than 5   => false
var a1 = 10 < 10;           // 10 is lower than 10   => false
var a1 = 4 < 5;

// 5. greater/lower than operator (<= && >=) =>  return true/false

var a1 = 10 >= 10;        // 10 is greater than 10 => true
var a1 = 5 <= 5;        // 5 is greater than 5 => true

console.log(a1);
console.log(typeof a1);


// decimal value        => 10 value => 0---9        => contains 10 value
// Hexadecimal value    => 16 value => 0-9 ABCDEF   => contains 16 value
// 0-9  A=10 B=11 C=12 D=13 E=14 F=15 
// ASCII value                  => contains 128 value

// >, >=, <=, <= ya charihi operator mdhe donhi string aalya tr ascii value compare kelya jatil
console.log(10 > 5);
console.log("a" > "b");     // string > string => ascii > ascii => 97 > 98 => false
console.log("Z" < "z");     // true

console.log("apple" > "banana");        //  a > b => 97 > 98  => false (compares 'a' and 'b' by their ASCII/Unicode values)
console.log("apple" > "abble");         //  a > b => 112 > 98 => true