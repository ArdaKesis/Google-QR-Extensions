document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
        let url = tabs[0].url;

        // QR kodu oluşturmak
        let qrcode = new QRCode(document.getElementById("qrcode"), {
            text: url,
            width: 128,
            height: 128
        });

        // Tarih ve saati eklemek
        let now = new Date();
        let dateTimeString = now.toLocaleString();
        document.getElementById('datetime').innerText = `Generated on: ${dateTimeString}`;
    });
});
