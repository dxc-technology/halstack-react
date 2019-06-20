# DXC Checkbox Component

## Usage

```js
import { DxcCheckbox } from "@diaas/dxc-react-cdk";

<DxcCheckbox onChange={handleNewValue} label="Test Checkbox" checked={checked} />;
```

## Props

The API properties are the following:

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Type</td>
        <td>Default</td>
        <td>Required</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>checked</td>
        <td><code> boolean </code></td>
        <td>false</td>
        <td>No</td>
        <td>If true, the component is checked.</td>
    </tr>
    <tr>
        <td>value</td>
        <td><code> any </code></td>
        <td></td>
        <td>No</td>
        <td>Will be passed to the value attribute of the html input element. When inside a form, this value will be only submitted if the checkbox is checked </td>
    </tr>
    <tr>
        <td>label</td>
        <td><code>string</code></td>
        <td></td>
        <td>No</td>
        <td>Text to be placed next to the checkbox.</td>
    </tr>
    </tr>
        <tr>
        <td>labelPosition</td>
        <td><code>string: 'before' | 'after'</code></td>
        <td><code>'before'</code></td>
        <td>No</td>
        <td>Whether the label should appear after or before the checkbox.</td>
    </tr>
    <tr>
        <td>theme</td>
        <td><code> string: 'light' |
 'dark'</code></td>
        <td><code>'light'</code></td>
        <td>No</td>
        <td>Uses one of the available component themes.</td>
    </tr>
    <tr>
        <td>name</td>
        <td><code>string</code></td>
        <td><code>false</code></td>
        <td></td>
        <td>Name attribute of the input element.</td>
    </tr>
    <tr>
        <td>disabled</td>
        <td><code>boolean</code></td>
        <td><code>false</code></td>
        <td>No</td>
        <td>If true, the component will be disabled.</td>
    </tr>
    <tr>
        <td>disableRipple</td>
        <td><code>boolean</code></td>
        <td><code>false</code></td>
        <td>No</td>
        <td>If true, the ripple effect will be disabled.</td>
    </tr>
    <tr>
        <td>required</td>
        <td><code>boolean</code></td>
        <td>false</td>
        <td>No</td>
        <td>If true, a red asterisk will appear before the label to indicate to the user that the field is required.<br>
        </td>
    </tr>
    <tr>
        <td>onChange</td>
        <td><code>function</code></td>
        <td></td>
        <td>No</td>
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
