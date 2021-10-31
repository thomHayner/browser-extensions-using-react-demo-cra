
Made with Create-React-App and the following tutorials:

https://levelup.gitconnected.com/how-to-use-react-js-to-create-chrome-extension-in-5-minutes-2ddb11899815
https://blog.logrocket.com/creating-chrome-extension-react-typescript/
https://dev.to/bayardlouis470/create-chrome-extension-in-react-3pna



Additional references:

https://developer.chrome.com/docs/extensions/
https://developer.chrome.com/docs/extensions/reference/tabs/
https://developer.chrome.com/docs/extensions/reference/action/


Log 001:

~~placeholder is now displaying properly in a new tab, so the Browser Extension has some display capability, however, the App.js is not displaying, only the placeholder appears.~~
Browser extension is WORKING, does not do very much functionally, but it does display itself properly.  Requires ```npm run build``` and then you load the extension from the 'build' folder.


Log 002:

WORKING + with a popup when you click on the icon.
  Currently it just displays the same thing in a little popup window.
  Mobile style design looks like a good fit for designing the popup, UX/UI areas and space available are similar in size.
Chrome Extensions Tab keeps displaying an error:
  `Manifest: property 'icons' ignored, type array expected.`
  When I changed the value of the 'icons' key to an array in the manifest.json file I was no longer able to 'Load unpacked' build/extension in chrome,
  however, if I use an object instead of an array I get the above error in the Chrome://extensions tab.