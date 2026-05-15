function validasi_nama(variabel) {
    const regeg = /\d/
    return regeg.test(variabel)
}


function validasi_no (variabel) {
    const regex = /^\d{11,12}/
    return regex.test(variabel)
}







const form = document.forms[0]
const inputnama = form.querySelector("input[name='nama']")
const inputhp = form.querySelector("input[name='no_hp']")
const inputalamat_w = form.querySelector("input[name='alamat_w']")
const inputalamat_t = form.querySelector("input[name='alamat_t']")




form.addEventListener("submit", function(e) {
    e.preventDefault()

    const nama = inputnama.value
    const no_hp = inputhp.value

    
    const container_hp = document.getElementById("error_massage_hp")
    container_hp.innerHTML = "" 
    
    
    let msg_hp = document.createElement("p") 

    if (no_hp.length === 0) {
        msg_hp.style.color = "red"
        msg_hp.innerText = "No tidak boleh kosong"
    } else if (!validasi_no(no_hp)) { 
        msg_hp.style.color = "red"
        msg_hp.innerText = "Berikan nomor yang valid (11-12 angka) (jangan ada huruf)"
    } else {
        msg_hp.style.color = "green"
        msg_hp.innerText = "Nomor sukses dimasukkan"
    }
    container_hp.append(msg_hp)

    
    const container_nama = document.getElementById("error_massage_nama")
    container_nama.innerHTML = ""
    
    let msg_nama = document.createElement("p")

    if (nama.length === 0) {
        msg_nama.style.color = "red"
        msg_nama.innerText = "Nama tidak boleh kosong"
    } else if (validasi_nama(nama)) {
        msg_nama.style.color = "red"
        msg_nama.innerText = "Nama tidak boleh berisi angka"
    } else {
        msg_nama.style.color = "green"
        msg_nama.innerText = "Nama sukses dimasukkan"
    }
    container_nama.append(msg_nama)
})