# CRA React SPA Quick Start

A [Create React App](https://create-react-app.dev/) template to quickly focus on your business without need to setup a development environment.

## Ingredients

Here is the list of ingredients:

- Language

  - [Typescript](https://www.typescriptlang.org/) @4.5.5
  - [SASS](https://sass-lang.com/) @1.49.9 & [CSS Modules](https://github.com/css-modules/css-modules)

- Component Library

  - [Material UI](https://mui.com/) @5.4.1
  - [Material Icons](https://mui.com/material-ui/material-icons/)

- Routing

  - [React Router Dom](https://reactrouter.com/) @6.2.1

- Translation

  - [i18next](https://github.com/i18next/i18next) @21.6.15
  - [react-i18next](https://github.com/i18next/react-i18next) @11.16.4
  - [i18next-http-backend](https://github.com/i18next/i18next-http-backend) @1.4.0

- Store

  - [React Redux](https://react-redux.js.org/) @7.2.6
  - [Redux Toolkit](https://redux-toolkit.js.org/) @1.8.0
  - [Redux Persist](https://github.com/rt2zz/redux-persist) @6.0.0

- Form & Validator

  - [formik](https://formik.org/) @2.2.9
  - [yup](https://github.com/jquense/yup) @0.32.11

- Utility

  - [RxJS](https://rxjs.dev/) @7.5.4
  - [React Use](https://github.com/streamich/react-use) @17.3.2
  - [axios](https://github.com/axios/axios) @0.26.0
  - [classnames](https://github.com/JedWatson/classnames) @2.3.1
  - [date-fns](https://date-fns.org/) @2.28.0

- Linter
  - [ESLint](https://eslint.org/)
  - [Stylelint](https://stylelint.io/)
  - [Prettier](https://prettier.io/)

## Features

- Routing
  - Automatically generate sidebar from **router definition** with icon and text configuration
  - Match current root with the sidebar items and make the correct item as **"active"** automatically
- Store
  - **Persist** the store with Redux
  - **Temporary/in-memory** storage with RxJS Subjects
- Form
  - Ready to use **form elements** with formik (works with both react hooks and formik components)
  - Integration with **YUP validator**
- HTTP
  - Display **loading spinner** as overlay during request-response flow
  - Ready to integrate **basic authentication**

## Usage

To use the template, clone the repo and use it locally

```sh
git clone https://github.com/yigityuce/cra-template-react-spa-quick-start.git

npx create-react-app my-app --template file:./cra-template-react-spa-quick-start
```
