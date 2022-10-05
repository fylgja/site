---
title: "Features"
description: "All of the features Fylgja supports to enhance your experience."
permalink: "/{{ page.fileSlug }}/"
eleventyExcludeFromCollections: true
style: { 
    inline: "
        #features-grid {
            --card-radius: 8px;
            --card-elevation: none;
            --card-border: 1px solid rgb(0 0 0 / 12%);
        }
    "
}
---

All of the features Fylgja supports to enhance your experience.

<div id="features-grid" class="auto-grid">
{%- for item in collections.features -%}
    <a href="{{ item.url }}" class="card card-content">
        <h2 class="h5">{{ item.data.title }}</h2>
        <p class="text-small my-0">{{ item.data.description | truncate(64) }}</p>
    </a>
{%- endfor -%}
</div>
