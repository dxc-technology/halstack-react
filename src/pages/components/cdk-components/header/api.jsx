import React from "react";
import { DxcTable } from "@diaas/dxc-react-cdk";

const alertPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>theme: 'light' | 'dark'</td>
        <td>
          <code>'light'</code>
        </td>
        <td>Uses one of the available component themes.</td>
      </tr>
      <tr>
        <td>underlined: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>
          Wether a contrast line should appear at the bottom of the header.
        </td>
      </tr>
      <tr>
        <td>logoSrc: string</td>
        <td>
          <code>'default'</code>
        </td>
        <td>The path of an icon to replace the default dxc logo.</td>
      </tr>
      <tr>
        <td>onClick: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks the header logo.
          <br></br>
        </td>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td>
          The right section of the header. Can be used to render custom content
          in this area.
        </td>
      </tr>
      <tr>
        <td>margin: string | object</td>
        <td></td>
        <td>
          Size of the bottom margin to be applied to the footer ('xxsmall' |
          'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
        </td>
      </tr>
      <tr>
        <td>padding: string | object</td>
        <td></td>
        <td>
          Size of the padding to be applied to the custom area of the component
          ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' |
          'xxlarge'). You can pass an object with 'top', 'bottom', 'left' and
          'right' properties in order to specify different padding sizes.
        </td>
      </tr>
    </DxcTable>
  );
};

export default alertPropsTable;
