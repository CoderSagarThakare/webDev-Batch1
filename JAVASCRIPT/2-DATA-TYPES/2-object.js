
// create user object

const viratAddress = {
    city: "pune",
    village: "katraj",
    tal: "haweli",
    hometown: "near bus stand, santosh nagar",
    pin: 412412
}

// function : we write it outside object
function addition(a, b) {        // a & b are parameters
    return a + b;
}

const user = {
    name: "virat",
    surname: "kohli",
    age: 38,
    phone: 9647373,

    address: viratAddress,              // object contain also object called as nestedObject

    sum: addition,                      // method : we write function inside object

    print: function () {                // method : we write inside the object
        console.log("in print function");
    }
}

console.log("username : ", user.name);              // virat
console.log("users city : ", user.address.city);    // pune

console.log(user.sum(10, 20))                       // 30

user.print()                                        // in print function
