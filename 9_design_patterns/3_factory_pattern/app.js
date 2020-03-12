// Factory patter is a way of creating objects
// Used to create, manage collections of objects

// Member factory - will create objects based on a type

//! Good when we have diffrent objects but they share the same properties and methods

function MemberFactory() {
  this.createMember = function(name, type) {
    let member;
    //Check the type that is passed in
    if (type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }

    //Set the type
    member.type = type;

    //Add method to show the type
    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };

    return member;
  };
}

// Create constructors for member types
const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5';
};

const StandardMembership = function(name) {
  this.name = name;
  this.cost = '$15';
};

const SuperMembership = function(name) {
  this.name = name;
  this.cost = '$25';
};

// Empty object array
const members = [];

// Init the factory object
const factory = new MemberFactory();

members.push(factory.createMember('John', 'simple'));
members.push(factory.createMember('Dawid', 'super'));
members.push(factory.createMember('Piotr', 'standard'));

console.log(members);

members.forEach(function(member) {
  member.define();
});
