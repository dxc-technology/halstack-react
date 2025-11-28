<p align="center">
  <a href="https://developer.assure.dxc.com/halstack/">
    <img src="apps/website/screens/common/images/halstack_logo.svg" alt="Halstack Design System logo" />
  </a>
</p>

<h1 align="center">Halstack Design System</h1>

Halstack is an Open Source Design System built and maintained by DXC Technology with the purpose of providing all the necessary tools for designing and implementing accessible, intuitive and consistent User Experiences with React.

## How to start

You can start using Halstack right now:

```bash
npm i @dxc-technology/halstack-react
```

### Usage

```jsx
import { DxcButton, DxcTextInput } from "@dxc-technology/halstack-react";

const App = () => (
  <>
    <DxcTextInput label="Enter your name" />
    <DxcButton label="Submit" type="submit" />
  </>
);
```

## Where to start

Learn everything you need to know about Halstack principles and components on the [official documentation site](https://developer.assure.dxc.com/halstack/).

## Contributing

Any feedback is always welcome in Halstack!

Before opening a new issue, pull request or discussion, please read carefully and respect our [contribution guidelines](https://github.com/dxc-technology/halstack-react/wiki/Contributing).

## Thanks

<a href="https://www.chromatic.com/"><img src="https://user-images.githubusercontent.com/321738/84662277-e3db4f80-af1b-11ea-88f5-91d67a5e59f6.png" width="153" height="30" alt="Chromatic" /></a>

Thanks to [Chromatic](https://www.chromatic.com/) for providing the visual testing platform that helps us review UI changes and catch visual regressions.
