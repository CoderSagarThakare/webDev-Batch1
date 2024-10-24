// + - / % *

// + addition
//  + operator wants number at both side

console.log("------------------------------------ Addtion ------------------------------------");
console.log(510);                // num + num => num
console.log(true + 1);              // boolean + number => number (true converte to 1)
console.log(false + 1);             // 0+1

console.log(105n + 10n);            // bigInt + bigInt => bigInt
console.log(5n + 10);             // bigInt + number => TypeError: Cannot mix BigInt and other types, use explicit conversions

console.log("india" + "country")    // string + string => concate string
console.log(10 + "10");             // number + string => concate string (not able to converte string to number in addition)
console.log(10 + "india");          // number + string => concate string (not able to converte string to number in addition)


// - Subtraction
// subtraction : try to converte value to number and then performs subtraction

console.log("------------------------------------ Subtraction ------------------------------------");

console.log(5 - 10)                 // num - num => num
console.log(10 - 5)                 // num - num => num
console.log(5 - 10 - 5)             // num - num  - num => num

console.log(5 - true);              // number - boolean => number
console.log(3n - 1n);               // bigInt - bigInt => bigInt
console.log(5 - 7n);                // bigInt - number => TypeError: Cannot mix BigInt and other types, use explicit conversions

console.log("india" - "country")    // string - string => Nan (Not able to converte india/country to number)
console.log("20" - 10);             // string - number => number ("20" can converte to number )
console.log(10 - "india");             // string - number => number ("India" can't converte to number )


//  / : division

console.log("------------------------------------ Division ------------------------------------");

console.log(15 / 2);                     //  number/number => number
console.log("Math.floor : ", Math.floor(15 / 2));         // rounds a number DOWN to the nearest integer.
console.log("Math.ceil : ", Math.ceil(15 / 2));            // rounds a number UP to the nearest integer.

console.log(15 / true);                 // true converted to 1
console.log(15 / false);                // anything devided by 0 is Infinity

console.log(6n / 2n);                   // bigInt/bigInt => bigInt
console.log(6n / 2)                     // bigInt/number => TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log("india" / "country")        // india/contry not converted to number thats why Nan/Nan => Nan
console.log("15" / "3")                    // 15 and 3 can converte to number 15/3 => 5
console.log(NaN / NaN)
console.log("a" / 2);                   // "a" not converted to number

// * multiply

console.log("------------------------------------ Multiply ------------------------------------");

console.log(15 * 2);                     // 
console.log(15 * false);                 //  false => 0
console.log(15n * 5n);                   // 
console.log("india" * "country");        // india/counntry not able to converte number => NaN*NaN
console.log("5" * "5")                   // 5 can converte to number => 5*5 = 25
console.log("2" * 10)                    // 10 can converte to number =>  2*10 => 20


// % => reminder / modulo

console.log("------------------------------------ Modulo ------------------------------------");


console.log(15 % 2);                 // =>
console.log(15 % true);              // => 15 % 1
console.log("india" % "country");    // => india/counntry not able to converte number => NaN % NaN
console.log("10" % "3")              // 10/3 can converte to number => 10%3
