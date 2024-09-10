const row = document.getElementById("row")

function addrow(){
    let tr = document.createElement("tr")

    let td = document.createElement("td")
    td.textContent = "new cell 1"

    let tdn = document.createElement("td")
    tdn.textContent = "new cell 2"

    tr.appendChild(td);
    tr.appendChild(tdn);
    row.appendChild(tr);
}