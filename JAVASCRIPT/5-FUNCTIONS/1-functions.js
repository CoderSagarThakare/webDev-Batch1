// Functions in JS

// function definition
function fun1(names) {
  // names = parameter (bydefault names is undefined)
  console.log("hello i am " + names);
}

// fun1(); // function invocation/ function call
// fun1("sagar"); // passing argumment
// -----------------------------------------------------------------

function sum(num1 = 100, num2 = 100) {
  // default parameters
  return num1 + num2;
  //   return ;                       // default return value is undefined
}

var add = sum();
// console.log(add);

// console.log(sum(10, 20));

// -----------------------------------------------------------------

// Anonymous function (function which dont have name)

var mul = function () {
  return 5 * 5;
};
// console.log(mul());

// -----------------------------------------------------------------

// Arrow function
function additon(a, b, c) {
  return a + b + c;
}
const add1 = additon(5, 10, 15);
console.log(add1);

const add2 = (a, b, c) => {
  // other remaning code/operations
  return a + b + c;
};

const add3 = (a, b, c) => a + b + c;
const add4 = a => a * a;

console.log(add4( 3));

// -----------------------------------------------------------------

function abc() {
  var a = 50;
  let b = 10;

  console.log(a);

  if (true) {
    console.log(b);
  }
}

abc();

// -----------------------------------------------------------------

function addition(a, b, c) {
  console.log("in addition fun");

  console.log(a, b, c);

  arguments[1] = 100;

  console.log(a, b, c);
}

const multiplication = function (p) {
  console.log("in multiplication ");
  console.log(arguments);
};

const subtraction = (x, y) => {
  console.log("in sub fun");
  //   console.log(arguments)
};

// addition(10, 20, 30);
console.log("-----------------------");

// multiplication(5,10)
console.log("-----------------------");

// subtraction(10, 6);

// -----------------------------------------------------------------

// Rest parameter

function addition(a,b,...moreArguments) {
  console.log(moreArguments);
  let sum = 0;

  for(let i=0; i<moreArguments.length; i++){
    sum += moreArguments[i]
  }

  return sum;
}

const add = addition(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(add)
// -----------------------------------------------------------------

// callback function

function printMessage(name, cb) {
  console.log("Hello " + name);
  cb();
}
const sayMorning = () => {
  console.log("Good Morning...");
};

printMessage("Sagar", sayMorning);    // sayMorning is callback function