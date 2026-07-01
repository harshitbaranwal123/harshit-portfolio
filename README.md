# Harshit Kumar Baranwal — Portfolio

Premium, recruiter-focused portfolio built with React + Vite + Framer Motion.

## 🚀 Tech Stack
- **React 18** + **Vite**
- **Tailwind CSS 3** — utility-first styling
- **Framer Motion** — cinematic animations
- **Lenis** — smooth scroll
- **React Icons** — icon library
- **Axios** — GitHub API integration

## 📁 Folder Structure
```
src/
├── components/
│   ├── Cursor.jsx       # Custom magnetic cursor
│   ├── Navbar.jsx       # Fixed nav with scroll effect
│   ├── Hero.jsx         # Cinematic hero section
│   ├── About.jsx        # Story + stats
│   ├── Projects.jsx     # Case study cards + modal
│   ├── Skills.jsx       # Interactive skill cards
│   ├── Timeline.jsx     # Animated scroll timeline
│   ├── GitHub.jsx       # Live GitHub API feed
│   ├── Contact.jsx      # Contact section
│   └── Footer.jsx       # Footer
├── data/
│   └── index.js         # All content — projects, skills, timeline
├── hooks/
│   └── useLenis.js      # Smooth scroll hook
├── App.jsx
├── main.jsx
└── index.css            # Global styles + Tailwind
```

## 🛠 Setup

```bash
npm install
npm run dev       # Development server at localhost:5173
npm run build     # Production build
npm run preview   # Preview production build
```

## 📝 Customization

All content lives in `src/data/index.js`. Update:
- `projects[]` — your project case studies
- `skills[]` — your skill categories
- `timeline[]` — your career milestones
- `contact` — your social links

Update `GitHub.jsx` → `USERNAME` const with your actual GitHub username.

Add your `resume.pdf` to the `public/` folder.

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

## Design Tokens

| Token | Value |
|-------|-------|
| Primary font | Playfair Display |
| Body font | DM Sans |
| Mono font | JetBrains Mono |
| Background | #0D0D0D |
| Gold accent | #C9A84C |
| Sage accent | #7A9E7E |
| Text primary | #F5F0E8 |
