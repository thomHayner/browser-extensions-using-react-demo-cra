/*global chrome*/
import React, { useState, useEffect } from "react";


function Main() {
  const [aPOD, setAPOD] = useState(null)

  useEffect(()=>{
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', {})
      .then((response)=>response.json())
      .then((data)=> {
        console.log(data)
        setAPOD(data)
      })
      .catch((error)=>{
        console.log(error)
      })
  }, []);

  return aPOD? (
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
  ) :
  (
    <div><h1>HI</h1>{console.log('hi ' + aPOD)}</div>
  )
} 

export default Main
