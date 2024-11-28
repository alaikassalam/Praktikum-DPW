const orderForm = document.getElementById('formOrder');
const totalHargaSpan = document.getElementById('totalHarga');

function hitungSubtotal() {
    const subtotalInputs = document.getElementsByClassName('subtotal_input');
    const hargaInputs = document.getElementsByClassName('harga_barang_input');
    const jumlahInputs = document.getElementsByClassName('jumlah_barang_input');
    let totalHarga = 0;

    for (let i = 0; i < subtotalInputs.length; i++) {
        const harga = parseFloat(hargaInputs[i].value);
        const jumlah = parseFloat(jumlahInputs[i].value);
        const subtotal = harga * jumlah;

        subtotalInputs[i].value = subtotal.toFixed();
        totalHarga += subtotal;
    }

    totalHargaSpan.textContent = totalHarga.toFixed();
}

orderForm.addEventListener('click', function (event) {
    if (event.target.id === 'tambahBarang') {
        const tabelBarang = document.getElementById('tabelBarang');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><input type="text" name="nama_barang[]" class="nama_barang_input" required></td>
            <td><input type="number" name="harga_barang[]" class="harga_barang_input" required></td>
            <td><input type="number" name="jumlah_barang[]" class="jumlah_barang_input" required></td>
            <td><input type="number" name="subtotal[]" class="subtotal_input" readonly></td>
            <td><input type="button" value="Hapus" class="hapus_button"></td>
        `;
        tabelBarang.appendChild(newRow);
    }

    if (event.target.classList.contains('hapus_button')) {
        const btn = event.target;
        const tr = btn.closest('tr');
        tr.remove();
    }

    hitungSubtotal();
});

orderForm.addEventListener('input', function (event) {
    if (event.target.classList.contains('harga_barang_input') || event.target.classList.contains('jumlah_barang_input')) {
        hitungSubtotal();
    }
});