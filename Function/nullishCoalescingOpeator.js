let val1;
val1 = 3 ?? 6
console.log(val1); // here first value assign
val1 = null ?? 6
console.log(val1); // here second value assign ignore null 
val1 = null ?? 60 ?? 42 
console.log(val1); // here second value assign ignore null 