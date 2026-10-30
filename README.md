# Jottoir

## Overview

Jottoir (pronounced **“jot-wahr”**) is a personal notes vault for capturing, organizing, and finding your thoughts, ideas, and reminders. The name is a portmanteau of **Jot** and **Memoir**.

Create and edit notes, organize them with custom tags, search note titles and content, and switch between light and dark themes. Your notes and tags are saved in your browser.

## Dev instructions

### Requirements

- [Node.js](https://nodejs.org/en/download) (install the current LTS version; npm is included)

After installation, verify that Node.js and npm are available:

```bash
node --version
npm --version
```

### Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

### Validate changes

```bash
npm run lint
npm run build
```

## User instructions

1. Open the **Vault** to browse and search your notes.
2. Select **Add Note** to write a note. Give it a title and content, then save it.
3. Use **Notes** to view your notes as a list, or open a note to edit or delete it.
4. Visit **Tags** to create tags, then select tags while creating or editing a note.
5. Use the theme switch in the navigation bar to toggle light and dark mode.

Notes and tags are stored in the browser you use, so they are not automatically shared across browsers or devices. Clearing the browser's site data may remove them.

## Contributions

Contributions are welcome. Fork the repository, create a branch for your change, and open a pull request. Before submitting, run `npm run lint` and `npm run build`.

## Raise issues/report bugs

If you find a bug or have a feature request, [open an issue](../../issues/new). Include steps to reproduce the problem and, when relevant, your browser and operating system.

## Star the repo

If Jottoir is useful to you, [star the repository](../../stargazers) to show your support.
