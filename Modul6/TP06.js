function hitungSubtotal() {
    let totalHarga = 0;
    let totalBarang = 0;

    $('.subtotal_input').each(function () {
        const harga = parseFloat($(this).closest('tr').find('.harga_barang_input').val()) || 0;
        const jumlah = parseFloat($(this).closest('tr').find('.jumlah_barang_input').val()) || 0;
        const subtotalBarang = jumlah
        const subtotal = harga * jumlah;
       

        $(this).val(subtotal.toFixed());
        totalHarga += subtotal;
        totalBarang += subtotalBarang;
    });

    $('#totalHarga').text(totalHarga.toFixed());
    $('#totalBarang').text(totalBarang);
}

$(document).ready(function () {
    $('#tambahBarang').click(function () {
        $('#tabelBarang').append(`
            <tr>
                <td><input type="text" name="nama_barang[]" required></td>
                <td><input type="number" name="harga_barang[]" class="harga_barang_input" required></td>
                <td><input type="number" name="jumlah_barang[]" class="jumlah_barang_input" required></td>
                <td><input type="number" name="subtotal[]" class="subtotal_input" readonly></td>
                <td><input type="button" value="Hapus" class="hapus_button"></td>
            </tr>
        `);
    });

    $('#formOrder').on('click', '.hapus_button', function () {
        $(this).closest('tr').remove();
        console.log($(this))
        hitungSubtotal();
    });

    $('#formOrder').on('input', '.harga_barang_input, .jumlah_barang_input', function () {
        hitungSubtotal();
    });
});