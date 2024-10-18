
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
var a1 =  4 < 5;

// 5. greater/lower than operator (<= && >=) =>  return true/false

var a1 = 10 >= 10;        // 10 is greater than 10 => true
var a1 = 5 <= 5;        // 5 is greater than 5 => true

console.log(a1);
console.log(typeof a1);