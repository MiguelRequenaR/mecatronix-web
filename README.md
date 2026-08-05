# Mecatronix

Sitio web de Mecatronix Perú (Vite + React 19 + Tailwind 4).

## Tipografías

Las fuentes se sirven **auto-hospedadas** desde el propio bundle (vía `@fontsource`), nunca desde Google Fonts. Solo se cargan los pesos y subsets realmente utilizados:

- **Jost** 400, 500, 600, 700 (subset `latin`)
- **Comfortaa** 700 (subset `latin`)

Los imports están en `src/main.tsx`. Para añadir un peso o subset, instala el archivo correspondiente (`@fontsource/jost/latin-800.css`, etc.) e impórtalo.

## Imágenes

- **Iconos de redes sociales** (Instagram, Facebook, LinkedIn, TikTok): SVG inline definidos en `src/components/SocialIcons.tsx`. Cero requests externos.
- **Imágenes de hero, servicios y contacto** (LCP, galería): convertidas a WebP con múltiples tamaños en `public/images/`, servidas vía `<picture>` con `srcset` para responsive. Fallback JPG incluido para navegadores antiguos.
- **Logo propio** (`mecatronixLogoWB.png`): WebP en `public/images/logo/` con fallback PNG.

Para regenerar/añadir más imágenes optimizadas, ejecuta `python3 scripts/optimize-images.py` (requiere `Pillow`).

## Build y rendimiento

`bun run build` ejecuta `tsc -b && vite build` y luego `node scripts/inline-css.mjs` (post-build) que:

1. Inyecta el CSS final en un `<style>` dentro de `<head>` (elimina la solicitud bloqueante de `/assets/index-*.css`).
2. Extrae las URLs de los `.woff2` y genera automáticamente `<link rel="preload" as="font" type="font/woff2" crossorigin>` para cada uno.
3. Elimina el archivo CSS de `dist/assets/`.

Otras optimizaciones configuradas:

- `<link rel="preload" as="image" type="image/webp" fetchpriority="high">` para la imagen LCP del hero (WebP).
- `<link rel="preload" as="image">` para el logo del navbar (WebP + PNG fallback).
- `dns-prefetch` para hosts externos.
- `fetchPriority="high"` + `width`/`height` en la imagen LCP y el logo.
- `loading="lazy"` + `decoding="async"` en imágenes below-the-fold.

## Scripts

- `bun run dev` — servidor de desarrollo
- `bun run build` — build de producción
- `bun run preview` — previsualizar el build
- `bun run lint` — ESLint
- `python3 scripts/optimize-images.py` — regenera/optimiza imágenes (Pillow requerido)
