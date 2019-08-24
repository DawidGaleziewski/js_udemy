//Protytpes
    //Each object in js has a prototype
    //Prototype is a object itself
    //All objects inherit they properties and methods from prototypes

//Why use prototypes:
 //Adventage of this is that we are not flooding constructor with those methods, we are putting them into prototype
 //Saves memory, methods will get re-declared via constructor method taking up memory

//Object literals will inherit from:
console.log(Object.prototype);

//When we create a object from constructor using Person class. Object will come from Person.prototype


//There is a prototype chain
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName =lastName;
    this.birthday = new Date(dob);
}

//Calculate age - it should be added this way as there is no diffrence between it for any of the instances
  //We can put the method directly in the prototype
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

//Get full name
Person.prototype.getFullName = function (){
    return `${this.firstName} ${this.lastName}`
}

//Gets Married
Person.prototype.getsMaried = function(newLastName){
    this.lastName = newLastName;
}



const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1970');

console.log(mary) //We can see prototype in __proto__ in devtools
console.log(john.calculateAge());
console.log(mary.getFullName());

mary.getsMaried('Kowalski');
console.log(mary);


//Prototype will also have its own prototype
console.log(mary.hasOwnProperty('firstName')); //true
console.log(mary.hasOwnProperty('getFullName')) // false - this is in prototype and not its own property