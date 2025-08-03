# Vibe Generator

**Vibe Generator** helps you quickly set up a web project with a clean, customizable design system powered by Tailwind CSS. It uses PostCSS and Autoprefixer to ensure your styles work smoothly across all browsers.

## Features

- ⚡ **Tailwind CSS** for rapid UI development
- 🔧 **PostCSS** for flexible CSS processing
- 🌍 **Autoprefixer** for automatic vendor prefixing
- 🛠️ Easy to configure and extend

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer)
- [npm](https://www.npmjs.com/), [bun](https://bun.sh/), or [pnpm](https://pnpm.io/)

### Installation

Install dependencies:

```sh
npm install
# or
bun install
# or
pnpm install
```

### Usage

To build your CSS with PostCSS and Tailwind:

```sh
npm run build
# or
bun run build
# or
pnpm run build
```

To start the development server (if configured):

```sh
npm run dev
# or
bun run dev
# or
pnpm run dev
```

## Configuration

Your `postcss.config.js` is already set up:

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## Folder Structure

- `postcss.config.js` – PostCSS configuration
- `tailwind.config.js` or `tailwind.config.ts` – Tailwind CSS configuration (if present)
- `src/` – Source files (if present)
- `public/` – Static assets (if present)

##
