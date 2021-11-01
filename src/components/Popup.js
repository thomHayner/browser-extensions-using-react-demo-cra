import PopupMain from "./popupMain"; // this was used to mimic App.js to try and get it to work without react-router
// import React from 'react'; // this has no effect, should not be necessary in this file anyway

function Popup() {
  return (
    <div className="popup" >
      {/* <h1>Hello Browser Extension Popup World!</h1> */}
      <PopupMain/>
    </div>
  );
}

export default Popup;
