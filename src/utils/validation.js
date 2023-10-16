export var flag = false;
export function checkFname() {
    let a = document.getElementById("fname").value;
    if (a === "" || a === null) {
        document.getElementById("fnameval").innerHTML =
            "This field should not be empty";
        document.getElementById("fname").style.borderColor = "Red";
        return false;
    } else if (!/^(?!.*([A-Za-z])\1{3})[A-Za-z]{3,}$/.test(a)) {
        document.getElementById("fnameval").innerHTML =
            "Please enter a valid first name";
        document.getElementById("fname").style.borderColor = "Red";
        return false;
    } else {
        a = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
        document.getElementById("fname").value = a;
        document.getElementById("fnameval").innerHTML = "";
        document.getElementById("fname").style.borderColor = "Black";
        return true;
    }
}

export function checkMname() {
    let a = document.getElementById("mname").value;
    if (a === "" || a === null) {
        document.getElementById("mnameval").innerHTML =
            "This field should not be empty";
        document.getElementById("mname").style.borderColor = "Red";
        return false;
    } else if (!/^(?!.*([A-Za-z])\1{3})[A-Za-z]*$/.test(a)) {
        document.getElementById("mnameval").innerHTML =
            "Please enter a valid middle name or leave it empty";
        document.getElementById("mname").style.borderColor = "Red";
        return false;
    } else {
        a = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
        document.getElementById("mname").value = a;
        document.getElementById("mnameval").innerHTML = "";
        document.getElementById("mname").style.borderColor = "Black";
        return true;
    }
}

export function checkLname() {
    let a = document.getElementById("lname").value;
    if (a === "" || a === null) {
        document.getElementById("lnameval").innerHTML =
            "This field should not be empty";
        document.getElementById("lname").style.borderColor = "Red";
        return false;
    } else if (!/^(?!.*([A-Za-z])\1{3})[A-Za-z]{3,}$/.test(a)) {
        document.getElementById("lnameval").innerHTML =
            "Please enter a valid last name";
        document.getElementById("lname").style.borderColor = "Red";
        return false;
    } else {
        a = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
        document.getElementById("lname").value = a;
        document.getElementById("lnameval").innerHTML = "";
        document.getElementById("lname").style.borderColor = "Black";
        return true;
    }
}

export function checkEmail() {
    let a = document.getElementById("email").value;
    if (a === "" || a === null) {
        document.getElementById("emailval").innerHTML =
            "This field should not be empty";
        document.getElementById("email").style.borderColor = "Red";
        return false;
    } else if (
        !/^[A-Za-z0-9\.\-+]{1,64}@[A-Za-z][A-Za-z0-9\-]{1,183}[A-Za-z]\.[A-Za-z]{2,3}$/.test(
            a
        )
    ) {
        document.getElementById("emailval").innerHTML =
            "Please enter a valid email address";
        document.getElementById("email").style.borderColor = "Red";
        return false;
    } else {
        document.getElementById("email").value = a.toLowerCase();
        document.getElementById("emailval").innerHTML = "";
        document.getElementById("email").style.borderColor = "Black";
        return true;
    }
}

export function checkPass() {
    let a = document.getElementById("pass").value;
    if (a === "" || a === null) {
        document.getElementById("passval").innerHTML =
            "This field should not be empty";
        document.getElementById("pass").style.borderColor = "Red";
        return false;
    } else if (!/^(?=.{6,}$)\w+\W\w+$/.test(a)) {
        document.getElementById("passval").innerHTML =
            "Please enter at least 6 characters for the password<br>starting and ending should be alphabets or _";
        document.getElementById("pass").style.borderColor = "Red";
        return false;
    } else {
        document.getElementById("passval").innerHTML = "";
        document.getElementById("pass").style.borderColor = "Black";
        return true;
    }
}

export function checkConpass() {
    let a = document.getElementById("conpass").value;
    if (a === "" || a === null) {
        document.getElementById("conpassval").innerHTML =
            "This field should not be empty";
        document.getElementById("conpass").style.borderColor = "Red";
        return false;
    } else if (a !== document.getElementById("pass").value) {
        document.getElementById("conpassval").innerHTML =
            "Password and confirm password should be the same";
        document.getElementById("conpass").style.borderColor = "Red";
        return false;
    } else {
        document.getElementById("conpassval").innerHTML = "";
        document.getElementById("conpass").style.borderColor = "Black";
        return true;
    }
}

export function checkAdd() {
    let a = document.getElementById("address").value;
    if (a === "" || a === null) {
        document.getElementById("addressval").innerHTML =
            "This field should not be empty";
        document.getElementById("address").style.borderColor = "Red";
        return false;
    } else if (!/^[\w\s\d\-/.\n]+$/.test(a)) {
        document.getElementById("addressval").innerHTML =
            "Please enter a valid address with whitespace, -, alphabets and digits";
        document.getElementById("address").style.borderColor = "Red";
        return false;
    } else {
        document.getElementById("address").value = a.toUpperCase();
        document.getElementById("addressval").innerHTML = "";
        document.getElementById("address").style.borderColor = "Black";
        return true;
    }
}

export function checknumb() {
    let a = document.getElementById("numb").value;
    if (a === "" || a === null) {
        document.getElementById("numbval").innerHTML =
            "This field should not be empty";
        document.getElementById("number").style.borderColor = "Red";
        return false;
    } else if (!/^[0-9]{10}$/.test(a)) {
        document.getElementById("numbval").innerHTML =
            "Please enter 10 digits for the Mobile Number";
        document.getElementById("number").style.borderColor = "Red";
        return false;
    } else {
        document.getElementById("numbval").innerHTML = "";
        document.getElementById("number").style.borderColor = "Black";
        return true;
    }
}

const d = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
    [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
    [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
    [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
    [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
    [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
    [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
    [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
];

const p = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
    [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
    [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
    [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
    [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
    [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
    [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
];

function validate(aadharNumber) {
    let c = 0;
    let invertedArray = aadharNumber.split("").map(Number).reverse();

    invertedArray.forEach((val, i) => {
        c = d[c][p[i % 8][val]];
    });
    return c === 0;
}

export function checkAadhar() {
    let a = document.getElementById("aadhar").value;
    if (a === "" || a === null) {
        document.getElementById("aadharval").innerHTML =
            "This field should not be empty";
        document.getElementById("aadhar").style.borderColor = "Red";
        return false;
    } else if (!validate(a) || a.length!=12) {
        document.getElementById("aadharval").innerHTML =
            "Please enter a valid Aadhar number";
        document.getElementById("aadhar").style.borderColor = "Red";
        return false;
    } else {
        document.getElementById("aadharval").innerHTML = "";
        document.getElementById("aadhar").style.borderColor = "Black";
        return true;
    }
}

export function sub() {
    flag =
        checkFname() &&
        checkMname() &&
        checkLname() &&
        checkAdd() &&
        checknumb() &&
        checkAadhar();
}
