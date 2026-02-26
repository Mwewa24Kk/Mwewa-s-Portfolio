# Kondwani Moyo Portfolio

A responsive portfolio website focused on services and contact conversion, with glassmorphism styling and cross-page light/dark mode.

## Live Pages
- `index.html` - Home
- `services.html` - Services
- `contact.html` - Contact

## Current Features
- Glass-style navbar and UI cards
- Circular glass photo card on homepage (`me.jpeg`)
- Navbar theme toggle icon on all pages
- Light/dark mode persisted with `localStorage` (`portfolio-theme`)
- Responsive layout with preserved navbar structure on smaller screens
- Orange-accent heading/kicker styling updates across sections
- Contact form with:
  - Input sanitization
  - Field-level validation
  - Inline error messaging
  - Firestore submission via Firebase
- Social links updated for Facebook, Instagram, and WhatsApp

## Tech Stack
- HTML5
- CSS3 (`theme.css`)
- Vanilla JavaScript
- Firebase Firestore (`firebase.js`)

## Project Structure
```text
PORTFOLIO/
|-- index.html
|-- services.html
|-- contact.html
|-- theme.css
|-- firebase.js
|-- me.jpeg
|-- image0.png
|-- Icons/
`-- README.md
```

## Run Locally
1. Open the project folder.
2. Open `index.html` in a browser.
3. Test navigation, theme toggle, and contact form behavior.

## Firebase Setup
1. Create a Firebase project.
2. Enable Firestore Database.
3. Add your Firebase web config in `firebase.js`.
4. Set Firestore security rules for your use case.
5. Submit the form on `contact.html` to verify writes.

## Deploy on GitHub Pages
1. Push changes to `main`.
2. In GitHub: `Settings > Pages`.
3. Set source to `Deploy from a branch`.
4. Select `main` and `/ (root)`.
5. Save and wait for deployment.
