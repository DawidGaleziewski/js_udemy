// New datastructure introduced in es6
// Holds key value pairs
// Any value (object, primitive) can be use a kay or as a value

const map1 = new Map();

// Set Keys
const key1 = 'some string',
  key2 = {},
  key3 = function() {};

// Set map values by key
map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');

console.log(map1);
// Get a particular key
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

// Show size of a map
console.log(map1.size);

// Map iteration - for.. of for keys and values
for (let [key, value] of map1) {
  console.log(`Iteration of key:: ${key}, and value:: ${value}`);
}

//Just keys iteration
for (let key of map1.keys()) {
  console.log(`Iteration of key:: ${key}`);
}

//Just values iteration
for (let value of map1.values()) {
  console.log(`Iteration of value:: ${value}`);
}

//forEach works on maps
map1.forEach(function(value, key) {
  console.log(`forEach Iteration of key:: ${key}, and value:: ${value}`);
});

//Converting maps to arrays
const keyValArray = Array.from(map1);
console.log('Array from map', keyValArray);

//Converting values to array
const valArray = Array.from(map1.values());
console.log(valArray);

//Converting keys to array
const keyArray = Array.from(map1.keys());
console.log(keyArray);
