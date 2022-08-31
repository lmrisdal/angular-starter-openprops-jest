# Angular 14 Starter

> An Angular starter kit featuring [Angular 14](https://angular.io/), [Angular Router](https://angular.io/api/router), [Open-Props](https://open-props.style/), [Jest](https://jestjs.io/), [Cypress](https://www.cypress.io/), [ESlint](https://eslint.org/) and [Prettier](https://prettier.io/).

Quickstart a project in seconds and focus on features, not on frameworks or tools

## Getting started

### 1. Install dependencies

- Yarn:

```bash
yarn install
```

- NPM: First delete yarn.lock in project root and then:

```bash
npm install
```

### 2. Launch development server:

```bash
yarn start
```

or

```bash
npm start
```

### 3. Project structure

```
dist/                        compiled version
docs/                        project docs and coding guides
cypress/                     end-to-end tests
src/                         project source code
|- app/                      app components
|  |- @core/                 core module (core services, models, and components)
|  |- @shared/               shared module (common components, directives and pipes)
|  |- @features/*            app features. Separate modules per app feature
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (styles, images, fonts etc.)
|- assets/scss/styles.scss   global style entry point
|- environments/             values for various build environments
|- index.html                html entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
|- .eslintrc.json            ESLint config file
|- .prettierrc.json          Prettier config file
|- jest.config.js            Jest config file
|- cypress.config.ts         Cypress config file
+- tsconfig.*.json           tsconfig files
```
