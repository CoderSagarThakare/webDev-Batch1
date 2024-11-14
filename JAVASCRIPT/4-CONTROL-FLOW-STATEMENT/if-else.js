
// if-else statement

const student = {
    name: "virat",
    class: 10,
    maths: 84,
    science: 62,
};

// conditions for taking admission in 11th
// 1. student la only maths mdhe 60 aani science peksha jast mark pahijet
// 2. jr maths mdhe 80 peksha kami aastil tr commerce la admission

if (student.maths > 75 || student.science > 75) {
    console.log("output : maths-science la admission bhetle");
} else {
    console.log("output : commerce la admission ghetle");
}

// --------------------------------------------------------------------------------
const kavitaMarks = 72;

if (kavitaMarks > 35) {
    console.log("laptop gheun deu")
}

// --------------------------------------------------------------------------------

// conditions for kusti => 
// motha gat => 70
// medium gat => 50
// chota gat => 35

var user = {
    weight: 60,
}

if (user.weight > 70) {
    console.log("eligibal for motha gat")
}

if (user.weight > 50 && user.weight < 70) {     // (80>50 && 80<70) => (true && false) => false
    console.log("eligibal for medium gat")
}

if (user.weight > 35 && user.weight < 50) {     // (80>35 && 80<50) => {true && false} => false
    console.log("eligibal for chota gat")
}

if (user.weight < 35) {
    console.log("not allowed for custi")
}

// --------------------------------------------------------------------------------


// if else ladder
// multiple if block paiki ekch condition true hoil aasha veli if else ladder use kraychi

var user = {
    weight: 80,
}

if (user.weight > 70) {
    console.log("eligibal for motha gat")

} else if (user.weight > 50 && user.weight < 70) {     // (80>50 && 80<70) => (true && false) => false
    console.log("eligibal for medium gat")

} else if (user.weight > 35 && user.weight < 50) {     // (80>35 && 80<50) => {true && false} => false
    console.log("eligibal for chota gat")

} else {
    console.log("not allowed for custi")
}

// --------------------------------------------------------------------------------

// nested if else examples
if (true) {

    if (false) {
        console.log("if-if block")
    } else {
        console.log("if-else block")
    }

} else {

    if (false) {
        console.log("else-if block")
    } else {
        console.log("else-else block")
    }
}

// --------------------------------------------------------------------------------

// ternary =>  condition ? () : ()
var marks = 50;

console.log(marks > 35 ? "pass" : "fail")

// --------------------------------------------------------------------------------

var age = 20;

if (age > 18) {
    console.log("eligible for vote")
} else {
    console.log("eligible not for vote")
}
