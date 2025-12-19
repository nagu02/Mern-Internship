import React, { useState } from 'react'

export default function Counter() {
  // Initialize state with 0
  const [count, setCount] = useState(0)

  // Handlers for buttons
  const increase = () => setCount(prev => prev + 1)
  const decrease = () => setCount(prev => prev - 1)
  const reset = () => setCount(0)

  return (
    <div className="counter">
      <div className="value" aria-live="polite">{count}</div>

      <div className="buttons">
        <button type="button" onClick={increase} aria-label="Increase">+</button>
        <button type="button" onClick={decrease} aria-label="Decrease">–</button>
        <button type="button" onClick={reset} aria-label="Reset">Reset</button>
      </div>
    </div>
  )
}
