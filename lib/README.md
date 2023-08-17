<h1 align="center">Halstack React library</h1>

`@dxc-technology/halstack-react` is an npm library of reusable React components, made to help React developers with the task of implementing User Interfaces following the DXC Halstack Design Guidelines.

- It increases visual and behavioural consistency across the applications using the library.

- It cuts down development efforts, taking the responsibility of following the Design Guidelines away from the developer, and allowing him to focus on providing business value.

## Before start working

Remember to read [the documentation site](https://developer.dxc.com/halstack/) carefully before trying to modify any Halstack implementation.

## Development Setup

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Library

Contained in the `lib` folder.

```bash
cd lib
```

Install the library dependencies:

```bash
npm install
```

Run the build process into `dist` folder, detecting and automatically building changes in src:

```bash
npm run build:watch #'npm run build' if there is no need to watch for changes
```

### Example Application

Contained in the `app` folder.

```bash
cd app # from the root folder
```

Install the application dependencies. The Halstack React library dependency is linked to the local `lib` folder. This one must have been previously built:

```bash
npm install
```

Start the application:

```bash
npm start # runs create-react-app dev server
```

Now, anytime you make a change to the library or the app, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.

### Running tests

Contained in the `lib` folder.

```bash
cd lib
```

Launch all the tests:

```bash
npm test
```

Or run only those of a specific component:

```bash
npm test Button.test.js
```

### Storybook

Contained in the `lib` folder.

```bash
cd lib
```

Run storybook:

```bash
npm run storybook
```
