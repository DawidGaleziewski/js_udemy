// Window is global object
// Window is a global enviroment
// Node uses the same engine which is v8
console.log(window)

// in window object we will find things like
    // alert method
    // close method
    // document object
    // height and width

// WINDOW METHODS/ OBJECTS/ PROPERTIES

window.console.log(123)

// alert
// window.alert('Hello word')

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//     console.log('console log yes')
// } else {
//     console.log('no')
// }


let val;
// Outer height and width
val = window.outerHeight;
console.log(val);

val = window.outerWidth;
console.log(val);

// Inner width - for example it will omit the scroll bars
// It will also not take devtools into consideration!
val = window.innerHeight;
console.log(val);

val = window.innerWidth;
console.log(val);


// SCROLL POINTS - where are you when it comes to scrolling
val = window.scrollY;
console.log(val); //gives 0 as we are on the top

// same can be done on horizontal scroll
// good for sites where you scroll and have animations

console.clear();

// LOCATION OBJECT
val= window.location
console.log(val.hostname);
console.log(val.port);
console.log(val.href);
console.log(val.search) //query search paramethers
    // hostname
    // port used
    // protocol
    // pathname

// redirect
    // window.location.href = 'https://google.com'

// reload page
    // window.location.reload()

console.clear()

// HISTORY OBJECT

    // will take us n number of pages back on our hiostory
    // window.history.go(-2)

    // checking how many pages are there in the history
    val = window.history.length
    console.log(val)
    console.clear()

// NAVIGATOR OBJECT - it has to do with the browser (i.e Chrome, Firefox)
val = window.navigator
console.log(val)
// geolocation
// user agent 
// sorage
// operating system

console.log(val.appName)
console.log(val.appVersion)
console.log(val.language)








