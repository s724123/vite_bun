# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitets/plugin-react](https://github.com/vitets/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babelts.io/) for Fast Refresh
- [@vitets/plugin-react-swc](https://github.com/vitets/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitets/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```ts
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.tson', './tsconfig.app.tson'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```ts
// eslint.config.ts
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.tson', './tsconfig.app.tson'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
##dir
ni src/App.tsx
ni src/main.tsx
ni src/index.css


ni src/pages/Home.tsx
ni src/pages/Menu.tsx
ni src/pages/About.tsx
ni src/pages/Contact.tsx

ni src/components/layout/Header.tsx
ni src/components/layout/Footer.tsx
ni src/components/layout/Sidebar.tsx


ni src/components/ui/Button.tsx
ni src/components/ui/Card.tsx
ni src/components/ui/Modal.tsx


ni src/utils/constants.ts
ni src/utils/helpers.ts
ni src/services/api.ts
ni src/stores/useAppStore.ts