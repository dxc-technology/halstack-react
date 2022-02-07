import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const sidenavPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>

      <tr>
        <td>padding: string | object </td>
        <td></td>
        <td>
          Size of the padding to be applied to the custom area ('xxsmall' |
          'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
          can pass an object with 'top', 'bottom', 'left' and 'right' properties
          in order to specify different padding sizes.
        </td>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td>
          The expanded panel of the accordion. This area can be used to render
          custom content.
        </td>
      </tr>
    </DxcTable>
  );
};

export default sidenavPropsTable;
