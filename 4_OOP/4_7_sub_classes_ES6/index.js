//Inherit in ES6
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`
    }
}


//Creating a sub class
    //keyword extends makes this a subclass
    //All methods will get inherited
class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        //Super calls parent class constructor
        super(firstName, lastName); //this is same as this.firstName = firstName
        this.phone= phone;
        this.membership = membership;
    }

    //Adding additional method
    static getMembershipCost(){
        return 500;
    }
}

const john = new Customer('John', 'Doe', '555-555-555', 'standard');
console.log(john);
console.log(john.greeting())
console.log(Customer.getMembershipCost());