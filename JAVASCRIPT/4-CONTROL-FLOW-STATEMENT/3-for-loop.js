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

// star pattern using string


// x x x x x x x x 
// x x x x x x x x 
// x x x x x x x x 
// x x x x x x x x 

// ^ ^
// ^ ^
// ^ ^
// ^ ^
// ^ ^
// ^ ^

// col -1 2 3 4 5

//      0 1 2 3 4    -r1
//      0 1 2 3 4    -r2
//      0 1 2 3 4    -r3
//      0 1 2 3 4    -r4
//      0 1 2 3 4    r5

// 0 0 0 0 0 
// 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4


// 5 10 15 20 25
// 5 10 15 20 25
// 5 10 15 20 25
// 5 10 15 20 25
// 5 10 15 20 25

// rowLength= 3, colsLength= 4, incBy = 7
// 0 7 14 21
// 28 35 42 49
// 56 63 70 77

// 3  3  3 
// 10 10 10 
// 17 17 17

// 10  20  30  40  50
// 110 120 130 140 150
// 210 220 230 240 250
// 310 320 330 340 350

// 500 475 450 
// 400 375 350
// 300 275 250
// 200 275 250
// 100 75  50

// 1 2 3 4

// 0 0 0 0  r1
// 1 1 1 1  r2
// 0 0 0 0  r3
// 1 1 1 1  r4
// 0 0 0 0  r5

// 0 1 0 1 0
// 0 1 0 1 0
// 0 1 0 1 0
// 0 1 0 1 0

// 0 1 0 1 0
// 1 0 1 0 1
// 0 1 0 1 0
// 1 0 1 0 1

//  / / / / /   => forward
//  \ \ \ \ \   => backward
//  / / / / /
//  \ \ \ \ \

// 0 1 2 0 1
// 2 0 1 2 0
// 1 2 0 1 2
// 0 1 2 0 1

//  pattern olkhala
//  inner/outer kontya loop mdhe change karava lagel
//  pattern la code mdhe converte kraych aahe

// 0 1 2 3 4
// 1 2 3 4 5
// 2 3 4 5 6
// 3 4 5 6 7
// 4 5 6 7 8

// / \ / \ / \
// / \ / \ / \
// / \ / \ / \
// / \ / \ / \
// / \ / \ / \

// k r a n t i
// k r a n t i
// k r a n t i
// k r a n t i
// k r a n t i

// i t n a r k
// i t n a r k
// i t n a r k
// i t n a r k
// i t n a r k

// var name = "kranti"     //6
// var name = "sagar"      //5
// var name = "jaikranti"      //9
// var name = "sangeet"      //9

// input : 5

// 10 8 6 4 2
// 10 8 6 4 2
// 10 8 6 4 2
// 10 8 6 4 2


// input : 4

// 8 6 4 2
// 8 6 4 2
// 8 6 4 2
// 8 6 4 2


// *         
// * *       
// * * *     
// * * * *   
// * * * * * 

// * * * * * 
// * * * *   
// * * *     
// * *       
// *

// * * * * * 
//   * * * *   
//     * * *     
//       * *       
//         *

//         *   
//       * *   
//     * * *   
//   * * * *   
// * * * * * 

//         *
//       * * *       
//     * * * * *     
//   * * * * * * *   
// * * * * * * * * * 


//         0
//       1 1 1       
//     2 2 2 2 2     
//   3 3 3 3 3 3 3   
// 4 4 4 4 4 4 4 4 4 

//         4
//       3 4 5       
//     2 3 4 5 6     
//   1 2 3 4 5 6 7   
// 0 1 2 3 4 5 6 7 8 

//         1         
//       1 2 3       
//     1 2 3 4 5     
//   1 2 3 4 5 6 7   
// 1 2 3 4 5 6 7 8 9 

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// ----- input - 5 ---
//         *
//       *   *       
//     *   *   *     
//   *   *   *   *   
// *   *   *   *   * 

//          10
//       10 20 30
//    10 20 30 40 50 
// 10 20 30 40 50 60 70

//          1        
//        2 3 4      
//       5 6 7 8 9    
//    10 11 12 13 14 15 16  
// 17 18 19 20 21 22 23 24 25

//         r
//       k r a
//     i k r a n
//   a i k r a n t
// j a i k r a n t i

