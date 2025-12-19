import React, { useState, useMemo } from 'react'
import TodoItem from './TodoItem'

export default function TodoApp({ state, onLogout, onUpdate }) {
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('all') // all | active | completed

  const counts = useMemo(() => {
    const total = state.todos.length
    const completed = state.todos.filter(t => t.completed).length
    const active = total - completed
    return { total, active, completed }
  }, [state.todos])

  function addTodo(e) {
    e && e.preventDefault()
    if (!text.trim()) return
    const newTodo = { id: Date.now(), text: text.trim(), completed: false }
    onUpdate({ todos: [newTodo, ...state.todos] })
    setText('')
  }

  function updateTodo(id, partial) {
    onUpdate({ todos: state.todos.map(t => (t.id === id ? { ...t, ...partial } : t)) })
  }

  function deleteTodo(id) {
    const todo = state.todos.find(t => t.id === id)
    if (!window.confirm(`Delete "${todo?.text}"? This action cannot be undone.`)) return
    onUpdate({ todos: state.todos.filter(t => t.id !== id) })
  }

  function clearCompleted() {
    if (!window.confirm('Clear all completed todos?')) return
    onUpdate({ todos: state.todos.filter(t => !t.completed) })
    setFilter('all')
  }

  const visible = state.todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <div className="card todo-card">
      <div className="top-row">
        <div className="title-block">
          <h3>Todos — {state.user?.name || 'user'}</h3>
          <div className="meta">
            <span className="badge">{counts.active} Active</span>
            <span className="muted">{counts.completed} completed • {counts.total} total</span>
          </div>
        </div>

        <div className="controls">
          <button className="btn small" onClick={() => onUpdate({ showHelpers: !state.showHelpers })}>{state.showHelpers ? 'Hide Helpers' : 'Show Helpers'}</button>
          <button className="btn small secondary" aria-pressed={state.theme === 'dark'} onClick={() => onUpdate({ theme: state.theme === 'light' ? 'dark' : 'light' })}>{state.theme === 'light' ? 'Dark' : 'Light'} Theme</button>
          <button className="btn small danger" onClick={onLogout}>Logout</button>
        </div>
      </div>

      <form onSubmit={addTodo} className="add-form" aria-label="Add todo">
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Add a todo... (press Enter)" aria-label="New todo" />
        <button className="btn primary">Add</button>
      </form>

      {state.showHelpers && (
        <div className="helper-text">Tip: Double-click or click Edit to rename. Use the checkbox to mark complete, or Delete to remove. Press <kbd>Esc</kbd> to cancel edits.</div>
      )}

      <div className="list-controls">
        <div className="filters" role="tablist" aria-label="Filter todos">
          <button className={`btn filter ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`btn filter ${filter === 'active' ? 'active' : ''}`} onClick={() => setFilter('active')}>Active</button>
          <button className={`btn filter ${filter === 'completed' ? 'active' : ''}`} onClick={() => setFilter('completed')}>Completed</button>
        </div>
        <div className="spacer" />
        <div className="settings-inline">
          <label className="color-label">
            Background color
            <input type="color" value={state.color} onChange={e => onUpdate({ color: e.target.value })} aria-label="background color" />
          </label>
          <button className="btn" onClick={clearCompleted} disabled={counts.completed === 0}>Clear completed</button>
        </div>
      </div>

      <div className="todos-list" role="list">
        {visible.length === 0 ? (
          <div className="empty">{counts.total === 0 ? 'No todos yet — add one above.' : 'No todos match this filter.'}</div>
        ) : (
          visible.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => updateTodo(todo.id, { completed: !todo.completed })}
              onUpdate={(p) => updateTodo(todo.id, p)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))
        )}
      </div>

    </div>
  )
}
