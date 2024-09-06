document.addEventListener('DOMContentLoaded', function() {
    // QRCode.js'nin yüklendiğini kontrol ediyoruz
    console.log("QRCode.js yüklendi mi?:", typeof QRCode !== 'undefined');

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tabs) {
        let url = tabs[0].url;

        // chrome:// URL'leri kontrol etme
        if (url.startsWith('chrome://')) {
            alert('QR codes cannot be generated for chrome:// URLs.');
            return;
        }

        // QR kodu ve tarih/saat bilgisini birleştiriyoruz
        let currentDateTime = new Date();
        let dateTimeString = currentDateTime.toLocaleString();  // Tarih ve saat formatında
        let qrText = `URL: ${url}\nTarih: ${dateTimeString}`;

        // QR kodunu bir div içinde oluşturuyoruz
        let qrDiv = document.createElement('div');
        let qrcode = new QRCode(qrDiv, {
            text: qrText,
            width: 200,  // Boyutu küçülttük
            height: 200,
            correctLevel: QRCode.CorrectLevel.H
        });

        // QR kod img elementini alıp sayfaya ekleyelim
        let qrImage = qrDiv.querySelector('img');
        let qrCanvas = document.getElementById("qrCanvas");
        if (qrImage) {
            qrCanvas.replaceWith(qrImage);  // QR kod img elementini canvas yerine koyuyoruz
        } else {
            alert('QR code could not be generated, please try again.');
        }

        // QR kod oluşturulma tarih ve saatini ekrana yazdırıyoruz
        document.getElementById('dateTimeDisplay').innerText = `QR Code Created Date: ${dateTimeString}`;

        // İlk buton: URL, tarih ve saat bilgilerini clipboard'a kopyalama
        document.getElementById('copyButton').addEventListener('click', function() {
            let copyText = `URL: ${url}\nTarih: ${dateTimeString}`;
            navigator.clipboard.writeText(copyText).then(function() {
                alert('URL and Date/Time information have been stored successfully.');
            }, function() {
                alert('The information could not be copied.');
            });
        });

        // İkinci buton: QR kodunu indirme
        document.getElementById('downloadButton').addEventListener('click', function() {
            const downloadLink = document.createElement('a');
            downloadLink.href = qrImage.src;  // QR kod img elementinin kaynağını kullanarak indiriyoruz
            downloadLink.download = 'qr_code_with_date.png';
            downloadLink.click();
        });
    });
});
