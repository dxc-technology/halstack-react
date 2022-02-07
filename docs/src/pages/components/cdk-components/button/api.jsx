import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const buttonPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>mode: 'primary' | 'secondary' | 'text'</td>
        <td>
          <code>'primary'</code>
        </td>
        <td>Uses one of the available button modes.</td>
      </tr>
      <tr>
        <td>type: 'button' | 'reset' | 'submit'</td>
        <td>
          <code>'button'</code>
        </td>
        <td>This prop corresponds to the 'type' prop of the button in html.</td>
      </tr>
      <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed next to the button.</td>
      </tr>
      <tr>
        <td>icon: node</td>
        <td></td>
        <td>
          Element used as the icon that will be placed next to the button label.
        </td>
      </tr>
      <tr>
        <td>iconSrc: string</td>
        <td></td>
        <td>
          <b>Deprecated.</b> URL of the icon that will be placed next to the
          button label.
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
        <td>disabled: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the component will be disabled.</td>
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
      <tr>
        <td>size: string </td>
        <td>
          <code>'fitContent'</code>
        </td>
        <td>
          Size of the component ('small' | 'medium' | 'large' | 'fillParent' |
          'fitContent').
        </td>
      </tr>
      <tr>
        <td>tabIndex: number</td>
        <td>0</td>
        <td>Value of the tabindex attribute.</td>
      </tr>
    </DxcTable>
  );
};

export default buttonPropsTable;
