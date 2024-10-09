# Ad Blocker Extension

<table style="width: 100%; display:flex; justify-content:center; align-items:center; text-align:center">
  <tr>
    <td style="width: 50%;"><img src="icon.png" alt="Icon" style="width: 100%;"></td>
  </tr>
</table>



This is a simple Chrome extension that blocks ads on YouTube by interacting with the ad elements and automatically clicking the necessary buttons to skip or block ads.

## Features
- Automatically skips YouTube ads.
- Detects ads and interacts with the YouTube UI to block or skip them.

## How It Works

1. **Popup Interface**: The extension comes with a basic popup interface that shows the status of the extension.
   
   - When the extension is clicked, the popup displays a message indicating that it's running.
   
2. **Content Script**: The core of the extension resides in a content script (`content.js`) that runs on YouTube.

   - The content script monitors the page for YouTube ads using the `waitForElement` and `waitForXPath` functions to detect ad-related elements.
   - Once an ad element is found, the script interacts with it by simulating clicks on the ad skip or block buttons.
   - The script is set to automatically rerun every second to ensure continuous ad blocking.

## Installation Instructions

Since this extension is not published in the Chrome Web Store, you will need to install it manually by following these steps:

1. **Download or Clone the Repository**  
   You can download the repository as a ZIP or clone it using Git.  
   If downloading as ZIP, extract it to a folder on your computer.

2. **Enable Developer Mode in Chrome**  
   - Open Chrome and go to the Extensions page by typing `chrome://extensions/` into the address bar.
   - In the top-right corner, toggle on the **Developer mode** switch.

3. **Load the Extension**  
   - Click the **Load unpacked** button at the top-left of the Extensions page.
   - Select the folder where the extension files are located (the folder containing `manifest.json`).
   
4. **Confirm Installation**  
   The Ad Blocker extension should now appear in your extensions list. You can pin it for quick access by clicking the puzzle piece icon in the top-right of Chrome and pinning the Ad Blocker.

## How to Use

- Once installed, the extension will automatically start running in the background.
- Simply navigate to YouTube, and the extension will monitor for ads and attempt to skip or block them automatically.
- You can click the extension icon to open the popup and check that it’s running.

## Code Structure

- **popup.html**: Displays a simple UI when the extension is clicked.
- **manifest.json**: Defines the extension metadata, permissions, and behavior.
- **content.js**: The core script that detects and blocks YouTube ads.

## Troubleshooting

If the extension isn't working as expected, here are some tips:
- Ensure the extension is installed correctly and that **Developer mode** is enabled.
- Make sure you're on a YouTube page (`*.youtube.com/*`) as the script is only active on YouTube.
- Check the Chrome Developer Console (F12) for any errors related to the extension.

## Future Improvements
- Add support for more video platforms.
- Provide better handling of different YouTube ad formats.
