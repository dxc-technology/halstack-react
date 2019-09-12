# DXC Accordion Component

## Usage

```js
import { DxcAccordion } from "@diaas/dxc-react-cdk";

<DxcAccordion />;
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
        <td>The panel label</td>
    </tr>
    <tr>
        <td>iconSrc: string</td>
        <td></td>
        <td>URL of the icon that will be placed next to panel label.</td>
    </tr>
    <tr>
        <td>iconPosition: 'before' | 'after'</td>
        <td><code>'before'</code></td>
        <td>Whether the icon should appear after or before the label.</td>
    </tr>
    <tr>
        <td>assistiveText: string</td>
        <td></td>
        <td>Assistive text to be placed on the right side of the panel.</td>
    </tr>
    <tr>
        <td>disabled: boolean</td>
        <td><code>false</code></td>
        <td>If true, the component will be disabled.</td>
    </tr>
    <tr>
        <td>onClick: function</td>
        <td></td>
        <td>This function will be called when the user clicks the icon to open/close the panel. The state of the panel(opened/closed) should be passed as a parameter.</td>
    </tr>
    <tr>
        <td>theme: 'light' |'dark'</td>
        <td><code>'light'</code></td>
        <td>Uses one of the available button modes.</td>
    </tr>

</table>

## Examples


```
