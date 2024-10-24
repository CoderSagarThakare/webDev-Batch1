// AND (&&)

// && operator mdhe saglya conditions true aastil trch true return honar

// T && T => T
// T && F => F
// F && T => F
// F && F => F


// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);


function fun1() {
    console.log("in fun1")
    return true;
}

function fun2() {
    console.log("in fun2")
    return true;
}

function fun3() {
    console.log("in fun3")
    return false;
}

function fun4() {
    console.log("in fun4")
    return false;
}


// console.log(fun1() && fun2() && fun3() && fun4());     // =>
// console.log(fun1() && fun4() && fun3() && fun4());     // =>
// console.log(fun4() && fun4() && fun3() && fun1());     // =>
// console.log(fun2() && fun1() && fun1() && fun3());     // => 

// console.log(fun2() && fun1() && fun1() && fun3());     // => 



//  T&&T => True 

const student = {
    ten: 65,
    twelve: 50
};

if (student.ten > 60 && student.twelve > 60) {
    console.log("apple macbook bhetla")
} else {
    console.log("kahich bhetnar nahi");
}
