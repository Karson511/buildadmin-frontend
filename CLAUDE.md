# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Vue 3 + TypeScript + Element Plus** dual-application frontend system that supports both:
- **Backend/Admin Panel** (`/admin` path prefix) - For administrators and creators to manage the platform
- **Frontend/Member Center** (`/user` path prefix) - For regular users and member management

The project uses modern Vue 3 Composition API with `<script setup>`, TypeScript for type safety, Vite as the build tool, Pinia for state management, and Element Plus for UI components.

## Common Commands

```bash
# Development (runs custom build script first, then starts dev server with cache clear)
npm run dev

# Production build (runs Vite build, then generates table renderer types)
npm run build

# Linting
npm run lint           # Check code with ESLint
npm run lint-fix       # Fix auto-fixable ESLint issues

# Code formatting
npm run format         # Format code with Prettier

# Type checking
npm run typecheck      # Run TypeScript type checking
```

## Architecture

### Dual Application Structure

The codebase uses a **dual-path routing system**:

- `/admin/*` routes → Admin backend application (uses `src/layouts/backend/index.vue`)
- `/user/*` routes → Member center application (uses `src/layouts/frontend/user.vue`)

This separation affects:
- **Routing**: Different base paths and layouts (see `src/router/static/adminBase.ts` and `src/router/static/memberCenterBase.ts`)
- **State Management**: Separate Pinia stores for admin (`adminInfo`) and user (`userInfo`) authentication
- **API Layer**: Different API endpoints and token handling
- **Internationalization**: Separate language files for backend vs frontend

### Directory Structure

```
src/
├── api/              # API layer organized by application (backend/frontend)
│   ├── backend/      # Admin panel APIs (e.g., /admin/shop.user/)
│   ├── frontend/     # Member center APIs (e.g., /api/...)
│   └── common.ts     # Shared API utilities and baTableApi class
├── components/       # Reusable UI components
│   ├── table/        # Table components with field renderers
│   └── icon/         # Icon components
├── layouts/          # Layout components (3 layout systems)
│   ├── backend/      # Admin panel layout
│   ├── frontend/     # Member center layout
│   └── common/       # Shared layout components
├── lang/             # Internationalization (i18n)
│   ├── backend/      # Admin language files (zh-cn, en)
│   ├── frontend/     # Frontend language files (zh-cn, en)
│   └── common/       # Shared translations
├── router/           # Routing configuration
│   └── static/       # Static routes for admin/user base paths
├── stores/           # Pinia state management
│   ├── adminInfo.ts  # Admin authentication state
│   ├── userInfo.ts   # User authentication state
│   └── ...
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
│   ├── axios.ts      # Custom Axios wrapper with interceptors
│   ├── baTable.ts    # Table management class
│   ├── build.ts      # Build script for type generation
│   └── common.ts     # Common utilities
└── views/            # Page components
```

### Key Architectural Patterns

#### 1. Table Management System (`baTable` class)

The `baTable` class in `src/utils/baTable.ts` provides a standardized table management system:

- **Unified table operations**: index (list), add, edit, delete, sortable
- **Built-in state management**: table data, selection, filters, pagination
- **Common search**: Generic search functionality with operators (eq, RANGE, NULL, etc.)
- **Field renderers**: Custom cell renderers in `src/components/table/fieldRender/`
- **Before/after hooks**: Lifecycle hooks for customization
- **Drag-and-drop sorting**: Integrated with SortableJS

Usage pattern:
```typescript
// Define table API
const api = new baTableApi('/admin/shop.user/')

// Initialize baTable instance
const baTable = new baTable(api, {
    column: [...],      // Column definitions
    filter: {...},      // Filter/pagination state
}, {
    defaultItems: {...} // Form defaults
})

// Table automatically handles CRUD operations
```

#### 2. API Layer Pattern

All API calls use the custom `createAxios` wrapper with built-in features:

- **Automatic token management**: Dual token system (`batoken` for admin, `ba-user-token` for user)
- **Token refresh**: Automatic token refresh on 409 response
- **Duplicate request cancellation**: Built-in request deduplication
- **Loading states**: Optional Element Plus loading integration
- **Error handling**: Standardized error notifications
- **Response format**: Supports simplified response format (`reductDataFormat`)

Standard API pattern:
```typescript
export function info(id: string) {
    return createAxios({
        url: url + 'info',
        method: 'get',
        params: { id }
    })
}
```

For CRUD operations, use `baTableApi` class:
```typescript
const api = new baTableApi('/admin/shop.user/')
// Provides: index(), edit(), del(), postData(), sortableApi()
```

#### 3. Internationalization (i18n)

Language files are **dynamically loaded based on route**:

- **Backend**: `src/lang/backend/{lang}/{path}.ts`
- **Frontend**: `src/lang/frontend/{lang}/{path}.ts`
- **Common**: `src/lang/common/{lang}/{feature}.ts`

The router automatically loads language files matching the current route. Use the `__()` helper for route-based translations:
```typescript
import { __ } from '/@/utils/common'
const text = __('translation key') // Resolves to currentRoute.path + '.' + key
```

#### 4. Authentication & State Management

Two separate Pinia stores handle authentication:

- **`adminInfo`** (`src/stores/adminInfo.ts`): Admin panel authentication
  - Token: `batoken` header
  - Login route: `adminLogin`

- **`userInfo`** (`src/stores/userInfo.ts`): Member center authentication
  - Token: `ba-user-token` header
  - Login route: `userLogin`

Both stores support:
- `getToken(type)`: Get auth or refresh token
- `setToken(token, type)`: Set token
- `removeToken()`: Clear tokens
- `logout()`: Logout and redirect
- Persistence via `pinia-plugin-persistedstate`

#### 5. Custom Build Process

The build includes a **type generation step**:

```bash
npm run build  # Runs: vite build && esno ./src/utils/build.ts
```

The `src/utils/build.ts` script automatically generates `./types/tableRenderer.d.ts` based on available field renderers in `src/components/table/fieldRender/`. This ensures TypeScript auto-completion for table field renderers.

## Development Guidelines

### Component Conventions

- Use **Vue 3 Composition API** with `<script setup>`
- Use **kebab-case** for Vue component file names (e.g., `shop-user`)
- Follow **Element Plus** component patterns
- Leverage **VueUse** composables for reactive utilities

### API Conventions

- Define API URLs as constants (e.g., `export const url = '/admin/shop.user/'`)
- Use `createAxios` for all HTTP requests
- Implement CRUD using `baTableApi` class for standard table operations
- Handle tokens automatically via axios interceptors

### Routing Conventions

- Use **hash mode** routing (`createWebHashHistory`)
- Admin routes under `/admin/*`, user routes under `/user/*`
- Language files auto-load based on route path
- Dynamic route-based language resolution via `__()` helper

### Code Style

- **4-space indentation** for code
- **Tabs for markdown** files
- **Prettier** for formatting
- **ESLint** for linting
- **TypeScript strict mode** enabled

### Path Aliases

- `/@/` → `./src/`
- `assets/` → `./src/assets/`

## Key Utilities

### `isAdminApp(path?)` - Check Current Application

Determines if running in admin or member center context:
```typescript
import { isAdminApp } from '/@/utils/common'

if (isAdminApp()) {
    // In admin panel
} else {
    // In member center
}
```

### `auth(node)` - Permission Check

Check if user has permission for a specific action:
```typescript
import { auth } from '/@/utils/common'

if (auth('edit')) {
    // User can edit
}
```

### `fullUrl(relativeUrl, domain?)` - Build Full URL

Convert relative URLs to absolute URLs:
```typescript
import { fullUrl } from '/@/utils/common'

const imageUrl = fullUrl('/uploads/image.jpg')
```

### `__(key, named?, options?)` - Route-based Translation

Get translation with automatic route-based resolution:
```typescript
import { __ } from '/@/utils/common'

const title = __('pageTitle') // Resolves to: currentRoute.path + '.pageTitle'
```

## Environment Variables

Defined in `.env.production` or `.env.development`:

- `VITE_PORT` - Dev server port
- `VITE_OPEN` - Auto-open browser (true/false)
- `VITE_BASE_PATH` - Base path for deployment
- `VITE_OUT_DIR` - Output directory
- `VITE_PROXY_URL` - API proxy URL for development
- `VITE_AXIOS_BASE_URL` - Base URL for API requests (or `getCurrentDomain`)

## Common Issues

### Adding New Table Field Renderers

1. Create component in `src/components/table/fieldRender/{name}.vue`
2. Run `npm run build` or `npm run dev` to regenerate types
3. Use in table column definition: `render: '{name}'`

### Adding New API Endpoints

1. Create API file in `src/api/backend/` or `src/api/frontend/`
2. Use `createAxios` wrapper with proper options
3. For CRUD operations, extend `baTableApi` class

### Adding Language Files

1. Create file in `src/lang/{backend|frontend}/{lang}/{route}.ts`
2. Export default object with translations
3. Use `__('key')` helper for auto-resolution

## Build Output

- Production builds go to `dist/` directory
- Code splitting: Vue ecosystem bundled together, ECharts separate
- CSS not code-split (single CSS file)
- No sourcemaps in production
- Chunk size warning limit: 1500KB
