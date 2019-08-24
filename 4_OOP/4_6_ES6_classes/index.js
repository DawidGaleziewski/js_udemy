//ES6 syntax
//This is only syntax shugar and wont affect the effect

//Use class keyword
class Person {
    //We use constructor to add properties
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob)
    }

    //Any method we add here will get added to the prototype.
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    getsMarried(newLastName){
        this.lastName = newLastName
    }
}

const mary = new Person('Marry', 'Williams', '11-13-1980');
console.log(mary);
console.log(mary.calculateAge());
mary.getsMarried('Simphson');

console.log(mary)


//Static methods - methods that can be called without class instance
    //We use the method on the class name
    
class Greeting{
    static greet(firstName, lastName){
        return `Hello there ${firstName} ${lastName}`
    }
}

console.log(Greeting.greet('Lu', 'Xin'))
