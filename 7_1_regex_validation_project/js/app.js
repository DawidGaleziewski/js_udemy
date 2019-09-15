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
        console.log(name.value)
        name.classList.add('is-invalid')
    }else {
        name.classList.remove('is-invalid')
    }
}

function validateZip(){

}

function validateEmail(){

}

function validatePhone(){

}

