import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const AccordionGroupSinglePropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>label: string</td>
        <td></td>
        <td>The panel label.</td>
      </tr>
      <tr>
        <td>icon: node</td>
        <td></td>
        <td>
          Element used as the icon that will be placed next to panel label.
        </td>
      </tr>
      <tr>
        <td>iconSrc: string</td>
        <td></td>
        <td>
          <b>Deprecated.</b> URL of the icon that will be placed next to panel
          label.
        </td>
      </tr>
      <tr>
        <td>iconPosition: 'before' | 'after'</td>
        <td>
          <code>'before'</code>
        </td>
        <td>Whether the icon should appear after or before the label.</td>
      </tr>
      <tr>
        <td>assistiveText: string</td>
        <td></td>
        <td>Assistive text to be placed on the right side of the panel.</td>
      </tr>
      <tr>
        <td>disabled: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the component will be disabled.</td>
      </tr>
      <tr>
        <td>padding: string | object</td>
        <td></td>
        <td>
          Size of the padding to be applied to the custom area ('xxsmall' |
          'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
          can pass an object with 'top', 'bottom', 'left' and 'right' properties
          in order to specify different padding sizes.
        </td>
      </tr>
    </DxcTable>
  );
};

export default AccordionGroupSinglePropsTable;
