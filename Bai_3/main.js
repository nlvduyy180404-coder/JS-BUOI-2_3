/**
 * Bài 3: Quy đổi tiền USD sang VND
 */
document.getElementById('btnExchange').onclick = function() {
    var usdAmount = document.getElementById('usdValue').value;
    var exchangeRate = 23500;
    if (usdAmount === "") {
        alert("Vui lòng nhập số tiền USD!");
        return;
    }
    var vndResult = Number(usdAmount) * exchangeRate;
    var formattedVND = new Intl.NumberFormat('vi-VN').format(vndResult);
    var resultDiv = document.getElementById('txtResult');
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "Số tiền quy đổi: " + formattedVND + " VND";
};