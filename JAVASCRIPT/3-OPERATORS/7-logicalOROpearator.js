
// OR operator

// || operator mdhe saglya conditions false aastil trch false return honar

// T || T => true
// T || F => true
// F || T => true
// F || F => false


console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


console.log(true || false || true);
// =>       (false || true )
// =>       (true)

console.log(true || false || false);
console.log(false || false || false);
console.log(false || false || true || false);


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

// Mix AND OR operator examples

console.log(fun1() && fun2() || fun3() || fun4());     // =>
console.log(fun1() || fun4() && fun3() || fun4());     // =>


console.log(fun3() && fun2() || fun3() || fun1());     // => 


console.log(fun2() && fun1() || fun1() || fun3());     // =>
// (true && fun1() || fun1() || fun3())
// (true && true   || fun1() || fun3())
// (        true   || fun1() || fun3())

console.log(fun4() || fun4() || fun3() && fun1());     // =>

// explanation = >
// (false || fun4() || fun3() && fun1())
// (false || false || fun3() && fun1())
//          (false || fun3() && fun1())
//          (false || false && fun1())
//          (         false && fun1())


console.log(fun1() || fun2() || fun3() || fun4());     // =>
console.log(fun1() || fun4() || fun3() || fun4());     // =>

console.log(fun4() || fun4() || fun3() || fun1());     // =>
console.log(fun2() || fun1() || fun1() || fun3());     // => 

