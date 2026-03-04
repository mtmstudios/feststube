

# Feststube – Premium Landing Page & Booking Funnel

## Overview
A high-converting, ultra-modern landing page for Feststube, a photo booth rental service in Esslingen, Germany. Features a fully interactive 4-step booking funnel, glassmorphism design, and WhatsApp integration.

## Design System
- **Colors**: White (#FFFFFF), Off-White (#F8FAFC) backgrounds, Deep Black (#09090B) text, Lilac accent (#D9A8FF)
- **Typography**: Plus Jakarta Sans – bold tight headings, clean body text
- **Style**: Glassmorphism header, Bento Box grids, subtle shadows, smooth animations via Framer Motion

## Page Sections

### 1. Sticky Header
- Glassmorphism (backdrop-blur) sticky nav
- Left: "feststube" brand text + purple balloon icon
- Right: "Jetzt anfragen" CTA button scrolling to funnel

### 2. Hero Section
- Centered layout with uploaded Feststube image (transparent background logo)
- German headline & subheadline as specified
- "Verfügbarkeit prüfen" button → smooth scroll to funnel

### 3. Interactive 4-Step Booking Funnel
A stateful React component with Framer Motion transitions and progress indicator:
- **Step 1 – Event-Typ**: 3 selectable cards (Hochzeit, Firmenfeier, Party/Geburtstag)
- **Step 2 – Dauer**: 3 options (Ein paar Stunden, Ganzer Abend, Komplettes Wochenende)
- **Step 3 – Extras**: Multi-select cards (Premium Hintergrund, Requisiten-Koffer, Gästebuch-Service)
- **Step 4 – Abschluss**: Summary of selections + WhatsApp CTA button + email fallback

### 4. Bento Box Features ("Warum Feststube?")
- 4-card grid with varying sizes, hover scale effects
- Top-Qualität, Stressfreier Aufbau, Sofort-Druck, Digitaler Link

### 5. Social Proof
- 3 five-star reviews with purple accent stars
- Clean minimal layout

### 6. Footer
- Minimalist: Copyright "Feststube Esslingen", Impressum, Datenschutz links

### 7. Floating WhatsApp Button
- Fixed bottom-right FAB with pulse animation
- Tooltip: "Schreib uns auf WhatsApp!"

## Technical Notes
- Install Framer Motion and Plus Jakarta Sans font
- Mobile-first responsive design throughout
- All copy in German as specified
- Uploaded Feststube image used as hero/logo asset

