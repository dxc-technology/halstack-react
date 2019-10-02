# DXC Toggle Component

## Usage

```js
import { DxcToggle } from "@diaas/dxc-react-cdk";

<DxcToggle onClick={handleClick} label="Test Button" />;
```

## Props

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>selected: boolean</td>
        <td><code>false</code></td>
        <td>If true, the component is selected.</td>
    </tr>
    <tr>
        <td>mode: 'basic' | 'outlined'</td>
        <td><code>'basic'</code></td>
        <td>Uses on of the available toggle modes.</td>
    </tr>
    <tr>
        <td>theme: 'light' |'dark'</td>
        <td><code>'light'</code></td>
        <td>Uses one of the available component themes.</td>
    </tr>
    <tr>
        <td>label: string</td>
        <td><code>'basic'</code></td>
        <td>Text to be placed on the toggle.</td>
    </tr>
    <tr>
        <td>iconSrc: string</td>
        <td></td>
        <td>URL of the icon that will be placed on the toggle.</td>
    </tr>
    <tr>
        <td>disabled: boolean</td>
        <td><code>false</code></td>
        <td>If true, the component will be disabled.</td>
    </tr>
    <tr>
        <td>disableRipple: boolean</td>
        <td><code>false</code></td>
        <td>If true, the ripple effect will be disabled.</td>
    </tr>
    <tr>
        <td>onClick: function</td>
        <td></td>
        <td>This function will be called when the user clicks the button. The new state will be passed as a parameter.</td>
    </tr>

</table>

## Examples


```
