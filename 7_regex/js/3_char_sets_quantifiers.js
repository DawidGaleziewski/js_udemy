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


// Brackets [] - Character sets
    //eaither one of those characters has to be matched
reTest(/m[ae]g/, 'meg'); //match due to e
reTest(/m[ae]g/, 'mag'); //match due to a
reTest(/m[ae]g/, 'mog'); //no match due to o
reTest(/m[ae]g/, 'mg'); // unlike ? this wont work. It has to be eatither of the characters, this is NOT optional
reTest(/[GF]rey/, 'Grey');

// ^ Negating with carrot
    //^ inside brackets acts similar to ! in normal javascript
    //[^GF] is match anything BUT those letters
reTest(/[^GF]rey/, 'Grey'); //Will NOT match due to G
reTest(/[^GF]rey/, 'Frey'); //Will NOT match due to F
reTest(/[^GF]rey/, 'Irey'); //Will match due to I

// DO NOT confuse!
    let hasToSTartWith = /^[GF]/ //has to start with eaither G or F
    let symbolCantBE = /[^GF]/  //Letters cant be eaither G or F
    let comboCantStartWith = /^[^GF]/ // Cannot start with eaither G or F letter

// - in brackets - range of characters
reTest(/[A-Z]onk/, 'Honk') //Macthes - [A-Z] is uppercase alphabet
reTest(/[A-Z]onk/, 'honk') //no match due to lowercase h
//Both lowercase and uppercase characters
reTest(/[A-Za-z]onk/, 'honk') //match

//Number ranges
reTest(/[0-9]onk/, '5onk') //match
reTest(/[0-9]onk/, 'honk') //no match

//Number and alpha combo
reTest(/[a-z][0-9]nk/, 'h0nk') // Match


//Quantifiers {} - when we need to repeat our regex character sets multiple times 
    //When using literals it looks at character BEFORE it
    //Letter before must occure as many times as in brackets
reTest(/ho{2}nk/, 'hoonk') //Match
reTest(/ho{2}nk/, 'honk') //No match due to 1xo
reTest(/ho{2}nk/, 'hooonk') //No match due to 3xo

//Quantifiers with ranges
    //From 2 to 4 characters must occur
reTest(/ho{2,4}nk/, 'hoonk') //match due to 2xo
reTest(/ho{2,4}nk/, 'hoooonk') //match due to 4xo
reTest(/ho{2,4}nk/, 'hooonk') //match due to 3xo
reTest(/ho{2,4}nk/, 'hooooonk') //No match due to 5xo


// , quantifiers with coma
    //must occure at least {m,} ammount of times
reTest(/ho{2,}nk/, 'hooooonk') //Match due to o x n where n > 2

// () Parethesies - Grouping
    //combo occuring 3 times
reTest(/([0-9]x){3}/, '3x5x6x')