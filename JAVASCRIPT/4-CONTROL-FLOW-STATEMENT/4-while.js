// while loop syntax

// while(condition){    // runs till condition is true
// }

// ------------------------------------------------------------------------

// var num = 8, // 8
//   iteration = 1; // 1 2 3

// while (iteration <= 10) {
//   process.stdout.write(`${num * iteration} `);
//   iteration++;
// }

// ------------------------------------------------------------------------
// que : check users input is present in array or not ?
// function isNumberPresent() {
//     var arr = [12, 45, 78, 56, 89, 23, 46, 79, 13, 10],
//       userValue,
//       isNumberFound = false;
  
//     userValue = Number(prompt("Enter the no for check in array"));
  
//     // for (let i = 0; i < arr.length; i++) {
//     //   console.log("userValue === arr[i] : ", userValue == arr[i]);
//     //   if (userValue == arr[i]) {
//     //     isNumberFound = true;
//     //     break;
//     //   }
//     // }
    
//     let i=0;
//     while(i<arr.length){
  
//       if(userValue === arr[i]){
//         isNumberFound = true;
//         break;
//       }
     
//       i++;
//     }
  
//     if (isNumberFound) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   console.log(isNumberPresent());

// ------------------------------------------------------------------------
// que. take no of input from user. and take values also and print sum of all values
// function sum() {
//     let count,
//       num = [],
//       sum = 0;
  
//     count = Number(prompt("User tula kiti no chi addition karaychi aahe ?")); // 5
  
//     // for (let i = 0; i < count; i++) {
//     //   num[i] = Number(prompt(`Enter ${i + 1} Number`));
//     // }
  
//     let i = 0;
//     while (i < count) {
//       num[i] = Number(prompt(`Enter ${i + 1} Number`));
//       i++;
//     }
  
//     console.log(num.lenth); //  [10, 20, 30, 40, 50]
  
//     for (i = 0; i < num.length; i++) {
//       sum = sum + num[i];
//     }
  
//     return sum;
//   }
  
//   console.log(sum());

// ------------------------------------------------------------------------


