# Advanced Todo App (Frontend-only)

Features
- Login screen (frontend-only)
- Theme support (Light / Dark)
- Add, edit, delete todos
- Mark todo as completed (strike-through)
- Background color (custom theme color)
- Show / hide helper text
- Filters (All / Active / Completed) and counts ✅
- Delete confirmation and keyboard shortcuts (Enter to add, Esc to cancel editing) ✅
- Improved accessibility, spacing, and subtle animations ✅

Quick start
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Open the URL printed by Vite (usually http://localhost:5173)

UX Tips
- Press Enter to add a todo quickly.
- Double-click a todo or click Edit to rename; press Esc to cancel.
- Use the filter buttons to view Active or Completed todos.
- Use the background color picker to adjust the app background for better contrast.

Notes
- This app stores state in `localStorage` under `todoAppState_v1` for persistence across reloads.
- This is a small demo for learning component architecture, state management with `useState`, conditional rendering, array operations, and basic UX practices.

Have fun! ✨