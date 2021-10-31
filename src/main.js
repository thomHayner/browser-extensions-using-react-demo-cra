/*global chrome*/
import React, { useState, useEffect } from "react";


function Main() {
  const [aPOD, setAPOD] = useState(null)

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
    <div>
      <img src={aPOD.hdurl} alt="Astronomy Picture of the Day" />
    </div>
  ) :
  (
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

// const styles = {
//   div: {
//     backgroundImage: `${address}`
//   }
// }