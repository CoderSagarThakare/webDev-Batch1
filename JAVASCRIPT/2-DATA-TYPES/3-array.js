
// Array
// crud operation


// Array\
// homogeneous => need all data of same type

// example
// jr 50 student aastil tr 50 variables tyar karave lagle aaste.
// tyapeksha aapn ekach varible mdhe saglya values store kelyat aani index ne access krtoy 

// var student1= 1;
// var student1= 1;
// var student1= 21;
// var student1= 1;
// var student1= 1;
// var student1= 1;
// ....
// var student50= 50;

var arr = [];

// array with numbers
arr = [1, 2, 3, 4, 5];      // same data type in array => number

arr = ["maharshtra", "gujrat", "hariyana", "bengluru"]; // array of string

arr[3] = "banglore";

arr = [{ name: "kranti", rollNo: 1, address: "abc" },
{ name: "kavita", rollNo: 2, address: "xyz" },
{ name: "shara", rollNo: 3, address: "abcc" },
{ name: "sanjana", rollNo: 4, address: "abcd" }
]       // array of objects

// console.log("arr : ", arr)

marks = [{ cs: 34 }, { oose: 58 }];
marks = [{ sub: "cs", mark: 50 }, { sub: "java", mark: 55 }]

console.log(marks[0].sub, marks[0].mark, marks[0].grade);

// console.log("arr[0] => ", arr[0]);
// console.log("arr[1] => ", arr[1]);
// console.log("arr[2] => ", arr[2]);
// console.log("arr[3] => ", arr[3]);
// console.log("arr[4] => ", arr[4]);


arr = [10, 20, 30, 40, 50, "sagar", 10.4, { company: "Angular Minds" }];        // js allows us to store diff types of values

// console.log(arr);


// ----------------------------------------------------------------
// nested 2D Array

const num1 = [
    [10, 20],
    [100, 150, 200],
    [500, 600, 700, 800, 900],
  ];
  
  const num2 = [1, 2, 3];
  
  // console.log(num1[2][2][1]);
  // console.log(num2[1]);
  
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num1[i].length; j++) {
      console.log(num1[i][j]);
    }
  }