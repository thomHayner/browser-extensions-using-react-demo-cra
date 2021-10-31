/*global chrome*/
import React, { useState, useEffect } from "react";


function Main() {
  const [aPOD, setAPOD] = useState({});

  useEffect(()=>{
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', {})
      .then((res)=>res.json())
      .then((data)=> {
        console.log(data)
        setAPOD(data)
      })
      .catch((error)=>{
        console.log(error)
      })
  }, []);

  return aPOD? (
    <div style={{ "display": "flex", "justifyContent": "space-around"}}>
      <img src={aPOD.hdurl} alt="NASA's Astronomy Picture of the Day"  />
      <div>
        <p>{aPOD.explanation}</p>
      </div>
    </div>
  ) : (
    <div>
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


// style={{ "width": "100vw", "height": "100vh", "overflow": "hidden" }}