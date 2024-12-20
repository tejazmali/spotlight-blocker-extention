# Spotlight Blocker Extension  

A simple browser extension to block distracting spotlight overlays on websites, helping you stay focused and productive.  

## Features  
- Automatically detects and blocks spotlight overlays.  
- Lightweight and easy to toggle on or off.  

## Installation  
1. Clone or download this repository.  
2. Load the extension in your browser:
   - **Chrome**:  
     - Go to `chrome://extensions`.  
     - Enable "Developer Mode".  
     - Click "Load unpacked" and select the extension folder.  
   - **Firefox**:  
     - Go to `about:debugging#/runtime/this-firefox`.  
     - Click "Load Temporary Add-on" and select the manifest file in the folder.
     
## Installation (Tampermonkey)
### Tampermonkey Script  

#### Install Tampermonkey  
- **Chrome**: Install Tampermonkey from the [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).  
- **Firefox**: Install Tampermonkey from the [Firefox Add-ons site](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/).  

#### Add the Script  
1. Open Tampermonkey in your browser.  
2. Click **Create a new script** from the dashboard.  
3. Copy and paste the contents of `tampermonkey.js` from this repository into the editor.  
4. Save the script and ensure it is active.

## Contributing  
Contributions are welcome!  
1. Fork this repository.  
2. Create a branch for your feature: `git checkout -b feature-name`.  
3. Commit your changes: `git commit -m "Add feature"`.  
4. Push to your branch: `git push origin feature-name`.  
5. Open a pull request.  

## License  
This project is licensed under the [MIT License](LICENSE).  

---

Stay focused and eliminate distractions with Spotlight Blocker!
