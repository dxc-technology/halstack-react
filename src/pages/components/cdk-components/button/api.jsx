import React from "react";
import { DxcTable } from "@diaas/dxc-react-cdk";

const buttonPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>mode: 'basic' | 'outlined' | 'raised' | 'flat'</td>
        <td>
          <code>'basic'</code>
        </td>
        <td>Uses on of the available button modes.</td>
      </tr>
      <tr>
        <td>theme: 'light' |'dark'</td>
        <td>
          <code>'light'</code>
        </td>
        <td>Uses one of the available button modes.</td>
      </tr>
      <tr>
        <td>label: string</td>
        <td>
          <code>'basic'</code>
        </td>
        <td>Text to be placed next to the button.</td>
      </tr>
      <tr>
        <td>iconSrc: string</td>
        <td></td>
        <td>URL of the icon that will be placed next to the button label.</td>
      </tr>
      <tr>
        <td>iconPosition: 'before' | 'after'</td>
        <td>
          <code>'before'</code>
        </td>
        <td>Whether the icon should appear after or before the label.</td>
      </tr>
      <tr>
        <td>disabled: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the component will be disabled.</td>
      </tr>
      <tr>
        <td>disableRipple: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the ripple effect will be disabled.</td>
      </tr>
      <tr>
        <td>onClick: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks the button. The
          event object will be passed as a parameter.
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
    </DxcTable>
  );
};

export default buttonPropsTable;
