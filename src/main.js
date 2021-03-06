/*global chrome*/
import React, { useState, useEffect } from "react";


function Main() {
  const [aPOD, setAPOD] = useState({});

  useEffect(()=>{
    const API_KEY = `DEMO_KEY`;
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`, {})
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
    <div>
      <div>
      </div>
      <div style={{ "display": "flex", "justifyContent": "space-around"}}>
        <img src={aPOD.hdurl} alt="NASA's Astronomy Pic of the Day" style={{ "maxWidth": "80vw", "maxHeight": "100vh" }} />
        <div>
          <h2>NASA's Astronomy Picture of the Day for {aPOD.date}</h2>
          <h3>{aPOD.title}</h3>
          <p>{aPOD.explanation}</p>
        </div>
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
