# Ariel Kami — Portfolio Website

A premium, minimal portfolio website for Ariel Kami showcasing creative branding and visual storytelling work.

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 2. Organize Assets

Before running the development server, the assets need to be organized in the `public` folder.

Copy the following folders into `/public/assets/`:
- `Logotypes/grayscale/` → `/public/assets/logotypes/grayscale/`
- `Logotypes/color/` → `/public/assets/logotypes/color/`
- `Enseigne et affichage/` → `/public/assets/enseigne-affichage/`
- `Design & impression/` → `/public/assets/design-impressions/`

### 3. Run Development Server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
/app              - Next.js App Router pages
/components       - Reusable React components
  /portfolio      - Portfolio-specific components
  /animations     - Animation components
/public/assets    - Project images and SVG files
```

## Design System

### Colors
- **Black**: #000000
- **Dark Gray**: #666666
- **Mid Gray**: #979797
- **Light Gray**: #eeeeee
- **Accent Blue**: #0088cc

### Key Features
- Grayscale → Color reveal interaction on logotypes
- Minimal, editorial aesthetic
- Premium micro-interactions with Framer Motion
- Fully responsive design
- French language content

## Technologies

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS
- **Motion**: Framer Motion
- **Language**: TypeScript

## Deployment

The site is ready to deploy to Vercel:

```bash
vercel deploy
```

Or connect your GitHub repository to Vercel for automatic deployments.
