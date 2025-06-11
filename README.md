# Chicks Gold Frontend Challenge

A React-based application for Chicks Gold, featuring a product catalog and shopping cart functionality.

## Live Demo

Visit the live application at: [https://chicks-gold-fe-challenge.vercel.app/](https://chicks-gold-fe-challenge.vercel.app/)

## Tech Stack

- **Frontend Framework**: React 19.1.0
- **Language**: TypeScript 4.9.5
- **Icons**: React Icons 5.4.0
- **Code Quality**:
  - ESLint for code linting
  - Prettier for code formatting
  - TypeScript for type safety

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The application will open in your default browser at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run lint` - Runs ESLint to check for code issues
- `npm run lint:fix` - Automatically fixes ESLint issues
- `npm run format` - Formats code using Prettier

## Important Notes

1. **State Management**:
   - The application uses React's built-in state management (useState)
   - No external state management libraries (Redux, etc.) are used
   - No localStorage implementation for persisting cart data
   - Page refresh will reset the cart to empty state

2. **Development Guidelines**:
   - Follow TypeScript best practices
   - Maintain consistent code formatting using Prettier
   - Follow ESLint rules for code quality
   - Write meaningful component and function names