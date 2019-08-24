//Prototypal inheritance

//Person constructor
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

//Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`
}

const person1 = new Person ('John', 'Doe');
console.log(person1.greeting());


//Customer constructor
function Customer(firstName, lastName, phone, membership){
    //call alows us to call another function from current context
    Person.call(this, firstName, lastName);

    this.phone= phone;
    this.membership = membership;
}

//Inherit person prototype method
Customer.prototype = Object.create(Person.prototype);

//Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-5-555-55', 'Standard');

console.log(customer1);

//Customer greeting - we can overwrite inherited methods
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} from customer`
}

console.log(customer1.greeting())