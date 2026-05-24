# LINDJAN – Web Corporativa v2.0

> Solucions energètiques integrals per a empreses i particulars.  
> **Fent camí** cap a un futur energètic més eficient.

---

## Estructura del projecte

```
lindjan/
├── index.html              ← Pàgina principal
├── html/                   ← Pàgines secundàries
│   ├── serveis.html
│   ├── projectes.html
│   ├── consells.html       ← Consells d'eficiència energètica
│   ├── sobre-nosaltres.html
│   ├── contacte.html
│   └── 404.html
│
├── css/                    ← Estils
│   ├── style.css           ← Entry point (importa tots els parcials)
│   ├── variables.css       ← Colors, fonts, espais
│   ├── base.css            ← Reset i tipografia
│   ├── animations.css      ← Keyframes i classes reveal
│   ├── responsive.css      ← Tots els @media queries
│   └── components/
│       ├── header.css      ← Navbar i logo
│       ├── footer.css      ← Peu de pàgina
│       ├── buttons.css     ← Tots els botons
│       └── cards.css       ← Catalog, projecte, servei, cert, etc.
│
├── js/                     ← Funcionalitats
│   ├── main.js             ← Entry point
│   ├── menu.js             ← Navbar scroll + menú mòbil
│   ├── animations.js       ← Reveal on scroll
│   ├── slider.js           ← Carrusel de projectes
│   ├── form.js             ← Validació i enviament formularis
│   └── utils/
│       ├── constants.js    ← Constants de l'app
│       └── helpers.js      ← Funcions reutilitzables
│
├── img/                    ← Imatges organitzades
│   ├── logo/               ← logo.svg, favicon.png  ← PENDENT
│   ├── backgrounds/        ← Imatges de fons de seccions
│   ├── projects/           ← Fotos dels projectes (SVG placeholder actuals)
│   ├── products/           ← Fotos del catàleg (SVG placeholder actuals)
│   ├── icons/              ← Icones SVG personalitzades
│   ├── team/               ← Fotos de l'equip  ← PENDENT
│   └── uploads/            ← Arxius pujats pels clients
│
├── fonts/                  ← Tipografies locals (opcional, ara Google Fonts)
├── data/                   ← Dades JSON
│   ├── projects.json       ← Llistat projectes
│   ├── services.json       ← Llistat serveis i certificats
│   └── consells.json       ← Consells d'eficiència
│
├── assets/pdf/             ← PDFs descarregables (catàlegs, guies)
├── sitemap.xml             ← SEO
├── robots.txt              ← SEO Google
├── manifest.json           ← PWA
├── package.json
└── README.md
```

---

## Com obrir en local

**Opció ràpida (sense instal·lar res):**
Obre `index.html` directament al navegador.

**Opció recomanada (amb servidor local):**
```bash
npm install
npm run dev
# Obre http://localhost:3000
```

---

## Imatges PENDENTS de substituir

Busca el comentari `<!-- TODO ES: ... -->` al codi per trobar tots els llocs
on cal substituir una imatge SVG placeholder per una foto real.

Prioritat:
1. `img/logo/logo.svg` + `img/logo/favicon.png` ← Més urgent
2. `img/backgrounds/hero.jpg` ← Imatge hero principal (1920×1080 WebP)
3. `img/projects/proj-*.jpg` ← Fotos reals dels projectes executats
4. `img/products/*.jpg` ← Fotos dels equips i productes
5. `img/team/*.jpg` ← Fotos de l'equip (fons neutre, roba de treball)

---

## Paleta de colors

| Variable           | Valor      | Ús                        |
|--------------------|------------|---------------------------|
| `--c-orange`       | `#F7941D`  | Accents, botons, CTA       |
| `--c-navy`         | `#0D2735`  | Fons fosc, textos          |
| `--c-teal`         | `#1A4A5C`  | Gradients, variació navy   |
| `--c-blue`         | `#1EAAE5`  | Icona de la flama (part alta)|
| `--c-off-white`    | `#F8F9FA`  | Fons de seccions alternes  |

---

## Pàgines

| Pàgina              | Descripció                               |
|---------------------|------------------------------------------|
| `index.html`        | Home: hero, qui som, serveis, projectes  |
| `serveis.html`      | Catàleg, instal·lacions, certificats     |
| `projectes.html`    | Galeria filtrable de projectes           |
| `consells.html`     | Consells d'eficiència energètica         |
| `sobre-nosaltres.html` | Equip, valors, xifres                 |
| `contacte.html`     | Formulari avançat + dades de contacte    |
| `404.html`          | Pàgina d'error 404                       |

---

© Lindjan S.L. 2026 – Tots els drets reservats
