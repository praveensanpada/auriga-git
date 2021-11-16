
const h3 = document.createElement("h3")
document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault()
    if (document.getElementById("fst-in").value == "") {
        alert("Number and Range can't be Empty!")
    }
    else if (document.getElementById("fst-in").value <= 0) {
        alert("Level can't be Negative or Zero!")
    }
    document.querySelector(".content").innerHTML = " ";
    if (document.getElementById("fst-in").value != "") {
        const elem1 = Number(document.getElementById("fst-in").value);
        for (let itr = 1; itr <= parseInt(elem1); ++itr) {
            setTimeout(function () {
                let p = "";
                for (let j = 1; j <= itr; ++j) {
                    p += j * itr + " ";
                }
                var div = document.createElement('p');
                div.textContent = p;
                div.setAttribute('class', 'res');
                document.querySelector(".content").appendChild(div);
            }, 200 * itr);
        }

    }
})
document.getElementById("rst").addEventListener("click", () => {
    location.reload();
})
