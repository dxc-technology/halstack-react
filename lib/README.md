# Halstack React CDK

Halstack React CDK is a npm library of reusable React components, made with the purpose of helping React developers with the task of implementing User Interfaces following the DXC Design Guidelines.

- It increases visual and behavioral consistency across the applications using the library.

- It cuts down development efforts, taking the responsability of following the Design Guidelines away from the developer, and allowing him to focus on providing business value.

## Usage

Halstack React CDK is a set of reusable components distributed as a npm library. See the [documentation site](https://developer.dxc.com/tools/react/) for details on how to use it.

## Contributing

Before opening new issues or pull requests, please refer to [CONTRIBUTING.MD](https://github.com/dxc-technology/halstack-react/blob/master/CONTRIBUTING.md).

## Development Setup

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

The project is divided in two main folders. One is for the actual library, and the other one is a React application using the library.

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

### Example Application

Contained in the `app` folder.

```bash
cd app # from the root folder
```

Install the application dependencies. The Halstack React CDK dependency is linked to the local `lib` folder. This one must have been previously built.

```bash
npm install
```

Start the application.

```bash
npm start # runs create-react-app dev server
```

Now, anytime you make a change to the library or the app, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.

## Running the tests
