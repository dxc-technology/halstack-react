import React from "react";
import { DxcTable } from "@diaas/dxc-react-cdk";

const switchPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>checked: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>
          If true, the component is checked. If undefined, the component will be
          uncontrolled and the value will be managed internally by the
          component.
        </td>
      </tr>
      <tr>
        <td>value: any</td>
        <td></td>
        <td>
          Will be passed to the value attribute of the html input element. When
          inside a form, this value will be only submitted if the switch is
          checked.
        </td>
      </tr>
      <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed next to the switch.</td>
      </tr>
      <tr>
        <td>labelPosition: 'before' | 'after'</td>
        <td>
          <code>'before'</code>
        </td>
        <td>Whether the label should appear after or before the switch.</td>
      </tr>
      <tr>
        <td>theme: 'light' | 'dark'</td>
        <td>
          <code>'light'</code>
        </td>
        <td>Uses one of the available component themes.</td>
      </tr>
      <tr>
        <td>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
      </tr>
      <tr>
        <td>disabled: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the component will be disabled.</td>
      </tr>
      <tr>
        <td>required: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>
          If true, the switch will change its appearence, showing that the value
          is required.
        </td>
      </tr>
      <tr>
        <td>disableRipple: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the ripple effect will be disabled.</td>
      </tr>
      <tr>
        <td>onChange: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks the radio. The new
          value will be passed as a parameter.
        </td>
      </tr>
      <tr>
        <td>margin: string | object</td>
        <td></td>
        <td>
          Size of the margin to be applied to the component ('xxsmall' |
          'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
          can pass an object with 'top', 'bottom', 'left' and 'right' properties
          in order to specify different margin sizes.
        </td>
      </tr>
      <tr>
        <td>size: string | object</td>
        <td>
          <code>'fitContent'</code>
        </td>
        <td>
          Size of the component ('small' | 'medium' | 'large' | 'fillParent' |
          'fitContent').
        </td>
      </tr>
    </DxcTable>
  );
};

export default switchPropsTable;
