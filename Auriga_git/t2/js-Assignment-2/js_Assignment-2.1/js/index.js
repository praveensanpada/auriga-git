const msgFun = (msg) => {
    const h3 = document.createElement("h3")
    // h3.innerHTML = " ";
    h3.innerHTML = msg;
    h3.classList.add("res");
    document.querySelector("main");
    document.querySelector(".content").appendChild(h3);

}

document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault()

    if (document.getElementById("fst-in").value == "" || document.getElementById("scn-in").value == "") {
        alert("Number and Range can't be Empty!")
    }
    else if (document.getElementById("scn-in").value <= 0) {
        alert("Range can't be Negative or Zero!")
    }
    document.querySelector(".content").innerHTML = " ";
    if (document.getElementById("fst-in").value != "" && document.getElementById("scn-in").value != "") {
        const elem1 = Number(document.getElementById("fst-in").value);
        const elem2 = Number(document.getElementById("scn-in").value);
        for (let i = 1; i <= elem2; i++) {
            setTimeout(() => {
                msgFun(`${elem1}X${i} = ${elem1 * i}`);
            }, 500 * i);
        }
    }
})

document.getElementById("rst").addEventListener("click", () => {
    location.reload();
})
