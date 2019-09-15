//We want the validation to be done as soon as we do not focus on the input value, that is blure
document.getElementById('name').addEventListener('blur', validateName);

document.getElementById('zip').addEventListener('blur', validateZip);

document.getElementById('email').addEventListener('blur', validateEmail);

document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(){
    const name = document.getElementById('name');
    //name will have to be all letters of alphabet both upper and lowercase.
    //Name length has to be 2-10 characters
    //^$ is so that whole string from beggining to the end has to follow this pattern
    //space in {2,10} causes a lot of havoc
    const regularExpression = /^[a-zA-Z]{2,10}$/;

    if(!regularExpression.test(name.value)){

        name.classList.add('is-invalid')
    }else {
        name.classList.remove('is-invalid')
    }
}

function validateZip(){
    const zip = document.getElementById('zip');

    // //For polsih format ie 02-703
    // const regularExpressionZipPl =/^\d{2}-\d{3}$/;

    // //For US format
    // const regularExpressionZipUSA = /^\d{5}$/

    const regularExpression = /^[0-9]{5}(-[0-9]{4})?$/;

    if(!regularExpression.test(zip.value)){
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid')
    }
}

function validateEmail(){
    const email = document.getElementById('email');
    //Expression explanation:
        //([a-zA-Z0-9_\-\.]+) 
            //Search for alphanumeric characters both cases [a-zA-Z0-9]
            //Also for: _ , -, . [_\-\.]
            //For more than one of those []+
        //literal at between two groups ()@()
        //again same pattern in group ([a-zA-Z0-9_\-\.]+)
        //Literal dot escaped \.
        //.com and other addr- ([a-zA-Z]{2,5})

    const regularExpression = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!regularExpression.test(email.value)){
        email.classList.add('is-invalid');
    }else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone(){
    const phone = document.getElementById('phone');
    //const regularExpression = /^(\+?\d{1,3}-)?\d{3}\-?\d{3}$/;
    //Accepted formats will be
        //555555555
        //555 555 5555 - [-. ]? optional space
        //555-555-5555 - [-. ]? optional dash separator
        //555.555.5555 - [-. ]? optional dot seperator
        //(555)555.5555 - chandles optional () for 3 first digits \(? \)?

    const regularExpression = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if(!regularExpression.test(phone.value)){
        phone.classList.add('is-invalid');
    }else {
        phone.classList.remove('is-invalid');
    }
}

