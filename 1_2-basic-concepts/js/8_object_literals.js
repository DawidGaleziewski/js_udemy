// define a object literal
    const person = {
        firstName: 'Steve',
        lastName: 'Ervin',
        email: 'steve@eol.com',
        age: 30,

        // arrays in objects
        hobbies: ['music', 'sports'],

        // object inside a object
        address: {
            city: 'Miami',
            state:'Florida'
        },

        // functions
        getBirthYear: function (){
            // when accessing object values inside object you need this keyword
            return 2017 - this.age
        }

    }

    // gey value by key
    console.log(person.firstName);

    // other syntax
    console.log(person['firstName']);

    // accessing functions (methods)
    console.log(person.getBirthYear());
    console.log(person.hobbies);
    console.log(person.address.state)


// arrays of objects are quite popular
const people = [
    {name: 'John', age: 30},
    {name: 'Steve', age: 40},
    {name: 'Dawid', age: 22}
]

// loopint thru array
for(let i = 0; i< people.length; i++){
    console.log(people[i].age)
}