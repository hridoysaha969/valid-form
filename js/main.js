let signIn = document.getElementById('signIn');
let signUp = document.getElementById('signUp');
let signInBox = document.getElementById('signInBox');
let signUpBox = document.getElementById('signUpBox');

signIn.addEventListener('click', function (e) {
    e.preventDefault();
    signInBox.classList.remove('show');
    // console.log('Class removed from sign in box');
    signUpBox.classList.add('show');
    // console.log('Class added into sign up box');
});
signUp.addEventListener('click', function (e) {
    e.preventDefault();
    signInBox.classList.add('show');
    // console.log('Class added into sign in box');
    signUpBox.classList.remove('show');
    // console.log('Class removed from sign in box');
});

// ===== Form Validatyon =====
const fisrtName = document.getElementById('fName');
const lasttName = document.getElementById('lName');
const emailInp = document.getElementById('email');
const phone = document.getElementById('phone');
const passWord = document.getElementById('pass');
const confirmPass = document.getElementById('confPass');
let validFirstName = false;
let validLastName = false;
let validEmail = false;
let validPhone = false;
let validPass = false;

// Validation of First Name
fisrtName.addEventListener('blur', function () {
    // console.log('Name blurred');
    let regex = /^[a-zA-Z]([a-zA-Z]){1,15}$/;
    let str = fisrtName.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Perfect');
        fisrtName.classList.remove('invaild');
        validFirstName = true;
    } else {
        // console.log('Invalid Name');
        fisrtName.classList.add('invaild');
        validFirstName = false;
    }
});
// Validation of Last Name
lasttName.addEventListener('blur', function () {
    // console.log('last Name blurred');
    let regex = /^[a-zA-Z]([a-zA-Z]){1,15}$/;
    let str = lasttName.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Perfect');
        lasttName.classList.remove('invaild');
        validLastName = true;
    } else {
        // console.log('Invalid Name');
        lasttName.classList.add('invaild');
        validLastName = false;
    }
});
// Validation of Email Name
emailInp.addEventListener('blur', function () {
    // console.log('Email blurred');
    let regex = /^([_\-\.0-9a-zA-z]+)@([_\-\.0-9a-zA-z]+)\.([a-zA-Z]){1,7}$/;
    let str = emailInp.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Perfect');
        emailInp.classList.remove('invaild');
        validEmail = true;
    } else {
        // console.log('Invalid Email');
        emailInp.classList.add('invaild');
        validEmail = false;
    }
});
// Validation of Phone Name
phone.addEventListener('blur', function () {
    // console.log('Phone blurred');
    let regex = /^([0-9]){11}$/;
    let str = phone.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Perfect');
        phone.classList.remove('invaild');
        validPhone = true;
    } else {
        // console.log('Invalid Email');
        phone.classList.add('invaild');
        validPhone = false;
    }
});

// ===== Confirm Password =====
confirmPass.addEventListener('blur', function() {
    let passValue = passWord.value;
    let checkPass = confirmPass.value;
    // console.log(passValue, checkPass);
    if (passValue === checkPass) {
        confirmPass.classList.remove('invaild');
        validPass = true;
    } else {
        confirmPass.classList.add('invaild');
        validPass = false;
    }
})


let submitForm = document.getElementById('submitForm');
submitForm.addEventListener('click', function (e) {
    e.preventDefault();
    // console.log('Form Submitted');
    if (validFirstName && validLastName && validEmail && validPhone && validPass) {
        console.log('Congratulation')
        let success = document.getElementById('success');
        success.classList.add('open');
        failed.classList.remove('open');
    } else {
        console.log('Better luck next time')
        let failed = document.getElementById('failed');
        failed.classList.add('open');
        success.classList.remove('open');
    }

})

let timesSuccess = document.getElementById('timeOne');
let timesFailed = document.getElementById('timeTwo');

timesSuccess.addEventListener('click', function() {
    success.classList.remove('open');
})
timesFailed.addEventListener('click', function() {
    failed.classList.remove('open');
})