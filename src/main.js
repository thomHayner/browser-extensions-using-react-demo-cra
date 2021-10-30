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
      <button
        onClick={() => {
          fetchData(inputs)
        }}>
        Fetch
      </button>
    </div>
  )
} 

export default Main

const fetchData=(inputs)=>{
  fetch('https://example.com/api', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs)
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      ChromeSamples.log(data.whatever);
    });
  }