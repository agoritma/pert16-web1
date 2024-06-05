var rincianTable = document.getElementById("rincian")
var submitButton = document.getElementById("submit")
var form = document.getElementById("form")

submitButton.addEventListener("click", formSubmit)

function formSubmit() {
    var formData = new FormData(form)
    let kategori = formData.get("kategori")
    let used = formData.get("used")
    
    rincianTable.innerHTML = `<tr><td>Nama Pelanggan</td><td>${formData.get("pelanggan")}</td></tr>`
    rincianTable.innerHTML += `<tr><td>Kategori</td><td>${kategori}</td></tr>`
    rincianTable.innerHTML += `<tr><td>Jumlah Pemakaian</td><td>${used} Kwh</td></tr>`
    rincianTable.innerHTML += `<tr><td>Periode</td><td>${formData.get("s-priode")} - ${formData.get("e-priode")}</td></tr>`

    let abodement;
    let tarif;
    let pajak;
    switch (kategori) {
        case "Sosial":
            abodement = "2200 VA"
            tarif = 1.461
            pajak = 0
            break;
        case "Rumah Tangga":
            abodement = "1300 VA"
            tarif = 1461
            pajak = 10/100
            break;
        case "Industri":
            abodement = "6600 VA"
            tarif = 1671
            pajak = 30/100
            break;
        default:
            abodement = ""
            tarif = 0
            pajak = 0
    }

    rincianTable.innerHTML += `<tr><td>Abodemen</td><td>${abodement}</td></tr>`
    rincianTable.innerHTML += `<tr><td>Tarif Per Kwh</td><td>${tarif}</td></tr>`
    rincianTable.innerHTML += `<tr><td>Pajak</td><td>${pajak*100}%</td></tr>`

    let subTotal = (used * tarif)
    let pajakBeneran = subTotal * pajak
    rincianTable.innerHTML += `<tr><td>Sub total</td><td>Rp ${numberWithCommas(subTotal+pajakBeneran)}</td></tr>`
}

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(",");
}