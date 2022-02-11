import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const sidenavLinkPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>

      <tr>
        <td>href: string</td>
        <td></td>
        <td>Page to be opened when the user clicks on the link.</td>
      </tr>
      <tr>
        <td>onClick: function</td>
        <td></td>
        <td>This function will be called when the user clicks the link.</td>
      </tr>
      <tr>
        <td>tabIndex: number</td>
        <td>0</td>
        <td>Value of the tabindex attribute.</td>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td>Custom content of the link.</td>
      </tr>
    </DxcTable>
  );
};

export default sidenavLinkPropsTable;
