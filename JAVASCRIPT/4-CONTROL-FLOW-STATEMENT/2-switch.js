
// syntax
// proper flow code
// Example without break (Fall-Through)
// Example with Variable in Cases
// Using Functions in switch Cases

let userWant = "pohe";

let menu1 = "vadapav"
let menu2 = "tea"
let menu3 = "pohe"
let menu4 = "idli"

// Nashta center
switch (userWant) {
    case menu1:
        printMenu("Vadapav", 15);
        break;

    case menu2:
        printMenu("tea", 10);
        break;

    case menu3:
        printMenu("pohe", 25);
        break;

    case menu4:
        printMenu("Idli", 35);
        break;

    default: {
        console.log("Ha padarth aaplya ithe nahiye");
        break;
    }
}

function printMenu(menu, price) {
    console.log(menu, price);
}



const user = "night"

switch (user) {
    case "morning":
        console.log("Good morning virat");
        break;

    case "evening":
        console.log("good evening virat");
        break;

    case "afternoon":
        console.log("good afternoon virat");
        break;

    default: {
        console.log("wrong timing");
        break;
    }
}


const grade = ""

switch (grade) {
    case "A":
        console.log("Excellent");
        break;

    case "B":
        console.log("Good");
        break;

    case "C":
        console.log("abhyas kara");
        break;

    default: {
        console.log("napass zala kartya");
        break;
    }
}