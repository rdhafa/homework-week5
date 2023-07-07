class Pendaftar {
  constructor(nama, umur, uang) {
    this.nama = nama;
    this.umur = umur;
    this.uang = uang;
  }
}

const listPendaftar = [];
const pendaftar1 = new Pendaftar("udin", 28, 250000);
const pendaftar2 = new Pendaftar("Mark", 41, 750000);
const pendaftar3 = new Pendaftar("Joko", 34, 800000);
console.log(pendaftar1);
console.log(pendaftar2);
console.log(pendaftar3);
console.log(pendaftar3.nama);
listPendaftar.push(pendaftar1);
listPendaftar.push(pendaftar2);
listPendaftar.push(pendaftar3);
console.log(listPendaftar);

// Get input form & button
const inputNama = document.getElementById("nama");
const inputUmur = document.getElementById("umur");
const inputUang = document.getElementById("uang");
const buttonDaftar = document.getElementById("daftar");

// Insert to array
buttonDaftar.addEventListener("click", () => {
  // const pendaftar1
});

// // Styling when input is not the same as requirement
// inputNama.addEventListener("input", () => {
//   const regex = /([^a-zA-Z\s])+/g;
//   inputNama.value = inputNama.value.replace(regex, "");
//   if (inputNama.value.length < 10) {
//     inputNama.classList.add("need-more");
//     inputNama.classList.remove("form-control");
//     inputNama.classList.add("form-control-need-more");
//   } else {
//     inputNama.classList.remove("need-more");
//     inputNama.classList.remove("form-control-need-more");
//     inputNama.classList.add("form-control");
//   }
// });

// inputUmur.addEventListener("input", () => {
//   const regex = /([^\d])+/g;
//   inputUmur.value = inputUmur.value.replace(regex, "");
//   const intInputUmur = parseInt(inputUmur.value);
//   if (intInputUmur < 25) {
//     inputUmur.classList.add("need-more");
//     inputUmur.classList.remove("form-control");
//     inputUmur.classList.add("form-control-need-more");
//   } else {
//     inputUmur.classList.remove("need-more");
//     inputUmur.classList.remove("form-control-need-more");
//     inputUmur.classList.add("form-control");
//   }
// });

// inputUang.addEventListener("input", () => {
//   const regex = /([^\d])+/g;
//   inputUang.value = inputUang.value.replace(regex, "");
//   console.log(inputUang.value.toLocaleString());
//   const intInputUang = parseInt(inputUang.value);
//   if (intInputUang < 100000 || intInputUang > 1000000) {
//     inputUang.classList.add("need-more");
//     inputUang.classList.remove("form-control");
//     inputUang.classList.add("form-control-need-more");
//   } else {
//     inputUang.classList.remove("need-more");
//     inputUang.classList.remove("form-control-need-more");
//     inputUang.classList.add("form-control");
//   }
// });
// // Styling END

// buttonDaftar.addEventListener("click", () => {
//   let isInputValid = true;
//   const intInputUmur = parseInt(inputUmur.value);
//   const intInputUang = parseInt(inputUang.value);
//   // Handling input error
//   if (inputNama.value.length < 10 || inputNama.value.length === 0) {
//     alert("Nama yang dimasukkan belum memenuhi ketentuan!");
//     isInputValid = false;
//   } else if (intInputUmur < 25 || inputUmur.value.length === 0) {
//     alert("Umur yang dimasukkan belum memenuhi ketentuan!");
//     isInputValid = false;
//   } else if (intInputUang < 100000 || intInputUang > 1000000 || inputUang.value.length === 0) {
//     alert("Jumlah uang yang dimasukkan belum memenuhi ketentuan!");
//     isInputValid = false;
//   }
//   if (isInputValid) {
//     // Insert to table
//     const tBody = document.getElementsByTagName("tbody")[0];
//     const tr = document.createElement("tr");
//     const tdNama = document.createElement("td");
//     const tdUmur = document.createElement("td");
//     const tdUang = document.createElement("td");
//     const jumlahUang = inputUang.value.toLocaleString();
//     const jujumlahUang = jumlahUang.toLocaleString();
//     console.log(jujumlahUang);
//     const valueNama = document.createTextNode(inputNama.value);
//     const valueUmur = document.createTextNode(inputUmur.value);
//     const valueUang = document.createTextNode(`Rp ${jumlahUang},00`);

//     tdNama.appendChild(valueNama);
//     tdUmur.appendChild(valueUmur);
//     tdUang.appendChild(valueUang);
//     tr.appendChild(tdNama);
//     tr.appendChild(tdUmur);
//     tr.appendChild(tdUang);
//     tBody.appendChild(tr);
//     inputNama.value = "";
//     inputUmur.value = "";
//     inputUang.value = "";
//   } else if (!isInputValid) {
//     alert("Mohon koreksi ulang formulir");
//   }
// });
