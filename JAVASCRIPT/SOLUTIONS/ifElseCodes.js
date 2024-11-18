
/*
1. Write a program to check if a number is even or odd.

Input :  x=5
Output: 5 is an odd number

Input : x = 10
Output : 10 is an even number

*/


var num = 1546415465518;        // variable

if (num % 2 == 0) {
    console.log(`${num} number is even`);       // template literal
} else {
    console.log(`${num} number is odd`);
}

// --------------------------------------------------------------------------------


/*

2. Write a program, take a number and print whether it is less than 10 or greater than 10

Input : var x = 5
Output : 5 is less than 10.

Input : var x = 16
Output : 16 is greater than 10.

*/

var num = 20000;

if (num < 10) {
    console.log(`${num} is less than 10`)
} else {
    console.log(`${num} is greater than 10`)
}

// --------------------------------------------------------------------------------

/*
3. Write a program to determine if the user can a vote or not (a person with age above 18 can a vote)
Input : int age = 18
Output : You can vote.

Input : int age = 14
Output : You can't vote.
*/

var age = 18;

if (age > 17) {     // age >= 18
    console.log("you can vote");
} else {
    console.log("you can't vote");
}

// --------------------------------------------------------------------------------

/*
4. Write a program , take a number and print whether it is positive or negative.
Input : var x = 5
Output : 5 is a positive number.

Input : var x = -9
Output : -9 is a negative number

*/

var num = -500;

// if (num >= 0) {
//     console.log(`${num} is a positive number`);
// } else {
//     console.log(`${num} is a negative number`);
// }

if (num < 0) {
    console.log(`${num} is a negative number`);
} else {
    console.log(`${num} is a positive number`);
}

// --------------------------------------------------------------------------------

/**
5. Write a program to check if a character is a vowel or consonant.
Input : var char = “A”
Output : A is a vowel.

Input : var char = “B”
Output : D is a consonant.

 */

// vowels       => swar     => a,e,i,o,u
// consonent    => vyanjans => other than vowels

var character = "B"

if (character == "A" || character == "E" || character == "I" || character == "O" || character == "U") {

    console.log(`${character} is a vowel/swar`);
} else {
    console.log(`${character} is a consonent/vyanjan`);
}
// --------------------------------------------------------------------------------

/**
6. Write a program, take a number and print whether the number is in range 30 to 50.
Input : int x = 25
Output : Invalid Number

Input : x = 45
Output : Number is in correct range 

 */

var num = 50;

if (num > 30 && num < 50) {
    console.log("Number is in correct range ")
}
else {
    console.log(" Invalid Number")
}

// --------------------------------------------------------------------------------

/**
 7. Write a program that categorizes a person based on their age: (use if-else ladder)

0-12: Child
13-19: Teenager
20-64: Adult
65 and above: Senior
Examples:

Example 1:
Input: 25   Output: Adult

Example 2:
Input: 8   Output: Child

Example 3:
Input: 70   Output: Senior
 */

var age = 25;

if (age > 0 && age <= 12) {
    console.log("child")

} else if (age >= 13 && age <= 19) {
    console.log("teen ager")

} else if (age >= 20 && age <= 64) {
    console.log("adult")

} else if (age >= 65) {
    console.log("Senior")
}

// --------------------------------------------------------------------------------
/**
8.  Write a program to check if a given year is a leap year.
    A year is a leap year if it is divisible by 4, but not divisible by 100

Examples:

Example 1:
Input: 2024   Output: Leap year

Example 2:
Input: 1900   Output: Not a leap year

Example 3:
Input: 2000   Output: Leap year"
 */

const year = 2000;

if (year % 4 == 0 && year % 100 != 0) {
    console.log(`${year} is leap year`);
} else {
    console.log(`${year} is leap year`);
}   
// --------------------------------------------------------------------------------

/**
9. Write a program that checks if a number is divisible by both 3 and 5.

Examples:

Example 1:
Input: 15   Output: Divisible by both 3 and 5

Example 2:
Input: 9   Output: Not divisible by both 3 and 5

Example 3:
Input: 30   Output: Divisible by both 3 and 5"
 */

const number = 16;

if (number % 3 === 0 && number % 5 === 0) {
    console.log("Divisible by both 3 and 5") ;
} else {
    console.log("Not divisible by both 3 and 5")
}
// --------------------------------------------------------------------------------

/**
 10. Write a program that checks the temperature and outputs: (if-else ladder)

""Cold"" if less than 15°C
""Warm"" if between 15°C and 30°C
""Hot"" if greater than 30°C

Examples:

Example 1:
Input: 18   Output: Warm

Example 2:
Input: 8   Output: Cold

Example 3:
Input: 35   Output: Hot"
 */
const temperature = 25;

if (temperature < 15) {
    console.log("Cold");
} else if (temperature >= 15 && temperature <= 30) {
    console.log("Warm");
} else {
    console.log("Hot");
}
// --------------------------------------------------------------------------------

/**
11. Write a JavaScript program that takes two numbers and outputs the largest number.

Examples:

Example 1:
Input: 4, 8
Output: The largest number is 8

Example 2:
Input: 15, 10
Output: The largest number is 15

Example 3:
Input: 30, 30
Output: The largest number is 30
 */

let num1 = 4, num2 = 8;

if (num1 > num2) {
    console.log("The largest number is " + num1);
} else if (num2 > num1) {
    console.log("The largest number is " + num2);
}

// --------------------------------------------------------------------------------
/**
12. Write a program that checks if a customer qualifies for a discount.
The customer gets a discount if their purchase total is more than 1000 rs.

Examples:

Example 1:
Input: 1500   Output: Eligible for a discount

Example 2:
Input: 750   Output: Not eligible for a discount

Example 3:
Input: 2000   Output: Eligible for a discount"
 */
let purchaseTotal = 1500;

if (purchaseTotal > 1000) {
    console.log("Eligible for a discount");
} else {
    console.log("Not eligible for a discount");
}
// --------------------------------------------------------------------------------

/**
 13. "Write a program that takes a day of the week (1 to 7) and outputs whether it's a weekend or a weekday. 

1 = Monday → Weekday
2 = Tuesday → Weekday
3 = Wednesday → Weekday
4 = Thursday → Weekday
5 = Friday → Weekday
6 = Saturday → Weekend
7 = Sunday → Weekend

Example 1:
Input: 1   Output: Weekday

Example 2:
Input: 7   Output: Weekend

Example 3:
Input: 5   Output: Weekday"
 */

let day = 1; 

if (day === 6 || day === 7) {
    console.log("Weekend");
} else if (day >= 1 && day <= 5) {
    console.log("Weekday");
}

