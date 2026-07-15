---
title: "AI & LLM Support"
description: "How Fylgja integrates with AI tools and provides context for Large Language Models"
faq:
  - question: Why would a general-purpose AI need llms.txt for Fylgja?
    answer: Fylgja's classless base styles, design tokens, and Dynamic CSS Utilities
      differ from the utility-class conventions AI models are usually trained on
      (like Tailwind), so without extra context an AI may suggest patterns that
      don't match how Fylgja actually works.
  - question: Does the "Ask AI" button send my data anywhere?
    answer: No, it's entirely static and runs in your browser. It only copies a
      pre-formatted prompt to your clipboard or opens a chat with an AI tool you
      choose. Fylgja doesn't run or proxy any backend AI models.
  - question: Is there an official Fylgja MCP server?
    answer: Not yet, first-party. Third-party MCP servers such as Context7 already
      index Fylgja's docs, so you can get MCP-based context today without Fylgja
      needing to ship its own server.
  - question: Which AI coding assistants can use the Fylgja Skill?
    answer: The docs show install commands for Gemini CLI, Claude Code, Cursor, and
      GitHub Copilot, plus a generic pattern for any other agent that reads
      skills from a local folder (e.g. .codex or .opencode).
---

Fylgja CSS is designed to be easily readable and understandable not just by human developers, but also by AI agents and Large Language Models (LLMs).

## Asking AI about Fylgja

While browsing the Fylgja documentation, you may notice an **"Ask AI"** button on many of our pages. This button allows you to quickly query an AI about the page you are currently viewing by automatically copying a pre-formatted prompt to your clipboard, or by directly opening a chat with an AI like Claude.

This feature is completely static and operates entirely in your browser. We don't run any backend AI models; instead, this tool bridges the gap by preparing the necessary context so you can get the most accurate answers from your preferred AI tools.

## AI Context File (`llms.txt`)

Because Fylgja takes a unique approach to styling—focusing on classless base styles, modular design tokens, and Dynamic CSS Utilities—standard AIs might occasionally assume it works like traditional utility frameworks (like Tailwind).

To solve this, we provide a dedicated, machine-readable context file. If you are using an AI coding assistant (like Cursor or GitHub Copilot) or working with a web-based LLM, you can feed it this file to instantly give the AI the core rules, conventions, and concepts of the Fylgja library.

**[View the Fylgja LLM Context File (`/llms.txt`)](/llms.txt)**

You can simply provide the link `https://fylgja.dev/llms.txt` to any AI agent capable of browsing the web, and it will immediately understand how to write code for your Fylgja project!

## Model Context Protocol (MCP)

The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) is an open protocol that allows AI models to securely connect to local tools and data sources. 

At this time, Fylgja CSS **does not** provide an official, first-party MCP server. However, the ecosystem is growing rapidly! There are third-party MCP servers available that provide deep context for Fylgja CSS. 

For example, tools like **[Context7](https://context7.com/fylgja/fylgja)** offer Fylgja as a built-in MCP option, allowing you to seamlessly integrate our documentation and conventions directly into your local AI workspace without needing to configure it yourself.

## AI Skills Integration

If you use AI coding assistants or CLIs locally that support skills, you can install the official Fylgja CSS Skill to give your AI native knowledge of Fylgja's design tokens, classless base, and dynamic utility system.

Run the corresponding command below to drop our `SKILL.md` file directly into your local skills directory for your specific AI agent:

**Gemini CLI**

```bash
gemini skills install https://github.com/fylgja/fylgja --path ai-skill
```

**Claude Code**

```bash
mkdir -p .claude/skills/fylgja
curl -o .claude/skills/fylgja/SKILL.md https://raw.githubusercontent.com/fylgja/fylgja/main/ai-skill/SKILL.md
```

**Cursor**

```bash
mkdir -p .cursor/skills/fylgja
curl -o .cursor/skills/fylgja/SKILL.md https://raw.githubusercontent.com/fylgja/fylgja/main/ai-skill/SKILL.md
```

**GitHub Copilot**

```bash
mkdir -p .github/skills/fylgja
curl -o .github/skills/fylgja/SKILL.md https://raw.githubusercontent.com/fylgja/fylgja/main/ai-skill/SKILL.md
```

**Other AI Agents**

If your CLI agent uses a different folder (like `.codex` or `.opencode`), just replace the folder name in the path:

```bash
mkdir -p .YOUR_AGENT_FOLDER/skills/fylgja
curl -o .YOUR_AGENT_FOLDER/skills/fylgja/SKILL.md https://raw.githubusercontent.com/fylgja/fylgja/main/ai-skill/SKILL.md
```
