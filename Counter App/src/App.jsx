import React from 'react'
import Counter from './Counter'

export default function App() {
  return (
    <div className="app">
      <p className="explain">Demonstrates <code>useState</code> — click buttons to change the count.</p>
      <Counter />
    </div>
  )
}
