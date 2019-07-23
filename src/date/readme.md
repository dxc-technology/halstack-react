# DXC Date Component

## Props

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>value: date</td>
        <td></td>
        <td>The value of the date component. Must be a Date object.</td>
    </tr>
    <tr>
        <td>format: string</td>
        <td></td>
        <td>The format in which the date value will be displayed. User must use this format when editing the input.</td>
    </tr>
    <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed next to the date component.</td>
    </tr>
    <tr>
        <td>theme: 'light' | 'dark'</td>
        <td><code>'light'</code></td>
        <td>Uses one of the available component themes.</td>
    </tr>
    <tr>
        <td>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
    </tr>
    <tr>
        <td>iconSrc: string</td>
        <td></td>
        <td>The path of an icon to replace the default calendar icon.</td>
    </tr>
    <tr>
        <td>disabled: boolean</td>
        <td><code>false</code></td>
        <td>If true, the component will be disabled.</td>
    </tr>
    <tr>
        <td>required: boolean</td>
        <td><code>false</code></td>
        <td>If true, a red asterisk will appear before the label to indicate to the user that the field is required.</td>
    </tr>
    <tr>
        <td>assistiveText: string</td>
        <td></td>
        <td>Assistive text to be placed at the bottom of the input.</td>
    </tr>
    <tr>
        <td>invalid: boolean</td>
        <td><code>false</code></td>
        <td>If true, the input will change its appearence, showing that the value is not valid.</td>
    </tr>
    <tr>
        <td>disableRipple: boolean</td>
        <td><code>false</code></td>
        <td>If true, the ripple effect will be disabled.</td>
    </tr>
    <tr>
        <td>onChange: function</td>
        <td></td>
        <td>This function will be called when the user inputs a valid date in the given format. This is, when he selects a date from the date picker or when he types a letter completing a valid date. The new date object will be passed to this function as a parameter.<br>
        </td>
    </tr>
    <tr>
        <td>onInputChange: function</td>
        <td></td>
        <td>This function will be called when the user types within the input. A string with the current value will be passed to this function.<br>
        </td>
    </tr>
</table>

