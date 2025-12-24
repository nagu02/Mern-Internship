import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import TodoApp from './components/TodoApp'

const STORAGE_KEY = 'todoAppState_v1'

export default function App() {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw
        ? JSON.parse(raw)
        : { loggedIn: false, user: null, theme: 'light', color: '#4f46e5', showHelpers: true, todos: [] }
    } catch (e) {
      return { loggedIn: false, user: null, theme: 'light', color: '#4f46e5', showHelpers: true, todos: [] }
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme)
  }, [state.theme])

  function login(user) {
    setState(prev => ({ ...prev, loggedIn: true, user }))
  }

  function logout() {
    setState(prev => ({ ...prev, loggedIn: false, user: null }))
  }

  function update(partial) {
    setState(prev => ({ ...prev, ...partial }))
  }

  return (
    <div className="app-root" style={{ backgroundColor: state.color }}>
      {!state.loggedIn ? (
        <Login onLogin={login} showHelpers={state.showHelpers} />
      ) : (
        <TodoApp
          state={state}
          onLogout={logout}
          onUpdate={update}
        />
      )}
    </div>
  )
}
