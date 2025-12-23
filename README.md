# Wails 3 Starter Template

A starter template for Wails 3 applications using React, TypeScript, and Tailwind CSS.

## Stack

- **Wails 3** (Alpha)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (via Vite plugin)
- **Vite 7**
- **Bun** (Default package manager)

## Usage

### Development

```bash
wails3 dev
```

### Build

```bash
wails3 build
```

## Changing Package Manager

This template uses **Bun** by default. To use `npm`, `pnpm`, or `yarn`, edit `build/Taskfile.yml`.

Update the `install:frontend:deps`, `build:frontend`, and `dev:frontend` tasks to use your preferred package manager commands.

**Example for NPM:**

```yaml
install:frontend:deps:
  preconditions:
    - sh: npm -v
      msg: "npm is not installed."
  cmds:
    - npm install

build:frontend:
  cmds:
    - npm run {{.BUILD_COMMAND}}

dev:frontend:
  cmds:
    - npm run dev -- --port {{.VITE_PORT}} --strictPort
```
