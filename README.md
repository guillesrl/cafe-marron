# Essence — Cafetería Premium

Landing page para una cafetería artesanal de especialidad ubicada en Buenos Aires. Presenta la historia de la marca, orígenes del café, menú y sistema de reservas, con animaciones fluidas impulsadas por GSAP.

## Tecnologías

- HTML5 semántico
- CSS3 con variables personalizadas, Grid y Flexbox
- JavaScript ES6+ (vanilla, sin frameworks)
- GSAP 3.12.5 con plugins ScrollTrigger y ScrollToPlugin
- Google Fonts: Cormorant Garamond + Outfit

## Características

- Animaciones de entrada en carga de página (timeline GSAP)
- Animaciones por sección activadas por scroll (ScrollTrigger)
- Diseño responsive: desktop, tablet y mobile
- Menú mobile con hamburguesa animada
- Secciones: Hero, Historia, Orígenes, Menú y Reservas

## Cómo ejecutar localmente

No requiere instalación ni build. Solo sirve los archivos estáticamente:

Con Python:
```bash
python3 -m http.server 8000
```

Con Node.js:
```bash
npx serve .
```

Luego abrí `http://localhost:8000` en el navegador.

## Estructura del proyecto

```
cafe-marron/
├── index.html      # Página principal
├── css/
│   └── style.css   # Estilos y sistema de diseño
├── js/
│   └── main.js     # Animaciones GSAP
└── coffee.jpeg     # Imagen hero
```

## Paleta de colores

| Variable | Valor | Uso |
|---|---|---|
| `--color-bg` | `#1a1612` | Fondo principal (espresso oscuro) |
| `--color-cream` | `#f5e6d3` | Texto principal |
| `--color-copper` | `#c47f5e` | Acento cobre/terracota |

## Contenido

- Marca: ESSENCE · "Café, elevado"
- Fundación: 2021, Buenos Aires
- Cafés de origen único: Ethiopia Yirgacheffe, Colombia Huila, Guatemala Antigua
- Contacto: hola@essence.coffee · 247 Calle principal, Buenos Aires
- Horario: Martes a domingo, 8am – 6pm
