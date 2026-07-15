# Voxel Space Digital Tours

Immersive 3D virtual tour solutions for commercial properties across Kenya and East Africa.

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd voxel-space-digital-tours

# Install dependencies
npm i

# Start the development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Routing**: React Router
- **State Management**: TanStack Query
- **Testing**: Vitest + Testing Library

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Page sections (Hero, Portfolio, etc.)
│   └── ui/           # shadcn/ui components
├── pages/            # Route pages
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── assets/           # Static assets
```

## Deployment

Build the project for production:

```sh
npm run build
```

The output will be in the `dist/` directory.
