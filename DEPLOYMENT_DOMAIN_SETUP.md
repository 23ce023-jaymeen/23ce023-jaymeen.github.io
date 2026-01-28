# 📖 Deploy to Custom Domain - Complete Guide

## Your Setup

- **Domain:** jaymeendevatka.me
- **Repository:** https://github.com/23ce023-jaymeen/23ce023-jaymeen.github.io
- **Platform:** Best options: Vercel, Netlify, or GitHub Pages

---

## OPTION 1: Vercel (⭐ RECOMMENDED - Easiest)

### Why Vercel?

✅ Automatic deployments from GitHub
✅ Free SSL/HTTPS
✅ Fast CDN
✅ Easy domain setup
✅ Preview deployments
✅ Zero config needed

### Steps:

#### 1. Go to Vercel

https://vercel.com

#### 2. Sign up with GitHub

Click "Sign up" → Select "Continue with GitHub"

#### 3. Import Your Repository

1. Click "New Project"
2. Find your repo: `23ce023-jaymeen/23ce023-jaymeen.github.io`
3. Click "Import"

#### 4. Configure Build Settings

- Framework: **React**
- Root Directory: `.` (leave default)
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variables: (leave empty for now)

Click "Deploy" and wait ~2-3 minutes...

#### 5. Add Your Custom Domain

1. After deployment completes, go to Settings
2. Click "Domains"
3. Click "Add"
4. Enter: `jaymeendevatka.me`
5. Select "Using a third-party DNS provider"

#### 6. Update DNS at Your Domain Registrar

Go to your domain registrar (GoDaddy, Namecheap, Bluehost, etc.) and update DNS:

**Add these records:**

```
Type: A
Name: @
Value: 76.76.19.165
TTL: 3600

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

#### 7. Wait for Verification

- Vercel will check DNS records
- Takes 5 minutes to 24 hours
- Once verified, your site is live! 🎉

---

## OPTION 2: Netlify (Easy Alternative)

### Steps:

#### 1. Go to Netlify

https://netlify.com

#### 2. Sign up with GitHub

Click "Sign up" → "Continue with GitHub"

#### 3. Create New Site

1. Click "New site from Git"
2. Select "GitHub"
3. Find your repository
4. Click "Deploy site"

#### 4. Configure Build Settings (if needed)

- Build command: `npm run build`
- Publish directory: `dist`

#### 5. Add Your Domain

1. Go to Site Settings
2. Click "Domain management"
3. Click "Custom domains"
4. Add: `jaymeendevatka.me`

#### 6. Update DNS

Add these at your domain registrar:

```
CNAME: @ (or leave blank) → your-site-name.netlify.app
CNAME: www → your-site-name.netlify.app
```

#### 7. Verify

Done! Your site should be live in 10-30 mins.

---

## OPTION 3: GitHub Pages

### Steps:

#### 1. Update Your `vite.config.js`

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Keep this as root since you have custom domain
});
```

#### 2. Update Your `package.json` Scripts

Add this script:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "deploy": "npm run build"
  }
}
```

#### 3. Create GitHub Actions Workflow

Create file: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: jaymeendevatka.me
```

#### 4. Push to GitHub

```bash
git add .
git commit -m "Add deployment workflow"
git push origin main
```

#### 5. Update DNS at Domain Registrar

```
Type: A
Name: @
Values:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

Type: CNAME
Name: www
Value: 23ce023-jaymeen.github.io
```

#### 6. Enable GitHub Pages in Repo Settings

1. Go to your GitHub repo
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `gh-pages`
5. Folder: `/ (root)`

#### 7. Add Custom Domain to GitHub Pages

1. Settings → Pages
2. Custom domain: `jaymeendevatka.me`
3. Check "Enforce HTTPS"
4. Save

Done! GitHub will automatically create CNAME file.

---

## DNS Propagation Wait

After updating DNS, it may take:

- **Instant to 5 minutes:** Quick providers
- **Up to 24-48 hours:** Typical propagation
- **Check propagation:** https://dnschecker.org

---

## Testing After Deployment

### ✅ Checklist

- [ ] https://jaymeendevatka.me loads
- [ ] https://www.jaymeendevatka.me redirects to jaymeendevatka.me
- [ ] Page is fast (< 3 seconds)
- [ ] All links work
- [ ] Mobile responsive
- [ ] Images load
- [ ] Theme toggle works
- [ ] No console errors
- [ ] HTTPS enabled (lock icon visible)

### Test Commands

```bash
# Check DNS
nslookup jaymeendevatka.me

# Check HTTPS
curl -I https://jaymeendevatka.me

# Check redirect
curl -I http://www.jaymeendevatka.me
```

---

## Performance Monitoring After Deployment

### 1. Google PageSpeed Insights

- Go to: https://pagespeed.web.dev/
- Enter: jaymeendevatka.me
- Target: 90+ score
- Fix issues shown

### 2. Google Search Console

- Go to: https://search.google.com/search-console
- Add property: jaymeendevatka.me
- Submit sitemap: jaymeendevatka.me/sitemap.xml
- Monitor issues

### 3. Google Analytics

- Create account: https://analytics.google.com
- Add tracking code to your site
- Monitor traffic

---

## SSL/HTTPS Certificate

### Vercel/Netlify/GitHub Pages

✅ **Automatic** - They handle SSL for you

### Manual Setup (If needed)

- Use Let's Encrypt (free)
- Vercel/Netlify/GitHub Pages includes it automatically

---

## Continuous Deployment Setup

### How It Works

```
You push code to GitHub
    ↓
GitHub notifies Vercel/Netlify
    ↓
Vercel/Netlify automatically builds
    ↓
Build completes
    ↓
Your site updates automatically ✅
```

**No manual deployment needed!**

---

## Common Issues & Solutions

| Issue                         | Solution                                                                     |
| ----------------------------- | ---------------------------------------------------------------------------- |
| Domain shows parked page      | Wait 24-48 hours for DNS, check you added correct A/CNAME records            |
| Gets stuck on "Verifying DNS" | Check DNS records at your registrar, verify TTL is reasonable (3600 or less) |
| HTTPS not working             | Wait 24 hours, then check "Enforce HTTPS" in platform settings               |
| Site shows old version        | Clear browser cache (Ctrl+Shift+Del) or use incognito mode                   |
| Build fails                   | Run `npm install && npm run build` locally, fix errors, then push            |
| Gist data not loading         | Check Gist URL in code is correct, Gist is public                            |

---

## Emergency Troubleshooting

If something goes wrong:

1. **Clear everything and start fresh**

   ```bash
   npm install
   npm run build
   npm run preview
   ```

2. **Check browser console** (F12)
   - Look for red errors
   - Check network tab for failed requests

3. **Check platform logs**
   - Vercel: Deployments tab
   - Netlify: Deploys section
   - GitHub: Actions tab

4. **Verify Gist is public**
   - Go to your Gist
   - Look for "Made public" indicator

5. **Test DNS**
   - https://dnschecker.org
   - Search: jaymeendevatka.me

---

## Final Checklist Before Going Live

- [ ] All content updated in Gist files
- [ ] Tested locally: `npm run dev`
- [ ] Built successfully: `npm run build`
- [ ] Preview works: `npm run preview`
- [ ] Deployed to platform
- [ ] Domain added to platform
- [ ] DNS records updated at registrar
- [ ] Waited for DNS propagation
- [ ] Tested jaymeendevatka.me in browser
- [ ] All links work
- [ ] Mobile responsive
- [ ] HTTPS shows lock icon
- [ ] Shared on social media! 🎉

---

## Recommended Timeline

- **Now:** Choose platform (Vercel ⭐)
- **Day 1:** Deploy to Vercel
- **Day 1:** Add domain and update DNS
- **Day 2-3:** DNS propagates (wait up to 48 hours)
- **Day 3:** Test jaymeendevatka.me
- **Day 3:** Update GitHub/LinkedIn/resume with new URL
- **Day 3:** Share on social media! 🚀

---

## Support

If you get stuck:

1. **Vercel Help:** https://vercel.com/help
2. **Netlify Help:** https://docs.netlify.com
3. **GitHub Pages:** https://pages.github.com
4. **DNS Help:** https://dnschecker.org
5. **Stack Overflow:** Tag your question with `vercel` or `netlify`

---

**You're almost there! 🎯 Get your portfolio live today!**

Next Step: Choose Vercel and deploy! ⭐
