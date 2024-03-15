// tugasnya adalah lengkapi kode pada latihan dan tampilkan hasilnya ada pada HTML
// 1. isian nama
// 2. isian pekerjaan
// 3. isian Hobby

console.log('form submitted');

// document.getElementById('tugas3script').addEventListener('submit', function(event) {
//     event.preventDefault();
//     let nama = document.getElementById('nama').value;
//     let pekerjaan = document.getElementById('pekerjaan').value;
//     let hobby = document.getElementById('hobby').value;

//     let namaOutput = document.getElementById('namaOutput');
//     let pekerjaanOutput = document.getElementById('pekerjaanOutput');
//     let hobbyOutput = document.getElementById('hobbyOutput');

//     namaOutput.innerHTML = nama;
//     pekerjaanOutput.innerHTML = pekerjaan;
//     hobbyOutput.innerHTML = hobby;
// });

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tugas3script').addEventListener('submit', function(event) {
        event.preventDefault();
        let nama = document.getElementById('nama').value;
        let pekerjaan = document.getElementById('pekerjaan').value;
        let hobi = document.getElementById('hobi').value;

        let result = document.getElementById('results');
        let output = document.getElementById('output');
        let namaOutput = document.getElementById('namaOutput');
        let pekerjaanOutput = document.getElementById('pekerjaanOutput');
        let hobbyOutput = document.getElementById('hobiOutput');

        result.style.display = 'block';
        output.innerHTML = 'Form Submitted Berikut Hasilnya';
        namaOutput.innerHTML = 'Nama :' + nama;
        pekerjaanOutput.innerHTML = 'Pekerjaan :' + pekerjaan;
        hobbyOutput.innerHTML = 'Hobi :' + hobi;

    });
});