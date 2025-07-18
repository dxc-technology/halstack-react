<p align="center">
  <a href="https://developer.dxc.com/halstack/">
    <img src="apps/website/screens/common/images/halstack_logo.svg" alt="Halstack Design System logo" />
  </a>
</p>

<h1 align="center">Local environment</h1>

Halstack has become a monorepo, so the development environment has changed. Now, the library and the example application are in the same repository, and the library is built and linked to the example application.

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Before start working

Remember to read [the documentation site](https://developer.dxc.com/halstack/) carefully before trying to modify any Halstack implementation, documentation or examples.

## Monorepo structure

The monorepo is structured as follows (some folders and files are omitted for explanation purposes):

```bash
📂 apps
    📂 website             # Contains our Next.js documentation site application
📂 packages
    📂 lib                 # Contains halstack-react component library
📄 package.json       # Root package.json
📄 package-lock.json  # Root package-lock.json
📄 turbo.json         # <turbo> command configuration file
```

There are two main folders here:

- `apps`: Contains website and any other future Halstack-related app.
- `packages`: Contains all the libraries that Halstack is composed of.

## Getting Started

Install the dependencies of the project:

```bash
npm install
```

Install turbo globally so you can conveniently run turbo commands in your terminal from anywhere in your repository:

```bash
npm install turbo --global
```

In any case, all the commands can be run using `npm run` instead of `turbo`.

## Commands

Here is a list of the most common commands you will use:

- `turbo build` - Build the library.
- `turbo dev` - Start the development server.
- `npm run format` - Run the Prettier formatter.
- `turbo lint` - Run the linter.
- `turbo storybook` - Start the Storybook server.
- `turbo storybook:accessibility` - Run the accessibility tests on Storybook.
- `turbo storybook:build` - Build the Storybook.
- `turbo storybook:deploy` - Deploy the Storybook to GitHub Pages.
- `turbo test` - Run the tests.
- `turbo test:accessibility` - Run the accessibility tests.
- `turbo test:watch` - Run the tests in watch mode.
