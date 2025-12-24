import React, { useState } from 'react';

export default function ClickTracker() {
  // State to track number of clicks
  const [clicks, setClicks] = useState(0);

  return (
    <div className="tracker">
      <p>
        Total clicks: <strong>{clicks}</strong>
      </p>
      <button onClick={() => setClicks(prev => prev + 1)}>Click me</button>
    </div>
  );
}
