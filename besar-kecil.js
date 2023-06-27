let nilaiArr = [];

const inputNilaiEl = document.getElementById('inputNilai');
const btnTambahEl = document.getElementById('btnTambah');
const nilaiTerbesarEl = document.getElementById('nilaiTerbesar');
const nilaiTerkecilEl = document.getElementById('nilaiTerkecil');
const btnSortAscEl = document.getElementById('btnSortAsc');
const btnSortDescEl = document.getElementById('btnSortDesc');
const tableBodyEl = document.getElementById('tableBody');
const btnResetEl = document.getElementById('btnReset');


btnTambahEl.addEventListener('click', tambahNilai);
btnSortAscEl.addEventListener('click', urutkanNilaiAscending);
btnSortDescEl.addEventListener('click', urutkanNilaiDescending);
btnResetEl.addEventListener('click', resetNilai);


function tambahNilai() {
  const nilai = parseInt(inputNilaiEl.value);
  if (!isNaN(nilai)) {
    nilaiArr.push(nilai);
    inputNilaiEl.value = '';
    updateTable();
    hitungNilaiTerbesar();
    hitungNilaiTerkecil();
  }
}

function updateTable() {
  tableBodyEl.innerHTML = '';
  nilaiArr.forEach((nilai, index) => {
    const row = document.createElement('tr');
    const cellIndex = document.createElement('td');
    const cellNilai = document.createElement('td');
    cellIndex.textContent = index + 1;
    cellNilai.textContent = nilai;
    row.appendChild(cellIndex);
    row.appendChild(cellNilai);
    tableBodyEl.appendChild(row);
  });
}

function hitungNilaiTerbesar() {
  const terbesar = Math.max(...nilaiArr);
  nilaiTerbesarEl.textContent = isNaN(terbesar) ? '-' : terbesar;
}

function hitungNilaiTerkecil() {
  const terkecil = Math.min(...nilaiArr);
  nilaiTerkecilEl.textContent = isNaN(terkecil) ? '-' : terkecil;
}

function urutkanNilaiAscending() {
  nilaiArr.sort((a, b) => a - b);
  updateTable();
}

function urutkanNilaiDescending() {
  nilaiArr.sort((a, b) => b - a);
  updateTable();
}

function resetNilai() {
  nilaiArr = [];
  updateTable();
  hitungNilaiTerbesar();
  hitungNilaiTerkecil();
}
