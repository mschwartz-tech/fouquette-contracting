# Scripts Directory

This document catalogs the build and development scripts used in the Fouquette Contracting website project.

## Build Scripts

### Development Server
- **Script**: `npm run dev`
- **Purpose**: Starts the Vite development server
- **Port**: 5173 (default)
- **Features**: Hot module replacement, fast refresh
- **Environment**: Development

### Production Build
- **Script**: `npm run build`
- **Purpose**: Creates optimized production build
- **Output**: `dist/` directory
- **Process**: TypeScript compilation + Vite bundling
- **Optimizations**: Code splitting, minification, asset optimization

### Build Preview
- **Script**: `npm run preview`
- **Purpose**: Preview production build locally
- **Port**: 4173 (default)
- **Use Case**: Testing production build before deployment

### Linting
- **Script**: `npm run lint`
- **Purpose**: Run ESLint on the codebase
- **Configuration**: `eslint.config.js`
- **Scope**: All TypeScript and JavaScript files

## Package Management

### Dependencies Installation
```bash
npm install
```
- Installs all production and development dependencies
- Creates `node_modules/` directory
- Updates `package-lock.json`

### Dependencies Update
```bash
npm update
```
- Updates dependencies to latest compatible versions
- Respects semver ranges in `package.json`

## Development Workflow

### Local Development
1. `npm install` - Install dependencies
2. `npm run dev` - Start development server
3. Make changes to source files
4. Browser automatically refreshes with changes

### Production Deployment
1. `npm run build` - Create production build
2. `npm run preview` - Test build locally (optional)
3. Deploy `dist/` directory to hosting platform

## Build Configuration

### Vite Configuration
- **File**: `vite.config.ts`
- **Build Tool**: Vite 6.x
- **Features**: React plugin, path aliases, dev server config

### TypeScript Configuration
- **File**: `tsconfig.json` (main)
- **Additional**: `tsconfig.app.json`, `tsconfig.node.json`
- **Target**: ES2022
- **Module**: ESNext

### ESLint Configuration
- **File**: `eslint.config.js`
- **Extends**: TypeScript ESLint recommended
- **Plugins**: React hooks, React refresh

## Environment Variables

### Development
- No environment variables required for static site
- All configuration is build-time

### Production
- Static assets served from `dist/` directory
- No runtime environment variables needed

## Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Kill process using port 5173
npx kill-port 5173
```

#### Node Modules Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors
```bash
# Clean build and try again
rm -rf dist
npm run build
```

#### TypeScript Errors
```bash
# Check TypeScript compilation
npx tsc --noEmit
```

### Performance Optimization

#### Bundle Analysis
```bash
# Build with bundle analyzer
npm run build -- --mode analyze
```

#### Dependency Check
```bash
# Check for unused dependencies
npx depcheck
```

## Deployment Scripts

### Netlify
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 20
- **Auto Deploy**: On push to main branch

### Manual Deployment
1. Run `npm run build`
2. Upload `dist/` contents to web server
3. Configure server for SPA routing (redirect all to index.html)

## Maintenance

### Regular Tasks
- Update dependencies monthly
- Run linting before commits
- Test production builds before deployment
- Monitor build times and bundle sizes

### Security Updates
```bash
# Check for security vulnerabilities
npm audit

# Fix automatically fixable vulnerabilities
npm audit fix
```
