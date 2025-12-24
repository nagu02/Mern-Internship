import React, { useState, useEffect, useRef } from 'react'

export default function TodoItem({ todo, onToggle, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(todo.text)
  const inputRef = useRef(null)

  useEffect(() => {
    setValue(todo.text)
  }, [todo.text])

  useEffect(() => {
    if (editing && inputRef.current) inputRef.current.focus()
  }, [editing])

  function save() {
    const trimmed = value.trim()
    if (!trimmed) return
    onUpdate({ text: trimmed })
    setEditing(false)
  }

  function onKeyDown(e) {
    if (e.key === 'Enter') save()
    if (e.key === 'Escape') { setEditing(false); setValue(todo.text) }
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`} role="listitem">
      <input aria-label={`Mark ${todo.text} complete`} type="checkbox" checked={todo.completed} onChange={onToggle} />
      {!editing ? (
        <div className="todo-body" onDoubleClick={() => setEditing(true)}>
          <span className="todo-text">{todo.text}</span>
          <div className="todo-actions">
            <button className="btn small" onClick={() => setEditing(true)}>Edit</button>
            <button className="btn small danger" onClick={onDelete} aria-label={`Delete ${todo.text}`}>Delete</button>
          </div>
        </div>
      ) : (
        <div className="edit-row">
          <input ref={inputRef} value={value} onChange={e => setValue(e.target.value)} onKeyDown={onKeyDown} aria-label={`Edit ${todo.text}`} />
          <button className="btn" onClick={save}>Save</button>
          <button className="btn" onClick={() => { setEditing(false); setValue(todo.text); }}>Cancel</button>
        </div>
      )}
    </div>
  )
}
