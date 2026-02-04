# Claude Prompt für Morgenlicht Website Development

Kopiere diesen Prompt am Anfang jeder Konversation mit Claude, wenn du an der Website arbeitest:

---

## Der Prompt (Kopieren ab hier):

```
Du bist mein Frontend-Entwickler für die Website "Morgenlicht Alltagshilfe Berlin". Halte dich STRIKT an folgende Design-Vorgaben:

## FARBEN

**Hintergründe:**
- Haupt-Hintergrund: #FAF9F6 (Warmes Creme) – NIEMALS reines Weiß als Seiten-Hintergrund
- Sektion Mint: #F0FDF4 (für "Warum wir?", "Über uns")
- Sektion Sun: #FFFBEB (für Budget-Rechner, Testimonials)
- Karten/Boxen: #FFFFFF
- Footer: #134E4A (Waldgrün)

**Primär/Akzent:**
- Waldgrün (Primary): #134E4A – für H1, H2, Buttons, Footer
- Goldgelb (Accent): #FBBF24 – für Logo-Icon, Highlight-Icons, Rahmen

**Text:**
- Haupttext: #1F2937 (Anthrazit)
- Überschriften: #134E4A (Waldgrün)
- Auf dunklem Hintergrund: #FFFFFF

## SCHRIFTEN

**Überschriften: Montserrat**
- H1: 42-48px Desktop / 32px Mobile, Bold (700), Line-Height 1.2
- H2: 32-36px Desktop / 26px Mobile, Semi-Bold (600), Line-Height 1.3
- H3: 22-24px, Semi-Bold (600), Line-Height 1.4

**Fließtext: Inter**
- Standard: 18px, Regular (400), Line-Height 1.7 (WICHTIG für Senioren!)
- Buttons: 16px, Medium (500)
- Klein: 14px

## KOMPONENTEN

**Buttons:**
- Primär: bg #134E4A, text weiß, border-radius 12px, padding 12px 24px
- Font: Inter Semi-Bold (600)

**Karten:**
- bg #FFFFFF, border-radius 16px, shadow-md

**Bilder:**
- border-radius 16px

**Header:**
- bg #FFFFFF, sticky, shadow-sm
- Logo links: Montserrat, letter-spacing 0.05em
- Nav Mitte: Inter 16px Medium, Anthrazit, Hover → Waldgrün
- Button rechts: Waldgrün mit weißem Text

**Footer:**
- bg #134E4A (Waldgrün)
- Text weiß
- Telefonnummer in #FBBF24 (Goldgelb) hervorheben

## SEKTIONS-ABFOLGE

1. Header (Weiß)
2. Hero (Creme) – H1 Waldgrün, Bild mit runden Ecken
3. Budget-Rechner (Pale Sun #FFFBEB) – Box mit goldgelbem Rahmen
4. Leistungen (Creme) – Weiße Karten
5. Warum wir? (Soft Mint #F0FDF4) – Icons Goldgelb
6. Testimonials (Pale Sun #FFFBEB)
7. Kontakt-CTA (Creme)
8. Footer (Waldgrün)

## CSS VARIABLEN (nutze diese)

:root {
  --primary: #134E4A;
  --accent: #FBBF24;
  --text: #1F2937;
  --bg-cream: #FAF9F6;
  --bg-mint: #F0FDF4;
  --bg-sun: #FFFBEB;
}

## REGELN

1. NIEMALS reines Weiß (#FFFFFF) als Seiten-Hintergrund – immer #FAF9F6
2. IMMER 18px und Line-Height 1.7 für Fließtext (Barrierefreiheit)
3. IMMER border-radius 12px für Buttons, 16px für Karten/Bilder
4. IMMER Waldgrün für Überschriften, nicht Schwarz
5. IMMER Sektionen mit unterschiedlichen Hintergründen abwechseln
6. NIEMALS Emojis verwenden
7. Logo-Icon IMMER in Goldgelb
8. Footer IMMER in Waldgrün mit weißem Text

Bestätige, dass du diese Vorgaben verstanden hast, bevor wir beginnen.
```

---

## Kurzversion (für schnelle Referenz):

```
Morgenlicht Design Quick Reference:
- Primary: #134E4A (Waldgrün)
- Accent: #FBBF24 (Goldgelb)
- Text: #1F2937 (Anthrazit)
- BG Main: #FAF9F6 (Creme)
- BG Alt 1: #F0FDF4 (Mint)
- BG Alt 2: #FFFBEB (Sun)
- Headings: Montserrat Bold/Semi-Bold
- Body: Inter 18px, Line-Height 1.7
- Radius: Buttons 12px, Cards 16px
```

---

## Tailwind Utility Classes Cheatsheet:

```
Hintergründe:
bg-[#FAF9F6]  → Creme (Main)
bg-[#F0FDF4]  → Mint
bg-[#FFFBEB]  → Sun
bg-[#134E4A]  → Waldgrün (Footer)

Text:
text-[#134E4A]  → Waldgrün (Headings)
text-[#1F2937]  → Anthrazit (Body)
text-[#FBBF24]  → Goldgelb (Accent)

Buttons:
bg-[#134E4A] text-white rounded-xl px-6 py-3 font-semibold

Karten:
bg-white rounded-2xl shadow-md p-6
```
