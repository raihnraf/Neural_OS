# Features Folder Structure

## Standard Organization

Each feature should follow this structure for consistency:

```
features/
├── feature-name/
│   ├── index.ts              # Barrel exports
│   ├── types.ts              # Feature-specific types
│   ├── constants.ts          # Feature-specific constants
│   ├── hooks/                # Custom hooks for this feature
│   │   ├── index.ts
│   │   └── useFeatureName.ts
│   ├── components/           # Components specific to this feature
│   │   ├── index.ts
│   │   ├── FeatureComponent.tsx
│   │   └── AnotherComponent.tsx
│   └── FeatureMain.tsx       # Main feature component
```

## When to Use Flat vs Nested

### Flat Structure (for simple features)

Use when the feature has:

- Less than 5 files total
- No custom hooks needed
- No complex sub-components

Example: `features/hero/`

### Nested Structure (for complex features)

Use when the feature has:

- More than 5 files
- Multiple sub-components
- Custom hooks
- Feature-specific types/constants

Example: `features/dashboard/`

## Naming Conventions

- **Folders**: lowercase with hyphens (`feature-name`)
- **Components**: PascalCase (`FeatureComponent.tsx`)
- **Hooks**: camelCase with `use` prefix (`useFeatureName.ts`)
- **Types**: PascalCase (`FeatureData.ts`)
- **Constants**: UPPERCASE with descriptive names (`FEATURE_CONFIG`)

## Exports

Always use barrel exports (`index.ts`) for clean imports:

```typescript
// features/feature-name/index.ts
export { FeatureMain } from './FeatureMain'
export { FeatureComponent } from './components'
export { useFeatureName } from './hooks'
export type { FeatureData } from './types'
```

## Migration Guide

For existing features that need restructuring:

1. **Identify complexity**: Count files and assess component relationships
2. **Extract types**: Move feature-specific types to `types.ts` or `types/` folder
3. **Extract hooks**: Move custom hooks to `hooks/` folder
4. **Group components**: Keep related components together
5. **Update imports**: Fix all import paths after restructuring
