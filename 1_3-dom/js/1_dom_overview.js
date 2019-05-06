// selecting elements directly is not recomended but still worth knowing
let val;

// ! difrent structures:
    // html collection, it looks like array but is not. forEach wont work on it
    // node list - also like arrays - can use forEach on them


// document.all - gives html collection
val = document.all;
// html collection allows us to access elements using index
val = document.all[6];

// it will accept length method just like array
val = document.all.length;

// we can use .object notation to get to certain elements of the dom
val = document.body;

// we can get domain (or ip)
val = document.domain;

val = document.URL;

val = document.contentType;
console.log(val);


// Selecting elements without selectors (not recomanded!)
val = document.forms[0]; //select all forms in a HTML collection
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action

val = document.links
val = document.links[0].className //classes - string of classes
val = document.links[0].classList // collection of classes

val = document.images

val = document.scripts
val = document.scripts[2].getAttribute('src') //getting specific attribute
console.log(val);
console.clear();

// html collection - turning into array
let scripts = document.scripts
console.log(scripts)

let scriptsArray = Array.from(scripts)
console.log(scriptsArray)

// we can use this if we want to loop thru it
scriptsArray.forEach(script => {
    console.log(script.getAttribute('src'))
})
