//es6 sdymbols
//Symbols are primitives
//Each symbol is unique
//main purpose of a symbol is for example a unique identifier

//Creating a symbol
//It is NOT 'new Symbol()'
const sym1 = Symbol();
const sym2 = Symbol('sym2'); //We can add identifier to a symbol as a param
console.log(sym1);
console.log(typeof sym1);

//No two symbols can be the same
console.log(Symbol('123') === Symbol('123'));

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');
const myObjs = {};

//This allows us to make sure symbols are unique
myObjs[KEY1] = 'Prop1';
myObjs[KEY2] = 'Prop2';
myObjs['NOT_a_aymbol_key'] = 'Prop3';
console.log(myObjs[KEY1]);

//!important They are not numberable in 'for...in loops'
for (let i in myObjs) {
  console.log(`${i}: ${myObjs[i]}`);
}

//!important symbols are ignored when using json.stringify
console.log(JSON.stringify({ key: 'prop' }));
console.log(JSON.stringify({ [Symbol('sym1')]: 'prop' })); //! ignored
