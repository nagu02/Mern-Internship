import React, { useState } from 'react';

export default function App() {
  // Controlled component state
  const [text, setText] = useState('');

  return (
    <div className="app">
      <h1>Simple Text Display</h1>

      <label htmlFor="inputText">Type something:</label>
      <input
        id="inputText"
        type="text"
        placeholder="Start typing..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="output">
        <h2>Live Output</h2>
        <p>{text || <em>Nothing typed yet</em>}</p>
      </div>

      <section className="notes">
        <h3>Notes</h3>
        <ul>
          <li>Input value is controlled by React state.</li>
          <li>Each keypress calls <code>setText</code> via <code>onChange</code>.</li>
        </ul>
      </section>
    </div>
  );
}
