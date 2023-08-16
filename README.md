<p align="center">
  <a href="https://developer.dxc.com/halstack/">
    <img src="website/screens/common/images/halstack_logo.svg" alt="Halstack Design System logo" />
  </a>
</p>

<h1 align="center">Halstack Design System</h1>

Halstack is an Open Source Design System built and maintained by DXC Technology with the purpose of providing all the necessary tools for designing and implementing accessible, intuitive and consistent User Experiences with React.

## How to start

You can start using Halstack right now:

```bash
npm i @dxc-technology/halstack-react
```

## Where to start

Learn everything you need to know about Halstack principles and components on the [official documentation site](https://developer.dxc.com/halstack/).

## Contributing

Before opening a new issue or pull request, please refer to [CONTRIBUTING.MD](https://github.com/dxc-technology/halstack-react/blob/master/CONTRIBUTING.md) and read carefully our [contribution guidelines](https://github.com/dxc-technology/halstack-react/wiki/Contributing).

## Development Setup

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

The project has two important folders:

- The library of React components.
- Halstack's documentation site.

### Library

Contained in the `lib` folder.

```bash
cd lib
```

Install the library dependencies.

```bash
npm install
```

Run the build process into `dist` folder, detecting and automatically building changes in src.

```bash
npm run build:watch #'npm run build' if there is no need to watch for changes
```

### Documentation

Contained in the `website` folder.

```bash
cd website
```

Install the project dependencies.

```bash
npm install
```

Start the application.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit the file.

## Thanks

<a href="https://www.chromatic.com/"><img src="https://user-images.githubusercontent.com/321738/84662277-e3db4f80-af1b-11ea-88f5-91d67a5e59f6.png" width="153" height="30" alt="Chromatic" /></a>

Thanks to [Chromatic](https://www.chromatic.com/) for providing the visual testing platform that helps us review UI changes and catch visual regressions.
