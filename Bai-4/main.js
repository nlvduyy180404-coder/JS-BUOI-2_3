/**
 * Công thức áp dụng:
 * Diện tích = dài * rộng
 * Chu vi = (dài + rộng) * 2
 */

function tinhToan() {
    // 1. Lấy dữ liệu từ các ô input
    var dai = parseFloat(document.getElementById("chieuDai").value);
    var rong = parseFloat(document.getElementById("chieuRong").value);

    // Kiểm tra nếu người dùng chưa nhập số
    if (isNaN(dai) || isNaN(rong)) {
        document.getElementById("ketQua").innerHTML = "Vui lòng nhập đủ 2 số!";
        return;
    }

    // 2. Xử lý tính toán
    var dienTich = dai * rong;
    var chuVi = (dai + rong) * 2;

    // 3. Xuất kết quả ra giao diện
    var hienThi = "Diện tích: " + dienTich + "<br>" +
                  "Chu vi: " + chuVi;
    
    document.getElementById("ketQua").innerHTML = hienThi;
}