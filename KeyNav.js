import {
    Redirect
  } from 'react-router-dom';
import React from 'react';
import './main.css';
import useKeyboardShortcut from 'use-keyboard-shortcut'
  
const KeyNav = () => {

useKeyboardShortcut(['Shift', 'H'], () => console.log('Shift + H has been pressed.'), { overrideSystem: false });
  
return (
    <div>Hello World</div>
  )

}
export default KeyNav;