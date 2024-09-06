// Background'dan gelen mesajı dinler ve alert ile gösterir
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === 'showAlert') {
        alert(message.url);  // URL'yi alert ile göster
    }
});
