# SIF115-2016 — Seguridad Informática

Educational platform for the **Seguridad Informática** course (SIF115-2016). Built with Next.js, it provides interactive simulations for cryptography, network visualization, and real-time communication demos.

## Features

- Next.js 16 App Router with TypeScript
- Tailwind CSS v4 with a cyber-security themed design system
- Course navbar with links to all six units
- Subject-specific libraries integrated and documented:
  - **crypto-js** — symmetric and asymmetric encryption (AES, DES, RSA)
  - **reactflow** — network topologies, IP addressing, and routing diagrams
  - **socket.io-client** — bidirectional real-time communication demos

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+

### Installation

```bash
git clone https://github.com/UES-Community/sif115-2016.git
cd sif115-2016
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the home page.

### Production Build

```bash
pnpm build
pnpm start
```

## Project Structure

```
app/                  # Next.js App Router pages and layouts
components/
  home/               # Home page sections
  navbar.tsx          # Course navigation
  ui/                 # Shared UI components
lib/                  # Utilities
public/               # Static assets
```

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) for development workflow, commit conventions, and pull request guidelines.

## License

This project is licensed under the [MIT License](LICENSE). Copyright (c) 2026 UES-Community.
