# Rebuild — 21 Days. One Direction. One Commitment.

Official landing page website for the **Rebuild** Android self-improvement and habit transformation application. Built with React, TypeScript, Vite, and Tailwind CSS.

---

## 🚀 Features

- **Modern & Premium Brand Aesthetic**: Dark/Light mode theme switch, lime green accents, glowing glassmorphic cards, and clean typography (`Plus Jakarta Sans`).
- **Centralized APK Link Configuration**: Configure your Google Drive APK sharing URL in `src/config/app.ts`.
- **Interactive App Preview**: Live React dashboard simulation where visitors can check off daily tasks, inspect streak counters, and test the 21-Day habit commitment matrix.
- **Android Installation Safety Guide**: Built-in dialog explaining Android's "Install from unknown sources" permission prompt.
- **Fully Responsive**: Optimized for Mobile devices, Tablets, and Desktop screens.
- **SEO & Social Metadata**: Preconfigured Open Graph meta tags, Twitter card preview, and custom SVG favicon.
- **Vercel Ready**: Out-of-the-box configuration for GitHub push and 1-click Vercel deployment.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Animations & Effects**: Framer Motion & Canvas Confetti

---

## ⚙️ How to Configure Your Google Drive File ID

To connect your Android APK file download to the website:

1. Open `src/config/app.ts`.
2. Locate `GOOGLE_DRIVE_FILE_ID`.
3. Set your Google Drive File ID:

```typescript
export const APP_CONFIG = {
  name: "Rebuild",
  tagline: "21 Days. One Direction. One Commitment.",
  headline: "Small steps. Real change.",
  subheadline: "Rebuild your routine, regain your focus, and become consistent again — one day at a time.",
  
  // Paste your active Google Drive File ID here:
  GOOGLE_DRIVE_FILE_ID: "1WoBw2WqebgRQjwmn4w3KH3hxLP9gKcWH",
  
  // App Version & Meta
  version: "v1.0.4-release",
  fileSize: "54 MB",
};
```

All download buttons on the site will automatically trigger:
`https://drive.google.com/uc?export=download&id=YOUR_FILE_ID`

*Note: If the file ID is missing or empty, the website will display a helpful setup modal.*

---

## 💻 Local Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 🌐 Deploying to Vercel

### Option A: Via GitHub & Vercel Dashboard (Recommended)

1. **Initialize Git & Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Rebuild website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/rebuild-website.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [Vercel](https://vercel.com/) and sign in.
   - Click **Add New... -> Project**.
   - Import your `rebuild-website` repository from GitHub.
   - Framework Preset: **Vite**.
   - Click **Deploy**.

### Option B: Via Vercel CLI

```bash
npm install -g vercel
vercel
```

---

## 📁 Project Structure

```
rebuild-website/
├── public/
│   └── favicon.svg              # Custom SVG logo favicon
├── src/
│   ├── assets/                  # Visual assets & icons
│   ├── components/
│   │   ├── AccordionItem.tsx    # FAQ accordion item
│   │   ├── DownloadModal.tsx    # APK download & security modal
│   │   ├── FeatureCard.tsx      # Feature card component
│   │   ├── Footer.tsx           # Page footer with links & dynamic year
│   │   ├── Logo.tsx             # SVG Rebuild brand logo
│   │   ├── Navbar.tsx           # Desktop & mobile drawer navbar
│   │   └── PrivacyPolicyModal.tsx # Local privacy policy modal
│   ├── config/
│   │   └── app.ts               # Centralized APK URL and site config
│   ├── pages/
│   │   ├── Home.tsx             # Main landing page
│   │   └── NotFound.tsx         # 404 error page
│   ├── sections/
│   │   ├── AppPreview.tsx       # Interactive React dashboard mockup
│   │   ├── Download.tsx         # Download CTA section
│   │   ├── FAQ.tsx              # Accordion FAQ section
│   │   ├── Features.tsx         # App features grid
│   │   ├── Hero.tsx             # Hero section & CTA
│   │   ├── HowItWorks.tsx       # 3-step process breakdown
│   │   ├── Story.tsx            # Founder's story & brand statement
│   │   └── WhyRebuild.tsx       # Core purpose section
│   ├── App.tsx                  # App routes configuration
│   ├── index.css                # Tailwind CSS imports & animations
│   └── main.tsx                 # App entry point
├── index.html                   # Entry HTML with SEO meta tags
├── package.json                 # Project dependencies & scripts
├── tsconfig.json                # TypeScript configuration
└── vite.config.ts               # Vite & Tailwind configuration
```

---

## 📄 License & Attribution

Designed and built for **Rebuild — 21 Days. One Direction. One Commitment.**
All rights reserved © 2026.
