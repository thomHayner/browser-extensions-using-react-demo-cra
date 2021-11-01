//  This is the initial render file
import React from 'react';
import { ReactDOM, render } from 'react-dom';
import './index.css';
import Popup from './components/Popup.js';

// ReactDOM.render(
//   <React.StrictMode>
//     <Popup />
//   </React.StrictMode>,
//   document.getElementById('popup')
// );

render(<Popup />, document.querySelector('#popup'));