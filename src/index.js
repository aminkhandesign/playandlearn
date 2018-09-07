//this is the main entry file

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Splash from './components/splash.jsx'

const root = document.getElementById('root');
const sound_effect = new Audio('./images/effect1.mp3');


ReactDOM.render(<Splash/>,root )