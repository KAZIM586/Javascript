// 1. create a javascript file, using javascript comments, List all the datatypes of Javascript, and specify an example for each of them.


//QUESTION- 1. Specify an example for all the datatypes in Javascript, store the values in a variable, and verify the type of value stored.
// Ans-1:

// 1. String
let str = "First Javascript program";
console.log(typeof(str))

// 2. Number

// (i) integer
let num1 = 4
console.log(typeof(num1))

// (ii).Floating value
let num2 = 4.25
console.log(typeof(num2))

// (iii)Infinity

let num3 = Number.POSITIVE_INFINITY
console.log(typeof(num3))

let num4 = Number.NEGATIVE_INFINITY
console.log(typeof(num4))

// (iv) NOT a Number
let nan = NAN;
console.log(typeof(nan));


// 3.BigInt

let x = BigInt("123456789012345678901234567890");
console.log(typeof(x))

let y = 1234n
console.log(typeof(y))



// 4. Booleans
let a = true;
let b = false;
console.log(typeof(a))
console.log(typeof(b))

// 5. Undefined
let z;
console.log(z);

// 6. Null
let n = null
console.log(n)

// 7. Symbol

let sym = Symbol("Hello Symbol");
console.log(typeof(sym))

// 8. Objects
// (i)  Object
const person = {firstName:"monu", lastName:"kumar"};
console.log(typeof(person))


// Array(ii)
const cars = ["Saab", "Volvo", "BMW"];
console.log(typeof(cars))