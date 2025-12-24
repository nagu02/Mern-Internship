import React, { useState } from 'react';
import './CharacterCounter.css';

export default function CharacterCounter() {
  const [text, setText] = useState('');

  return (
    <div className="counter-container">
      <label htmlFor="textInput" className="label">Type something:</label>
      <input
        id="textInput"
        className="text-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing..."
        type="text"
        aria-label="Text input for character counting"
      />

      <div className="count">Characters: <strong>{text.length}</strong></div>
    </div>
  );
}
