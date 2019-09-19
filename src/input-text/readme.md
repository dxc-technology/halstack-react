# DXC Input Text Component

## Props

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>value: string</td>
        <td><code></code></td>
        <td>The value of the input element.</td>
    </tr>
    <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed next to the input.</td>
    </tr>
    <tr>
        <td>assistiveText: string</td>
        <td></td>
        <td>Assistive text to be placed at the bottom of the input.</td>
    </tr>
    <tr>
        <td>prefix: string</td>
        <td></td>
        <td>A prefix to be placed before the input value. Use prefixIconSrc in case the prefix needs to be an icon.</td>
    </tr>
    <tr>
        <td>suffix: string</td>
        <td></td>
        <td>A suffix to be placed after the input value. Use suffixIconSrc in case the suffix needs to be an icon.</td>
    </tr>
    <tr>
        <td>prefixIconSrc: string</td>
        <td></td>
        <td>The path of an icon to be placed before the input value.</td>
    </tr>
    <tr>
        <td>suffixIconSrc: string</td>
        <td></td>
        <td>The path of an icon to be placed after the input value.</td>
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
        <td>disabled: boolean</td>
        <td><code>false</code></td>
        <td>If true, the component will be disabled.</td>
    </tr>
    <tr>
        <td>required: boolean</td>
        <td><code>false</code></td>
        <td>If true, the input will change its appearence, showing that the value is required.</td>
    </tr>
    <tr>
        <td>invalid: boolean</td>
        <td><code>false</code></td>
        <td>If true, the input will change its appearence, showing that the value is valid.</td>
    </tr>
    <tr>
        <td>multiline: boolean</td>
        <td><code>false</code></td>
        <td>If true, a resizable text area will be displayed.</td>
    </tr>
    <tr>
        <td>onChange: function</td>
        <td></td>
        <td>This function will be called when the user changes the value of the input. The new value will be passed as a parameter.</td>
    </tr>
    <tr>
        <td>onBlur: function</td>
        <td></td>
        <td>This function will be called when the focus moves away from the input. The input value will be passed as a parameter.</td>
    </tr>
    <tr>
        <td>onClickIcon: function</td>
        <td></td>
        <td>This function will be called when either of the two icons, prefixIcon or sufixIcon, is clicked.</td>
    </tr>
</table>
