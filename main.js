document.getElementById('btn').addEventListener("click", function(){
    let input = document.getElementById('input').value;
    let typeNumber = 4;
    let errorCorrectionLevel = 'L';
    let qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(input);
    qr.make();
    document.getElementById('qrCode').innerHTML = qr.createImgTag();
});