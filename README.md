# Kondwani Moyo Portfolio

A clean, responsive personal portfolio website showcasing services, selected projects, and a Firebase-powered contact form.

## Live Pages
- `index.html` - Home
- `services.html` - Services
- `portfolio.html` - Portfolio
- `contact.html` - Contact

## Features
- Clear visual hierarchy across all pages
- Responsive layout for desktop/tablet/mobile
- Staggered reveal animations with reduced-motion support
- Active navigation state (`aria-current`)
- Contact form with:
  - Input sanitization
  - Field-level validation
  - Inline error messages
  - Compact success/error status message
  - Firestore submission via Firebase

## Tech Stack
- HTML5
- CSS3 (`theme.css`)
- Vanilla JavaScript (module script in `contact.html`)
- Firebase Firestore (`firebase.js`)

## Project Structure
```text
PORTFOLIO/
|-- index.html
|-- services.html
|-- portfolio.html
|-- contact.html
|-- theme.css
|-- firebase.js
|-- Icons/
`-- image0.png
```

## Run Locally
1. Open the project folder.
2. Launch `index.html` in your browser.
3. Test navigation and layout responsiveness.

## Firebase Contact Form Setup
1. Create a Firebase project.
2. Enable Firestore Database.
3. Add your Firebase web config in `firebase.js`.
4. Ensure Firestore rules allow writes for your use case.
5. Test form submission from `contact.html`.

## Deploy on GitHub Pages
1. Push this project to a public GitHub repository.
2. Go to `Settings > Pages`.
3. Set source to `Deploy from a branch`.
4. Choose branch `main` and folder `/ (root)`.
5. Save and wait for deployment.

## Customization
- Update text/content directly in each HTML page.
- Update colors/spacing/animations in `theme.css`.
- Replace social links and contact details in `contact.html`.
- Add portfolio cards in `portfolio.html`.
