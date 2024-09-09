# QR Code Generator with Date & Time

## Description

This project is a browser extension that generates a QR code for any website URL and displays the time and date the QR code was created. It also allows users to copy the URL, date, and time information to the clipboard and download the QR code as a PNG file. The extension is built using HTML, CSS, and JavaScript.

## Technologies Used

- **HTML5**: Provides the structure of the extension popup.
- **CSS3**: Styles the extension’s UI elements, including buttons and layout.
- **JavaScript**: Handles the logic for QR code generation, date-time display, and clipboard copying.
- **QRCode.js**: A JavaScript library used for generating QR codes.

## Screenshots

Below are a few screenshots of the application:

![Screenshot](https://github.com/user-attachments/assets/fc194d39-9ca1-413b-a24b-14d6708ffc2b)




*Screenshot 1: The main interface showing the generated QR code and date-time.*

![Date-Time_Screenshot](https://github.com/user-attachments/assets/a96385a9-8a56-4689-98b4-fab3395e3f0b)




*Screenshot 2: The options to copy QR details or download the QR code.*

## Installation and Usage

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/qr-code-generator.git
Navigate to the Directory:

bash
Kodu kopyala
cd qr-code-generator
Load the Extension in Chrome/Edge:

Open your browser’s extensions page:
For Chrome: chrome://extensions
For Edge: edge://extensions
Enable Developer Mode.
Click Load unpacked and select the qr-code-generator folder.
Using the Extension:

Click the extension icon in the browser toolbar.
A QR code for the current URL will be generated, along with the date and time it was created.
Use the Copy The QR Details button to copy the URL, date, and time.
Use the Download QR button to download the QR code as a PNG file.
Project Structure
popup.html: The main HTML file for the extension’s popup window.
popup.js: JavaScript file that handles QR code generation, date display, and button actions.
qrcode.min.js: QRCode.js library for generating the QR codes.
styles.css: Contains the CSS for styling the popup window and buttons.
Features
QR Code Generation: Instantly creates a QR code for the current page's URL.
Date and Time Display: Shows the exact time the QR code was generated.
Clipboard Copying: Allows copying of the URL, date, and time details.
QR Code Download: Lets users download the generated QR code as a PNG image.
Development
UI Enhancements: Planned improvements to the user interface for better usability.
Additional Features: Future versions may include more customization options for QR code generation.
