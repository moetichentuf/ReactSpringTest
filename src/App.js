import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from 'react-spring';

function App() {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  return <animated.div style={props}>I will fade in</animated.div>
}

export default App;
