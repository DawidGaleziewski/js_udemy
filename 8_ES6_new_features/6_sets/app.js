// Sets - list of unique values, primitive or reference
const set1 = new Set();

//add values to set

set1.add(100);
set1.add(100); // Wont be added
set1.add(100); // Wont be added
set1.add('test');
set1.add({ name: 'john' });
set1.add({ name: 'john' }); // Will be added as it is object and has diffrent referance
set1.add(true);

console.log(set1);

//Can add multiple items as array
const set2 = new Set(['test1', 'test2', 'test3']);
console.log(set2);

//Get count
console.log(set1.size);

//Check for values
console.log(set1.has(100));
console.log(set1.has({ name: 'john' })); //false as it is a referance

// Delete from the set
set1.delete(100);
console.log(set1);

//Set iteration
for (let item of set1) {
  console.log(`Iteration: ${item}`);
}

//Sets are not key - value pairs

//Converting set to array
const setArr = Array.from(set1);
console.log(setArr);
