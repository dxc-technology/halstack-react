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
        <td>shadowDepth: 0 | 1 | 2</td>
        <td></td>
        <td>The size of the shadow to be displayed around the box.</td>
      </tr>
      <tr>
        <td>display: string</td>
        <td>"inline-flex"</td>
        <td>Changes the display CSS property of the Box div.</td>
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
        <td>padding: string | object</td>
        <td></td>
        <td>
          Size of the padding to be applied to the component ('xxsmall' |
          'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
          can pass an object with 'top', 'bottom', 'left' and 'right' properties
          in order to specify different padding sizes.
        </td>
      </tr>
      <tr>
        <td>size: string</td>
        <td>"fitContent"</td>
        <td>
          Size of the component ('small' | 'medium' | 'large' | 'fillParent'| 'fitContent').
        </td>
      </tr>
    </DxcTable>
  );
};

export default buttonPropsTable;
