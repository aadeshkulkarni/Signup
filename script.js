const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");

// Show input error message
function showError(input, message){
    const formControl=input.parentElement;
    formControl.className='form-control error';

    const small=formControl.querySelector('small');
    small.innerText=message;
}
// Check email is Valid
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(input.value).toLowerCase())){
        showSuccess(input);
    }
    else{
        showError(input,"Email is not valid");
    }
}

// Show Success
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';

    const small=formControl.querySelector('small');
    small.innerText='';
}

//Check Required

function checkRequired(inputArr){

    inputArr.forEach(function(input){
            if(input.value.trim()==="")
                showError(input,`${getFieldName(input)} is Required`);
            else
                showSuccess(input);
    });
}

// Check Passwords match

function checkPasswordMatch(input1,input2){
    if(input1.value!==input2.value){
        showError(input2,"Passwords do not match");
    }
}
//Check Length

function checkLength(input, min, max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be atleast ${min} characters`);
    }
    else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`)
    }
    else
    {
        showSuccess(input);
    }
}

// Field Name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

// Event Listeners
form.addEventListener('submit',function(event){
    event.preventDefault();
    
    checkRequired([username,password,password2,email]);
    checkLength(email,3,15);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordMatch(password,password2);
    /* // Method #1
    if(username.value===''){
        showError(username,"Username is required");
    }
    else{
        showSuccess(username);
    }

    if(email.value===''){
        showError(email,"Email is required");
    }
    else if (!isValidEmail(email.value)){
        showError(email,"Email is not valid");
    }
    else{
        showSuccess(email);
    }

    if(password.value===''){
        showError(password,"Password is required");
    }
    else{
        showSuccess(password);
    }

    if(password2.value===''){
        showError(password2,"Password is required");
    }
    else{
        showSuccess(password2);
    } */
});