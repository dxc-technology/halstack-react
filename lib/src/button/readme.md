# DXC Button Component

## Usage

```js
import { DxcButton } from "@diaas/dxc-react-cdk";

<DxcButton onChange={handleNewValue} label="Test Checkbox" checked={checked} />;
```

## Props

The API properties are the following:

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>mode: 'basic' | 'outlined' | 'raised' | 'flat'</td>
        <td><code>'basic'</code></td>
        <td>Uses on of the available button modes.</td>
    </tr>
    <tr>
        <td>theme: 'light' |'dark'</td>
        <td><code>'light'</code></td>
        <td>Uses on of the available button modes.</td>
    </tr>
        <tr>
        <td>label: string</td>
        <td><code>'basic'</code></td>
        <td>Text to be placed next to the button.</td>
    </tr>
    <tr>
        <td>iconSrc: string</td>
        <td></td>
        <td>URL of the icon that will be placed next to the button label.</td>
    </tr>
    </tr>
        <tr>
        <td>iconPosition: 'before' | 'after'</td>
        <td><code>'before'</code></td>
        <td>Whether the icon should appear after or before the label.</td>
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
        <td>This function will be called when the user clicks the button. The event object will be passed as a parameter.</td>
    </tr>

</table>
