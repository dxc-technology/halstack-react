# DXC Checkbox Component

## Usage

```js
import { DxcCheckbox } from "@diaas/dxc-react-cdk";

<DxcCheckbox onChange={handleNewValue} label="Test Checkbox" checked={checked} />;
```

## Props

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>checked: boolean</td>
        <td><code>false</code></td>
        <td>If true, the component is checked.</td>
    </tr>
    <tr>
        <td>value: any</td>
        <td></td>
        <td>Will be passed to the value attribute of the html input element. When inside a form, this value will be only submitted if the checkbox is checked </td>
    </tr>
    <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed next to the checkbox.</td>
    </tr>
    <tr>
        <td>labelPosition: 'before' | 'after'</td>
        <td><code>'before'</code></td>
        <td>Whether the label should appear after or before the checkbox.</td>
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
        <td>disableRipple: boolean</td>
        <td><code>false</code></td>
        <td>If true, the ripple effect will be disabled.</td>
    </tr>
    <tr>
        <td>onChange: function</td>
        <td></td>
        <td>This function will be called when the user clicks the checkbox. The new value will be passed as a parameter.<br>
        </td>
    </tr>
</table>

## Examples

- Basic checkbox - Light theme - Enabled - Label after checkbox - With ripple

```js
import React from "react";
import { DxcCheckbox } from "@diaas/dxc-react-cdk";

class App extends React.Component {
  state = {
    isChecked: true
  };
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({
      isChecked: checked
    });
  }

  render() {
    return (
      <div>
        <DxcCheckbox
            checked={this.state.isChecked}
            value="Checkbox1"
            label="Checkbox 1"
            labelPosition="after"
            theme="light"
            name="Checkbox"
            disabled={false}
            disableRipple={false}
            onChange={event => this.handleChange(event)}
          />
      </div>
    );
  }
}
export default App;


```
