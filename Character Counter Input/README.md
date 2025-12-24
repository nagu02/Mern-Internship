# Character Counter Input

Simple React app that demonstrates controlled inputs and deriving data from state.

## What it does
- Shows a text input
- Keeps `text` in state using `useState`
- Displays the number of characters typed (derived from `text.length`)

## Run locally (Windows)
1. Open a terminal in the project folder
2. Install dependencies: `npm install`
3. Start dev server: `npm start`

App will open at http://localhost:3000

## Notes
- This project uses Create React App conventions (no Vite)
- Character count is computed from the `text` state; no extra state is used for count
