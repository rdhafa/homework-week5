// Class for OOP
class Pendaftar {
  constructor(nama, umur, uang) {
    this.nama = nama;
    this.umur = umur;
    this.uang = uang;
  }
}

const listPendaftar = [
  new Pendaftar("Elon Masked", 28, 250000),
  new Pendaftar("Mark Jukeberg", 41, 750000),
  new Pendaftar("David Orang", 34, 800000),
];
// OOP section END

// Functions
// Function to show data to table
const populateTable = () => {
  const tBody = document.getElementsByTagName("tbody")[0];
  tBody.innerHTML = "";

  for (let i = 0; i < listPendaftar.length; i++) {
    const pendaftar = listPendaftar[i];

    const tr = document.createElement("tr");
    const tdNo = document.createElement("td");
    const tdNama = document.createElement("td");
    const tdUmur = document.createElement("td");
    const tdUang = document.createElement("td");

    tr.appendChild(tdNo);
    tr.appendChild(tdNama);
    tr.appendChild(tdUmur);
    tr.appendChild(tdUang);
    tBody.appendChild(tr);

    tdNo.textContent = i + 1;
    tdNama.textContent = pendaftar.nama;
    tdUmur.textContent = pendaftar.umur;
    tdUang.textContent = `Rp ${pendaftar.uang},00`;
  }
};

// Function for resume
const generateResume = () => {
  const resume = document.getElementById("resume");

  let uangPendaftar = 0;
  let umurPendaftar = 0;
  for (let i = 0; i < listPendaftar.length; i++) {
    const pendaftar = listPendaftar[i];
    uangPendaftar += pendaftar.uang;
    umurPendaftar += pendaftar.umur;
  }

  const avgUangPendaftar = uangPendaftar / listPendaftar.length;
  const avgUmurPendaftar = umurPendaftar / listPendaftar.length;

  resume.textContent = `Rata-rata pendaftar memiliki uang sangu sebesar Rp ${Math.floor(
    avgUangPendaftar
  )},00 dengan rata-rata umur ${Math.floor(avgUmurPendaftar)} tahun.`;
};

populateTable();
generateResume();

// DOM
// Get input form & button
const inputNama = document.getElementById("nama");
const inputUmur = document.getElementById("umur");
const inputUang = document.getElementById("uang");
const buttonDaftar = document.getElementById("daftar");

// Styling when input is not the same as requirement
inputNama.addEventListener("input", () => {
  const regex = /([^a-zA-Z\s])+/g;
  inputNama.value = inputNama.value.replace(regex, "");
  if (inputNama.value.length < 10) {
    inputNama.classList.add("need-more");
    inputNama.classList.remove("form-control");
    inputNama.classList.add("form-control-need-more");
  } else {
    inputNama.classList.remove("need-more");
    inputNama.classList.remove("form-control-need-more");
    inputNama.classList.add("form-control");
  }
});

inputUmur.addEventListener("input", () => {
  const regex = /([^\d])+/g;
  inputUmur.value = inputUmur.value.replace(regex, "");
  const intInputUmur = parseInt(inputUmur.value);
  if (intInputUmur < 25) {
    inputUmur.classList.add("need-more");
    inputUmur.classList.remove("form-control");
    inputUmur.classList.add("form-control-need-more");
  } else {
    inputUmur.classList.remove("need-more");
    inputUmur.classList.remove("form-control-need-more");
    inputUmur.classList.add("form-control");
  }
});

inputUang.addEventListener("input", () => {
  const regex = /([^\d])+/g;
  inputUang.value = inputUang.value.replace(regex, "");
  const intInputUang = parseInt(inputUang.value);
  if (intInputUang < 100000 || intInputUang > 1000000) {
    inputUang.classList.add("need-more");
    inputUang.classList.remove("form-control");
    inputUang.classList.add("form-control-need-more");
  } else {
    inputUang.classList.remove("need-more");
    inputUang.classList.remove("form-control-need-more");
    inputUang.classList.add("form-control");
  }
});
// Styling END

// Button event
buttonDaftar.addEventListener("click", () => {
  let isInputValid = true;
  const intInputUmur = parseInt(inputUmur.value);
  const intInputUang = parseInt(inputUang.value);

  // Handling input error
  if (inputNama.value.length < 10 || inputNama.value.length === 0) {
    alert("Nama yang dimasukkan belum memenuhi ketentuan!");
    isInputValid = false;
  } else if (intInputUmur < 25 || inputUmur.value.length === 0) {
    alert("Umur yang dimasukkan belum memenuhi ketentuan!");
    isInputValid = false;
  } else if (intInputUang < 100000 || intInputUang > 1000000 || inputUang.value.length === 0) {
    alert("Jumlah uang yang dimasukkan belum memenuhi ketentuan!");
    isInputValid = false;
  }

  // if input is confirmed valid
  if (isInputValid) {
    // Insert to array
    const nama = inputNama.value;
    const umur = +inputUmur.value;
    const uang = +inputUang.value;
    const newPendaftar = new Pendaftar(nama, umur, uang);
    listPendaftar.push(newPendaftar);

    // Asynchronous
    // Callback
    const asingKronus = (doWhat, callback) => {
      setTimeout(() => {
        doWhat();
        setTimeout(() => {
          callback();
        }, 500);
      }, 5000);
    };

    asingKronus(populateTable, () => {
      asingKronus(generateResume, () => {
        alert("Asynchronous DONE.");
      });
    });
    // Callback END

    // Reset form
    inputNama.value = "";
    inputUmur.value = "";
    inputUang.value = "";

    alert("Terima kasih sudah mendaftar! Silahkan lihat list pendaftar.");
  } else if (!isInputValid) {
    alert("Mohon koreksi ulang formulir");
  }
});
// Button event END
