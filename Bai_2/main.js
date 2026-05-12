function xuLyTrungBinh() {
    var n1 = parseFloat(document.getElementById('so1').value);
    var n2 = parseFloat(document.getElementById('so2').value);
    var n3 = parseFloat(document.getElementById('so3').value);
    var n4 = parseFloat(document.getElementById('so4').value);
    var n5 = parseFloat(document.getElementById('so5').value);

    // 2. PROCESS: Kiểm tra xem có ô nào trống (NaN) không
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || isNaN(n5)) {
        document.getElementById('ketQua_B2').innerHTML = "⚠️ Vui lòng nhập đủ 5 số!";
        return;
    }
    var tong = n1 + n2 + n3 + n4 + n5;
    var trungBinh = tong / 5;  
    document.getElementById('ketQua_B2').innerHTML = "Giá trị trung bình: <b>" + trungBinh.toFixed(2) + "</b>";
}