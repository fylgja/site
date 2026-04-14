<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> RSS Feed</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <style>
			:root {
				--brand: rebeccapurple;
				--on-brand: #fff;
				--text-color: #1f2937;
				--text-color-muted: #6b7280;
				--bg-color: #f9fafb;
				--border-color: #e5e7eb;
				--border-color-fade: rgba(229, 231, 235, 0.5);
				--font-family: system-ui, -apple-system, sans-serif;
			}

			@media (prefers-color-scheme: dark) {
				:root {
				    --text-color: #f3f4f6;
				    --text-color-muted: #9ca3af;
				    --bg-color: #111827;
				    --border-color: #374151;
				    --border-color-fade: rgba(55, 65, 81, 0.5);
				}
			}

			body {
				font-family: var(--font-family);
				color: var(--text-color);
				background-color: var(--bg-color);
				line-height: 1.5;
				max-width: 800px;
				margin: 0 auto;
				padding: 2rem 1rem;
			}

			a {
				color: currentcolor;
				text-decoration: underline;
			}

			a:hover {
				text-decoration: none;
			}

			.header {
				margin-bottom: 2rem;
				padding-bottom: 1rem;
				border-bottom: 1px solid var(--border-color);
			}

			.header h1 {
				margin: 0 0 0.5rem 0;
				line-height: 1.2;
			}

			.header p {
				color: var(--text-color-muted);
				margin-top: 0;
			}

			.btn-primary {
				display: inline-block;
				background-color: var(--brand);
				color: var(--on-brand);
				padding: 0.5rem 1rem;
				border-radius: 0.375rem;
				font-weight: 500;
				text-decoration: none;
				margin-top: 1rem;
			}

			.btn-primary:hover {
				opacity: 0.9;
				text-decoration: none;
			}

			.post {
				margin-bottom: 2rem;
				padding-bottom: 2rem;
				border-bottom: 1px dashed var(--border-color);
			}

			.post:last-child {
				border-bottom: none;
			}

			.post h3 {
				margin: 0 0 0.5rem 0;
				font-size: 1.25rem;
			}

			.meta {
				color: var(--text-color-muted);
				font-size: 0.875rem;
				margin-bottom: 1rem;
			}

			.badge-list {
				display: flex;
				gap: 0.5rem;
				flex-wrap: wrap;
				margin-top: 1rem;
				font-size: 0.875rem;
				color: var(--text-color-muted);
			}

			.badge::before {
				content: "#";
			}

			.alert {
				background-color: var(--brand);
				color: var(--on-brand);
				padding: 1rem;
				border-radius: 0.5rem;
				margin-bottom: 2rem;
				font-size: 0.875rem;
				border: 1px solid rgba(0,0,0,0.1);
			}

			footer {
				margin-top: 4rem;
				text-align: center;
				color: var(--text-color-muted);
				font-size: 0.875rem;
			}
        </style>
      </head>
      <body>
        <div class="alert">
          <strong>This is a web feed,</strong> also known as an RSS feed. <strong>Subscribe</strong> by copying the URL from the address bar into your newsreader.
        </div>

        <header class="header">
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <p><xsl:value-of select="/rss/channel/description"/></p>
          <a class="btn-primary" href="{/rss/channel/link}">Visit Website</a>
        </header>

        <main>
          <h2>Recent Posts</h2>
          <xsl:for-each select="/rss/channel/item">
            <article class="post">
              <h3>
                <a href="{link}">
                  <xsl:value-of select="title"/>
                </a>
              </h3>

              <div class="meta">
                Published on <xsl:value-of select="pubDate"/>
              </div>

              <p><xsl:value-of select="description"/></p>

              <xsl:if test="category">
                <div class="badge-list">
                  <xsl:for-each select="category">
                    <span class="badge"><xsl:value-of select="."/></span>
                  </xsl:for-each>
                </div>
              </xsl:if>
            </article>
          </xsl:for-each>
        </main>

        <footer style="margin-top: 4rem; text-align: center; color: var(--text-color-muted); font-size: 0.875rem;">
          <p>Fylgja Your CSS Companion</p>
        </footer>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
