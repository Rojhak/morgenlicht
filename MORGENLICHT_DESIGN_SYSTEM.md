# Morgenlicht Alltagshilfe Berlin – Design System

> **WICHTIG:** Dieses Dokument ist die verbindliche Design-Referenz für alle Website-Komponenten. Halte dich strikt an diese Vorgaben.

---

## 1. Farbpalette

### Primärfarben

| Name | Hex-Code | Verwendung |
|------|----------|------------|
| **Waldgrün (Primary)** | `#134E4A` | Überschriften (H1, H2), wichtige Buttons, Footer-Hintergrund |
| **Goldgelb (Accent)** | `#FBBF24` | Logo-Icon, Icons als Highlights, Sterne-Bewertungen, Rahmen Budget-Rechner |

### Hintergrundfarben

| Name | Hex-Code | Verwendung |
|------|----------|------------|
| **Warmes Creme** | `#FAF9F6` | Haupt-Hintergrund der gesamten Website |
| **Soft Mint** | `#F0FDF4` | Sektions-Trennung (z.B. "Warum wir?", "Über uns") |
| **Pale Sun** | `#FFFBEB` | Sektions-Trennung (z.B. Budget-Rechner, Testimonials) |
| **Reinweiß** | `#FFFFFF` | Header, Karten, Boxen |

### Textfarben

| Name | Hex-Code | Verwendung |
|------|----------|------------|
| **Anthrazit** | `#1F2937` | Fließtext, Beschreibungen, Navigation |
| **Waldgrün** | `#134E4A` | Überschriften H1, H2, H3 |
| **Reinweiß** | `#FFFFFF` | Text auf dunklem Hintergrund (Footer, Buttons) |

---

## 2. Typografie

### Schriftarten

- **Überschriften:** Montserrat
- **Fließtext:** Inter

### Schriftgrößen & Gewichte

#### Überschriften (Montserrat)

| Element | Desktop | Mobile | Weight | Line-Height | Letter-Spacing |
|---------|---------|--------|--------|-------------|----------------|
| H1 | 42–48px | 32px | 700 (Bold) | 1.2 | -0.02em |
| H2 | 32–36px | 26px | 600 (Semi-Bold) | 1.3 | normal |
| H3 | 22–24px | 20px | 600 (Semi-Bold) | 1.4 | normal |

#### Fließtext (Inter)

| Element | Desktop | Mobile | Weight | Line-Height |
|---------|---------|--------|--------|-------------|
| Standard Text | 18px | 17–18px | 400 (Regular) | 1.7 |
| Einleitung (nach H1) | 20px | 18px | 400 (Regular) | 1.6 |
| Buttons | 16px | 16px | 500 (Medium) | 1.0 |
| Kleingedrucktes | 14px | 14px | 400 (Regular) | 1.5 |

> **WICHTIG:** Line-Height 1.7 für Fließtext ist Pflicht – das verbessert die Lesbarkeit für Senioren erheblich.

---

## 3. Header / Navigation

### Grundstruktur

```
Hintergrund: #FFFFFF (Reinweiß)
Position: sticky (oben fixiert)
Trenner: border-bottom: 1px solid #F3F4F6 ODER shadow-sm
```

### Logo (Links)

```
Schriftart: Montserrat
Haupttext "MORGENLICHT":
  - Desktop: 22–24px
  - Mobile: 18–20px
  - Letter-Spacing: 0.05em bis 0.1em
  - Farbe: #134E4A (Waldgrün)

Untertext "Alltagshilfe Berlin":
  - Desktop: 11–12px
  - Mobile: 10px
  - Weight: 500 (Medium)
  - Letter-Spacing: 0.15em (Uppercase)
  - Farbe: #134E4A (Waldgrün)

Logo-Icon (Sonne):
  - Höhe: 40–44px
  - Farbe: #FBBF24 (Goldgelb)
  - Abstand zum Text: 12–16px
```

### Navigation (Mitte)

```
Schriftart: Inter
Schriftgröße: 16px
Weight: 500 (Medium)
Farbe: #1F2937 (Anthrazit)
Hover-Effekt: Farbe wechselt zu #134E4A (Waldgrün)
```

### Kontakt-Button (Rechts)

```
Text: "Kontakt"
Hintergrund: #134E4A (Waldgrün)
Textfarbe: #FFFFFF
Schrift: Inter, 600 (Semi-Bold)
Border-Radius: 12px
Padding: 10px 20px
```

---

## 4. Sektions-Layout (Startseite)

### Sektion 1: Hero-Bereich

```
Hintergrund: #FAF9F6 (Creme)
H1: Waldgrün (#134E4A)
Untertext: Anthrazit (#1F2937), 20px
Bild: border-radius: 16px
CTA-Button: Waldgrün mit weißem Text
```

### Sektion 2: Budget-Rechner

```
Hintergrund: #FFFBEB (Pale Sun)
Box: #FFFFFF mit 2px Rahmen in #FBBF24 (Goldgelb)
Überschriften: #134E4A (Waldgrün)
Icons: #FBBF24 (Goldgelb)
Button: #134E4A (Waldgrün)
```

### Sektion 3: Warum uns wählen?

```
Hintergrund: #F0FDF4 (Soft Mint)
Layout: 3 Spalten
Icons: #FBBF24 (Goldgelb)
Überschriften: #134E4A (Waldgrün)
Text: #1F2937 (Anthrazit)
```

### Sektion 4: Unsere Leistungen

```
Hintergrund: #FAF9F6 (Creme)
Karten: #FFFFFF mit sanftem Schatten (shadow-md)
Icons: #134E4A (Waldgrün)
H3: #134E4A (Waldgrün)
Text: #1F2937 (Anthrazit), 18px
```

### Sektion 5: Kundenstimmen / Testimonials

```
Hintergrund: #FFFBEB (Pale Sun)
Anführungszeichen: #FBBF24 (Goldgelb), groß
Text: #1F2937 (Anthrazit)
Kundenname: #134E4A (Waldgrün)
```

### Sektion 6: Kontakt / CTA

```
Hintergrund: #FAF9F6 (Creme) oder #FFFFFF
Telefonnummer: #134E4A (Waldgrün), 32px, Bold
```

---

## 5. Footer

```
Hintergrund: #134E4A (Waldgrün)
Textfarbe: #FFFFFF
Logo: Weiße oder goldgelbe Version
Telefonnummer: #FBBF24 (Goldgelb) – hervorgehoben
Links: Weiß, Hover: leicht aufgehellt
```

---

## 6. Komponenten-Spezifikationen

### Buttons

#### Primärer Button

```css
background-color: #134E4A;
color: #FFFFFF;
font-family: Inter;
font-weight: 600;
font-size: 16px;
padding: 12px 24px;
border-radius: 12px;
border: none;
cursor: pointer;
transition: background-color 0.2s;

/* Hover */
background-color: #0F3D3A; /* etwas dunkler */
```

#### Sekundärer Button

```css
background-color: transparent;
color: #134E4A;
border: 2px solid #134E4A;
/* Rest wie primärer Button */
```

### Karten

```css
background-color: #FFFFFF;
border-radius: 16px;
padding: 24px;
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
```

### Bilder

```css
border-radius: 16px;
object-fit: cover;
```

### Formular-Inputs

```css
font-family: Inter;
font-size: 16px;
padding: 12px 16px;
border: 1px solid #D1D5DB;
border-radius: 8px;
background-color: #FFFFFF;

/* Focus */
border-color: #134E4A;
outline: none;
box-shadow: 0 0 0 3px rgba(19, 78, 74, 0.1);
```

---

## 7. Abstände & Spacing

### Sektions-Abstände

```
Padding vertikal (Desktop): 80px – 100px
Padding vertikal (Mobile): 48px – 64px
```

### Container

```
Max-Width: 1200px
Padding horizontal: 24px (Mobile), 48px (Desktop)
```

### Element-Abstände

```
Zwischen H2 und Inhalt: 32px
Zwischen Absätzen: 24px
Zwischen Karten: 24px – 32px
Icon zu Text: 12px – 16px
```

---

## 8. Responsive Breakpoints

```css
/* Mobile First */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

---

## 9. Sektions-Übersicht (Visuelle Referenz)

| Sektion | Hintergrund | Überschrift | Text | Icons |
|---------|-------------|-------------|------|-------|
| Header | Weiß | – | Anthrazit | Goldgelb (Logo) |
| Hero | Creme | Waldgrün | Anthrazit | – |
| Budget-Rechner | Pale Sun | Waldgrün | Anthrazit | Goldgelb |
| Leistungen | Creme | Waldgrün | Anthrazit | Waldgrün |
| Warum wir? | Soft Mint | Waldgrün | Anthrazit | Goldgelb |
| Testimonials | Pale Sun | Waldgrün | Anthrazit | Goldgelb |
| Kontakt | Creme | Waldgrün | Anthrazit | – |
| Footer | Waldgrün | Weiß | Weiß | Goldgelb |

---

## 10. CSS Custom Properties (Empfohlen)

```css
:root {
  /* Farben */
  --color-primary: #134E4A;
  --color-primary-dark: #0F3D3A;
  --color-accent: #FBBF24;
  --color-text: #1F2937;
  --color-text-light: #6B7280;
  
  /* Hintergründe */
  --bg-cream: #FAF9F6;
  --bg-mint: #F0FDF4;
  --bg-sun: #FFFBEB;
  --bg-white: #FFFFFF;
  
  /* Schriften */
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Inter', sans-serif;
  
  /* Schriftgrößen */
  --text-xs: 14px;
  --text-sm: 16px;
  --text-base: 18px;
  --text-lg: 20px;
  --text-xl: 24px;
  --text-2xl: 32px;
  --text-3xl: 42px;
  
  /* Abstände */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 48px;
  --spacing-2xl: 80px;
  
  /* Radien */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  
  /* Schatten */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

---

## 11. Tailwind CSS Konfiguration (Falls verwendet)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'forest': {
          DEFAULT: '#134E4A',
          dark: '#0F3D3A',
        },
        'gold': '#FBBF24',
        'cream': '#FAF9F6',
        'mint': '#F0FDF4',
        'sun': '#FFFBEB',
        'anthracite': '#1F2937',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'body': ['18px', { lineHeight: '1.7' }],
        'intro': ['20px', { lineHeight: '1.6' }],
      },
      borderRadius: {
        'card': '16px',
        'button': '12px',
      },
    },
  },
}
```

---

## 12. Checkliste für jede Komponente

- [ ] Korrekte Hintergrundfarbe gemäß Sektion
- [ ] Überschriften in Montserrat, Waldgrün
- [ ] Fließtext in Inter, Anthrazit, 18px, Line-Height 1.7
- [ ] Buttons mit 12px Border-Radius
- [ ] Bilder mit 16px Border-Radius
- [ ] Korrekte Hover-Effekte
- [ ] Mobile-optimierte Schriftgrößen
- [ ] Ausreichend Abstände zwischen Elementen

---

## 13. Wichtige Hinweise

1. **Barrierefreiheit:** 18px Schriftgröße und 1.7 Line-Height sind Pflicht für die Zielgruppe (Senioren).

2. **Kontrast:** Alle Text-Kombinationen müssen WCAG AA erfüllen.

3. **SVG für Logo:** Immer SVG verwenden für Retina-Schärfe.

4. **Alt-Texte:** Alle Bilder brauchen beschreibende Alt-Texte für SEO und Accessibility.

5. **Sticky Header:** Muss immer sichtbar bleiben beim Scrollen.

6. **Telefonnummer:** Im Footer immer in Goldgelb hervorheben (32px, Bold).

7. **Keine harten Weiß-Hintergründe:** Immer Creme (#FAF9F6) als Basis verwenden.

---

*Letzte Aktualisierung: Februar 2026*
