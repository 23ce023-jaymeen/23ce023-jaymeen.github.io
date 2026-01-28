# 📝 Gist Data Template - Fill This Out

## Instructions

1. Go to https://gist.github.com
2. Create a new Gist
3. Copy-paste the content below into each file
4. Replace placeholder text with YOUR information
5. Make the Gist PUBLIC
6. Copy the Gist URL (you'll need it)

---

## File 1: `personal-info.json`

```json
{
  "name": "Jaymeen Devatka",
  "title": "Full Stack Developer & DevOps Enthusiast",
  "shortBio": "Building elegant digital experiences with clean code and modern technologies",
  "longBio": "I'm a passionate full-stack developer specializing in creating scalable web applications, DevOps solutions, and solving complex technical challenges. I love learning new technologies and sharing knowledge with the community.",
  "email": "your.email@gmail.com",
  "phone": "+91-XXXXXXXXXX",
  "location": "Ahmedabad, India",
  "github": "https://github.com/23ce023-jaymeen",
  "linkedin": "https://linkedin.com/in/jaymeen-devatka",
  "twitter": "https://twitter.com/yourusername",
  "resumeUrl": "https://drive.google.com/link-to-your-resume",
  "profileImage": "https://via.placeholder.com/400x400?text=Your+Photo"
}
```

**What to update:**

- [ ] name - Your name
- [ ] title - Your job title/focus
- [ ] shortBio - One line bio (for hero section)
- [ ] longBio - Longer description (paragraph)
- [ ] email - Your email
- [ ] phone - Your phone number
- [ ] location - Your location
- [ ] github - Your GitHub profile URL
- [ ] linkedin - Your LinkedIn profile URL
- [ ] twitter - Your Twitter profile URL
- [ ] resumeUrl - Link to your resume PDF
- [ ] profileImage - URL to your professional photo

---

## File 2: `skills.json`

```json
{
  "skills": [
    {
      "category": "Frontend",
      "items": [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "JavaScript ES6+",
        "HTML5",
        "CSS3",
        "Responsive Design"
      ]
    },
    {
      "category": "Backend",
      "items": [
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "RESTful APIs",
        "Authentication"
      ]
    },
    {
      "category": "DevOps & Tools",
      "items": [
        "Docker",
        "Git & GitHub",
        "GitHub Actions",
        "Linux",
        "CI/CD",
        "Vercel",
        "Netlify"
      ]
    },
    {
      "category": "Other Skills",
      "items": [
        "Firebase",
        "Postman",
        "VS Code",
        "Problem Solving",
        "Web Performance",
        "SEO Basics"
      ]
    }
  ]
}
```

**What to update:**

- [ ] Add/remove skill categories as needed
- [ ] Update items in each category with YOUR skills
- [ ] Keep skills relevant to your profile
- [ ] Organize by proficiency (most skilled first)

---

## File 3: `education.json`

```json
{
  "education": [
    {
      "name": "Charusat University",
      "program": "B.Tech in Computer Engineering",
      "duration": "2023 - 2027",
      "grade": "8.34/10",
      "description": "Pursuing my Bachelor's degree with focus on web development and DevOps"
    },
    {
      "name": "Orbit Career Institute",
      "program": "HSC (Science), GSEB",
      "duration": "2021 - 2023",
      "grade": "97.13 percentile",
      "description": "Completed higher secondary education with Science stream"
    }
  ]
}
```

**What to update:**

- [ ] Add your universities/colleges
- [ ] Update program names
- [ ] Update durations (start - end year)
- [ ] Add your grades/CGPA
- [ ] Add brief description of each

---

## File 4: `showcase-projects.json`

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project 1 Title",
      "description": "A brief description of what this project does and the problem it solves. Include key features.",
      "image": "https://via.placeholder.com/600x400?text=Project+1",
      "technologies": ["React", "Tailwind CSS", "Firebase"],
      "liveUrl": "https://project1-link.com",
      "githubUrl": "https://github.com/23ce023-jaymeen/project1-repo",
      "features": ["Feature 1", "Feature 2", "Feature 3"]
    },
    {
      "id": 2,
      "title": "Project 2 Title",
      "description": "Another amazing project description highlighting what makes it unique.",
      "image": "https://via.placeholder.com/600x400?text=Project+2",
      "technologies": ["React", "Node.js", "MongoDB"],
      "liveUrl": "https://project2-link.com",
      "githubUrl": "https://github.com/23ce023-jaymeen/project2-repo",
      "features": ["Feature 1", "Feature 2"]
    },
    {
      "id": 3,
      "title": "Project 3 Title",
      "description": "Your third best project. This is a showcase of your best work.",
      "image": "https://via.placeholder.com/600x400?text=Project+3",
      "technologies": ["React", "Express", "PostgreSQL"],
      "liveUrl": "https://project3-link.com",
      "githubUrl": "https://github.com/23ce023-jaymeen/project3-repo",
      "features": ["Feature 1", "Feature 2", "Feature 3"]
    }
  ]
}
```

**What to update:**

- [ ] Add 3-5 of your best projects
- [ ] For each project:
  - [ ] title - Project name
  - [ ] description - What it does (2-3 sentences)
  - [ ] image - Screenshot of project (upload to Imgur first)
  - [ ] technologies - Tech stack used
  - [ ] liveUrl - Live project link (if hosted)
  - [ ] githubUrl - GitHub repository link
  - [ ] features - Key features (3-5 bullet points)

**How to get project images:**

1. Take screenshot of your project
2. Upload to https://imgur.com
3. Copy image URL
4. Paste in JSON

---

## File 5: `experience.json`

```json
{
  "experience": [
    {
      "company": "Company Name 1",
      "position": "Full Stack Developer",
      "duration": "Jan 2024 - Present",
      "description": "Developing full-stack web applications using React and Node.js. Working with a team to deliver high-quality software.",
      "highlights": [
        "Built responsive web interfaces using React",
        "Designed and implemented REST APIs",
        "Optimized application performance"
      ]
    },
    {
      "company": "Company Name 2",
      "position": "Junior Developer / Intern",
      "duration": "Jun 2023 - Dec 2023",
      "description": "Learned industry practices and contributed to frontend development projects.",
      "highlights": [
        "Worked with React and Tailwind CSS",
        "Fixed bugs and improved UI/UX",
        "Collaborated with senior developers"
      ]
    }
  ]
}
```

**What to update:**

- [ ] Add your work experience (if any)
- [ ] If no work experience, you can leave empty array: `[]`
- [ ] For each job:
  - [ ] company - Company name
  - [ ] position - Your position/title
  - [ ] duration - Start and end date
  - [ ] description - What you did
  - [ ] highlights - Key achievements (3-4 points)

---

## File 6: `resume.json` (Optional)

```json
{
  "resumeLink": "https://drive.google.com/file/d/YOUR-FILE-ID/view",
  "downloadLink": "https://drive.google.com/uc?export=download&id=YOUR-FILE-ID"
}
```

---

## File 7: `testimonials.json` (Optional)

```json
{
  "testimonials": [
    {
      "author": "Person Name",
      "role": "Hiring Manager / Project Lead",
      "company": "Company Name",
      "content": "Jaymeen is an excellent developer who delivers quality work on time.",
      "image": "https://via.placeholder.com/80x80?text=Testimonial+1"
    }
  ]
}
```

---

## Quick Image Hosting Tips

### For Project Screenshots:

1. Take screenshot (Print Screen)
2. Go to https://imgur.com
3. Drag and drop image
4. Copy image URL
5. Paste URL in JSON

### For Profile Photo:

1. Use professional headshot
2. Upload to Imgur or Google Drive
3. Get shareable link
4. Paste in JSON

### Free Image URLs:

- Profile: https://via.placeholder.com/400x400?text=Your+Name
- Projects: https://via.placeholder.com/600x400?text=Project+Name

---

## Final Gist Setup

### Step 1: Create Gist

1. Go to https://gist.github.com
2. Click "Create public Gist"

### Step 2: Add Files

1. Click "Add file"
2. Filename: `personal-info.json`
3. Paste content above
4. Repeat for each file

### Step 3: Make Public & Save

1. Make sure "Create public gist" is selected
2. Click "Create public gist"
3. Copy the Gist URL

### Step 4: Update Your Code

Find the Gist URL in your code:

```
src/hooks/useGistData.js
```

Look for this URL and update it:

```javascript
const gistUrl = "https://gist.github.com/YOUR-USERNAME/YOUR-GIST-ID/raw";
```

---

## Example Gist URL

Your Gist URL should look like:

```
https://gist.github.com/23ce023-jaymeen/591efca2e09f0a1a769b33ff184c8d56
```

Raw URL (used in code):

```
https://gist.github.com/23ce023-jaymeen/591efca2e09f0a1a769b33ff184c8d56/raw
```

---

## Validation Checklist

Before moving forward, verify:

- [ ] All JSON files are valid (check for syntax errors)
- [ ] Gist is marked as PUBLIC
- [ ] All URLs are absolute (start with https://)
- [ ] No personal information is sensitive
- [ ] Image URLs work (test by opening in browser)
- [ ] All required fields are filled
- [ ] No placeholder text remains

---

## Testing Your Data

1. Create the Gist
2. Get the Gist URL
3. Test by visiting: `https://gist.github.com/YOUR-USERNAME/YOUR-GIST-ID/raw/personal-info.json`
4. Should see your JSON data

If you see raw JSON data, it's working! ✅

---

## Common Mistakes to Avoid

❌ Don't: Use private Gist
✅ Do: Use public Gist

❌ Don't: Leave placeholder text
✅ Do: Replace with real data

❌ Don't: Use relative image URLs
✅ Do: Use absolute URLs (https://...)

❌ Don't: Skip fields
✅ Do: Fill all required fields

❌ Don't: Use invalid JSON
✅ Do: Validate JSON format

---

## Example Complete Setup

Your Gist folder should have:

```
📁 Your Gist
├─ personal-info.json
├─ skills.json
├─ education.json
├─ showcase-projects.json
├─ experience.json
└─ (optional) resume.json, testimonials.json
```

All files should be in ONE Gist, not separate Gists.

---

## Next Steps

1. ✅ Fill out the templates above
2. ✅ Create a Gist with all files
3. ✅ Test the Gist URL
4. ✅ Update the URL in your code
5. ✅ Run `npm run dev` to test
6. ✅ Deploy to Vercel

---

**Ready? Create your Gist now! 🚀**
