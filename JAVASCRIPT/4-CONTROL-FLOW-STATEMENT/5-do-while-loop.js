// do while loop
// do {
//
// } while(condition)

//-----------------------------------------------------------------------------

// Bank data
let savedPin = 2925;
let count = 0;
// user data
let usersEnteredPin;

do {
  usersEnteredPin = Number(prompt("please Enter your correct ATM pin"));
  count++;

  console.log(usersEnteredPin);
  console.log(count);
} while (usersEnteredPin != savedPin && count < 3);

if (usersEnteredPin == savedPin) {
  alert("Now You can withdraw Cash...");
} else {
  alert("your card blocked for 24 hr");
}

//-----------------------------------------------------------------------------
