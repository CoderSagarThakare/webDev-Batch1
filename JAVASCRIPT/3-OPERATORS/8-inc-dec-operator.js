// unary binary ternary operator

// (a + b) => a/b => operand 
// + => operator (binary)

// unary    => 1 value/operand needed 
// binary   => 2 value/operand needed  (+, -, *, / , == etc)
// ternary  => 2 value/operand needed


// UNARY OPERATOR (unary operator comes with one operand)

// prefix operator  => ++num , --num
// postfix operator => num++ , num--

// prefix increment operator / // postfix increment operator

// function pre() {
//     num = num - 1;       // 15 - 1 = 14
//     return num;
// }
var num = 15;        // user value
console.log(--num);

var num = 15; 
const a = --num + --num - ++num ;


// postfix increment/ decrement operator

// function postfix(){
//     const temp = num;        // temp = 87
//     num = num + 1;
//     return temp;
// }

var rollNO = 50;
console.log(rollNO++);
console.log(rollNO)


var num = 110;

console.log(num-- + num--);     // 
console.log(--num + num++);     // 

console.log(num);       // 