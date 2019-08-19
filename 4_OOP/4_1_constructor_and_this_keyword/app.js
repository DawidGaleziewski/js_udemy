// Constructor and this keyword - staring from es5 way

// Basic object literal
const brad = {
  name: 'Brad',
  age: 30
}

// console.log(brad);
// console.log(brad.age);

// ### CONSTRUCTOR ### - creating multiple instances of a object

//Person constructor

//1 We declare a function, the name should start with a capital
function Person(name, dob){
  // 2 we use this keyword to set properties of the object
  this.name = name; //This keyword refers to current instance of the object
  // this.age = age
  this.birthday = new Date(dob)

  console.log(this)
}

  //This keyword can be used in global scope
  console.log(this) //this refers to window

//3 We call the constructor by using new keyword
// const tom = new Person('John', 32);

const martin = new Person('Martin', '9-10-1981')

console.log(martin.birthday);
console.clear()


// ###METHODS ###
function Person2(name, dob){
  this.name = name;
  this.birthday = new Date(dob)

  //methods are also declared by this keyword
    //we assign a function to a object key
  this.calcAge = function(){
    const dif = Date.now() - this.birthday.getTime();
    const ageDate = new Date(dif);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}

const ann = new Person2('Ann', '10-10-1990')
console.log(ann.calcAge())



