import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const AccordionGroupPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>indexActive: number</td>
        <td></td>
        <td>The index of the active accordion. If undefined, the component will be uncontrolled and the active accordion will be managed internally by the component. If null, the component will be controlled and all accordions will be closed.</td>
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
    </DxcTable>
  );
};

export default AccordionGroupPropsTable;
