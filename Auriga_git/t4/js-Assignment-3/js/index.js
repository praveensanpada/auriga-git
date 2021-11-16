document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault()

    let fName_regex = /^[a-z ,.'-]+$/i;
    let lName_regex = /^[a-z ,.'-]+$/i;
    let Age_regex = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|150)$/;
    let Email_regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    let Number_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let Address_regex = /^[."a-zA-Z0-9- ]{1,50}$/;
    let flag = 0;

    if (document.getElementById("fst-in").value == "") {
        flag = 1;
        document.querySelector(".fName-msg").innerHTML = "Input field can't be empty!"
    }
    else if (!(fName_regex.test(document.getElementById("fst-in").value))) {
        flag = 1;
        document.querySelector(".fName-msg").innerHTML = "Invalid First Name(First Name should be in text)";
        document.getElementById("fst-in").style.border = "2px solid #dc3545";

    }else{
        document.querySelector(".fName-msg").innerHTML = "";
        document.getElementById("fst-in").style.border = "2px solid #4fb3f6";
    }

    if (document.getElementById("scn-in").value == "") {
        flag = 1;
        document.querySelector(".lName-msg").innerHTML = "Input field can't be empty!"
    }
    else if (!(lName_regex.test(document.getElementById("scn-in").value))) {
        flag = 1;
        document.querySelector(".lName-msg").innerHTML = "Invalid Last Name(Last name should be text)";
        document.getElementById("scn-in").style.border = "2px solid #dc3545";
    }else{
        document.querySelector(".lName-msg").innerHTML = "";
        document.getElementById("scn-in").style.border = "2px solid #4fb3f6";
    }

    if (document.getElementById("thrd-in").value == "") {
        flag = 1;
        document.querySelector(".Age-msg").innerHTML = "Input field can't be empty!"
    }
    else if (!(Age_regex.test(document.getElementById("thrd-in").value))) {
        flag = 1;
        document.querySelector(".Age-msg").innerHTML = "Invalid Age(Age Should be between 1-150)";
        document.getElementById("thrd-in").style.border = "2px solid #dc3545";
    }else{
        document.querySelector(".Age-msg").innerHTML = "";
        document.getElementById("thrd-in").style.border = "2px solid #4fb3f6";
    }

    if (document.getElementById("frth-in").value == "") {
        flag = 1;
        document.querySelector(".Email-msg").innerHTML = "Input field can't be empty!"
    }
    else if (!(Email_regex.test(document.getElementById("frth-in").value))) {
        flag = 1;
        document.querySelector(".Email-msg").innerHTML = "Invalid Email";
        document.getElementById("frth-in").style.border = "2px solid #dc3545";
    }else{
        document.querySelector(".Email-msg").innerHTML = "";
        document.getElementById("frth-in").style.border = "2px solid #4fb3f6";
    }

    if (document.getElementById("fth-in").value == "") {
        flag = 1;
        document.querySelector(".Number-msg").innerHTML = "Input field can't be empty!"
    }
    else if (!(Number_regex.test(document.getElementById("fth-in").value))) {
        flag = 1;
        document.querySelector(".Number-msg").innerHTML = "Invalid Phone Number";
        document.getElementById("fth-in").style.border = "2px solid #dc3545";
    }else{
        document.querySelector(".Number-msg").innerHTML = "";
        document.getElementById("fth-in").style.border = "2px solid #4fb3f6";
    }

    if (document.getElementById("sxth-in").value == "") {
        flag = 1;
        document.querySelector(".Address-msg").innerHTML = "Input field can't be empty!"
    }
    else if (!(Address_regex.test(document.getElementById("sxth-in").value))) {
        flag = 1;
        document.querySelector(".Address-msg").innerHTML = "Invalid Address";
        document.getElementById("sxth-in").style.border = "2px solid #dc3545";
    }else{
        document.querySelector(".Address-msg").innerHTML = "";
        document.getElementById("sxth-in").style.border = "2px solid #4fb3f6";
    }

    if (flag == 0) {
        for (let i = 0; i < 6; i++) {
            document.querySelectorAll(".clear")[i].innerHTML = " ";
            document.querySelectorAll("input")[i].value = "";
            document.querySelectorAll("input")[i].style = "none";
        }
        alert("Your Form have been submitted!")
    }
})