import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const BulletedListPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>type: 'disc' | 'circle' | 'square' | 'number' | 'icon'</td>
        <td>'disc'</td>
        <td>Defines the style of the bullet point in the list.</td>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>icon: string | SVGSVGElement</td>
        <td></td>
        <td>Icon to display as bullet.</td>
      </tr>
    </DxcTable>
  );
};

export default BulletedListPropsTable;
