# vhiweb-assessment

Create a simple single page application (SPA) and displaying data from a public API.

## Demo

https://vhiweb-assessment.vercel.app/

## Getting Started

1. Clone this repo.
2. Run `yarn install` to install dependencies.
3. Go to the project directory.
3. Run `yarn dev`.

## Scripts

- `yarn dev` - Run development mode
- `yarn build` - Build the application for production
- `yarn start` - Start a Next.js production (require `yarn build` first)
- `yarn lint` - Run [ESLint](https://eslint.org/)
- `yarn lint:fix` - Fix codes from ESLint errors

## File Structure

```raw
.
├── 📂 public/                 Public files (e.g. favicon)
├── 📂 src/
│   ├── 📂 api/                API-related functions
│   ├── ⚛️ components/
│   │   ├── ⚛️ commons/        Common components
│   │   ├── ⚛️ forms/          Common components which is used specifically for user input
│   │   ├── ⚛️ hoc/            Higher-Order Components
│   │   ├── ⚛️ layouts/        Components which has specific location in a page and cannot just be placed anywhere (e.g. header, sidebar, footer)
│   │   ├── ⚛️ sections/       Components which create a block/section of a page
│   │   └── ⚛️ wrappers/       Components which has no UI, only for functionality (e.g. context-provider)
│   ├── 📂 config/
│   ├── 📂 constant/           Constant data
│   ├── 📂 context/            Contexts stores
│   ├── ⚛️ hooks/              Custom hooks
│   ├── ⚛️ pages/              Next.js page components
│   ├── 📂 styles/
│   │   ├── 📂 components/     CSS files for components (e.g. button)
│   │   ├── 📂 layouts/        CSS files for modifying layout's style (e.g. header, sider)
│   │   ├── _base.scss          Base styles
│   │   ├── _utilities.scss     Contains utility classes
│   │   └── index.scss          Contains @import statements to merge all CSS files
│   └── 📂 utils/              Utility functions
├── env.js                      Specify which environment variables are server-only and which should be exposed to the browser
├── .eslintrc.json              ESLint configuration
├── .gitignore
├── next.config.js              Next.js configuration
├── package-lock.json
├── package.json
├── postcss.config.js           PostCSS configuration
└── tailwind.config.js          Tailwind configuration

Notes:
📂: Folder
⚛️: React-related folder
```

## Tools

- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Global State Management**: [React-Context](https://reactjs.org/docs/context.html)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Form Validation**: [Yup](https://github.com/jquense/yup)
- **Data Fetching**: [axios](https://github.com/axios/axios)
- **className Utility**: [clsx](https://www.npmjs.com/package/clsx)
