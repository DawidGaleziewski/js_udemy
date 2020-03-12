// Singleton patter
// Similar to modular pattern
// IIFE, can return only one instance of a object
// Repeated calls to constructors will return same instance
// Has private referance

// When to use?
// You want only one user object at a time
// Have downsides - one point of referance
// Hard to debug

const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({ name: 'Brad' });
    return object;
  }

  return {
    getInstance: function() {
      // Set instance only if it was not yet created
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();
console.log(instanceA);
console.log(instanceA === instanceB); //Same object
