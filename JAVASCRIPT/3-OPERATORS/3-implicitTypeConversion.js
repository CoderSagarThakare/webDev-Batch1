// implicit conversion => its done by our js engine


const add = 5 + "5";            // number + string => string

console.log(add)
console.log(typeof add)

// Number to String
console.log(5 + "5"); // "55" (number 5 is converted to string)

// Boolean to String    
console.log(true + " is true"); // "true is true"   

// Object to String
console.log({} + " : object"); // "[object Object] : object (object is converted to string)

// String to Number
console.log("5" - 3); // 2 (string "5" is converted to number)

// Boolean to Number
console.log(true * 10); // 10 (true is coerced to 1)

// Null to Number
// When null is involved in arithmetic operations (like addition, subtraction, multiplication, or division) or when explicitly coerced to a number, it is converted to 0.
console.log(null + 5); // 5 (null is coerced to 0)

// Undefined to Number
console.log(undefined + 5); // NaN (undefined is coerced to NaN)

// null results in NaN when it is used in an operation where the other operand cannot be converted to a number, such as when using non-numeric strings or undefined variables in arithmetic operations.

console.log(null - "hello"); // NaN ("hello" can't be converted to a number)
console.log(null * "abc");   // NaN (string "abc" can't be converted to a number)


console.log((Boolean(0) ) ===  false);
