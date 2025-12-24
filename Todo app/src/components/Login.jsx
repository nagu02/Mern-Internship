import React, { useState } from 'react'

export default function Login({ onLogin, showHelpers }) {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!user.trim()) return alert('Please enter a username')
    onLogin({ name: user.trim() })
  }

  return (
    <div className="card login-card">
      <h2>Welcome to Todo App</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Username
          <input value={user} onChange={e => setUser(e.target.value)} placeholder="your name" />
        </label>
        <label>
          Password
          <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="anything works" />
        </label>
        <button className="btn primary">Login</button>
      </form>
      {showHelpers && (
        <div className="helper-text">Tip: This is a frontend-only demo. Enter any name and click Login.</div>
      )}
    </div>
  )
}
