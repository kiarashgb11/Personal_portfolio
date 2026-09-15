# Kiarash Alirezaei — Engineering Portfolio

A responsive personal portfolio spanning systems and compiler engineering, artificial intelligence, distributed systems, security, software, hardware, and technical communication.

## Local development

Install dependencies and start the development server:

```powershell
npm.cmd install
npm.cmd start
```

Open [http://localhost:3000](http://localhost:3000). Changes to React and CSS files reload automatically.

## Production build

```powershell
npm.cmd run build
```

The optimized site is generated in `build/`.

## Structure

- `src/data/portfolioData.js` contains experience, project, expertise, writing, and education content.
- `src/components/` contains the individual portfolio sections.
- `src/index.css` contains shared design tokens, layout primitives, and accessibility defaults.
- Section styles are kept beside their React components.

## Stack

React, CSS, React Icons, and EmailJS.
