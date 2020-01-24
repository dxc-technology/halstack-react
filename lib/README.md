# DIaaS HAL UI Component 
## Use
### Installation

```sh
npm install @diaas/hal-ui
```
### Implementation example

```js
// import a CDK component
import DxcButton from "@diaas/dxc-react-cdk";

// use the component in your app
<DxcButton onClick={handleClick} label="Test Button" />;
```

## Develop
In the first place, clone this repository.
```bash
git clone https://github.dxc.com/DIaaS/diaas-react-cdk.git
```
Local development is broken into two parts, related to the lib/example folders.

First, within the lib folder, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
cd lib
npm install
npm start # runs rollup with watch flag
```

The second part will be running the `example/` create-react-app that's linked to the local version of your module.

```bash
# (in another tab)
cd example
npm install
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your library in `src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.


