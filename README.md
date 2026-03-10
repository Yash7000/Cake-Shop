# 🎂 La Belle Pâtisserie — Bakery Website

A beautiful, fully responsive 3-page bakery website built with React + Vite.

## Pages
- **Home (/)** — Hero, features, featured cakes, testimonials, CTA
- **Menu (/menu)** — Full cake catalog with filters, size/weight selector, cart
- **About (/about)** — Story, team, timeline, visit/contact info

## Features
- 🛒 Functional shopping cart (add, remove, update qty, checkout)
- 🔍 Search, filter by category, sort by price/name
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Scroll animations, hover effects, floating badges
- 🎨 Luxury design system (Playfair Display, Cormorant Garamond, Jost fonts)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack
- **React 18** + **React Router v6**
- **Vite** (build tool)
- **CSS Modules** (component-scoped styles)
- **Google Fonts** (Playfair Display, Cormorant Garamond, Jost)
- **Unsplash** (placeholder images — replace with your own for production)

## Deployment
This project is configured for static deployment. Run `npm run build` and deploy the `/dist` folder to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag the `/dist` folder to netlify.com
- **GitHub Pages**: Use `gh-pages` package

## Customization
- Edit cake data in `src/pages/Menu.jsx` (the `cakes` array)
- Update bakery info (address, hours, phone) in `src/components/Footer.jsx` and `src/pages/About.jsx`
- Swap Unsplash images with your own photos
- Adjust colors via CSS variables in `src/styles/global.css`

---
Built with ♥ for La Belle Pâtisserie
