

//Log Results
function reTest(re, string){
    if(re.test(string)){
        console.log(`${string} matches ${re.source}`)
    } else {
        console.log(`${string} does NOT match ${re}`)
    }
}

function reExec(re, string){
    if(re.exec(string) !== null){
        console.log(`${string} matches ${re.source} on index ${re.exec(string).index}`)
    } else {
        console.log(`${string} does NOT match ${re}`)
    }
}


//Literal characters
reTest(/hello/, 'Hello World') //not match
reTest(/hello/i, 'Hello World') //match
reExec(/hello/, '11hello there') // matches on index 2


//Metacharacter Symbols

//^ carrot - Must start with letter h
reTest(/^h/, 'Hello there') //does not match due to case sensitivity
reTest(/^h/i , 'Hello there') //matches due to /i flag

//$ dollar - Must end with
reTest(/d$/i , 'Hello there D') //matches
reTest(/there$/ , 'Hello there') //matches

    //beggins and end with /honk/
    reTest(/^honk$/i , 'Honk') //matches

//. dot - match any ONE haracters
reTest(/h..k/, 'honk') //number of wild characters has to be two as this is the number of dots here
reTest(/h..k/, 'ho1nk') //This wont match

//* wildcard
reTest(/h*k/, 'hooooooooooooonk') //Matches as those can be any characters between literal characters


// '?' optional character - puts after optional character
        //Eaither h or s will match
reTest(/h?s?ay/, 'say') //Match as s is optional
reTest(/h?s?ay/, 'hay') //Match as h is optional
reTest(/h?s?ay/, 'ay') //Optional includes the scenario when we do not put any of those


// \ - Escaping characters
reTest(/pardon\?/, 'pardon?') //reads the ? as literal character
