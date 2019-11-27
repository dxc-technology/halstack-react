# DXC ProgressBar Component

## Usage

```js
import { DxcProgressBar } from "@diaas/dxc-react-cdk";

<DxcProgressBar onClick={handleClick} label="Test Button" />;
```

## Props

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed above the progressbar.</td>
    </tr>
    <tr>
        <td>theme: 'light' |'dark'</td>
        <td><code>'light'</code></td>
        <td>Uses one of the available component themes.</td>
    </tr>
    <tr>
        <td>overlay: boolean</td>
        <td>true</td>
        <td>If true, the progressbar will be over a darker background</td>
    </tr>
    <tr>
        <td>value: string</td>
        <td></td>
        <td>The value of the progress indicator. If it´s received the component is determinated otherwise is indeterminate</td>
    </tr>
    <tr>
        <td>showValue: boolean</td>
        <td>false</td>
        <td>If true the value is displayed above the progressbar</td>
    </tr>
</table>

## Examples

```js
import React from "react";
import { DxcSpinner } from "@diaas/dxc-react-cdk";

function App() {
  return (
    <div>
        <ProgressBar label="Loading..." theme="light" overlay={false} value={20} />
    </div>
    <div>
        <ProgressBar label="Loading..." theme="dark" showValue value={52} />
    </div>
  );
}
export default App;
```
