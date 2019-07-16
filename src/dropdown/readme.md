# DXC Dropdown Component

## Props

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>options: object[]</td>
        <td><code>[]</code></td>
        <td>An array of objects representing the options. Each object has the following properties:
        <ul>
            <li><b>label</b>: Option display value</li>
            <li><b>iconSrc</b>: URL of the icon that will be placed next to the option label (Optional)</li>
        </ul>
    </tr>
    <tr>
        <td>iconPosition: 'before' | 'after'</td>
        <td><code>'before'</code></td>
        <td>In case options include an icon, whether the icon should appear after or before the label.</td>
    </tr>
    <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed when the list of options is not displayed.</td>
    </tr>
    <tr>
        <td>theme: 'light' | 'dark'</td>
        <td><code>'light'</code></td>
        <td>Uses one of the available component themes.</td>
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
        <td>onSelectOption: function</td>
        <td></td>
        <td>This function will be called every time the selection changes. The string with the key of the selected value will be passed as a parameter to this function.</td>
    </tr>
</table>
