/**
 * Bài 1: Tính tiền lương nhân viên
 */

document.getElementById('btnTinhTien').onclick = function() {
    // 1. INPUT
    var luongMotNgay = 100000;
    var soNgayLam = document.getElementById('soNgay').value;

    // 2. PROCESS
    // Chuyển đổi từ chuỗi sang số và tính toán
    var tongLuong = Number(soNgayLam) * luongMotNgay;

    // Định dạng tiền tệ VND (ví dụ: 1.000.000)
    var formatVND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(tongLuong);

    // 3. OUTPUT
    document.getElementById('txtKetQua').innerHTML = "Tổng lương của bạn là: " + formatVND;
};