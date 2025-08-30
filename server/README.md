# TypeScript Express Project

A Node.js project using TypeScript and Express.js for building REST APIs.

## Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/codermanoj2023/10-nodejs-typescript-project-with-tsup.git
   ```

### Important points without which we can't use this project
- tsup
- typescript
- tsconfig.json

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server with hot-reload:
```bash
npm run dev
```

The server will start at `http://localhost:3000` (or the port specified in your .env file)

## Production Build

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Project Structure

```
src/
├── index.ts        # Application entry point
├── routes/         # API routes
├── controllers/    # Route controllers
└── models/         # Data models

dist/               # Compiled JavaScript files
```

## Scripts

- `npm run dev`: Start development server with hot-reload
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm test`: Run tests
