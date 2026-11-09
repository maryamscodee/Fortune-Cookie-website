# 🥠 Fortune Cookie Generator

> *Crack open a little wisdom.*

A simple, beautiful, single-page web app that generates a random fortune message each time you "open" a fortune cookie — complete with a satisfying crack animation.

---

## ✨ What It Does

1. You land on the page and see an animated fortune cookie.
2. Click **Open Your Fortune** — the cookie cracks open with a CSS animation.
3. A fortune slip slides out with a randomly chosen message.
4. Click **Get Another Fortune** to reset and get a fresh one.
5. 40 fortunes are built in, and the same fortune won't repeat back-to-back.

---

## 🛠 Technologies Used

| Technology | Purpose                              |
|------------|--------------------------------------|
| HTML5      | Page structure and semantic markup   |
| CSS3       | Styling, animations, responsive layout |
| JavaScript | Fortune list, random selection, animation logic |

No frameworks, no libraries, no backend, no database. Pure front-end.

---

## 📁 File Structure

```
fortune-cookie/
├── index.html   ← Page structure and UI elements
├── style.css    ← All styling, layout, animations
├── script.js    ← Fortune list and all logic
└── README.md    ← This file
```

---

## 🚀 How to Run Locally

**Option A — Just open the file (easiest):**

1. Download or clone this folder.
2. Double-click `index.html`.
3. It opens in your browser. Done!

**Option B — Use a local dev server (optional, for live-reload):**

If you have Python installed:

```bash
# Python 3
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

Or with VS Code, install the **Live Server** extension and click *Go Live*.

---

## 🎨 Design Highlights

- **Warm dark theme** — deep amber/brown tones, no harsh contrast
- **Animated star field** — subtle twinkling particles in the background
- **Cookie SVG** — inline SVG fortune cookie with crack animation
- **Fortune slip** — styled like a real paper fortune slip with ruled lines
- **Responsive** — works on mobile, tablet, and desktop
- **No console errors** — clean, minimal JavaScript

---

## 📝 Customising Fortunes

Open `script.js` and find the `FORTUNES` array near the top. Add, remove, or edit any of the 40 strings to personalise your fortune messages:

```js
const FORTUNES = [
  "Something wonderful is closer than you think.",
  "Your next idea may be your best one.",
  // ... add your own here!
];
```

---

*Made with ☕ & a little magic.*
