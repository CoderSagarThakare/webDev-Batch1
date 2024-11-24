// 1. Write a program that takes a number (1–7) as input and outputs the corresponding day of the week.
// Examples:

// Input: 1 → Output: Monday
// Input: 5 → Output: Friday
// Input: 9 → Output: Invalid day number!

let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number!");
}
// --------------------------------------------------------------------------------

// 2. Write a program that takes a grade (A, B, C, D, E, F) as input and outputs its meaning.
// Examples:

// Input: A → Output: Excellent
// Input: C → Output: Average
// Input: F → Output: Fail

let grade = "C"; 
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Below Average");
    break;
  case "E":
    console.log("Poor");
    break;
  case "F":
    console.log("Fail");
    break;
  default:
    console.log("Invalid Grade!");
}
// --------------------------------------------------------------------------------

// 3.  Write a program that takes a traffic light color as input and outputs the action (Stop, Wait, Go).
// Examples:

// Input: Red → Output: Stop
// Input: Yellow → Output: Wait
// Input: Green → Output: Go

let light = "Yellow"; // Example input
switch (light) {
  case "Red":
    console.log("Stop");
    break;
  case "Yellow":
    console.log("Wait");
    break;
  case "Green":
    console.log("Go");
    break;
  default:
    console.log("Invalid Light Color!");
}
// --------------------------------------------------------------------------------

// 4. Write a program that takes a month (e.g., "January") as input and outputs the season.
// Examples:

// Input: December → Output: Winter
// Input: April → Output: Spring
// Input: August → Output: Summer

var month = "April"; // Example input
switch (month) {
  case "December":
  case "January":
  case "February":
    console.log("Winter");
    break;
  case "March":
  case "April":
  case "May":
    console.log("Spring");
    break;
  case "June":
  case "July":
  case "August":
    console.log("Summer");
    break;
  case "September":
  case "October":
  case "November":
    console.log("Autumn");
    break;
  default:
    console.log("Invalid Month!");
}
// --------------------------------------------------------------------------------

// 5. Write a program that converts a number (1–3) to its word equivalent.
// Examples:

// Input: 1 → Output: One
// Input: 3 → Output: Three
// Input: 5 → Output: Invalid number!

let num = 3; // Example input
switch (num) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Invalid number!");
}
// --------------------------------------------------------------------------------

// 6. Write a program that takes an operator (+, -, *, /) and two numbers as input and outputs the result.
// Examples:

// Input: +, 5, 3 → Output: 8
// Input: *, 4, 7 → Output: 28
// Input: /, 6, 0 → Output: Cannot divide by zero!

let operator = "/"; // Example input
let num1 = 6; // Example input
let num2 = 0; // Example input

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    if (num2 === 0) {
      console.log("Cannot divide by zero!");
    } else {
      console.log(num1 / num2);
    }
    break;
  default:
    console.log("Invalid operator!");
}
// --------------------------------------------------------------------------------

// 7. Write a program that takes a month as input and outputs the number of days in that month.
// Examples:

// Input: February → Output: 28 or 29 days
// Input: November → Output: 30 days
// Input: April → Output: 30 days

var month = "February"; // Example input
switch (month) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log("31 days");
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    console.log("30 days");
    break;
  case "February":
    console.log("28 or 29 days");
    break;
  default:
    console.log("Invalid month!");
}
// --------------------------------------------------------------------------------

// 8. Write a program that takes the name of a fruit and outputs its common color.
// Examples:

// Input: Apple → Output: Red
// Input: Banana → Output: Yellow
// Input: Grapes → Output: Green or Purple

let fruit = "Banana"; // Example input
switch (fruit) {
  case "Apple":
    console.log("Red");
    break;
  case "Banana":
    console.log("Yellow");
    break;
  case "Grapes":
    console.log("Green or Purple");
    break;
  case "Orange":
    console.log("Orange");
    break;
  default:
    console.log("Unknown fruit!");
}
// --------------------------------------------------------------------------------

// 9. Write a program that takes the name of an OS and outputs its owner or creator.
// Examples:

// Input: Windows → Output: Microsoft
// Input: macOS → Output: Apple
// Input: Linux → Output: Community

let os = "Linux"; // Example input
switch (os) {
  case "Windows":
    console.log("Microsoft");
    break;
  case "macOS":
    console.log("Apple");
    break;
  case "Linux":
    console.log("Community");
    break;
  default:
    console.log("Unknown Operating System!");
}
// --------------------------------------------------------------------------------

// 10. Write a program that takes the name of an animal and outputs the sound it makes.
// Examples:

// Input: Dog → Output: Bark
// Input: Cat → Output: Meow
// Input: Cow → Output: Moo

let animal = "Dog"; // Example input
switch (animal) {
  case "Dog":
    console.log("Bark");
    break;
  case "Cat":
    console.log("Meow");
    break;
  case "Cow":
    console.log("Moo");
    break;
  case "Lion":
    console.log("Roar");
    break;
  default:
    console.log("Unknown animal sound!");
}

// --------------------------------------------------------------------------------

// 11. Write a program that takes a country name and outputs its capital.
// Examples:

// Input: India → Output: New Delhi
// Input: USA → Output: Washington D.C.
// Input: Japan → Output: Tokyo

let country = "India"; // Example input
switch (country) {
  case "India":
    console.log("New Delhi");
    break;
  case "USA":
    console.log("Washington D.C.");
    break;
  case "Japan":
    console.log("Tokyo");
    break;
  case "France":
    console.log("Paris");
    break;
  default:
    console.log("Unknown country!");
}
// --------------------------------------------------------------------------------

// 12. Write a program that takes a number and an operation (square, cube) as input and outputs the result.
// Examples:

// Input: 5, square → Output: 25
// Input: 3, cube → Output: 27
// Input: 4, cube → Output: 64

let number = 4; // Example input
let operation = "cube"; // Example input

switch (operation) {
  case "square":
    console.log(number * number);
    break;
  case "cube":
    console.log(number * number * number);
    break;
  default:
    console.log("Invalid operation!");
}
// --------------------------------------------------------------------------------

// 13. Write a program that takes the time of day as input and suggests a meal.
// Examples:

// Input: 7 AM → Output: Breakfast
// Input: 1 PM → Output: Lunch
// Input: 8 PM → Output: Dinner

let time = "7 AM"; // Example input
switch (time) {
  case "7 AM":
  case "8 AM":
  case "9 AM":
    console.log("Breakfast");
    break;
  case "12 PM":
  case "1 PM":
  case "2 PM":
    console.log("Lunch");
    break;
  case "7 PM":
  case "8 PM":
  case "9 PM":
    console.log("Dinner");
    break;
  default:
    console.log("Invalid time!");
}
// --------------------------------------------------------------------------------

// 14. Write a program that takes a language (Marathi, Hindi, English) as input and outputs a greeting.
// Examples:

// Input: Marathi → Output: Namaskar
// Input: Hindi → Output: Namaste
// Input: English → Output: Hello

let language = "Hindi"; // Example input
switch (language) {
  case "Marathi":
    console.log("Namaskar");
    break;
  case "Hindi":
    console.log("Namaste");
    break;
  case "English":
    console.log("Hello");
    break;
  default:
    console.log("Invalid language!");
}
// --------------------------------------------------------------------------------

// 15. Write a program that takes a weather condition as input and outputs a suggestion.
// Examples:

// Input: Rainy → Output: Take an umbrella
// Input: Sunny → Output: Wear sunglasses
// Input: Cold → Output: Wear a jacket

let weather = "Rainy"; // Example input
switch (weather) {
  case "Rainy":
    console.log("Take an umbrella");
    break;
  case "Sunny":
    console.log("Wear sunglasses");
    break;
  case "Cold":
    console.log("Wear a jacket");
    break;
  default:
    console.log("Unknown weather condition!");
}

// --------------------------------------------------------------------------------

// 16.  Write a program that takes a shape name as input and outputs its number of sides.
// Examples:

// Input: Triangle → Output: 3 sides
// Input: Square → Output: 4 sides
// Input: Pentagon → Output: 5 sides

let shape = "Square"; // Example input
switch (shape) {
  case "Triangle":
    console.log("3 sides");
    break;
  case "Square":
    console.log("4 sides");
    break;
  case "Pentagon":
    console.log("5 sides");
    break;
  default:
    console.log("Unknown shape!");
}
// --------------------------------------------------------------------------------

// 17.  Write a program that takes the current time as input and outputs a greeting.
// Examples:

// Input: 9 AM → Output: Good Morning
// Input: 2 PM → Output: Good Afternoon
// Input: 8 PM → Output: Good Evening

let currentTime = "8 PM"; // Example input
switch (true) {
  case currentTime.includes("AM"):
    console.log("Good Morning");
    break;
  case ["12 PM", "1 PM", "2 PM", "3 PM", "4 PM"].includes(currentTime):
    console.log("Good Afternoon");
    break;
  case ["5 PM", "6 PM", "7 PM", "8 PM", "9 PM"].includes(currentTime):
    console.log("Good Evening");
    break;
  default:
    console.log("Invalid time!");
}
// --------------------------------------------------------------------------------

// 18.  Write a program that takes the name of a planet and outputs its position from the Sun.
// Examples:

// Input: Earth → Output: 3rd planet from the Sun
// Input: Mercury → Output: 1st planet from the Sun
// Input: Neptune → Output: 8th planet from the Sun

let planet = "Earth"; // Example input
switch (planet) {
  case "Mercury":
    console.log("1st planet from the Sun");
    break;
  case "Venus":
    console.log("2nd planet from the Sun");
    break;
  case "Earth":
    console.log("3rd planet from the Sun");
    break;
  case "Mars":
    console.log("4th planet from the Sun");
    break;
  case "Jupiter":
    console.log("5th planet from the Sun");
    break;
  case "Saturn":
    console.log("6th planet from the Sun");
    break;
  case "Uranus":
    console.log("7th planet from the Sun");
    break;
  case "Neptune":
    console.log("8th planet from the Sun");
    break;
  default:
    console.log("Invalid planet name!");
}
// --------------------------------------------------------------------------------

// 19. Write a program that takes the number of wheels as input and outputs the type of vehicle.
// Examples:

// Input: 2 → Output: Bike or Scooter
// Input: 4 → Output: Car or Jeep
// Input: 18 → Output: Truck

let wheels = 4; // Example input
switch (wheels) {
  case 2:
    console.log("Bike or Scooter");
    break;
  case 4:
    console.log("Car or Jeep");
    break;
  case 18:
    console.log("Truck");
    break;
  default:
    console.log("Unknown vehicle type!");
}
// --------------------------------------------------------------------------------

// 20. Write a program that takes the name of a sport and outputs the equipment used.
// Examples:

// Input: Cricket → Output: Bat and Ball
// Input: Football → Output: Football
// Input: Tennis → Output: Racket and Ball

let sport = "Tennis"; // Example input
switch (sport) {
  case "Cricket":
    console.log("Bat and Ball");
    break;
  case "Football":
    console.log("Football");
    break;
  case "Tennis":
    console.log("Racket and Ball");
    break;
  default:
    console.log("Unknown sport!");
}

