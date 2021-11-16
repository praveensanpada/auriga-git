const char_regex = /.{8,}/;
const uprChar_regex = /(?=.*?[A-Z])/;
const num_regex = /(?=.*?[0-9])/;
const spec_regex = /(?=.*?[#?!@$%^&*-])/;

const pass_gnrt = (cls, cls_color, border, msg, msg_color, blk, spn_color) => {
    document.querySelector(`.${cls}`).style.color = `${cls_color}`;
    document.querySelector("input").style.border = `${border}`
    document.querySelector(".pass-msg").innerHTML = `${msg}`
    document.querySelector(".pass-msg").style.color = `${msg_color}`;
    document.querySelector(".inner-blk").style.cssText = `${blk}`
    document.querySelector("span").style.borderColor = `${spn_color}`
}


document.querySelector("input").addEventListener("input", () => {
    if (char_regex.test(document.querySelector("input").value)) {
        flag = 1;
        console.log("first-if")
        pass_gnrt("item-1", "#28a745", "2px solid #dc3545", "Your Password is week!", "#dc3545", "width : 25%; background-color:#dc3545;", "#dc3545");
        document.querySelector(".item-2").style.color = "#4fb3f6";
    }
    else {
        for (let i = 0; i < 4; i++) {
            document.querySelectorAll(".elem")[i].style.color = "#4fb3f6";
        }
        document.querySelector("input").style.border = "2px solid #4fb3f6"
        document.querySelector(".inner-blk").style.cssText = "width :0%;"
        document.querySelector(".pass-msg").innerHTML = ""
        document.querySelector("span").style.borderColor = " #4fb3f6"
    }

    if (uprChar_regex.test(document.querySelector("input").value) && (char_regex.test(document.querySelector("input").value))) {

        flag = 1
        pass_gnrt("item-2", "#28a745", "2px solid #ffc107", "Your Password is moderate!", "#ffc107", "width : 50%; background-color:#ffc107;", "#ffc107")
        document.querySelector(".item-3").style.color = "#dc3545";
        document.querySelector(".item-4").style.color = "#dc3545";
    }
    else if (uprChar_regex.test(document.querySelector("input").value)) {
        document.querySelector(".item-2").style.color = "#28a745";
    }
YYYYYYYYYYYYYYY
    if (uprChar_regex.test(document.querySelector("input").value) && (char_regex.test(document.querySelector("input").value)) && num_regex.test(document.querySelector("input").value)) {

        flag = 1
        pass_gnrt("item-3", "#28a745", "2px solid #92FA86", "Your Password is moderately strong!", "#92FA86", "width : 75%; background-color:#92FA86;", "#92FA86")
        document.querySelector(".item-4").style.color = "#dc3545";
    }
    else if (num_regex.test(document.querySelector("input").value)) {
        document.querySelector(".item-3").style.color = "#28a745";
    }

    if (uprChar_regex.test(document.querySelector("input").value) && (char_regex.test(document.querySelector("input").value)) && num_regex.test(document.querySelector("input").value) && spec_regex.test(document.querySelector("input").value)) {

        flag = 1
        pass_gnrt("item-4", "#28a745", "2px solid #28a745", "Congratulations You have created a strong Password!", "#28a745", "width : 100%; background-color:#28a745;", "#28a745")
    }
    else if (spec_regex.test(document.querySelector("input").value)) {
        document.querySelector(".item-4").style.color = "#28a745";
    }
})

document.querySelector("span").addEventListener("click", () => {
    elem = document.querySelector("input");
    console.log(elem)
    if (elem.type == "password") {
        elem.type = "text";
    }
    else {
        elem.type = "password";
    }
})

document.getElementById("#btn").addEventListener("click", () => {
    location.reload();
})