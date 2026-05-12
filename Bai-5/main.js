function tinhTong() {
    // 1. Lấy giá trị từ ô input
    var n = parseInt(document.getElementById("numberInput").value);

    // Kiểm tra đầu vào (chỉ xử lý số có 2 chữ số)
    if (isNaN(n) || n < 10 || n > 99) {
        document.getElementById("result").innerHTML = "Vui lòng nhập số từ 10 - 99";
        return;
    }

    // 2. Tách số hàng chục và hàng đơn vị
    // Số hàng chục: Chia cho 10 và làm tròn xuống
    var hangChuc = Math.floor(n / 10);
    
    // Số hàng đơn vị: Chia lấy dư cho 10
    var hangDonVi = n % 10;

    // 3. Tính tổng
    var tong = hangChuc + hangDonVi;

    // 4. Hiển thị kết quả
    document.getElementById("result").innerHTML = 
        "Số hàng chục: " + hangChuc + "<br>" +
        "Số hàng đơn vị: " + hangDonVi + "<br>" +
        "Tổng là: " + tong;
}