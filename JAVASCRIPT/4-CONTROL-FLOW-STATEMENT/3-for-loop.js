// FOR LOOP

// for loop used for doing repeatated work/task
//      1               2           4
// for(initialization; condition; inc/dec){
// repetated task           //3
// }

// ---------------------------------------------------------

// increment for loop
// for (let i = 0; i < 5; i++)
//     console.log(i);                 // 0 1 2 3 4
// ---------------------------------------------------------

// decrement for loop
// let count ;

// for( count=7 ; count >0 ; count-- )
//     console.log(count);

// ---------------------------------------------------------

// find even no between 1-10
var value = 6;

// even => 2 4 6 8 10

// for(let i=1; i<=10; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }
// ---------------------------------------------------------

// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
// var userValue = 4;
// var gap = 8;

// let i;      // 4+8 = 12+8 = 20+8 = 28+8 = 36+8 = 44

// for (i = userValue; i <= 43; i = i + gap) {
//     console.log(i)          // ... 36
// }

// console.log("i", i);

// ---------------------------------------------------------

//  access values of Array using for loop

// var marks = [2, 4, 43, 67, 43, 23, 45];

// let i;
// for (i = 0; i < marks.length; i++) {
//     console.log(marks[i])
// }

// console.log("i", i);
// ---------------------------------------------------------

// find count of array of numbers array
// var num = [43, 67, 45, 98, 12, 56, 87, 9, 34, 65, 23];

// var count = 0;

// for (let i = 0; typeof (num[i]) != "undefined"; i++) {
//     count = count + 1;
// }

// console.log("count", count);

// ------------------------------------------------------------


// padhe | print table of number

// 5*1 = 5
// 5*2 = 10
// 5*3 = 15
// 5*4 = 20
// 5*5 = 25
// 5*6 = 30
// 5*7 = 35
// 5*8 = 40
// 5*9 = 45
// 5*10 = 50

// var num = 4;

// if (num <= 0) {
//     // Error handeling
//     console.log("Error : Please provide positive number");

// } else {

//     for (let i = 1; i <= 10; i++)

//         console.log(num * i);
// }
// --------------------------------------------------------------

// factorial
// 1 = 1
// 2 = 2*1 = 2
// 3 = 3*2*1 = 6
// 4 = 4*3*2*1 = 24
// 5 = 5*4*3*2*1 = 120

// var num = 4;
// var fact = 1;

// if(num < 0 ){
//     console.log("Error : please provide positive num");
// }
// else {
//     for(let i=num; i>0 ; i--){      // i=5 4 3
//         fact = fact * i;
//     }
//     console.log(`factorial of ${num} : `,fact)
// }

// --------------------------------------------------------------
// reverse the number
// num => 123 => 321

// var num = 2912;
// var revValue = 0;

// for (let i=0; num!=0; i++){
//     let rem = num % 10;

//     revValue = revValue*10 + rem;

//     num = Math.floor(num /10);

// }

// console.log("reverse value ", revValue)
// --------------------------------------------------------------

// break

//                0   1   2   3   4   5
// let numbers = [10, 15, 20, 25, 30, 35];
// let target = 20;
// let count = 0;      //count = 0 1 2 3 4

// for (let i = 0; i < numbers.length; i++) {      //i = 0 1 2 3
//     count++;
//     if (numbers[i] === target) {
//         console.log(`${target} Number found at index ${i}`);
//         break;
//     }
// }

// console.log(`iteration count : ${count}`);

//------------------------------------------------------------------------


// ----------------------------------------------------------------------

// Write a for loop to convert all characters in a string to uppercase.
let str = "jay yash";
// output => JAY YASH

// console.log(str);

// let uppercaseValue = "";     // J - JA - JAY - JAYspace - JAY Y - JAY YA  - JAY YAS - JAY YASH
// //                      len = 8
// for (let i = 0; i < str.length; i++) {        // i= 0 1 2

//     uppercaseValue = uppercaseValue + str[i].toUpperCase()      // J + A = JA

//     // console.log(uppercaseValue)         // J JA JAY JAYspace JAY Y   JAY YA
// }

// console.log("uppercaseValue",uppercaseValue);

// console.log("str.toUpperCase() : ", str.toUpperCase());

// str, upperCaseValue = box
//column = i , i<str.length,  uppercaseValue = uppercaseValue + str[i].toUpperCase()  , 

// ----------------------------------------------------------------------

// Infinite for loop

let ind = 0;        // ind = 0 - 3 - 4 - 5

// for (ind = 3; ind !== -1; ind++) {
//     console.log(ind)        
// }

// ----------------------------------------------------------------------

// infinite loop example

// for (; ;) {
//     console.log(++ind);
// }
// ----------------------------------------------------------------------

//           0   1   2   3   4  
const arr = [10, 20, 30, 40, 50];

// output => 50 40 30 20 10

// ind = 4 3 2 1 0
// let i;
// for (i = arr.length - 1; i >= 0; i--) {

//     console.log(arr[i])
// }

// console.log(i)

// -----------------------------------------------------------------------

// 
//  const num = [20,15,25,15,20,30]        // 20+15 = 35+25 = 70+15 = 85
//  const num = [30,20,25,15,20,30]            // 30+20 = 50+25 = 75+15 = 90


// -----------------------------------------------------------------------
// i = 0  2  4  6  8  10 12 14 16
// j= 50  52 54 56 58 60 62 64 66

// let i, j;

// for (i = 27, j = 168; j <= 200; i = i + 12, j = j + 9) {
//     console.log(i, j)
// }
// console.log("after for loop ")
// console.log(i, j)

// -------------------------------------------------------------------