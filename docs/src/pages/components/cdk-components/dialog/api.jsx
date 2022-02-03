import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const checkboxPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>isCloseVisible: boolean</td>
        <td>
          <code>true</code>
        </td>
        <td>If true, the close 'x' button will be visible.</td>
      </tr>
      <tr>
        <td>onCloseClick: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks the close 'x' button. The responsibility
          of hiding the dialog lies with the user.
        </td>
      </tr>
      <tr>
        <td>onBackgroundClick: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks background. The
          responsibility of hiding the dialog lies with the user.
        </td>
      </tr>
      <tr>
        <td>overlay: boolean</td>
        <td>
          <code>true</code>
        </td>
        <td>
          If true, the dialog will be displayed over a darker background that covers the content
          behind.
        </td>
      </tr>
      <tr>
        <td>padding: string | object</td>
        <td></td>
        <td>
          Size of the padding to be applied to the component ('xxsmall' | 'xsmall' | 'small' |
          'medium' | 'large' | 'xlarge' | 'xxlarge'). You can pass an object with 'top', 'bottom',
          'left' and 'right' properties in order to specify different padding sizes.
        </td>
      </tr>
      <tr>
        <td>tabIndex: number</td>
        <td>0</td>
        <td>Value of the tabindex given to the close 'x' button.</td>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td>The area inside the dialog. This area can be used to render custom content.</td>
      </tr>
    </DxcTable>
  );
};

export default checkboxPropsTable;
