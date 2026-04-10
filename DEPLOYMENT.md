# Deployment Instructions for The Hui Bon Hoa Scholarship Website

This guide will help you deploy your website to Vercel using GitHub.

## Prerequisites

- A GitHub account (username: ahbh852)
- A Vercel account (sign up at https://vercel.com)
- Git installed on your computer
- Node.js and npm installed

## Step 1: Download Your Project

1. Download/export all your project files from Figma Make
2. Extract the folder to your computer
3. Note the location of the extracted folder

## Step 2: Initialize Git Repository

1. Open Terminal/Command Prompt in your project folder (see instructions below)
2. Run these commands one by one:

```bash
# Initialize a new Git repository
git init

# Add all files to Git
git add .

# Create your first commit
git commit -m "Initial commit - HBH Scholarship website"
```

## Step 3: Create GitHub Repository

1. Go to https://github.com/ahbh852
2. Click the green "New" button (or go to https://github.com/new)
3. Repository name: **HBH-Scholarship**
4. Make it **Public** (recommended for easier deployment)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 4: Push Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/ahbh852/HBH-Scholarship.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

**Note:** You may need to authenticate with GitHub. Follow the prompts to enter your username and password (or use a Personal Access Token).

## Step 5: Deploy to Vercel

### Option A: Deploy via Vercel Website (Recommended)

1. Go to https://vercel.com and sign in (use GitHub to sign in for easier integration)
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Find and select **ahbh852/HBH-Scholarship**
5. Configure your project:
   - **Framework Preset:** Vite
   - **Root Directory:** ./ (leave as default)
   - **Build Command:** `npm run build` (should be auto-detected)
   - **Output Directory:** `dist` (should be auto-detected)
6. Click "Deploy"
7. Wait 2-3 minutes for deployment to complete

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? HBH-Scholarship
# - In which directory is your code located? ./
# - Want to override the settings? No

# Deploy to production
vercel --prod
```

## Step 6: Get Your Live URL

After deployment completes, Vercel will provide you with a URL like:
- **https://hbh-scholarship.vercel.app**

You can also set up a custom domain in Vercel settings if you have one.

## Updating Your Website

Whenever you make changes:

```bash
# Add the changes
git add .

# Commit with a descriptive message
git commit -m "Description of your changes"

# Push to GitHub
git push

# Vercel will automatically redeploy!
```

## How to Open Terminal in Your Project Folder

### Windows:
1. Open File Explorer and navigate to your project folder
2. Click in the address bar at the top
3. Type `cmd` and press Enter

### Mac:
1. Open Finder and navigate to your project folder
2. Right-click the folder and select "New Terminal at Folder"

### Linux:
1. Right-click inside the folder
2. Select "Open in Terminal"

## Troubleshooting

### "Command not found: git"
- Install Git from https://git-scm.com/downloads

### "Command not found: npm"
- Install Node.js from https://nodejs.org/

### GitHub Authentication Issues
- Use a Personal Access Token instead of password
- Create one at: https://github.com/settings/tokens

### Build Fails on Vercel
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Try running `npm install` and `npm run build` locally first

## Repository URLs

- **GitHub Repository:** https://github.com/ahbh852/HBH-Scholarship
- **Vercel Project:** (will be available after deployment)

## Need Help?

- Vercel Documentation: https://vercel.com/docs
- GitHub Documentation: https://docs.github.com
- Git Basics: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics

---

**Good luck with your deployment! 🚀**
