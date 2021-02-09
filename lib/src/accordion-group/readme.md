# DXC Accordion Group Component
## Props

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>indexActive: number</td>
        <td></td>
        <td>The index of the active accordion. If undefined, the component will be uncontrolled and the active tab will be managed internally by the component.</td>
    </tr>
    <tr>
        <td>disabled: boolean</td>
        <td><code>false</code></td>
        <td>If true, the component will be disabled.</td>
    </tr>
    <tr>
        <td>onActiveChange: function</td>
        <td></td>
        <td>This function will be called when the user clicks on an accordion. The index of the clicked accordion will be passed as a parameter.</td>
    </tr>
        <tr>
        <td>margin: string | object</td>
        <td></td>
        <td>Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.</td>
    </tr>

</table>

## Examples

- Basic accordion group

```js
import React from "react";

import { DxcAccordionGroup } from "@dxc-technology/halstack-react";

function App() {
  const handleOnChange = event => {
    console.log("Accordion clicked");
  };

  return (
    <div>
      <DxcAccordionGroup>
        <DxcAccordionGroup.Accordion label="Accordion1" padding="medium">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
            eget.
          </div>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion2" padding="medium">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
            eget.
          </div>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    </div>
  );
}

export default App;
```
