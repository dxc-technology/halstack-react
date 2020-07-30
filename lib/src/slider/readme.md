# DXC Slider Component

## Usage

```js
import { Slider } from "@dxc-technology/halstack-react";

<DxcSlider min={0} max={100} step={1} value={value}  />;
```

## Props

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>min: number</td>
        <td><code>0</code></td>
        <td>The minimum value available for selection.</td>
    </tr>
    <tr>
        <td>max: number</td>
        <td><code>100</code></td>
        <td>The maximum value available for selection.</td>
    </tr>
    <tr>
        <td>step: number</td>
        <td><code>1</code></td>
        <td>The step interval between values available for selection.</td>
    </tr>
    <tr>
        <td>value: number</td>
        <td><code>0</code></td>
        <td>The selected value.</td>
    </tr>
    <tr>
        <td>showLimitValues: boolean</td>
        <td><code>false</code></td>
        <td>Whether the min/max value labels should be displayed next to the slider.</td>
    </tr>
    <tr>
        <td>showInput: boolean</td>
        <td><code>false</code></td>
        <td>Whether the input number for displaying/controlling the slider value should be displayed next to the slider.</td>
    </tr>
        <tr>
        <td>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
    </tr>
    <tr>
        <td>onChange: function</td>
        <td></td>
        <td>This function will be called when the slider changes its value, as it's being dragged. The new value will be passed as a parameter when this function is executed</td>
    </tr>
    <tr>
        <td>onDragEnd: function</td>
        <td></td>
        <td>This function will be called when the slider changes its value, but only when the thumb is released. The new value will be passed as a parameter when this function is executed</td>
    </tr>
</table>
