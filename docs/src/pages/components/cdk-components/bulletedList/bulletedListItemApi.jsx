import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const BulletedListItemPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td>Text to be displayed after the bullet as the list item label.</td>
      </tr>
    </DxcTable>
  );
};

export default BulletedListItemPropsTable;
