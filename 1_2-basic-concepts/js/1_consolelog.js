// ##1 console logging ##
// playing with console.log
// alert('js');
console.log("basic console output");
console.log(123);
console.log(true);
var greeting = "hello there";
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});

// printing data as a table
console.table({a:1, b:2});

// outputing something as a error
console.error("error::Webex now!");

// other way of clearing consoler
console.clear();

// output something as warning
console.warn("Be warned!");


// show how much operation between .time and timeEnd takes
console.time("hello");
    console.log("howdy");
    console.log("howdy");
    console.log("howdy");
    console.log("howdy");
console.timeEnd("hello");

console.clear();
