//Creating objects
    //Creating prototypes inside parent object
    //Diffrent prototype methods

const personPrototypes = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
}


//Object.create takes prototypes as arguments
const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Higgins";
mary.age = 30;
console.log(mary.greeting());

mary.getsMarried('Thompson')
console.log(mary.greeting());


//Creating new person
    //Second argument is object with properties of a object instance
const brad = Object.create(personPrototypes, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Sampson'}
})

console.log(mary.greeting());

brad.getsMarried('Thompson')
console.log(brad.greeting());