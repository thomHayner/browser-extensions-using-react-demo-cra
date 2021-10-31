/*global chrome*/
import React, { useState, useEffect } from "react";


function Main() {
  const [aPOD, setAPOD] = useState(null);
  // let address = '';

  useEffect(()=>{
    fetch('https://api.nasa.gov/planetary/apod?api_key=twnmUtKcbPwIZPuP0U8ROkNdQN5S8BFXO6bbwcif', {})
      .then((res)=>res.json())
      .then((data)=> {
        console.log(data)
        setAPOD(data)
        // address = aPOD ? aPOD.hdurl ? `url(${aPOD.hdurl})` : aPOD.url ? `url(${aPOD.url})` : '' : '';
      })
      .catch((error)=>{
        console.log(error)
      })
  }, []);

  return aPOD? (
    <div>
      {/* <div style={{ "backgroundImage": `url(${address})` }}/> */}
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