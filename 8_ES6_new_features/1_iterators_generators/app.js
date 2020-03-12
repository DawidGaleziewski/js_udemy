// es6
// Used to iterated thru something.
// They are like advance loops

// Iterator
function nameIterator(names) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    }
  };
}

// Create array of names
const namesArray = ['Jack', 'Jill', 'John'];
// Init iterator
const names = nameIterator(namesArray);
// Iterator will remember the index and return the next value
console.log(names.next()); //Jack
console.log(names.next()); //Jill
console.log(names.next()); //John
console.log(names.next()); // {done: true}

// Generators - similar but return yield value
// asterisk after function is what tells js this is a generator *
function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

//Those will behave same as iterator above
//It will remember last value used
const namesNew = sayNames();
console.log(namesNew.next());
console.log(namesNew.next());
console.log(namesNew.next());
console.log(namesNew.next());

//ID creator
function* createIDs() {
  let index = 1;
  while (index < 4) {
    yield index++;
  }
}

const gen = createIDs();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
