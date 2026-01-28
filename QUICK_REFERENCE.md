# 📋 Quick Reference Card

## Print This! (Save for later)

---

## Essential Commands

```bash
# Development
npm install                 # Install dependencies
npm run dev                # Start dev server (http://localhost:5173)
npm run build              # Build for production
npm run preview            # Preview production build
npm run lint               # Check for errors

# Deployment (Vercel)
npm install -g vercel      # Install Vercel CLI
vercel                     # Deploy to Vercel
```

---

## Important URLs

| What                  | URL                                                          |
| --------------------- | ------------------------------------------------------------ |
| **Your Domain**       | https://jaymeendevatka.me                                    |
| **GitHub Repo**       | https://github.com/23ce023-jaymeen/23ce023-jaymeen.github.io |
| **Gist (Data)**       | https://gist.github.com/[YOUR-USERNAME]/[YOUR-GIST-ID]       |
| **Vercel Dashboard**  | https://vercel.com/dashboard                                 |
| **Netlify Dashboard** | https://app.netlify.com                                      |
| **Dev Server**        | http://localhost:5173                                        |

---

## Project Structure

```
src/
├─ App.jsx              # Main app routing
├─ pages/
│  ├─ Home.jsx         # Hero + main content
│  └─ Projects.jsx     # Projects page
├─ components/
│  ├─ Header.jsx       # Navigation (UPDATE LOGO)
│  ├─ Footer.jsx       # Footer
│  ├─ ProjectBox.jsx   # Project cards
│  ├─ SkillBox.jsx     # Skills display
│  └─ EducationBox.jsx # Education cards
├─ context/
│  ├─ ThemeContext.jsx # Dark/Light theme
│  └─ LeetcodeContext.jsx
├─ hooks/
│  └─ useGistData.js   # Fetch from Gist (🔴 UPDATE THIS)
└─ data/
   └─ menuData.js      # Navigation links
```

---

## DNS Records (Vercel)

```
A Record:
Name: @
Value: 76.76.19.165
TTL: 3600

CNAME Record:
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

---

## Gist Files to Create

```
1. personal-info.json       # Name, title, email, social links
2. skills.json              # Your skills by category
3. education.json           # Universities, duration, grade
4. showcase-projects.json   # Your best 3-5 projects
5. experience.json          # Work experience
```

---

## Deployment Checklist

### Before Deploy

- [ ] npm run build (succeeds)
- [ ] npm run preview (works)
- [ ] All links working
- [ ] Mobile responsive
- [ ] Theme toggle works
- [ ] Gist is PUBLIC

### During Deploy

- [ ] Choose platform (Vercel ⭐)
- [ ] Connect GitHub repo
- [ ] Set build: `npm run build`
- [ ] Set output: `dist`
- [ ] Click Deploy

### After Deploy

- [ ] Add domain
- [ ] Update DNS
- [ ] Wait 24-48 hours
- [ ] Test jaymeendevatka.me
- [ ] Verify HTTPS

---

## Performance Targets

| Metric     | Target           |
| ---------- | ---------------- |
| Page Load  | < 3 seconds      |
| Lighthouse | 90+              |
| Mobile     | Fully responsive |
| HTTPS      | Always enabled   |
| Uptime     | 99.9%            |

---

## Tech Stack

```
Frontend:      React 19, Vite 6, Tailwind CSS 4
Icons:         Lucide React
Styling:       Tailwind CSS
Data:          GitHub Gist API
Deployment:    Vercel
Domain:        jaymeendevatka.me
```

---

## Key Files to Update

1. **src/hooks/useGistData.js**
   - Update Gist URL with your ID

2. **src/components/Header.jsx**
   - Update logo/brand name if needed

3. **index.html**
   - Meta title: "Jaymeen Devatka"
   - Meta description

4. **GitHub Gist (5 JSON files)**
   - All your portfolio data

---

## Troubleshooting Quick Fixes

```
Problem                  Solution
────────────────────────────────────
Build fails              npm install && npm run build
Gist not loading        Check Gist is PUBLIC + correct URL
DNS not working         Wait 24 hours + verify records
Slow website            Compress images + check scores
Mobile broken           Test with Chrome DevTools
Old version showing     Clear cache + refresh
Domain not connecting   Verify DNS at registrar
```

---

## Social Links Format

```json
{
  "github": "https://github.com/23ce023-jaymeen",
  "linkedin": "https://linkedin.com/in/your-username",
  "twitter": "https://twitter.com/your-username",
  "email": "jaymeendevatka@gmail.com"
}
```

---

## Environment Setup

```
Node.js:       v18+ required
npm:           9+ required
npm packages:  47 installed
Build time:    ~30 seconds
Dev server:    ~2 seconds startup
Bundle size:   ~60 KB (gzipped)
```

---

## Color Scheme

```
Primary:       Rose (#fb7185)
Accent:        Rose (#e11d48)
Dark BG:       Slate-950 (#0f172a)
Light BG:      Slate-50 (#f8fafc)
Text Dark:     Slate-100 (#f1f5f9)
Text Light:    Slate-900 (#0f172a)
```

---

## Browser Support

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ Mobile Safari 14+
✅ Android Chrome Latest

---

## File Sizes (Production)

```
index.html     ~5 KB
main.js        ~45 KB (gzipped: ~15 KB)
main.css       ~12 KB (gzipped: ~3 KB)
Total:         ~62 KB (gzipped: ~23 KB)
```

---

## Free Services Used

- ✅ GitHub (Repo hosting)
- ✅ Gist (Data hosting)
- ✅ Vercel (Deployment)
- ✅ Imgur (Image hosting)
- ✅ Google Analytics (Free tier)

---

## Testing Tools

| Tool         | URL                       | Use         |
| ------------ | ------------------------- | ----------- |
| PageSpeed    | https://pagespeed.web.dev | Performance |
| Lighthouse   | Built-in to Chrome        | Audits      |
| Responsively | https://responsively.app  | Mobile test |
| DNS Checker  | https://dnschecker.org    | DNS status  |

---

## Development Workflow

```
1. Make changes in src/
2. Save file (auto-reload)
3. Test locally
4. Run npm run build
5. Test production: npm run preview
6. Commit to GitHub
7. Vercel auto-deploys
8. Live in 2-3 minutes!
```

---

## Important Dates

```
Created:       Today
First Deploy:  Today (Goal)
DNS Waiting:   24-48 hours
Live By:       Day 3
Share:         Day 3+
```

---

## Contact Info Format

```json
{
  "email": "jaymeendevatka@gmail.com",
  "phone": "+91-XXXXXXXXXX",
  "location": "City, Country",
  "github": "https://github.com/username",
  "linkedin": "https://linkedin.com/in/username"
}
```

---

## Common URLs to Add

```
Resume:        https://drive.google.com/...
LinkedIn:      https://linkedin.com/in/your-username
GitHub:        https://github.com/23ce023-jaymeen
Twitter:       https://twitter.com/your-username
Portfolio:     https://jaymeendevatka.me
```

---

## Documentation Files

| File                       | Purpose               |
| -------------------------- | --------------------- |
| README_PORTFOLIO.md        | Overview & navigation |
| QUICK_START.md             | Step-by-step guide    |
| GIST_DATA_TEMPLATE.md      | Data templates        |
| DEPLOYMENT_DOMAIN_SETUP.md | Deployment guide      |
| VISUAL_GUIDE.md            | Diagrams & flows      |
| UI_ENHANCEMENTS.md         | UI code examples      |
| DEPLOYMENT_CHECKLIST.md    | Verification          |

---

## Time Estimates

```
Setup:                 ~30 mins
Testing:               ~20 mins
Build:                 ~5 mins
Deploy:                ~5 mins
DNS Setup:             ~5 mins
DNS Propagation:       ~24-48 hours
Final Testing:         ~10 mins
─────────────────────────────
TOTAL ACTIVE TIME:     ~1.5 hours
TOTAL WITH WAIT:       ~24-48 hours
```

---

## Success Indicators

✅ npm run dev works
✅ npm run build succeeds
✅ Deployed to Vercel
✅ Domain connected
✅ jaymeendevatka.me loads
✅ HTTPS enabled (lock icon)
✅ Mobile responsive
✅ All features work
✅ Fast loading
✅ No console errors

---

## Next Step

**Choose ONE:**

1. **Quick Start** → Open QUICK_START.md
2. **Fill Data** → Open GIST_DATA_TEMPLATE.md
3. **Deploy** → Open DEPLOYMENT_DOMAIN_SETUP.md
4. **Make Better** → Open UI_ENHANCEMENTS.md

---

## Keep This Handy!

Print or bookmark this page for quick reference while:

- Setting up Gist
- Deploying to Vercel
- Configuring DNS
- Testing the site

---

**You're ready! Let's ship it! 🚀**

Choose a starting document above and begin! ⭐
