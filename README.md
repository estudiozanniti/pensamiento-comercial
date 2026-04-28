# Pensamiento Comercial

Sitio editorial jurídico estático para publicar contenido sobre derecho comercial argentino, contratos, concursos, sociedades, empresa, fideicomisos, real estate y litigios patrimoniales.

## Estructura

- `src/index.njk`: página principal.
- `src/articulos/`: artículos en Markdown.
- `src/categorias/`: páginas por categoría.
- `src/_includes/layouts/`: plantillas.
- `src/assets/css/styles.css`: estilos visuales.
- `src/assets/js/site.js`: funciones simples del sitio.
- `src/about.md`: página institucional.
- `src/contacto.md`: contacto y disclaimer.

## Cómo editar artículos

Cada artículo es un archivo `.md` dentro de `src/articulos`.

Ejemplo:

```markdown
---
title: "Título del artículo"
description: "Resumen breve del artículo."
date: 2026-04-28
category: "Contratos"
tags: ["contratos", "empresa"]
---

# Título del artículo

Contenido del artículo...
```

## Cómo correr localmente

```bash
npm install
npm run start
```

Luego abrir:

```text
http://localhost:8080
```

## Cómo publicar gratis en Cloudflare Pages

1. Crear un repositorio en GitHub, por ejemplo `pensamiento-comercial`.
2. Subir estos archivos al repositorio.
3. Entrar a Cloudflare Pages.
4. Crear proyecto desde GitHub.
5. Build command: `npm run build`
6. Build output directory: `_site`
7. Agregar dominio personalizado: `pensamientocomercial.com.ar`.
8. En NIC Argentina, delegar/configurar DNS según indique Cloudflare.

## Recomendación de categorías iniciales

- Derecho Comercial
- Contratos
- Concursos y Quiebras
- Sociedades y Empresa
- Real Estate
- Fideicomisos
- Litigios Comerciales
- Jurisprudencia Comentada
- Actualidad Normativa

## Disclaimer

Este sitio no reemplaza el asesoramiento jurídico profesional ni constituye patrocinio letrado. La información publicada tiene finalidad académica, editorial y de análisis general.
