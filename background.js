// Sağ tıklama menüsüne "Quick QR >> Scan QR" ekliyoruz
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      id: "quickQR",
      title: "Quick QR >> Scan QR",
      contexts: ["all"]  // Her yerde sağ tıklama ile görünür
    });
  });
  
  // Sağ tıklama menüsüne tıklanınca çalışacak fonksiyon
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "quickQR") {
      // Şu anki sekmenin URL'sini al
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let url = tabs[0].url;
  
        // Aktif sekmede bir script çalıştırmak için
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          function: showAlert,  // Sekmeye bu fonksiyonu enjekte ediyoruz
          args: [url]  // URL'yi argüman olarak gönderiyoruz
        });
      });
    }
  });
  
  // Aktif sekmede çalışacak fonksiyon (URL'yi alert ile gösterecek)
  function showAlert(url) {
    alert("QR Code Generated URL: " + url);
  }
  