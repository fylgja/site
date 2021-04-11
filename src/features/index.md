---
title: "Features"
description: ""
permalink: "/{{ page.fileSlug }}/"
eleventyExcludeFromCollections: true
---

All of the features Fylgja supports

<div class="auto-grid">
{%- for item in collections.features -%}
    <a href="{{ item.url }}" class="card card-content">
        <h2 class="h5">{{ item.data.title }}</h2>
        <div>{{ item.data.description }}</div>
    </a>
{%- endfor -%}
</div>
