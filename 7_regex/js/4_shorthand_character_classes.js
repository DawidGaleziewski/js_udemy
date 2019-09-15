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
        console.log(`${string} matches ${re.source} on index ${re.exec(string).index} with characters ${re.exec(string)}`)
    } else {
        console.log(`${string} does NOT match ${re}`)
    }
}


//Shorthand character classes

    // w - AlphaNumeric character - can be any leter or number or _
reExec(/\w/, '1est123'); //finds first word character

    //+ symbols meens 'one or more'
    reExec(/\w+/, '1est123')

    reExec(/\w+/, '!') //does not match due to fact ! is not alphaNumeric or a _

// W - Uppercase is a negation - non world characters
reExec(/\W+/, '1est123') //Does not match
reExec(/\W+/, '!!!!???') // Matches

// d - digits
reExec(/\d/, 'h0onk') //Matches due to 0
reExec(/\d/, 'honk') //Does not match
reExec(/\d+/, 'h00nk') //Matches due to 0 on both characters

// D - non digits
reExec(/\D+/, 'honk') // matches on all characters as those are non digits
reExec(/\D+/, 'h11k') //matches only on h
reExec(/\D+/, '123') //Does not match due to fact all are digits

//s - white space characters
reExec(/\s/, 'honk honk') //Matches due to white space
reExec(/\s/, 'honkHonk') //Does not match
reExec(/\s/, ' ') // match
reExec(/\s/, '') // not a match

//S match none white space characters
reExec(/\S/, ' h') //matches due to h

// b - word boundry
reExec(/hell\b/, 'hello, welcome to hell') // normally hell would match hello but with \b it searches for only hell, this will find the match on index 18 and not 1

//Assertions ?
    // = Fallowed by character
reExec(/x(?=y)/, 'xxxxzzzxyz') //Only match x if it is fallowed by y
    // '! not fallowed by
reExec(/x(?!y)/, 'xyxyxxzzzxyz') //Will match only if its not fallowed by y. (we replace = with !)
