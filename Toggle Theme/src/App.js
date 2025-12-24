import React, { useState } from 'react';
import ToggleTheme from './components/ToggleTheme';
import './index.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  const appStyle = {
    backgroundColor: isDark ? '#121212' : '#ffffff',
    color: isDark ? '#f5f5f5' : '#111827',
    transition: 'background-color 200ms ease, color 200ms ease'
  };

  return (
    <div className="app-container" style={appStyle}>
      <div className="card">
        <h1>Toggle Theme</h1>
        <p>Click the button to switch between Light and Dark mode.</p>
        <ToggleTheme isDark={isDark} onToggle={setIsDark} />
      </div>
    </div>
  );
}

export default App;
