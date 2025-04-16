# 💘 Love Compatibility Quiz

A modern, animated love compatibility quiz built with **React**, **Vite**, and **Tailwind CSS**.  
Features dynamic questions, personalized results, animated transitions, and social media sharing — inspired by [yourmove.ai](https://yourmove.ai).

👉 **Live Demo**: [https://love-quiz-iota.vercel.app](https://love-quiz-iota.vercel.app)

---

## 🚀 Tech Stack

- ⚛️ React (Component-based UI)
- ⚡ Vite (Fast dev & build)
- 🎨 Tailwind CSS (Utility-first styling)
- 🎞 Framer Motion (Smooth animations)
- 🌐 Vercel (Production deployment)
- 🔗 Ngrok (for local sharing in dev)

---

## ✨ Features

- Multi-step animated quiz flow
- Name-based personalization
- Compatibility scoring logic
- Animated result card with heart pulse
- Social sharing (Facebook, Twitter, WhatsApp)
- Responsive and mobile-friendly design

---

## 📁 Folder Structure

Organized by responsibility for clarity and scalability.

```bash
love-quiz/
├── public/                  # Static files (favicon, etc.)
├── src/                     # Source code
│   ├── assets/              # Images, icons, and design assets
│   ├── components/          # Quiz + Results components
│   │   ├── Quiz.jsx         # Main quiz flow logic
│   │   └── EnhancedResults.jsx  # Animated result screen
│   ├── styles/              # Scoped + global styles
│   │   ├── App.css          # Global styles
│   │   └── results.css      # Styles for results page
│   ├── App.jsx              # Root React component
│   ├── main.jsx             # Vite app entry point
│   └── index.css            # Tailwind base + resets
├── index.html               # App HTML shell
├── package.json             # Project metadata and scripts
├── postcss.config.js        # PostCSS config
├── tailwind.config.js       # Tailwind config
├── vite.config.js           # Vite dev server config
└── .gitignore               # Ignore rules
```

---

## 🧪 Local Development

```bash
npm install     # Install dependencies
npm run dev     # Run local dev server

Deployed via Vercel. Pushes to main auto-deploy.

🔗 Live URL: https://love-quiz-iota.vercel.app

👤 Author
Made with ❤️ by Mohd Sarfaraz Faiyaz
