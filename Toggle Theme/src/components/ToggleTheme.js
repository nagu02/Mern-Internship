import React, { useState } from 'react';

function ToggleTheme({ onToggle, isDark }) {
  return (
    <button
      className="toggle-button"
      onClick={() => onToggle(!isDark)}
      aria-label="Toggle theme"
      style={{
        backgroundColor: isDark ? '#333' : '#eee',
        color: isDark ? '#fff' : '#000'
      }}
    >
      {isDark ? '🌙 Dark Mode' : '🌞 Light Mode'}
    </button>
  );
}

export default ToggleTheme;
