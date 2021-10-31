//  This is the initial render file
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Foreground from './components/Foreground.js';

render(<Foreground />, document.querySelector('#foreground'));