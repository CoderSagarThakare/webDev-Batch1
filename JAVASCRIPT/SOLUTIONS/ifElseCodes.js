
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

if(age >0 && age<=12){
    console.log("child")

}else if (age>=13 && age<=19){
    console.log("teen ager")

}else if (age >=20 && age<= 64){
    console.log("adult")

}else if(age >=65){
    console.log("Senior")
}

