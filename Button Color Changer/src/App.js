import React, { useState } from 'react';

const COLORS = [
  'white',
  'lightblue',
  'lightgreen',
  '#ffeb3b',
  '#ffccbc',
  '#d1c4e9',
  '#ffcdd2',
  '#c8e6c9'
];

export default function App() {
  const [color, setColor] = useState('white');

  const changeToRandom = () => {
    let next;
    do {
      next = COLORS[Math.floor(Math.random() * COLORS.length)];
    } while (next === color && COLORS.length > 1);
    setColor(next);
  };

  const appStyle = {
    backgroundColor: color,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 300ms ease'
  };

  return (
    <div style={appStyle}>
      <div style={{ textAlign: 'center' }}>
        <h1>Button Color Changer</h1>
        <p>Current color: <strong>{color}</strong></p>
        <button onClick={changeToRandom} className="color-btn">Change Color</button>
      </div>
    </div>
  );
}
