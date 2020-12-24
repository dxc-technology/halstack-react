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
    </DxcTable>
  );
};

export default sidenavLinkPropsTable;
