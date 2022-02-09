import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const linkPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>disabled: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the link is disabled.</td>
      </tr>
      <tr>
        <td>inheritColor: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the color is inherited from parent.</td>
      </tr>
      <tr>
        <td>text: string</td>
        <td></td>
        <td>Link text.</td>
      </tr>
      <tr>
        <td>icon: node</td>
        <td></td>
        <td>
          Element used as the icon that will be placed next to the link text.
        </td>
      </tr>
      <tr>
        <td>iconSrc: string</td>
        <td></td>
        <td>
          <b>Deprecated.</b> Source of the icon.
        </td>
      </tr>
      <tr>
        <td>iconPosition: 'before' | 'after'</td>
        <td>
          <code>'before'</code>
        </td>
        <td>Indicates the position of the icon in the component.</td>
      </tr>
      <tr>
        <td>href: string</td>
        <td></td>
        <td>Page to be opened when the user clicks on the link.</td>
      </tr>
      <tr>
        <td>newWindow: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the page is opened in a new browser tab.</td>
      </tr>
      <tr>
        <td>onClick: function</td>
        <td></td>
        <td>
          If defined, the link will be displayed as a button. This function will
          be called when the user clicks the link.
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
        <td>tabIndex: number</td>
        <td>0</td>
        <td>Value of the tabindex.</td>
      </tr>
    </DxcTable>
  );
};

export default linkPropsTable;
