

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


// 
const a = "sagar";      //9 = 5  (9/2= 4.5)   Math.ceil(4.5)=>5
console.log(a[4])  // subscripts

function print(row) {

    let num = 1;
    for (let i = 0; i < row; i++) {  // 2
        
         for (let j = 0; j < row * 2 - 1; j++) { //234567

            if (j >= (row - i - 1) && j <= (row - 1 + i)) {
                process.stdout.write(`${a[i]} `);
            } else {
                process.stdout.write("  ");
            }
        }
        console.log();
    }
}
const b = "college"         //7 = 4  (7/2= 3.5)
console.log("----- input - 5 -------------------");
print(alength())
console.log("----- input - 4 --------------------");
// print(4)
// print(7)
