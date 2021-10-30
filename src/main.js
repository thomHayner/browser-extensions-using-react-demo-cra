/*global chrome*/
import react from "react";


const Main = () => {
  return (
    <div>
      <h1>Hello Browser Extension World!</h1>
      <button
        onClick={() => {
          chrome.tabs.getCurrent(tab => {
            chrome.tabs.update(tab.id, {
              url: 'chrome-search://local-ntp/local-ntp.html',
            });
          });
        }}>
        Chrome Tab
      </button>
    </div>
  )
} 

export default Main
