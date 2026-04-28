# Prompt base para pedir nuevos artículos

Usá este prompt para generar contenido nuevo para Pensamiento Comercial:

> Preparame un artículo para Pensamiento Comercial sobre: [TEMA].
> Categoría: [Contratos / Concursos y Quiebras / Sociedades y Empresa / Real Estate / Fideicomisos / Litigios Comerciales].
> Estilo: jurídico, claro, técnico, práctico y orientado a derecho argentino.
> Formato: Markdown con front matter para Eleventy.
> Extensión: entre 900 y 1.500 palabras.
> Estructura: título, resumen, apartados numerados en romanos, conclusión práctica y disclaimer breve.
> No hacerlo como publicidad del estudio jurídico.

Ejemplo de front matter:

```markdown
---
layout: layouts/article.njk
title: "Título"
description: "Resumen breve"
date: 2026-04-28
category: "Contratos"
tags: ["contratos", "empresa"]
---
```
