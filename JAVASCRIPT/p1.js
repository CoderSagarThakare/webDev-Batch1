
// for loop syntax
// Loops from 1 to 5.
// common mistake => use semicolon after loop
// Decrementing Loop
// Loops from 0 to any limit , incrementing by specific gap.

// print table of 5
// print factorial of number
// Access each element in an array.

// Print the reverse of a number (e.g., 123 becomes 321).
// Break and continue statement in for loop

// Write a for loop to convert all characters in a string to uppercase.
// Loop Without Initialization => Counter variable defined outside the loop
// Infinite Loop
// Reversing an Array => print elements in reverse order
// Using for to Calculate a Sum
// Loop with Multiple Variables
// for (let i = 1, j = 5; i <= 5 && j >= 1; i++, j--) {

//  Nested for Loop.



// NESTED FOR LOOP

// * * * *
// * * * *
// * * * *
// * * * *

// let rows = 4, cols = 4;

// for (let i = 0; i < rows; i++) {       // i represnt to rows i= 0 1 2 3 4

//     for (let j = 0; j < cols; j++) {   
//         process.stdout.write(`* `);
//     }

//     console.log();
// }



// let rows = 4, cols = 6;

// for (let i = 0; i < rows; i++) {       // i represnt to rows i= 0 1 2 3 4

//     for (let j = 0; j < cols; j++) {   
//         process.stdout.write(`* `);
//     }

//     console.log();
// }


// --------------------------------------------------------

// star pattern using string



// printStarPattern(3,7);



//parameter = rowsLength,colsLength
// var count = 0; //0 1 2 3 4 5 0 1 2 3 4 5 0

function printStarPattern(rowsLength = 3, colsLength = 3) {// rowlength=5 colsLength=5

    // outer for loop => row
    for (let row = 0; row < rowsLength; row++) { // row =0 1

        // inner for loop => column
        for (let col = 0; col < colsLength; col++) { //
            process.stdout.write(`${row} `)
        }

        console.log()
    }
}
// arguments (5,5)
// printStarPattern(2,5);

// console.log("----------------------");

// ------------------------------------------------------------------------
// (5,5)



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

function print(length) {     // length =5

    for (let i = 0; i < length; i++) {     // row    i=0 1 2

        for (let j = 0; j < length; j++) {        // cols   j=0 12
            if (j <=  i) {
                process.stdout.write("* ");
            } else {
                process.stdout.write("  ");
            }
        }
        console.log();
    }
}

print(5)
console.log("-----------------------------------")
// print(10)
console.log("-----------------------------------")
// print(4)
