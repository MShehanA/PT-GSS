GSS CORPORATE WEBSITE — VERCEL STATIC VERSION
============================================

This package is converted to static HTML/CSS/JavaScript for Vercel.
It does not require PHP hosting or a database.

IMPORTANT LIMITATION
- The contact form is currently a visual placeholder and does not send email.
- To activate it, first provide the company's official recipient email and connect a form service (for example Formspree) or a serverless function.
- Company history, management, HSSE policies, project gallery, photos, social media and contact details need verified company content before public launch.
- Check legal permit numbers/status against current official documents before publishing them as active claims.

DEPLOY USING VERCEL + GITHUB
1. Extract this ZIP on your computer.
2. Create/sign in to a GitHub account at https://github.com.
3. Create a new repository, e.g. gss-corporate-website.
4. Upload the CONTENTS of this folder to the repository root (index.html must be at root).
5. Sign in to https://vercel.com using GitHub.
6. Click Add New -> Project, then Import the gss-corporate-website repository.
7. Framework Preset: Other.
8. Build Command: leave blank / no build command.
9. Output Directory: leave default (root) or set to .
10. Click Deploy.
11. After deployment, Vercel provides a URL ending in vercel.app.

UPDATE WEBSITE
Edit files in GitHub and commit changes. Vercel automatically creates a new deployment.

DOMAIN LATER
When the company purchases a domain, open Vercel Project -> Settings -> Domains, add the domain, then follow the DNS records Vercel displays at the domain registrar.

PROJECT STRUCTURE
index.html                  Homepage
pages/*.html                Other website pages
assets/css/style.css        Main styles
assets/js/main.js           Mobile navigation and interactions
assets/images/logo-gss.png  Official supplied logo
vercel.json                 Vercel headers and URL settings

No Vercel account or deployment has been created by this package. The user must connect their own GitHub and Vercel accounts.
