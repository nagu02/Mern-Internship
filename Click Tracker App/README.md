# Click Tracker App ✅

Simple React app that tracks total button clicks.

## What it does
- Shows a **Total clicks** counter
- A button increments the counter

## Key implementation
- Uses React state: `const [clicks, setClicks] = useState(0)`
- Updates using previous state: `setClicks(prev => prev + 1)` (safe for many rapid updates)

## Run locally
1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm start
```

3. Open http://localhost:3000 and click the button — the counter updates and persists across renders.

---

This project was intentionally created without Vite (uses `react-scripts`).